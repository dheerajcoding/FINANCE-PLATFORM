import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        
        {/* SEO Content Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="container-custom px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold tracking-wide">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Trusted by 500+ Businesses Across India
                </span>
              </div>

              {/* Headings */}
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                  Best GST & Tax Consultant in India
                  <span className="block text-primary mt-2">ARS Financial Enterprises</span>
                </h1>
                <h2 className="text-lg md:text-xl font-medium text-slate-600 max-w-3xl mx-auto">
                  Professional GST Registration, Income Tax Filing & Business Compliance Services
                </h2>
              </div>

              {/* Content Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800">Complete Business Solutions</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    ARS Financial Enterprises is a trusted GST consultant and tax advisory firm, helping businesses with GST registration, GST return filing, income tax filing, company registration, MSME registration, trademark registration, and complete ROC compliance.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800">Pan-India Presence</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We serve startups, MSMEs, and corporates across Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow and all major cities in India with reliable, affordable, and timely services.
                  </p>
                </div>
              </div>

              {/* Service Tags */}
              <div className="flex flex-wrap justify-center gap-3">
                {['GST Registration', 'Income Tax Filing', 'Company Registration', 'MSME Registration', 'Trademark Filing', 'TDS Returns', 'ROC Compliance', 'CA Services'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200 shadow-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
