// Pure service data (no asset imports) so it can be consumed by both the
// browser bundle (via servicesData.js) and the Node prerender/sitemap script.

export const createSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const servicesMeta = [
  {
    id: 'loan-facilities',
    title: 'Loan Facilities & Professional Services',
    shortDescription:
      'Structured finance support covering working capital, term loans, and documentation for faster, cleaner processing.',
    description:
      'We provide comprehensive loan facilitation services designed to meet your business and personal financial needs. Our expert team assists you through every step of the loan process, from initial consultation to final disbursement.',
    supporting:
      'Types: Personal · Home · LAP (Loan Against Property) · Business · Working Capital · Term Loan',
    tag: 'Capital Desk',
    featured: true,
    metaTitle: 'Business & Personal Loan Assistance in India | ARS Financial Enterprises',
    metaDescription:
      'Get expert help with business loans, working capital, term loans, home loans and loan against property. Multi-lender comparison, documentation support and fast approvals.',
    keywords: [
      'business loan consultant India',
      'working capital loan',
      'loan against property',
      'term loan assistance',
      'project finance India',
    ],
    features: [
      'Personal Loans with competitive interest rates',
      'Home Loans with flexible EMI options',
      'Loan Against Property (LAP) for immediate liquidity',
      'Business Loans for expansion and operations',
      'Working Capital Loans for day-to-day expenses',
      'Term Loans for long-term investments',
      'Professional documentation support',
      'Quick approval process',
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Free initial consultation to understand your needs' },
      { step: 2, title: 'Documentation', description: 'We help you prepare all required documents' },
      { step: 3, title: 'Application', description: 'Submit application to multiple lenders' },
      { step: 4, title: 'Approval', description: 'Get the best offer with competitive rates' },
      { step: 5, title: 'Disbursement', description: 'Quick fund transfer to your account' },
    ],
    benefits: [
      'Access to multiple lenders and banks',
      'Best interest rate negotiations',
      'Minimal documentation hassle',
      'Quick turnaround time',
      'Dedicated relationship manager',
    ],
    faqs: [
      {
        q: 'Which types of loans can ARS Financial help me arrange?',
        a: 'We assist with personal loans, home loans, loan against property, business loans, working capital limits and term loans by connecting you with multiple banks and NBFCs and negotiating the best rate.',
      },
      {
        q: 'Do you charge a fee before the loan is sanctioned?',
        a: 'Our initial consultation and eligibility assessment are free. We agree on a transparent professional fee only once you decide to proceed with an application.',
      },
      {
        q: 'How long does loan approval usually take?',
        a: 'With complete documentation, unsecured business and personal loans are typically approved in 3–7 working days. Secured facilities such as LAP take 2–4 weeks depending on property and legal checks.',
      },
    ],
  },
  {
    id: 'gst-registration-returns',
    title: 'GST Registration / GST Returns',
    shortDescription:
      'We offer complete GST registration, GST return filing, GST compliance, and GST audit services for businesses across India.',
    description:
      'Navigate the complexities of GST with our comprehensive GST registration India and GST filing services. As the best GST consultant in India, we ensure 100% compliance while minimizing your tax burden through strategic planning. Our online GST registration service is fast, affordable, and professional.',
    tag: 'Compliance Suite',
    metaTitle: 'GST Registration & GST Return Filing Services in India | ARS Financial',
    metaDescription:
      'Fast online GST registration and monthly GST return filing (GSTR-1, GSTR-3B, GSTR-9). Expert GST consultants for startups, traders, e-commerce sellers and companies across India.',
    keywords: [
      'GST registration India',
      'GST return filing',
      'online GST registration',
      'GST consultant',
      'GSTR-3B filing',
      'GST for e-commerce sellers',
    ],
    features: [
      'New GST Registration',
      'GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)',
      'GST Annual Return preparation',
      'Input Tax Credit optimization',
      'GST Audit support',
      'E-way bill management',
      'GST refund processing',
      'Amendment and cancellation services',
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate your business GST requirements' },
      { step: 2, title: 'Registration', description: 'Complete GST registration process' },
      { step: 3, title: 'Setup', description: 'Configure invoicing and compliance systems' },
      { step: 4, title: 'Filing', description: 'Monthly/quarterly return filing' },
      { step: 5, title: 'Reconciliation', description: 'Regular ITC and ledger reconciliation' },
    ],
    benefits: [
      'Zero penalty guarantee',
      'Proactive filing reminders',
      'Real-time compliance dashboard',
      'Expert advisory on GST matters',
      'ITC maximization strategies',
    ],
    faqs: [
      {
        q: 'Is GST registration mandatory for my business?',
        a: 'GST registration is mandatory once turnover crosses ₹40 lakh for goods (₹20 lakh for services, lower in special-category states), and immediately for inter-state supply, e-commerce sellers and certain notified categories. We assess your case in a free consultation.',
      },
      {
        q: 'How many days does GST registration take?',
        a: 'With a complete document set, the GST certificate (GSTIN) is usually issued within 3–7 working days. Aadhaar authentication of the promoter speeds this up significantly.',
      },
      {
        q: 'What documents are required for GST registration?',
        a: 'PAN and Aadhaar of the proprietor/partners/directors, business address proof, bank account proof, a photograph, and constitution documents such as the partnership deed or certificate of incorporation.',
      },
      {
        q: 'Do you also file the monthly GST returns?',
        a: 'Yes. We manage GSTR-1, GSTR-3B, GSTR-9 and reconciliations on a monthly retainer with filing reminders so you never miss a due date or pay a late fee.',
      },
    ],
  },
  {
    id: 'income-tax-return',
    title: 'Income Tax Return (ITR)',
    shortDescription:
      'We provide income tax return filing for individuals, salaried professionals, and businesses including tax planning and advisory.',
    description:
      'Maximize your tax savings with our expert Income Tax Return Filing services. As a trusted tax consultant in India, we offer ITR filing online for individuals, professionals, and businesses. Our tax return filing India experts use advanced tools to ensure accurate filing while optimizing your tax liability legally.',
    tag: 'Tax Strategy',
    metaTitle: 'Income Tax Return (ITR) Filing Services in India | ARS Financial',
    metaDescription:
      'Accurate ITR filing for salaried individuals, professionals, NRIs and businesses. Capital gains, tax planning, notice handling and refund follow-up by experienced tax consultants.',
    keywords: [
      'ITR filing online',
      'income tax return filing India',
      'tax consultant',
      'capital gains tax filing',
      'income tax notice reply',
    ],
    features: [
      'Individual ITR filing (ITR-1 to ITR-7)',
      'Business and professional ITR',
      'Capital gains computation',
      'Tax planning and optimization',
      'Advance tax calculations',
      'TDS return filing',
      'Response to IT notices',
      'Revised return filing',
    ],
    process: [
      { step: 1, title: 'Document Collection', description: 'Gather all income proofs and investments' },
      { step: 2, title: 'Analysis', description: 'Identify tax-saving opportunities' },
      { step: 3, title: 'Computation', description: 'Calculate taxes with all deductions' },
      { step: 4, title: 'Filing', description: 'File ITR before deadline' },
      { step: 5, title: 'Verification', description: 'Complete e-verification process' },
    ],
    benefits: [
      'Maximum tax savings',
      'Accurate computation',
      'On-time filing guarantee',
      'Expert handling of complex cases',
      'Post-filing support for notices',
    ],
    faqs: [
      {
        q: 'Which ITR form applies to me?',
        a: 'It depends on your income sources — salary, house property, capital gains, business or foreign income. Share your details and we will pick the correct form (ITR-1 to ITR-7) and file it for you.',
      },
      {
        q: 'Can you file returns for previous missed years?',
        a: 'Yes, within the timelines allowed by the Income Tax Act we can file belated or updated returns (ITR-U) and help regularise your record.',
      },
      {
        q: 'I received an income tax notice. Can you help?',
        a: 'Absolutely. We review the notice, prepare the response with supporting documents and represent your case for scrutiny, mismatch (143(1)), and other common notices.',
      },
    ],
  },
  {
    id: 'accounting-services',
    title: 'Accounting Services',
    shortDescription:
      'Full-stack accounting & bookkeeping India services with cloud books, management reports, and CFO level insights for businesses.',
    description:
      'Transform your financial management with our comprehensive accounting services in India. From daily bookkeeping to strategic financial insights, we provide end-to-end accounting solutions. Our business tax consultant team delivers corporate tax filing, TDS filing services, and virtual CFO services.',
    tag: 'Finance Desk',
    metaTitle: 'Accounting, Bookkeeping & Virtual CFO Services in India | ARS Financial',
    metaDescription:
      'Outsourced accounting and bookkeeping with cloud books, bank reconciliation, payroll, MIS reports and virtual CFO advisory for startups and SMEs across India.',
    keywords: [
      'accounting services India',
      'outsourced bookkeeping',
      'virtual CFO services',
      'payroll processing',
      'MIS reporting',
    ],
    features: [
      'Daily bookkeeping and ledger maintenance',
      'Bank reconciliation',
      'Accounts payable and receivable',
      'Financial statements preparation',
      'Management reports and MIS',
      'Payroll processing',
      'Inventory accounting',
      'Virtual CFO services',
    ],
    process: [
      { step: 1, title: 'Onboarding', description: 'Understand your business and set up systems' },
      { step: 2, title: 'Data Entry', description: 'Regular transaction recording' },
      { step: 3, title: 'Reconciliation', description: 'Monthly reconciliation and checks' },
      { step: 4, title: 'Reporting', description: 'Generate financial reports' },
      { step: 5, title: 'Advisory', description: 'Strategic financial guidance' },
    ],
    benefits: [
      'Real-time financial visibility',
      'Cloud-based access anywhere',
      'Cost savings vs in-house team',
      'Expert financial insights',
      'Scalable services',
    ],
    faqs: [
      {
        q: 'Which accounting software do you work with?',
        a: 'We work with Tally, Zoho Books, QuickBooks and Busy, and can recommend and set up the right platform for your business size and industry.',
      },
      {
        q: 'Can you take over accounting that is behind by several months?',
        a: 'Yes. We do catch-up and clean-up bookkeeping to bring your books up to date, reconcile bank statements and prepare accurate financials for filing.',
      },
      {
        q: 'Will I get monthly reports?',
        a: 'Yes — you receive monthly financial statements and a management MIS covering revenue, expenses, receivables, payables and cash position.',
      },
    ],
  },
  {
    id: 'firm-shop-act-registration',
    title: 'Firm / Shop Act Registration',
    shortDescription:
      'We handle private limited company registration, LLP registration, OPC, MSME registration, and startup incorporation in India.',
    description:
      'Start your business journey with proper legal foundation. We specialize in company registration India, including private limited company registration, LLP registration India, proprietorship, partnership, and startup compliance India. Get end-to-end incorporation with branding-ready documents and compliance starter kits.',
    tag: 'Business Setup',
    metaTitle: 'Company, LLP & Shop Act Registration in India | ARS Financial',
    metaDescription:
      'End-to-end company registration in India — Private Limited, LLP, OPC, partnership and proprietorship, plus Shop & Establishment Act, trade licence and FSSAI registration.',
    keywords: [
      'company registration India',
      'private limited company registration',
      'LLP registration',
      'shop act registration',
      'startup incorporation',
    ],
    features: [
      'Proprietorship registration',
      'Partnership firm registration',
      'LLP incorporation',
      'Private Limited Company registration',
      'Shop & Establishment Act license',
      'Trade license',
      'FSSAI registration',
      'Professional Tax registration',
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Choose the right business structure' },
      { step: 2, title: 'Documentation', description: 'Prepare incorporation documents' },
      { step: 3, title: 'Filing', description: 'Submit applications to authorities' },
      { step: 4, title: 'Registration', description: 'Obtain registration certificates' },
      { step: 5, title: 'Compliance Kit', description: 'Setup for ongoing compliance' },
    ],
    benefits: [
      'Expert guidance on business structure',
      'All-inclusive registration package',
      'Quick turnaround time',
      'Post-registration support',
      'Compliance starter kit included',
    ],
    faqs: [
      {
        q: 'Which business structure is best for a new startup?',
        a: 'A Private Limited Company suits startups planning to raise funding; an LLP suits professional service firms; a proprietorship suits small single-owner businesses. We advise based on your funding, liability and compliance appetite.',
      },
      {
        q: 'How long does Private Limited Company registration take?',
        a: 'Typically 7–12 working days once name approval and director KYC (DSC/DIN) are complete.',
      },
      {
        q: 'Do you help with post-incorporation compliance?',
        a: 'Yes — we set up your books, GST, PAN/TAN, bank account documentation and the annual ROC compliance calendar.',
      },
    ],
  },
  {
    id: 'msme-udyam-certificate',
    title: 'MSME (Udyam Certificate)',
    shortDescription:
      'MSME Registration India with Udyam certificate, accurate classification, document checklist, and government scheme guidance.',
    description:
      'Unlock government benefits and subsidies with MSME Registration. As a leading CA firm in India, we help you classify your enterprise correctly and obtain the official Udyam certificate for startups, small businesses, and MSMEs.',
    tag: 'Business Setup',
    metaTitle: 'MSME / Udyam Registration in India | ARS Financial',
    metaDescription:
      'Get your Udyam (MSME) certificate with correct enterprise classification. Access priority-sector lending, tender preference, subsidy schemes and protection against delayed payments.',
    keywords: [
      'MSME registration India',
      'Udyam registration',
      'Udyam certificate',
      'MSME benefits',
      'government subsidy schemes',
    ],
    features: [
      'New Udyam Registration',
      'Udyam certificate update',
      'Enterprise classification assessment',
      'MSME benefits guidance',
      'Government scheme assistance',
      'Priority sector lending support',
      'Subsidy scheme applications',
      'MSME Databank registration',
    ],
    process: [
      { step: 1, title: 'Eligibility Check', description: 'Verify MSME classification criteria' },
      { step: 2, title: 'Documentation', description: 'Prepare Aadhaar and business details' },
      { step: 3, title: 'Registration', description: 'Online Udyam registration' },
      { step: 4, title: 'Certificate', description: 'Receive Udyam Registration Certificate' },
      { step: 5, title: 'Benefits', description: 'Guide on availing MSME benefits' },
    ],
    benefits: [
      'Access to priority sector lending',
      'Government tender preferences',
      'Subsidy on patent registration',
      'Lower interest rates on loans',
      'Protection against delayed payments',
    ],
    faqs: [
      {
        q: 'Is Udyam registration free?',
        a: 'The government portal does not charge a fee. We charge a small professional fee for correct classification, error-free filing and guidance on availing benefits.',
      },
      {
        q: 'What do I need for Udyam registration?',
        a: 'The proprietor/partner/director Aadhaar and PAN, and basic business details such as activity, investment in plant & machinery and turnover. GST details are needed if your business is GST-registered.',
      },
      {
        q: 'How quickly is the certificate issued?',
        a: 'The Udyam Registration Certificate is usually generated the same day once details and OTP verification are complete.',
      },
    ],
  },
  {
    id: 'digital-signature-certificate',
    title: 'Digital Signature Certificate (DSC)',
    shortDescription: 'Instant DSC issuance with doorstep verification and renewal tracking.',
    description:
      'Get your Digital Signature Certificate quickly and hassle-free. Essential for e-filing, e-tendering, and digital document signing with legal validity.',
    tag: 'Secure Digital',
    metaTitle: 'Digital Signature Certificate (DSC) in India | ARS Financial',
    metaDescription:
      'Class 3 Digital Signature Certificates for individuals and organisations, DGFT DSC for import/export, USB token, same-day issuance, doorstep video verification and renewals.',
    keywords: [
      'digital signature certificate',
      'Class 3 DSC',
      'DSC for GST and MCA',
      'DGFT DSC',
      'DSC renewal',
    ],
    features: [
      'Class 3 DSC for individuals',
      'Class 3 DSC for organizations',
      'DGFT DSC for import/export',
      'Document Signer Certificate',
      'USB Token with DSC',
      'DSC renewal services',
      'Doorstep verification',
      'Same-day issuance available',
    ],
    process: [
      { step: 1, title: 'Application', description: 'Fill DSC application form' },
      { step: 2, title: 'Documentation', description: 'Submit ID and address proof' },
      { step: 3, title: 'Verification', description: 'Video/physical verification' },
      { step: 4, title: 'Issuance', description: 'DSC issued on USB token' },
      { step: 5, title: 'Installation', description: 'Help with DSC installation' },
    ],
    benefits: [
      'Same-day issuance available',
      'Doorstep verification service',
      'Renewal reminders',
      'Technical support included',
      'Valid for 2 years',
    ],
    faqs: [
      {
        q: 'What is a Class 3 DSC used for?',
        a: 'A Class 3 DSC is required for MCA/ROC filings, GST, income tax e-filing, EPFO, trademark filing and e-tendering / e-procurement portals.',
      },
      {
        q: 'How fast can I get a DSC?',
        a: 'Same-day issuance is possible when video verification is completed promptly and documents are in order.',
      },
      {
        q: 'How long is a DSC valid?',
        a: 'DSCs are typically issued with 1, 2 or 3 year validity. We send renewal reminders before expiry.',
      },
    ],
  },
  {
    id: 'import-export-code',
    title: 'Import Export Code (IEC)',
    shortDescription:
      'Import Export Code Registration India with global-ready IEC registrations, trade advisory, and onboarding support.',
    description:
      'Expand your business globally with Import Export Code Registration. We handle the complete IEC application process and provide trade advisory services for startups and businesses looking to enter international markets.',
    tag: 'Global Trade',
    metaTitle: 'Import Export Code (IEC) Registration in India | ARS Financial',
    metaDescription:
      'Get your IEC from DGFT for imports and exports, plus AD Code registration, RCMC, IEC modification and international trade advisory. Lifetime-valid code, fast turnaround.',
    keywords: [
      'IEC registration India',
      'import export code',
      'DGFT registration',
      'AD code registration',
      'RCMC registration',
    ],
    features: [
      'New IEC registration',
      'IEC modification and amendment',
      'IEC surrender',
      'DGFT registration',
      'AD Code registration',
      'RCMC registration',
      'Export promotion schemes guidance',
      'International trade advisory',
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understand your export/import plans' },
      { step: 2, title: 'Documentation', description: 'Prepare required documents' },
      { step: 3, title: 'Application', description: 'Submit IEC application to DGFT' },
      { step: 4, title: 'Approval', description: 'Receive IEC certificate' },
      { step: 5, title: 'Onboarding', description: 'Setup for international trade' },
    ],
    benefits: [
      'Quick IEC approval',
      'Expert trade advisory',
      'DGFT compliance support',
      'Export benefit schemes guidance',
      'Lifetime validity',
    ],
    faqs: [
      {
        q: 'Who needs an Import Export Code?',
        a: 'Any business or individual importing goods into India or exporting goods/services out of India needs an IEC, with limited exemptions for personal-use imports.',
      },
      {
        q: 'What documents are required for IEC?',
        a: 'PAN, Aadhaar/passport of the applicant, business address proof, a cancelled cheque or bank certificate, and the entity constitution document.',
      },
      {
        q: 'Does the IEC need annual renewal?',
        a: 'The IEC is lifetime valid but must be electronically updated/confirmed every year on the DGFT portal — we can handle this for you.',
      },
    ],
  },
  {
    id: 'trademark-ip-registration',
    title: 'Trademark / IP Registration',
    shortDescription:
      'Trademark Registration India with brand-first trademark, logo, and copyright desk including monitoring and renewal support.',
    description:
      'Protect your brand identity with our comprehensive Trademark Registration India and intellectual property services. From search to registration to enforcement, we safeguard your business assets as your trusted business compliance services partner.',
    tag: 'Brand Guard',
    metaTitle: 'Trademark & Copyright Registration in India | ARS Financial',
    metaDescription:
      'Protect your brand with trademark search, filing and objection handling, plus logo and copyright registration, renewals and infringement monitoring across India.',
    keywords: [
      'trademark registration India',
      'logo trademark filing',
      'copyright registration',
      'trademark objection reply',
      'brand protection',
    ],
    features: [
      'Trademark search and analysis',
      'Trademark registration',
      'Logo trademark filing',
      'Copyright registration',
      'Patent filing assistance',
      'Trademark objection handling',
      'Trademark renewal',
      'IP portfolio management',
    ],
    process: [
      { step: 1, title: 'Search', description: 'Comprehensive trademark search' },
      { step: 2, title: 'Application', description: 'File trademark application' },
      { step: 3, title: 'Examination', description: 'Handle examination reports' },
      { step: 4, title: 'Publication', description: 'Journal publication process' },
      { step: 5, title: 'Registration', description: 'Obtain trademark certificate' },
    ],
    benefits: [
      'Thorough availability search',
      'Expert handling of objections',
      'Monitoring for infringement',
      'Renewal tracking',
      'Complete IP protection',
    ],
    faqs: [
      {
        q: 'How long does trademark registration take in India?',
        a: 'You can use the ™ symbol as soon as the application is filed. Full registration (®) usually takes 8–18 months if there is no objection or opposition.',
      },
      {
        q: 'Should I do a trademark search first?',
        a: 'Yes. A search reduces the risk of objection and opposition. We run a comprehensive search across classes before filing.',
      },
      {
        q: 'My trademark received an objection — can you reply?',
        a: 'Yes, we draft and file the examination-report reply and represent you at the hearing if required.',
      },
    ],
  },
  {
    id: 'esic-pf-registration',
    title: 'ESIC / PF Registration & Consultancy',
    shortDescription:
      'Professional Tax Registration, ROC Compliance Services, and employee-first compliance with automated challans and advisory.',
    description:
      'Ensure complete employee welfare compliance with our ESIC, PF registration, Professional Tax Registration, and ROC Compliance Services. We handle everything from registration to monthly challans to inspections, keeping your business legally protected.',
    tag: 'People Care',
    metaTitle: 'ESIC & PF (EPF) Registration and Return Filing in India | ARS Financial',
    metaDescription:
      'ESIC and EPF employer registration, monthly PF/ESIC challan filing, UAN generation, employee enrolment, claim assistance and labour-law advisory for growing teams.',
    keywords: [
      'ESIC registration',
      'PF registration',
      'EPF employer registration',
      'PF ESIC return filing',
      'professional tax registration',
    ],
    features: [
      'ESIC employer registration',
      'EPF establishment registration',
      'Monthly PF/ESIC challan filing',
      'Employee enrollment',
      'PF withdrawal assistance',
      'ESIC claim processing',
      'Compliance audit support',
      'Labour law advisory',
    ],
    process: [
      { step: 1, title: 'Registration', description: 'ESIC/PF establishment registration' },
      { step: 2, title: 'Enrollment', description: 'Employee UAN generation' },
      { step: 3, title: 'Monthly Filing', description: 'Regular challan generation and payment' },
      { step: 4, title: 'Returns', description: 'Annual return filing' },
      { step: 5, title: 'Compliance', description: 'Audit and inspection support' },
    ],
    benefits: [
      'Zero default guarantee',
      'Automated reminders',
      'Employee claim support',
      'Inspection ready documentation',
      'Expert labour law guidance',
    ],
    faqs: [
      {
        q: 'When is EPF and ESIC registration mandatory?',
        a: 'EPF registration is mandatory for establishments with 20 or more employees; ESIC applies to establishments with 10 or more employees (drawing wages up to the ESIC wage ceiling). Voluntary registration is also possible.',
      },
      {
        q: 'Do you file the monthly PF and ESIC challans?',
        a: 'Yes. We prepare and file the monthly ECR/challans, generate UANs for new joiners and keep your records inspection-ready.',
      },
      {
        q: 'Can you help employees with PF withdrawal or transfer?',
        a: 'Yes, we assist your employees with online PF withdrawal, transfer and KYC correction as part of the retainer.',
      },
    ],
  },
  {
    id: 'internal-auditing',
    title: 'Internal Auditing',
    shortDescription: 'Deep-dive internal audits with risk scoring, SOP upgrades, and board-ready reports.',
    description:
      'Strengthen your internal controls and governance with our comprehensive internal audit services. We identify risks, improve processes, and ensure regulatory compliance.',
    tag: 'Governance',
    metaTitle: 'Internal Audit & Risk Advisory Services in India | ARS Financial',
    metaDescription:
      'Risk-based internal audits, process and control reviews, compliance and operational audits, fraud investigation and board-ready reporting for companies and MSMEs.',
    keywords: [
      'internal audit services India',
      'risk based internal audit',
      'process and control review',
      'concurrent audit',
      'fraud investigation',
    ],
    features: [
      'Risk-based internal audits',
      'Process and control reviews',
      'Compliance audits',
      'Financial audits',
      'Operational audits',
      'IT systems audit',
      'Fraud investigation',
      'Management letter and recommendations',
    ],
    process: [
      { step: 1, title: 'Planning', description: 'Define audit scope and objectives' },
      { step: 2, title: 'Fieldwork', description: 'Conduct audit procedures' },
      { step: 3, title: 'Analysis', description: 'Evaluate findings and risks' },
      { step: 4, title: 'Reporting', description: 'Prepare detailed audit report' },
      { step: 5, title: 'Follow-up', description: 'Track implementation of recommendations' },
    ],
    benefits: [
      'Independent assessment',
      'Risk identification',
      'Process improvements',
      'Board-ready reports',
      'Continuous improvement focus',
    ],
    faqs: [
      {
        q: 'Is internal audit only for large companies?',
        a: 'No. Growing MSMEs benefit greatly from internal audit to tighten controls over cash, inventory, purchases and payroll before problems scale. We size the engagement to your business.',
      },
      {
        q: 'How often should internal audits be conducted?',
        a: 'Most clients opt for quarterly reviews with a detailed annual report; high-risk areas such as cash and inventory can be reviewed monthly.',
      },
      {
        q: 'Will the report be usable by our board or lenders?',
        a: 'Yes. We deliver a board-ready report with a risk-rated findings register, root-cause analysis and clear, time-bound recommendations.',
      },
    ],
  },
];

export const serviceCategories = [
  { name: 'Capital Desk', services: ['loan-facilities'] },
  { name: 'Compliance Suite', services: ['gst-registration-returns', 'esic-pf-registration'] },
  { name: 'Tax Strategy', services: ['income-tax-return'] },
  { name: 'Finance Desk', services: ['accounting-services'] },
  { name: 'Business Setup', services: ['firm-shop-act-registration', 'msme-udyam-certificate'] },
  {
    name: 'Brand & Trade',
    services: ['digital-signature-certificate', 'import-export-code', 'trademark-ip-registration'],
  },
  { name: 'Governance', services: ['internal-auditing'] },
];

export const getServiceMetaBySlug = (slug) => servicesMeta.find((service) => service.id === slug);

export default servicesMeta;
