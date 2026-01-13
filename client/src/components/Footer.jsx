import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from './images/image3.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const Icon = ({ children }) => (
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 border border-white/15 text-white/90 flex-none">
      {children}
    </span>
  );

  return (
    <footer
      className="text-white relative"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,58,138,0.85)), url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom py-16 px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="block">
              <h3 className="text-2xl font-bold mb-4">
                ARS <span className="text-accent-light">Financial</span>
              </h3>
            </Link>
            <p className="text-blue-200 mb-4">
              Best GST Consultant • Tax Consultant in India
            </p>
            <p className="text-blue-100 text-sm leading-relaxed">
              ARS Financial Enterprises is a leading tax consultancy firm in India providing GST registration, income tax filing, company incorporation, and business compliance services to startups, MSMEs and corporates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-accent-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services/gst-registration-returns"
                  className="text-blue-200 hover:text-accent-light transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blue-200 hover:text-accent-light transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-200 hover:text-accent-light transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services - SEO Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-200">GST Registration India</li>
              <li className="text-blue-200">GST Filing Services</li>
              <li className="text-blue-200">Income Tax Return Filing</li>
              <li className="text-blue-200">Company Registration India</li>
              <li className="text-blue-200">MSME Registration</li>
              <li className="text-blue-200">Trademark Registration India</li>
              <li className="text-blue-200">TDS Filing Services</li>
              <li className="text-blue-200">ROC Compliance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <span className="mr-3 mt-0.5">
                  <Icon>
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 5.5A3.5 3.5 0 015.5 2h1.2c.8 0 1.5.5 1.8 1.2l1 2.5c.3.7.1 1.6-.5 2.1l-1.1.9a14.8 14.8 0 007.2 7.2l.9-1.1c.5-.6 1.4-.8 2.1-.5l2.5 1c.7.3 1.2 1 1.2 1.8v1.2A3.5 3.5 0 0118.5 22C9.4 22 2 14.6 2 5.5z" />
                    </svg>
                  </Icon>
                </span>
                <div>
                  <div>+91 9818774800</div>
                  <div>+91 9599402692</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-0.5">
                  <Icon>
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 8l-10 7L2 8" />
                    </svg>
                  </Icon>
                </span>
                <div className="text-sm">
                  <div>anil.choudhary6@yahoo.co.in</div>
                  <div>canil8931@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-0.5">
                  <Icon>
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    </svg>
                  </Icon>
                </span>
                <span className="mt-1">Mon - Sat: 9 AM - 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Location SEO Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-accent-light mb-3">Serving Clients Across India</h4>
            <p className="text-blue-200 text-sm">
              Delhi • Mumbai • Bangalore • Hyderabad • Pune • Chennai • Kolkata • Ahmedabad • Jaipur • Lucknow • and all of India
            </p>
            <p className="text-blue-300 text-xs mt-2">
              Professional GST Registration, Income Tax Filing, Company Registration & Business Compliance Services
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-blue-200">
            © {currentYear} ARS Financial Enterprises. All rights reserved.
          </p>
          <p className="text-blue-300 text-sm mt-2">
            Best GST, Tax & Company Registration Services in India | CA Firm | Tax Consultant | Startup Compliance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
