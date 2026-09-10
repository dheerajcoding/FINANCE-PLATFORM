/**
 * Post-build step (runs after `vite build`):
 *   1. Writes dist/sitemap.xml
 *   2. Writes static, unique, crawlable HTML for every route
 *      (dist/about.html, dist/contact.html, dist/services/<id>.html) and
 *      enriches dist/index.html with fallback content.
 *
 * Pure string templating — no headless browser, no React SSR. It must never
 * fail the build: any error is logged and the process still exits 0 (the SPA
 * keeps working, it just loses the static SEO boost for that run).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.warn('[prerender] dist/index.html not found — skipping.');
    return;
  }

  const { servicesMeta } = await import('../client/src/data/servicesMeta.js');
  const siteMeta = await import('../client/src/lib/siteMeta.js');
  const {
    SITE,
    absoluteUrl,
    organizationLd,
    websiteLd,
    breadcrumbLd,
    faqLd,
    serviceLd,
  } = siteMeta;

  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  const today = new Date().toISOString().slice(0, 10);

  const routes = [
    { path: '/', file: 'index.html' },
    { path: '/about', file: 'about.html', priority: '0.8' },
    { path: '/contact', file: 'contact.html', priority: '0.9' },
    ...servicesMeta.map((s) => ({
      path: `/services/${s.id}`,
      file: `services/${s.id}.html`,
      priority: '0.8',
      service: s,
    })),
  ];

  // ---- sitemap.xml ----------------------------------------------------------
  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map(
        (r) =>
          `  <url>\n` +
          `    <loc>${absoluteUrl(r.path)}${r.path === '/' ? '/' : ''}</loc>\n` +
          `    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>${r.path === '/' ? 'weekly' : 'monthly'}</changefreq>\n` +
          `    <priority>${r.path === '/' ? '1.0' : r.priority || '0.7'}</priority>\n` +
          `  </url>`
      )
      .join('\n') +
    `\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
  console.log(`[prerender] sitemap.xml — ${routes.length} URLs`);

  // ---- per-route HTML -----------------------------------------------------
  const replaceMeta = (html, { title, description, canonical, image }) => {
    let out = html;
    const t = esc(title);
    const d = esc(description);
    out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
    out = out.replace(
      /(<meta name="title" content=")[^"]*(")/,
      `$1${t}$2`
    );
    out = out.replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${d}$2`
    );
    out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`);
    out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`);
    out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`);
    out = out.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`);
    out = out.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`);
    out = out.replace(/(<meta name="twitter:url" content=")[^"]*(")/, `$1${canonical}$2`);
    if (image) {
      out = out.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`);
      out = out.replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`);
    }
    out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`);
    return out;
  };

  const injectJsonLd = (html, blocks) => {
    const scripts = blocks
      .filter(Boolean)
      .map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`)
      .join('\n    ');
    return html.replace('</head>', `    ${scripts}\n  </head>`);
  };

  const injectFallback = (html, inner) =>
    html.replace(
      '<div id="root"></div>',
      `<div id="root"><div id="prerender-fallback">${inner}</div></div>`
    );

  const contactBlock = `
      <h2>Contact ARS Financial Enterprises</h2>
      <p>Call <a href="tel:${SITE.phonePrimary}">${esc(SITE.phonePrimaryDisplay)}</a> or
      <a href="tel:${SITE.phoneSecondary}">${esc(SITE.phoneSecondaryDisplay)}</a> ·
      WhatsApp <a href="https://wa.me/${SITE.whatsapp}">${esc(SITE.phonePrimaryDisplay)}</a> ·
      Email <a href="mailto:${SITE.email}">${esc(SITE.email)}</a></p>
      <p>Office: ${esc(SITE.address.street)}, ${esc(SITE.address.locality)} ${esc(SITE.address.postalCode)}.
      Working hours: ${esc(SITE.hours)}.</p>
      <p><a href="/contact">Request a free consultation &amp; quote &rarr;</a></p>`;

  const list = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

  const serviceBody = (s) => `
      <h1>${esc(s.title)} in India</h1>
      <p>${esc(s.metaDescription || s.description)}</p>
      <p>${esc(s.description)}</p>
      <h2>What's included</h2>
      ${list(s.features || [])}
      <h2>How it works</h2>
      ${list((s.process || []).map((p) => `${p.title}: ${p.description}`))}
      <h2>Benefits</h2>
      ${list(s.benefits || [])}
      ${
        s.faqs?.length
          ? `<h2>Frequently asked questions</h2>` +
            s.faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')
          : ''
      }
      ${contactBlock}`;

  const homeBody = `
      <h1>${esc(SITE.name)} — GST, Income Tax &amp; Business Compliance Services in India</h1>
      <p>${esc(SITE.description)}</p>
      <h2>Our services</h2>
      ${list(servicesMeta.map((s) => s.title))}
      ${contactBlock}`;

  const aboutBody = `
      <h1>About ${esc(SITE.name)}</h1>
      <p>Founded in 2014 by ${esc(SITE.founders.join(' and '))}, ${esc(
    SITE.name
  )} is a boutique tax and compliance firm helping startups, MSMEs and corporates across India with GST, income tax, accounting, company registration and audit.</p>
      ${contactBlock}`;

  const aboutContactBody = `
      <h1>Contact ${esc(SITE.name)}</h1>
      <p>Get a free consultation for GST registration, ITR filing, company registration, accounting and compliance. A specialist replies within one business day.</p>
      ${contactBlock}`;

  let written = 0;
  for (const r of routes) {
    try {
      let html;
      if (r.path === '/') {
        html = injectJsonLd(template, [
          organizationLd(),
          websiteLd(),
          breadcrumbLd([{ name: 'Home', path: '/' }]),
        ]);
        html = injectFallback(html, homeBody);
      } else if (r.path === '/about') {
        html = replaceMeta(template, {
          title: `About ${SITE.name} | GST, Tax & Compliance Firm in Delhi, India`,
          description:
            'Founded in 2014 by Anil Kumar Choudhary and Archana Choudhary, ARS Financial Enterprises helps startups, MSMEs and corporates across India with GST, tax, accounting and compliance.',
          canonical: absoluteUrl('/about'),
        });
        html = injectJsonLd(html, [
          organizationLd(),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]);
        html = injectFallback(html, aboutBody);
      } else if (r.path === '/contact') {
        html = replaceMeta(template, {
          title: `Contact ${SITE.name} | Free GST & Tax Consultation`,
          description:
            'Contact ARS Financial Enterprises for GST registration, ITR filing, company registration and compliance. Call +91 98187 74800, WhatsApp us, or send an enquiry — reply within one business day.',
          canonical: absoluteUrl('/contact'),
        });
        html = injectJsonLd(html, [
          organizationLd(),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]);
        html = injectFallback(html, aboutContactBody);
      } else if (r.service) {
        const s = r.service;
        html = replaceMeta(template, {
          title: s.metaTitle || `${s.title} in India | ${SITE.name}`,
          description: s.metaDescription || s.description,
          canonical: absoluteUrl(r.path),
        });
        html = injectJsonLd(html, [
          serviceLd(s),
          organizationLd(),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/gst-registration-returns' },
            { name: s.title, path: r.path },
          ]),
          ...(s.faqs?.length ? [faqLd(s.faqs)] : []),
        ]);
        html = injectFallback(html, serviceBody(s));
      }

      if (!html) continue;
      const outPath = path.join(DIST, r.file);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html);
      written += 1;
    } catch (err) {
      console.warn(`[prerender] route ${r.path} failed: ${err.message}`);
    }
  }
  console.log(`[prerender] wrote ${written} static route file(s)`);
}

main()
  .catch((err) => {
    console.warn(`[prerender] skipped due to error: ${err && err.stack ? err.stack : err}`);
  })
  .finally(() => process.exit(0));
