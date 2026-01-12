import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getServiceBySlug, services } from '../data/servicesData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            Go Back Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related services (same tag, excluding current)
  const relatedServices = services
    .filter(s => s.tag === service.tag && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(145deg, rgba(5,20,58,0.95), rgba(30,58,138,0.85)), url(${service.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider mb-6 border border-white/30">
              {service.tag}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a 
                href="tel:+919818774800" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider">WHAT WE OFFER</p>
            <h2 className="section-heading mt-4">Service Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {service.features?.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white text-lg font-bold mb-4 group-hover:scale-110 transition-transform">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-subtitle inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold tracking-wider">HOW IT WORKS</p>
            <h2 className="section-heading mt-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A streamlined approach designed for your convenience
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {service.process?.map((step, index) => (
                  <div key={index} className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl mb-4 transform hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider">WHY CHOOSE US</p>
              <h2 className="section-heading mt-4">Benefits of Our Service</h2>
              <p className="text-gray-600 mt-4 mb-8">
                We go above and beyond to ensure your complete satisfaction and success.
              </p>
              
              <div className="space-y-4">
                {service.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={service.background} 
                  alt={service.title} 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>
              
              {service.gallery && service.gallery.length > 0 && (
                <div className="absolute -bottom-6 -left-6 flex gap-3">
                  {service.gallery.slice(0, 2).map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`${service.title} gallery ${index + 1}`}
                      className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-xl"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you with {service.title}. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 text-lg"
              >
                Contact Us Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a 
                href="tel:+919818774800"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2 text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9818774800
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider">EXPLORE MORE</p>
              <h2 className="section-heading mt-4">Related Services</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedServices.map((relService) => (
                <Link 
                  key={relService.id}
                  to={`/services/${relService.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div 
                    className="h-48 relative"
                    style={{
                      backgroundImage: `linear-gradient(145deg, rgba(5,20,58,0.8), rgba(30,58,138,0.7)), url(${relService.background})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-lg font-bold text-center px-4">{relService.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{relService.tag}</span>
                    <p className="text-gray-600 mt-2 text-sm">{relService.shortDescription}</p>
                    <div className="mt-4 text-primary font-semibold text-sm group-hover:text-accent transition-colors">
                      Learn More →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetail;
