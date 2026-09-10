// Pure site constants + structured-data helpers.
// No framework imports so the Node prerender/sitemap script can use it too.

export const SITE = {
  name: 'ARS Financial Enterprises',
  legalName: 'ARS Financial Enterprises',
  url: 'https://arsfinancialenterprises.com',
  tagline: 'Best GST & Tax Consultant in India',
  description:
    'ARS Financial Enterprises provides GST registration, income tax filing, company registration, accounting and business compliance services for startups, MSMEs and corporates across India.',
  phonePrimary: '+919818774800',
  phoneSecondary: '+919599402692',
  phonePrimaryDisplay: '+91 98187 74800',
  phoneSecondaryDisplay: '+91 95994 02692',
  whatsapp: '919818774800',
  email: 'anil.choudhary6@yahoo.co.in',
  emailSecondary: 'canil8931@gmail.com',
  address: {
    street: 'Building 261, F-Block, Aya Nagar, Arjangarh',
    locality: 'South Delhi',
    region: 'Delhi',
    postalCode: '110047',
    country: 'IN',
  },
  hours: 'Mon–Sat: 9:00 AM – 8:00 PM',
  founders: ['Anil Kumar Choudhary', 'Archana Choudhary'],
  sameAs: [],
};

export const OG_IMAGE = `${SITE.url}/og-image.jpg`;

export const absoluteUrl = (path = '/') => {
  if (!path) return SITE.url;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE.url}${path.startsWith('/') ? '' : '/'}${path}`.replace(/\/$/, '') || SITE.url;
};

export const waLink = (text) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    text || 'Hi ARS Financial Enterprises, I would like a free consultation about your services.'
  )}`;

export const telLink = (num = SITE.phonePrimary) => `tel:${num.replace(/[^+\d]/g, '')}`;

// ---- Structured data (JSON-LD) builders -------------------------------------

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': ['AccountingService', 'ProfessionalService', 'LocalBusiness'],
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  description: SITE.description,
  telephone: SITE.phonePrimary,
  email: SITE.email,
  priceRange: '₹₹',
  image: OG_IMAGE,
  logo: `${SITE.url}/favicon.ico`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: [
    'Delhi',
    'New Delhi',
    'Gurugram',
    'Noida',
    'Mumbai',
    'Bangalore',
    'Hyderabad',
    'Pune',
    'Chennai',
    'Kolkata',
    'India',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '20:00',
  },
  founder: SITE.founders.map((name) => ({ '@type': 'Person', name })),
  sameAs: SITE.sameAs,
});

export const websiteLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': `${SITE.url}/#organization` },
});

export const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqLd = (faqs = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceLd = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  serviceType: service.title,
  description: service.metaDescription || service.description,
  url: absoluteUrl(`/services/${service.id}`),
  areaServed: 'IN',
  provider: { '@id': `${SITE.url}/#organization` },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    price: '0',
    description: 'Free initial consultation',
  },
});
