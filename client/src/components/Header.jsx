import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { services, serviceCategories } from '../data/servicesData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get service title by ID
  const getServiceTitle = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    return service ? service.title : serviceId;
  };

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-xl backdrop-blur-lg border-b border-slate-100'
          : 'bg-white/90 backdrop-blur-lg border-b border-slate-100'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link to="/" className="block">
            <span className="text-2xl md:text-3xl font-bold text-primary">
              ARS <span className="text-accent">Financial</span> Enterprises
            </span>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70 hidden sm:block">
              Best GST & Tax Consultant in India
            </p>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-slate-700 hover:text-primary transition-colors font-medium"
              >
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
                  <div className="grid grid-cols-2 gap-6 p-6">
                    {serviceCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                          {category.name}
                        </h3>
                        <ul className="space-y-1">
                          {category.services.map((serviceId) => (
                            <li key={serviceId}>
                              <Link
                                to={`/services/${serviceId}`}
                                onClick={() => setIsServicesOpen(false)}
                                className="block text-sm text-slate-600 hover:text-accent hover:translate-x-1 transition-all duration-200 py-1"
                              >
                                {getServiceTitle(serviceId)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
                    <button
                      onClick={() => {
                        scrollToSection('services');
                        scrollToSection('services');
                        setIsServicesOpen(false);
                      }}
                      className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                    >
                      View All Services →
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 hover:text-primary transition-colors font-medium text-left"
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-slate-700 hover:text-primary transition-colors font-medium text-left"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileServicesOpen && (
                  <div className="mt-3 ml-4 space-y-3 pl-3 border-l-2 border-slate-200">
                    {serviceCategories.map((category) => (
                      <div key={category.name}>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                          {category.name}
                        </h4>
                        <ul className="space-y-1">
                          {category.services.map((serviceId) => (
                            <li key={serviceId}>
                              <Link
                                to={`/services/${serviceId}`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="block text-sm text-slate-600 hover:text-accent transition-colors py-0.5"
                              >
                                {getServiceTitle(serviceId)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 hover:text-primary transition-colors font-medium text-left"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
