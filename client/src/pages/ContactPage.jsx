import React, { useEffect } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import useSeo from '../lib/useSeo';
import { organizationLd, breadcrumbLd, absoluteUrl } from '../lib/siteMeta';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Contact ARS Financial Enterprises | Free GST & Tax Consultation',
    description:
      'Contact ARS Financial Enterprises for GST registration, ITR filing, company registration and compliance. Call +91 98187 74800, WhatsApp us, or send an enquiry — reply within one business day.',
    path: '/contact',
    jsonLd: [
      organizationLd(),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        url: absoluteUrl('/contact'),
        name: 'Contact ARS Financial Enterprises',
      },
      breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
