// Centralized services data for use across components
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

// Helper function to create URL-friendly slugs
export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const services = [
  {
    id: 'loan-facilities',
    title: 'Loan Facilities & Professional Services',
    shortDescription: 'Structured finance support covering working capital, term loans, and documentation for faster, cleaner processing.',
    description: 'We provide comprehensive loan facilitation services designed to meet your business and personal financial needs. Our expert team assists you through every step of the loan process, from initial consultation to final disbursement.',
    supporting: 'Types: Personal · Home · LAP (Loan Against Property) · Business · Working Capital · Term Loan',
    tag: 'Capital Desk',
    background: loanPrimary,
    gallery: [loanAccent, loanAccentSecondary],
    featured: true,
    features: [
      'Personal Loans with competitive interest rates',
      'Home Loans with flexible EMI options',
      'Loan Against Property (LAP) for immediate liquidity',
      'Business Loans for expansion and operations',
      'Working Capital Loans for day-to-day expenses',
      'Term Loans for long-term investments',
      'Professional documentation support',
      'Quick approval process'
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Free initial consultation to understand your needs' },
      { step: 2, title: 'Documentation', description: 'We help you prepare all required documents' },
      { step: 3, title: 'Application', description: 'Submit application to multiple lenders' },
      { step: 4, title: 'Approval', description: 'Get the best offer with competitive rates' },
      { step: 5, title: 'Disbursement', description: 'Quick fund transfer to your account' }
    ],
    benefits: [
      'Access to multiple lenders and banks',
      'Best interest rate negotiations',
      'Minimal documentation hassle',
      'Quick turnaround time',
      'Dedicated relationship manager'
    ]
  },
  {
    id: 'gst-registration-returns',
    title: 'GST Registration / GST Returns',
    shortDescription: 'We offer complete GST registration, GST return filing, GST compliance, and GST audit services for businesses across India.',
    description: 'Navigate the complexities of GST with our comprehensive GST registration India and GST filing services. As the best GST consultant in India, we ensure 100% compliance while minimizing your tax burden through strategic planning. Our online GST registration service is fast, affordable, and professional.',
    tag: 'Compliance Suite',
    background: gstPrimary,
    gallery: [gstAccent],
    features: [
      'New GST Registration',
      'GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)',
      'GST Annual Return preparation',
      'Input Tax Credit optimization',
      'GST Audit support',
      'E-way bill management',
      'GST refund processing',
      'Amendment and cancellation services'
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate your business GST requirements' },
      { step: 2, title: 'Registration', description: 'Complete GST registration process' },
      { step: 3, title: 'Setup', description: 'Configure invoicing and compliance systems' },
      { step: 4, title: 'Filing', description: 'Monthly/quarterly return filing' },
      { step: 5, title: 'Reconciliation', description: 'Regular ITC and ledger reconciliation' }
    ],
    benefits: [
      'Zero penalty guarantee',
      'Proactive filing reminders',
      'Real-time compliance dashboard',
      'Expert advisory on GST matters',
      'ITC maximization strategies'
    ]
  },
  {
    id: 'income-tax-return',
    title: 'Income Tax Return (ITR)',
    shortDescription: 'We provide income tax return filing for individuals, salaried professionals, and businesses including tax planning and advisory.',
    description: 'Maximize your tax savings with our expert Income Tax Return Filing services. As a trusted tax consultant in India, we offer ITR filing online for individuals, professionals, and businesses. Our tax return filing India experts use advanced tools to ensure accurate filing while optimizing your tax liability legally.',
    tag: 'Tax Strategy',
    background: itrPrimary,
    gallery: [itrAccent],
    features: [
      'Individual ITR filing (ITR-1 to ITR-7)',
      'Business and professional ITR',
      'Capital gains computation',
      'Tax planning and optimization',
      'Advance tax calculations',
      'TDS return filing',
      'Response to IT notices',
      'Revised return filing'
    ],
    process: [
      { step: 1, title: 'Document Collection', description: 'Gather all income proofs and investments' },
      { step: 2, title: 'Analysis', description: 'Identify tax-saving opportunities' },
      { step: 3, title: 'Computation', description: 'Calculate taxes with all deductions' },
      { step: 4, title: 'Filing', description: 'File ITR before deadline' },
      { step: 5, title: 'Verification', description: 'Complete e-verification process' }
    ],
    benefits: [
      'Maximum tax savings',
      'Accurate computation',
      'On-time filing guarantee',
      'Expert handling of complex cases',
      'Post-filing support for notices'
    ]
  },
  {
    id: 'accounting-services',
    title: 'Accounting Services',
    shortDescription: 'Full-stack accounting & bookkeeping India services with cloud books, management reports, and CFO level insights for businesses.',
    description: 'Transform your financial management with our comprehensive accounting services in India. From daily bookkeeping to strategic financial insights, we provide end-to-end accounting solutions. Our business tax consultant team delivers corporate tax filing, TDS filing services, and virtual CFO services.',
    tag: 'Finance Desk',
    background: accountingPrimary,
    gallery: [],
    features: [
      'Daily bookkeeping and ledger maintenance',
      'Bank reconciliation',
      'Accounts payable and receivable',
      'Financial statements preparation',
      'Management reports and MIS',
      'Payroll processing',
      'Inventory accounting',
      'Virtual CFO services'
    ],
    process: [
      { step: 1, title: 'Onboarding', description: 'Understand your business and set up systems' },
      { step: 2, title: 'Data Entry', description: 'Regular transaction recording' },
      { step: 3, title: 'Reconciliation', description: 'Monthly reconciliation and checks' },
      { step: 4, title: 'Reporting', description: 'Generate financial reports' },
      { step: 5, title: 'Advisory', description: 'Strategic financial guidance' }
    ],
    benefits: [
      'Real-time financial visibility',
      'Cloud-based access anywhere',
      'Cost savings vs in-house team',
      'Expert financial insights',
      'Scalable services'
    ]
  },
  {
    id: 'firm-shop-act-registration',
    title: 'Firm / Shop Act Registration',
    shortDescription: 'We handle private limited company registration, LLP registration, OPC, MSME registration, and startup incorporation in India.',
    description: 'Start your business journey with proper legal foundation. We specialize in company registration India, including private limited company registration, LLP registration India, proprietorship, partnership, and startup compliance India. Get end-to-end incorporation with branding-ready documents and compliance starter kits.',
    tag: 'Business Setup',
    background: firmPrimary,
    gallery: [firmAccent],
    features: [
      'Proprietorship registration',
      'Partnership firm registration',
      'LLP incorporation',
      'Private Limited Company registration',
      'Shop & Establishment Act license',
      'Trade license',
      'FSSAI registration',
      'Professional Tax registration'
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Choose the right business structure' },
      { step: 2, title: 'Documentation', description: 'Prepare incorporation documents' },
      { step: 3, title: 'Filing', description: 'Submit applications to authorities' },
      { step: 4, title: 'Registration', description: 'Obtain registration certificates' },
      { step: 5, title: 'Compliance Kit', description: 'Setup for ongoing compliance' }
    ],
    benefits: [
      'Expert guidance on business structure',
      'All-inclusive registration package',
      'Quick turnaround time',
      'Post-registration support',
      'Compliance starter kit included'
    ]
  },
  {
    id: 'msme-udyam-certificate',
    title: 'MSME (Udyam Certificate)',
    shortDescription: 'MSME Registration India with Udyam certificate, accurate classification, document checklist, and government scheme guidance.',
    description: 'Unlock government benefits and subsidies with MSME Registration. As a leading CA firm in India, we help you classify your enterprise correctly and obtain the official Udyam certificate for startups, small businesses, and MSMEs.',
    tag: 'Business Setup',
    background: msmePrimary,
    gallery: [],
    features: [
      'New Udyam Registration',
      'Udyam certificate update',
      'Enterprise classification assessment',
      'MSME benefits guidance',
      'Government scheme assistance',
      'Priority sector lending support',
      'Subsidy scheme applications',
      'MSME Databank registration'
    ],
    process: [
      { step: 1, title: 'Eligibility Check', description: 'Verify MSME classification criteria' },
      { step: 2, title: 'Documentation', description: 'Prepare Aadhaar and business details' },
      { step: 3, title: 'Registration', description: 'Online Udyam registration' },
      { step: 4, title: 'Certificate', description: 'Receive Udyam Registration Certificate' },
      { step: 5, title: 'Benefits', description: 'Guide on availing MSME benefits' }
    ],
    benefits: [
      'Access to priority sector lending',
      'Government tender preferences',
      'Subsidy on patent registration',
      'Lower interest rates on loans',
      'Protection against delayed payments'
    ]
  },
  {
    id: 'digital-signature-certificate',
    title: 'Digital Signature Certificate (DSC)',
    shortDescription: 'Instant DSC issuance with doorstep verification and renewal tracking.',
    description: 'Get your Digital Signature Certificate quickly and hassle-free. Essential for e-filing, e-tendering, and digital document signing with legal validity.',
    tag: 'Secure Digital',
    background: dscPrimary,
    gallery: [dscAccent],
    features: [
      'Class 3 DSC for individuals',
      'Class 3 DSC for organizations',
      'DGFT DSC for import/export',
      'Document Signer Certificate',
      'USB Token with DSC',
      'DSC renewal services',
      'Doorstep verification',
      'Same-day issuance available'
    ],
    process: [
      { step: 1, title: 'Application', description: 'Fill DSC application form' },
      { step: 2, title: 'Documentation', description: 'Submit ID and address proof' },
      { step: 3, title: 'Verification', description: 'Video/physical verification' },
      { step: 4, title: 'Issuance', description: 'DSC issued on USB token' },
      { step: 5, title: 'Installation', description: 'Help with DSC installation' }
    ],
    benefits: [
      'Same-day issuance available',
      'Doorstep verification service',
      'Renewal reminders',
      'Technical support included',
      'Valid for 2 years'
    ]
  },
  {
    id: 'import-export-code',
    title: 'Import Export Code (IEC)',
    shortDescription: 'Import Export Code Registration India with global-ready IEC registrations, trade advisory, and onboarding support.',
    description: 'Expand your business globally with Import Export Code Registration. We handle the complete IEC application process and provide trade advisory services for startups and businesses looking to enter international markets.',
    tag: 'Global Trade',
    background: iecPrimary,
    gallery: [iecAccent],
    features: [
      'New IEC registration',
      'IEC modification and amendment',
      'IEC surrender',
      'DGFT registration',
      'AD Code registration',
      'RCMC registration',
      'Export promotion schemes guidance',
      'International trade advisory'
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understand your export/import plans' },
      { step: 2, title: 'Documentation', description: 'Prepare required documents' },
      { step: 3, title: 'Application', description: 'Submit IEC application to DGFT' },
      { step: 4, title: 'Approval', description: 'Receive IEC certificate' },
      { step: 5, title: 'Onboarding', description: 'Setup for international trade' }
    ],
    benefits: [
      'Quick IEC approval',
      'Expert trade advisory',
      'DGFT compliance support',
      'Export benefit schemes guidance',
      'Lifetime validity'
    ]
  },
  {
    id: 'trademark-ip-registration',
    title: 'Trademark / IP Registration',
    shortDescription: 'Trademark Registration India with brand-first trademark, logo, and copyright desk including monitoring and renewal support.',
    description: 'Protect your brand identity with our comprehensive Trademark Registration India and intellectual property services. From search to registration to enforcement, we safeguard your business assets as your trusted business compliance services partner.',
    tag: 'Brand Guard',
    background: trademarkPrimary,
    gallery: [trademarkAccent],
    features: [
      'Trademark search and analysis',
      'Trademark registration',
      'Logo trademark filing',
      'Copyright registration',
      'Patent filing assistance',
      'Trademark objection handling',
      'Trademark renewal',
      'IP portfolio management'
    ],
    process: [
      { step: 1, title: 'Search', description: 'Comprehensive trademark search' },
      { step: 2, title: 'Application', description: 'File trademark application' },
      { step: 3, title: 'Examination', description: 'Handle examination reports' },
      { step: 4, title: 'Publication', description: 'Journal publication process' },
      { step: 5, title: 'Registration', description: 'Obtain trademark certificate' }
    ],
    benefits: [
      'Thorough availability search',
      'Expert handling of objections',
      'Monitoring for infringement',
      'Renewal tracking',
      'Complete IP protection'
    ]
  },
  {
    id: 'esic-pf-registration',
    title: 'ESIC / PF Registration & Consultancy',
    shortDescription: 'Professional Tax Registration, ROC Compliance Services, and employee-first compliance with automated challans and advisory.',
    description: 'Ensure complete employee welfare compliance with our ESIC, PF registration, Professional Tax Registration, and ROC Compliance Services. We handle everything from registration to monthly challans to inspections, keeping your business legally protected.',
    tag: 'People Care',
    background: esicPrimary,
    gallery: [esicAccent],
    features: [
      'ESIC employer registration',
      'EPF establishment registration',
      'Monthly PF/ESIC challan filing',
      'Employee enrollment',
      'PF withdrawal assistance',
      'ESIC claim processing',
      'Compliance audit support',
      'Labour law advisory'
    ],
    process: [
      { step: 1, title: 'Registration', description: 'ESIC/PF establishment registration' },
      { step: 2, title: 'Enrollment', description: 'Employee UAN generation' },
      { step: 3, title: 'Monthly Filing', description: 'Regular challan generation and payment' },
      { step: 4, title: 'Returns', description: 'Annual return filing' },
      { step: 5, title: 'Compliance', description: 'Audit and inspection support' }
    ],
    benefits: [
      'Zero default guarantee',
      'Automated reminders',
      'Employee claim support',
      'Inspection ready documentation',
      'Expert labour law guidance'
    ]
  },
  {
    id: 'internal-auditing',
    title: 'Internal Auditing',
    shortDescription: 'Deep-dive internal audits with risk scoring, SOP upgrades, and board-ready reports.',
    description: 'Strengthen your internal controls and governance with our comprehensive internal audit services. We identify risks, improve processes, and ensure regulatory compliance.',
    tag: 'Governance',
    background: auditPrimary,
    gallery: [],
    features: [
      'Risk-based internal audits',
      'Process and control reviews',
      'Compliance audits',
      'Financial audits',
      'Operational audits',
      'IT systems audit',
      'Fraud investigation',
      'Management letter and recommendations'
    ],
    process: [
      { step: 1, title: 'Planning', description: 'Define audit scope and objectives' },
      { step: 2, title: 'Fieldwork', description: 'Conduct audit procedures' },
      { step: 3, title: 'Analysis', description: 'Evaluate findings and risks' },
      { step: 4, title: 'Reporting', description: 'Prepare detailed audit report' },
      { step: 5, title: 'Follow-up', description: 'Track implementation of recommendations' }
    ],
    benefits: [
      'Independent assessment',
      'Risk identification',
      'Process improvements',
      'Board-ready reports',
      'Continuous improvement focus'
    ]
  }
];

export const getServiceBySlug = (slug) => {
  return services.find(service => service.id === slug);
};

export const serviceCategories = [
  {
    name: 'Capital Desk',
    services: ['loan-facilities']
  },
  {
    name: 'Compliance Suite',
    services: ['gst-registration-returns', 'esic-pf-registration']
  },
  {
    name: 'Tax Strategy',
    services: ['income-tax-return']
  },
  {
    name: 'Finance Desk',
    services: ['accounting-services']
  },
  {
    name: 'Business Setup',
    services: ['firm-shop-act-registration', 'msme-udyam-certificate']
  },
  {
    name: 'Brand & Trade',
    services: ['digital-signature-certificate', 'import-export-code', 'trademark-ip-registration']
  },
  {
    name: 'Governance',
    services: ['internal-auditing']
  }
];

export default services;
