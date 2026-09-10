// Centralized services data for use across components.
// Pure text/SEO data lives in servicesMeta.js (also consumed by the Node
// prerender + sitemap script). This file attaches the bundled images.
import { servicesMeta, serviceCategories, createSlug, getServiceMetaBySlug } from './servicesMeta';

import gstPrimary from '../components/images/image1.jpg';
import gstAccent from '../components/images/image2.png';
import itrPrimary from '../components/images/image3.avif';
import itrAccent from '../components/images/image4.jpg';
import accountingPrimary from '../components/images/image6.jpg';
import firmPrimary from '../components/images/image9.png';
import firmAccent from '../components/images/image8.png';
import dscPrimary from '../components/images/image10.png';
import dscAccent from '../components/images/image11.jpg';
import iecPrimary from '../components/images/image12.jpg';
import iecAccent from '../components/images/image13.png';
import trademarkPrimary from '../components/images/image14.jpg';
import trademarkAccent from '../components/images/image15.png';
import esicPrimary from '../components/images/image17.png';
import esicAccent from '../components/images/image18.webp';
import auditPrimary from '../components/images/image19.jpg';
import loanPrimary from '../components/images/image20.avif';
import loanAccent from '../components/images/image20.jpg';
import loanAccentSecondary from '../components/images/image21.png';
import msmePrimary from '../components/images/image5.jpg';

const imageMap = {
  'loan-facilities': { background: loanPrimary, gallery: [loanAccent, loanAccentSecondary] },
  'gst-registration-returns': { background: gstPrimary, gallery: [gstAccent] },
  'income-tax-return': { background: itrPrimary, gallery: [itrAccent] },
  'accounting-services': { background: accountingPrimary, gallery: [] },
  'firm-shop-act-registration': { background: firmPrimary, gallery: [firmAccent] },
  'msme-udyam-certificate': { background: msmePrimary, gallery: [] },
  'digital-signature-certificate': { background: dscPrimary, gallery: [dscAccent] },
  'import-export-code': { background: iecPrimary, gallery: [iecAccent] },
  'trademark-ip-registration': { background: trademarkPrimary, gallery: [trademarkAccent] },
  'esic-pf-registration': { background: esicPrimary, gallery: [esicAccent] },
  'internal-auditing': { background: auditPrimary, gallery: [] },
};

export { createSlug, serviceCategories, getServiceMetaBySlug };

export const services = servicesMeta.map((service) => ({
  ...service,
  background: imageMap[service.id]?.background,
  gallery: imageMap[service.id]?.gallery ?? [],
}));

export const getServiceBySlug = (slug) => services.find((service) => service.id === slug);

export default services;
