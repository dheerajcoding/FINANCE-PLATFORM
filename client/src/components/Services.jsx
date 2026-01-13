import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';

const Services = () => {
  return (
    <section id="services" className="relative section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider">SERVICES PORTFOLIO</p>
          <h2 className="section-heading animate-fadeIn">
            Our Professional Financial & Compliance Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert GST, Income Tax & Company Compliance Services for Businesses Across India. Trusted Financial & Tax Consultants for Startups, SMEs & Corporates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className={`relative rounded-2xl overflow-hidden shadow-2xl group border border-white/40 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                service.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{
                backgroundImage: `linear-gradient(145deg, rgba(5,20,58,0.95), rgba(30,58,138,0.85)), url(${service.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/60 via-primary/60 to-accent/40 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Animated border effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 border-2 border-accent/50 rounded-2xl animate-pulse" />
              </div>
              
              <div className="relative z-10 p-8 flex flex-col h-full text-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold tracking-[0.3em] text-white/80 bg-white/10 px-3 py-1 rounded-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="px-4 py-1.5 text-xs uppercase font-bold bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug group-hover:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-white/90 leading-relaxed mb-6 flex-grow text-base">{service.shortDescription}</p>

                {service.supporting && (
                  <p className="text-sm text-white/85 leading-relaxed mb-6">
                    <span className="text-white/70">{service.supporting}</span>
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm font-bold tracking-wide bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Full Scope Delivery</span>
                  </div>
                  
                  <span className="flex items-center text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>

                {service.gallery && service.gallery.length > 0 && (
                  <div className="flex items-center gap-3 mt-6">
                    {service.gallery.slice(0, 3).map((thumb, thumbIndex) => (
                      <img
                        key={`${service.id}-thumb-${thumbIndex}`}
                        src={thumb}
                        alt={`${service.title} visual ${thumbIndex + 1}`}
                        className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-2xl transform group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${thumbIndex * 0.1}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 gradient-border rounded-3xl p-8 md:p-12 bg-white shadow-2xl transform hover:shadow-3xl transition-shadow duration-500">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider mb-4">WHY CHOOSE US</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">
                Why ARS Financial Enterprises is India's Preferred Compliance Partner
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A consistent workflow from discovery to filing to post-submission visibility—so you always know what's happening and what's next. We deliver online GST registration, ITR filing online, tax return filing India, and financial compliance services with precision.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 w-full lg:w-auto">
              <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H9l-2 2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p className="text-base font-bold text-primary">Discover</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">Requirements mapped, checklist shared, timelines confirmed.</p>
              </div>

              <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:border-accent hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    </svg>
                  </span>
                  <p className="text-base font-bold text-accent">Execute</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">Specialist pod completes filings with review checkpoints.</p>
              </div>

              <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h16" />
                    </svg>
                  </span>
                  <p className="text-base font-bold text-primary">Report</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">Status updates, confirmations, and next-step guidance.</p>
              </div>
            </div>
          </div>
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
