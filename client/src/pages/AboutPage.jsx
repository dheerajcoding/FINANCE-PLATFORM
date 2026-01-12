import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutMain from '../components/images/image12.jpg';
import aboutSecondary from '../components/images/image14.jpg';
import aboutDetail from '../components/images/image18.webp';
import imagemain from '../components/images/imagemain.jpg';
import imagemain2 from '../components/images/imagemain2.jpg';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    'Dedicated relationship manager for every client',
    'Digitized workflow trackers and dashboards',
    'Research-backed advisory notes before every filing',
    'War-room style audit support with data rooms',
  ];

  const achievements = [
    { number: '10+', label: 'Years of Experience' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '5000+', label: 'Cases Handled' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const timeline = [
    { year: '2014', title: 'Foundation', description: 'ARS Financial Enterprises was founded with a vision to provide accessible financial services to businesses of all sizes.' },
    { year: '2016', title: 'Expansion', description: 'Expanded service portfolio to include GST, ITR, and comprehensive compliance solutions.' },
    { year: '2018', title: 'Digital Transformation', description: 'Implemented cloud-based systems and digital workflows for enhanced client experience.' },
    { year: '2020', title: 'Growth', description: 'Crossed 500+ clients milestone and strengthened team with industry experts.' },
    { year: '2024', title: 'Innovation', description: 'Launched AI-assisted compliance tools and real-time dashboard tracking for clients.' },
    { year: '2026', title: 'Mission', description: 'Working towards onboarding 1,000+ MSMEs onto intelligent compliance stacks.' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Precision',
      description: 'Every signature, filing, and audit receives meticulous attention to detail.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building long-term relationships based on transparency and reliability.'
    },
    {
      icon: '⚡',
      title: 'Speed',
      description: 'Quick turnaround times without compromising on quality or accuracy.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Leveraging technology to deliver smarter, more efficient solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider mb-6 border border-white/30">
              WHO WE ARE
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
              Boutique Financial Partners with Enterprise Discipline
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              ARS Financial Enterprises blends a decade of compliance expertise with design-led client experiences built for modern founders and finance leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider">OUR STORY</p>
                <h2 className="section-heading mt-4">Building Trust Since 2014</h2>
              </div>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  Founded by <strong className="text-primary">Anil Kumar Choudhary</strong> and <strong className="text-primary">Archana Choudhary</strong>, ARS Financial Enterprises started with a simple mission: to make professional financial services accessible to businesses of all sizes across India.
                </p>
                <p>
                  What began as a small consultancy has grown into a full-service financial advisory firm, helping hundreds of businesses navigate the complexities of compliance, taxation, and financial management.
                </p>
                <p>
                  Our approach combines traditional expertise with modern technology, ensuring our clients receive the best of both worlds – personalized attention backed by efficient, digital-first processes.
                </p>
              </div>

              <div className="grid gap-4">
                {pillars.map((pillar) => (
                  <div key={pillar} className="gradient-border rounded-2xl p-5 bg-white shadow-sm flex items-start gap-4 hover:shadow-lg transition-shadow">
                    <span className="text-accent text-2xl">◆</span>
                    <p className="text-gray-700 leading-relaxed font-medium">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={aboutMain} alt="ARS team collaborating" className="w-full h-[600px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent" />
              </div>
              <div className="glass-card p-5 absolute -bottom-10 -left-10 w-56 hidden md:block shadow-xl">
                <img src={aboutSecondary} alt="Client discussion" className="w-full h-40 object-cover rounded-2xl" />
                <p className="mt-3 text-sm font-bold text-primary">Client Strategy Pods</p>
                <p className="text-xs text-gray-600">Weekly sprints for proactive compliance</p>
              </div>
              <div className="glass-card absolute -top-10 -right-4 w-52 hidden lg:block shadow-xl">
                <img src={aboutDetail} alt="Financial analytics" className="w-full h-44 object-cover rounded-2xl" />
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-primary/60">Insights Hub</p>
                  <p className="text-sm text-gray-700">Live analytics, regulatory alerts, and curated playbooks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 rounded-3xl shadow-xl">
              <div className="text-6xl text-accent/20 mb-4">"</div>
              <p className="text-2xl md:text-3xl font-bold text-primary leading-relaxed mb-6">
                Every signature, filing, and audit deserves the precision of a boardroom presentation.
              </p>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={imagemain} 
                  alt="Anil Kumar Choudhary"
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="text-left">
                  <p className="font-bold text-primary">Anil Kumar Choudhary</p>
                  <p className="text-sm text-gray-600">Founder & Proprietor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-subtitle inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold tracking-wider">WHAT DRIVES US</p>
            <h2 className="section-heading mt-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider">LEADERSHIP</p>
            <h2 className="section-heading mt-4">Meet Our Founders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Driving excellence through visionary leadership and unwavering commitment to client success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Anil Choudhary */}
            <div className="group">
              <div className="glass-card overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 border-2 border-primary/10">
                <div className="relative h-[450px] overflow-hidden">
                  <img 
                    src={imagemain} 
                    alt="Anil Choudhary - Owner & CEO" 
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-4 py-1.5 bg-accent/90 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                      Co-founder & Proprietor
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-b from-white to-slate-50">
                  <h3 className="text-3xl font-bold text-primary mb-3 tracking-tight">Anil Kumar Choudhary</h3>
                  <div className="h-1 w-20 bg-accent mb-4"></div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Visionary leader with extensive expertise in financial compliance, taxation, and strategic business advisory. With over a decade of experience, Anil has helped hundreds of businesses navigate complex regulatory landscapes.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    His philosophy centers on precision, integrity, and delivering personalized solutions that address each client's unique challenges. Under his leadership, ARS Financial has grown from a small consultancy to a trusted name in the industry.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a href="tel:+919818774800" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 9818774800
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Archana Choudhary */}
            <div className="group">
              <div className="glass-card overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 border-2 border-primary/10">
                <div className="relative h-[450px] overflow-hidden">
                  <img 
                    src={imagemain2} 
                    alt="Archana Choudhary - Owner & CEO" 
                    className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-4 py-1.5 bg-accent/90 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                      Founder & Director
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-b from-white to-slate-50">
                  <h3 className="text-3xl font-bold text-primary mb-3 tracking-tight">Archana Choudhary</h3>
                  <div className="h-1 w-20 bg-accent mb-4"></div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Strategic partner driving operational excellence and client success. Archana brings a unique blend of business acumen and client-centric approach to the firm.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Passionate about bringing innovation and modern solutions to traditional financial services, she oversees client relationships and ensures service delivery excellence at every touchpoint.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a href="tel:+919599402692" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 9599402692
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider">OUR JOURNEY</p>
            <h2 className="section-heading mt-4">Milestones & Growth</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary" />
              
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                      <span className="text-accent font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold text-primary mt-2 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider mb-6 border border-white/30">
              MISSION 2026
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Empowering 1,000+ MSMEs
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              To onboard 1,000+ MSMEs onto intelligent compliance stacks, reduce filing anxiety, and unlock confident business growth across India.
            </p>
            <Link 
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 text-lg"
            >
              Join Our Journey
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto shadow-xl border-2 border-primary/10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/70 text-white text-4xl mb-6 shadow-lg">
                📍
              </div>
              <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider mb-4">OUR OFFICE</p>
              <h2 className="section-heading">Visit Us</h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-8 mt-4">
                We're conveniently located in South Delhi and welcome you to visit our office for a personal consultation.
              </p>
            
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-primary/10 inline-block">
                <p className="text-2xl font-bold text-primary mb-2">Building 261, F-Block</p>
                <p className="text-lg text-gray-700">Aya Nagar, Arjangarh</p>
                <p className="text-lg text-gray-700">South Delhi - 110047</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link 
                  to="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Schedule a Visit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a 
                  href="https://maps.google.com/?q=261+F-Block+Aya+Nagar+South+Delhi+110047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  Get Directions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
