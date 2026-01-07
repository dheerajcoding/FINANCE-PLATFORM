import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
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
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              ARS <span className="text-accent">Financial</span> Enterprises
            </h1>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70 hidden sm:block">
              Min Fees · High Quality · Quick Service
            </p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-lg"
            >
              Contact
            </button>
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
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-primary transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-primary transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
