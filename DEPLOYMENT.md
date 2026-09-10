# Deployment (Hostinger – shared / web-hosting plan)

This site is a **static build** (Vite + React). It runs on a normal Hostinger
web-hosting plan — **no VPS, no Node server** is required at runtime.

## How Hostinger builds it

The GitHub repo is connected in **hPanel → Websites → arsfinancialenterprises.com**.
On every push to `main`, Hostinger runs:

```
npm install
npm run build      # = vite build && node scripts/prerender.mjs
```

and serves the generated `dist/` folder. `dist/` also contains:

| File | Purpose |
|------|---------|
| `.htaccess` | Canonical host redirect + SPA routing + prerendered-page routing + caching |
| `sitemap.xml` | Auto-generated from the routes (submit in Google Search Console) |
| `robots.txt` | Allows crawling, points to the sitemap |
| `about.html`, `contact.html`, `services/*.html` | Prerendered, crawlable HTML for every route |

If you deploy manually instead: run `npm run build` locally and upload the
**contents of `dist/`** (including the hidden `.htaccess`) to `public_html`.

## Required environment variables (contact form)

The contact form sends email through **EmailJS** entirely from the browser.
Set these in **hPanel → Websites → … → Environment variables** (or a repo-root
`.env` for local dev):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

They must be present **at build time** (Vite inlines `VITE_*` vars). After
changing them, click **Redeploy**.

If these are missing or a send fails, the form no longer dead-ends — it shows
**"Send on WhatsApp"** and **"Send by Email"** buttons pre-filled with the
visitor's details, so a lead is never lost.

## Analytics

Google Tag Manager (`GTM-MZXRZDSG`) is hard-coded in `client/index.html`
(head + `<noscript>`), so it loads on every prerendered page. The site pushes
these events to `dataLayer`:

- `generate_lead` – contact form submitted successfully
- `lead_form_fallback` – form failed, visitor shown WhatsApp/email fallback
- `whatsapp_click`, `call_click`, `cta_click` – quick-action buttons

Configure tags/triggers for these inside GTM.

## After each deploy — SEO checklist

1. Visit `https://arsfinancialenterprises.com/services/esic-pf-registration`
   directly (not via in-site navigation) — it must load with **200**, not 503.
2. Check `https://arsfinancialenterprises.com/sitemap.xml` and `/robots.txt`.
3. In Google Search Console: submit the sitemap, then **URL Inspection** on a
   couple of service URLs → *Request indexing*.
