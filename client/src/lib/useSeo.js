import { useEffect } from 'react';
import { SITE, OG_IMAGE, absoluteUrl } from './siteMeta';

const setMeta = (selector, attr, value, content) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Client-side per-route SEO. Static prerendered HTML already carries the correct
 * tags for crawlers that do not run JS; this keeps them correct during SPA
 * navigation and for JS-rendering crawlers.
 */
export function useSeo({
  title,
  description,
  path = '/',
  image = OG_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd = [],
} = {}) {
  const canonical = absoluteUrl(path);
  const fullTitle = title || `${SITE.name} | ${SITE.tagline}`;
  const desc = description || SITE.description;
  const blocks = Array.isArray(jsonLd) ? jsonLd.filter(Boolean) : [jsonLd].filter(Boolean);

  useEffect(() => {
    document.title = fullTitle;

    setMeta('meta[name="description"]', 'name', 'description', desc);
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', desc);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMeta('meta[property="og:type"]', 'property', 'og:type', type);
    setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE.name);

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', desc);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    setLink('canonical', canonical);

    // Replace any previously injected dynamic JSON-LD.
    document.head.querySelectorAll('script[data-seo="route"]').forEach((n) => n.remove());
    blocks.forEach((block) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seo = 'route';
      script.text = JSON.stringify(block);
      document.head.appendChild(script);
    });

    return () => {
      document.head.querySelectorAll('script[data-seo="route"]').forEach((n) => n.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullTitle, desc, canonical, image, type, noindex, JSON.stringify(blocks)]);
}

export default useSeo;
