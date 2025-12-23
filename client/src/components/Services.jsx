import React from 'react';
import gstPrimary from './images/image1.jpg';
import gstAccent from './images/image2.png';
import itrPrimary from './images/image3.avif';
import itrAccent from './images/image4.jpg';
import accountingPrimary from './images/image6.jpg';
import firmPrimary from './images/image9.png';
import firmAccent from './images/image8.png';
import dscPrimary from './images/image10.png';
import dscAccent from './images/image11.jpg';
import iecPrimary from './images/image12.jpg';
import iecAccent from './images/image13.png';
import trademarkPrimary from './images/image14.jpg';
import trademarkAccent from './images/image15.png';
import esicPrimary from './images/image17.png';
import esicAccent from './images/image18.webp';
import auditPrimary from './images/image19.jpg';
import loanPrimary from './images/image20.avif';
import loanAccent from './images/image20.jpg';
import loanAccentSecondary from './images/image21.png';

const Services = () => {
  const services = [
    {
      title: 'GST Registration / GST Returns',
      description: 'Complete GST registration lifecycle with proactive filing reminders and intelligence dashboards.',
      tag: 'Compliance Suite',
      background: gstPrimary,
      gallery: [gstAccent],
    },
    {
      title: 'Income Tax Return (ITR)',
      description: 'AI-assisted document prep, optimization strategies, and professional filing across entities.',
      tag: 'Tax Strategy',
      background: itrPrimary,
      gallery: [itrAccent],
    },
    {
      title: 'Accounting Services',
      description: 'Full-stack accounting desk with cloud books, management reports, and CFO level insights.',
      tag: 'Finance Desk',
      background: accountingPrimary,
    },
    {
      title: 'Firm / Shop Act Registration',
      description: 'End-to-end incorporation with branding-ready documents and compliance starter kits.',
      tag: 'Business Setup',
      background: firmPrimary,
      gallery: [firmAccent],
    },
    {
      title: 'Digital Signature Certificate (DSC)',
      description: 'Instant DSC issuance with doorstep verification and renewal tracking.',
      tag: 'Secure Digital',
      background: dscPrimary,
      gallery: [dscAccent],
    },
    {
      title: 'Import Export Code (IEC)',
      description: 'Global-ready IEC registrations with trade advisory and onboarding collaterals.',
      tag: 'Global Trade',
      background: iecPrimary,
      gallery: [iecAccent],
    },
    {
      title: 'Trademark / IP Registration',
      description: 'Brand-first trademark, logo, and copyright desk with monitoring and renewal support.',
      tag: 'Brand Guard',
      background: trademarkPrimary,
      gallery: [trademarkAccent],
    },
    {
      title: 'ESIC / PF Registration & Consultancy',
      description: 'Employee-first compliance with automated challans, audit prep, and advisory calls.',
      tag: 'People Care',
      background: esicPrimary,
      gallery: [esicAccent],
    },
    {
      title: 'Internal Auditing',
      description: 'Deep-dive internal audits with risk scoring, SOP upgrades, and board-ready reports.',
      tag: 'Governance',
      background: auditPrimary,
    },
    {
      title: 'Loan Facilities & Professional Services',
      description: 'Structured finance desks covering working capital, term loans, and investor documentation.',
      tag: 'Capital Desk',
      background: loanPrimary,
      gallery: [loanAccent, loanAccentSecondary],
    },
  ];

  return (
    <section id="services" className="relative section-padding bg-white">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <p className="section-subtitle">SERVICES PORTFOLIO</p>
          <h2 className="section-heading">
            Tailored delivery across every financial touchpoint
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each vertical combines expert advisors, smart tooling, and rigorous checklists to keep your business compliant and future-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="relative rounded-2xl overflow-hidden shadow-xl group border border-white/40"
              style={{
                backgroundImage: `linear-gradient(145deg, rgba(5,20,58,0.9), rgba(30,58,138,0.4)), url(${service.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 p-8 flex flex-col h-full text-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold tracking-[0.3em] text-white/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="px-3 py-1 text-xs uppercase bg-white/10 rounded-full border border-white/20">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-snug">{service.title}</h3>
                <p className="text-white/80 leading-relaxed mb-6 flex-grow">{service.description}</p>

                <div className="flex items-center text-sm font-semibold tracking-wide">
                  <span className="mr-3">Full Scope Delivery</span>
                  <span className="w-10 h-px bg-white/40" />
                </div>

                {service.gallery && service.gallery.length > 0 && (
                  <div className="flex items-center gap-3 mt-6">
                    {service.gallery.slice(0, 3).map((thumb, thumbIndex) => (
                      <img
                        key={`${service.title}-thumb-${thumbIndex}`}
                        src={thumb}
                        alt={`${service.title} visual ${thumbIndex + 1}`}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            Build Your Service Stack
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
