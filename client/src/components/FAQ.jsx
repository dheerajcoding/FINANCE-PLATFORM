import React, { useState } from 'react';

const FAQ = ({
  faqs = [],
  title = 'Frequently Asked Questions',
  subtitle = 'Quick answers to what clients ask us most',
  className = '',
}) => {
  const [open, setOpen] = useState(0);
  if (!faqs.length) return null;

  return (
    <section className={`section-padding bg-white ${className}`} aria-labelledby="faq-heading">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subtitle inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold tracking-wider">
            FAQ
          </p>
          <h2 id="faq-heading" className="section-heading mt-4">
            {title}
          </h2>
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto mt-3">{subtitle}</p>}
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 text-left px-6 py-5 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{item.q}</span>
                  <svg
                    className={`w-5 h-5 flex-none text-accent mt-0.5 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 -mt-1 text-slate-600 leading-relaxed">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
