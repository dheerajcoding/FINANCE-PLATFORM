import React from 'react';
import footerBg from './images/image3.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              ARS <span className="text-accent-light">Financial</span>
            </h3>
            <p className="text-blue-200 mb-4">
              Min Fees · High Quality · Quick Service
            </p>
            <p className="text-blue-100">
              Your trusted partner for all financial and compliance services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                  className="text-blue-200 hover:text-accent-light transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  className="text-blue-200 hover:text-accent-light transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-blue-200 hover:text-accent-light transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-blue-200 hover:text-accent-light transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <div>
                  <div>+91 9818774800</div>
                  <div>+91 9599402692</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <div className="text-sm">
                  <div>anil.choudhary6@yahoo.co.in</div>
                  <div>canil8931@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⏰</span>
                <span>Mon - Sat: 9 AM - 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-blue-200">
            © {currentYear} ARS Financial Enterprises. All rights reserved.
          </p>
          <p className="text-blue-300 text-sm mt-2">
            Designed with care for your financial success
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
