import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useSeo from '../lib/useSeo';

const NotFoundPage = () => {
  useSeo({
    title: 'Page Not Found | ARS Financial Enterprises',
    description: 'The page you are looking for could not be found.',
    path: '/404',
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 text-center container-custom">
        <p className="text-7xl font-bold text-primary">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mt-4 mb-3">This page could not be found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The link may be broken or the page may have moved. Explore our services or get in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">Go to Homepage</Link>
          <Link to="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
