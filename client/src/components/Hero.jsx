import React from 'react';
import heroBg from './images/image20.avif';
import heroPortrait from './images/image13.png';
import badgeImage from './images/image4.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroChips = [
    'Trusted by 500+ growing businesses',
    '+91 9818774800',
    'ISO-grade compliance workflows',
  ];

  const heroMetrics = [
    { value: '10+', label: 'Years of Experience' },
    { value: '98%', label: 'Client Retention' },
    { value: '24 Hrs', label: 'Avg. Response' },
  ];

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={heroBg} alt="GST Registration Services in India by ARS Financial Enterprises" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-accent/50" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-accent-light text-xs mb-6">
              Best GST Consultant • Tax Consultant in India • CA Firm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] sm:leading-[1.06] mb-5 sm:mb-6">
              Best GST, Tax & Business Compliance Services in India
              <span className="text-accent-light block"> ARS Financial Enterprises</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-7 sm:mb-8 max-w-xl">
              ARS Financial Enterprises provides professional GST registration, income tax filing, business compliance, and corporate advisory services across India. Led by Anil Kumar Choudhary, we help startups, SMEs, and large companies stay 100% compliant with Indian tax and legal regulations.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
              {heroChips.map((chip) => (
                <span key={chip} className="stat-chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button onClick={scrollToContact} className="btn-primary text-lg px-10 py-4">
                Get Expert Tax & Compliance Assistance Today
              </button>
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary bg-white/15 border border-white/30 text-white backdrop-blur-lg"
              >
                Explore Services
              </button>
            </div>

            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="glass-card text-center p-6">
                  <div className="text-4xl font-bold text-accent-light">{metric.value}</div>
                  <p className="mt-2 text-sm tracking-wide uppercase text-slate-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-6 md:p-8">
              <div className="relative">
                <img
                  src={heroPortrait}
                  alt="Income Tax Filing Experts at ARS Financial Enterprises"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-2xl shadow-2xl"
                />
                <img
                  src={badgeImage}
                  alt="Company Registration Consultants India"
                  className="absolute -bottom-8 -left-8 w-32 h-32 object-cover rounded-xl border-4 border-white shadow-xl hidden sm:block"
                />
              </div>

              <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-2">Premium Desk</p>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Dedicated Relationship Team</h3>
                <p className="text-slate-600">
                  Personal guidance on registrations, audits, and corporate finance within 24 hours of every inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
