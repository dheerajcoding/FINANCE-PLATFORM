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
      className="relative pt-24 md:pt-32 section-padding text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={heroBg} alt="Financial planning background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-accent/50" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-accent-light text-xs mb-6">
              Min Fees · High Quality · Quick Service
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Compliance excellence crafted by
              <span className="text-accent-light block"> Anil Kumar Choudhary</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Holistic GST, tax, and corporate compliance solutions delivered with the rigor of a
              boutique consultancy and the speed of a modern financial partner.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {heroChips.map((chip) => (
                <span key={chip} className="stat-chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="btn-primary text-lg px-10 py-4">
                Request a Call Back
              </button>
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary bg-white/15 border border-white/30 text-white backdrop-blur-lg"
              >
                Explore Services
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="glass-card text-center">
                  <div className="text-4xl font-bold text-accent-light">{metric.value}</div>
                  <p className="mt-2 text-sm tracking-wide uppercase text-blue-100">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-6 md:p-8">
              <div className="relative">
                <img
                  src={heroPortrait}
                  alt="Financial advisory session"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <img
                  src={badgeImage}
                  alt="Client meeting"
                  className="absolute -bottom-8 -left-8 w-32 h-32 object-cover rounded-xl border-4 border-white shadow-xl hidden sm:block"
                />
              </div>

              <div className="mt-10 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-100 mb-2">Premium Desk</p>
                <h3 className="text-2xl font-semibold mb-2">Dedicated Relationship Team</h3>
                <p className="text-blue-100">
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
