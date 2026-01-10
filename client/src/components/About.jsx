import React from 'react';
import aboutMain from './images/image12.jpg';
import aboutSecondary from './images/image14.jpg';
import aboutDetail from './images/image18.webp';
import imagemain from './images/imagemain.jpg';
import imagemain2 from './images/imagemain2.jpg';

const About = () => {
  const pillars = [
    'Dedicated relationship manager for every client',
    'Digitized workflow trackers and dashboards',
    'Research-backed advisory notes before every filing',
    'War-room style audit support with data rooms',
  ];

  return (
    <section id="about" className="relative section-padding bg-white">
      <div className="absolute inset-0 bg-slate-50" aria-hidden="true" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <p className="section-subtitle">WHO WE ARE</p>
          <h2 className="section-heading">
            Boutique financial partners with enterprise discipline
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ARS Financial Enterprises blends a decade of compliance expertise with design-led client experiences built for modern founders and finance leaders.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/70 mb-3">Founder's Desk</p>
              <h3 className="text-3xl font-bold text-primary mb-4">
                "Every signature, filing, and audit deserves the precision of a boardroom presentation."
              </h3>
              <p className="text-gray-600">
                — <span className="font-semibold text-primary">Anil Kumar Choudhary</span>, Proprietor
              </p>
            </div>

            <div className="grid gap-4">
              {pillars.map((pillar) => (
                <div key={pillar} className="gradient-border rounded-2xl p-5 bg-white shadow-sm flex items-start gap-4">
                  <span className="text-accent text-2xl">◆</span>
                  <p className="text-gray-700 leading-relaxed">{pillar}</p>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent mb-2">Mission 2026</p>
              <p className="text-gray-700">
                To onboard 1,000+ MSMEs onto intelligent compliance stacks, reduce filing anxiety, and unlock confident business growth across India.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <img src={aboutMain} alt="ARS team collaborating" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent" />
            </div>
            <div className="glass-card p-5 absolute -bottom-10 -left-10 w-48 hidden md:block">
              <img src={aboutSecondary} alt="Client discussion" className="w-full h-36 object-cover rounded-2xl" />
              <p className="mt-3 text-sm font-semibold text-primary">Client Strategy Pods</p>
              <p className="text-xs text-gray-600">Weekly sprints for proactive compliance</p>
            </div>
            <div className="glass-card absolute -top-10 -right-4 w-48 hidden lg:block">
              <img src={aboutDetail} alt="Financial analytics" className="w-full h-40 object-cover rounded-2xl" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-primary/60">Insights Hub</p>
                <p className="text-sm text-gray-700">Live analytics, regulatory alerts, and curated playbooks.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Owners/CEOs Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <p className="section-subtitle">LEADERSHIP</p>
            <h2 className="section-heading">Meet Our Founders & CEOs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Driving excellence through visionary leadership and unwavering commitment to client success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Anil Choudhary */}
            <div className="group relative">
              <div className="glass-card overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-primary/10">
                <div className="relative h-[450px] overflow-hidden">
                  <img 
                    src={imagemain} 
                    alt="Anil Choudhary - Owner & CEO" 
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-4 py-1.5 bg-accent/90 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                      Co-founder & CEO
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-b from-white to-slate-50">
                  <h3 className="text-3xl font-bold text-primary mb-3 tracking-tight">Anil Choudhary</h3>
                  <div className="h-1 w-20 bg-accent mb-4 mx-auto"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Visionary leader with extensive expertise in financial compliance and strategic business advisory. 
                    Dedicated to delivering excellence and innovation in every client engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Archana Choudhary */}
            <div className="group relative">
              <div className="glass-card overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-primary/10">
                <div className="relative h-[450px] overflow-hidden">
                  <img 
                    src={imagemain2} 
                    alt="Archana Choudhary - Owner & CEO" 
                    className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-4 py-1.5 bg-accent/90 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                      Founder & CEO
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-b from-white to-slate-50">
                  <h3 className="text-3xl font-bold text-primary mb-3 tracking-tight">Archana Choudhary</h3>
                  <div className="h-1 w-20 bg-accent mb-4 mx-auto"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic partner driving operational excellence and client success. 
                    Passionate about bringing innovation and modern solutions to traditional financial services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Address Section */}
        <div className="mt-24">
          <div className="glass-card p-10 rounded-3xl max-w-4xl mx-auto shadow-xl border-2 border-primary/10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 text-white text-3xl mb-4 shadow-lg">
                📍
              </div>
              <p className="section-subtitle mb-2">OUR OFFICE</p>
              <h3 className="text-3xl font-bold text-primary mb-3">Visit Us</h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                We're conveniently located in South Delhi and welcome you to visit our office
              </p>
            
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-primary/10">
                <p className="text-xl font-semibold text-primary mb-2">Building 261, F-Block</p>
                <p className="text-lg text-gray-700">Aya Nagar, Arjangarh</p>
                <p className="text-lg text-gray-700">South Delhi - 110047</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
