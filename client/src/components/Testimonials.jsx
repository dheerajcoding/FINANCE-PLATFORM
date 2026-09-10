import React from 'react';
import testimonials from '../data/testimonials';

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < count ? 'opacity-100' : 'opacity-25'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.96c.3.922-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.838-.196-1.539-1.118l1.286-3.96a1 1 0 00-.363-1.118L2.343 9.087c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.951-.69l1.286-3.96z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => (
  <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50" aria-labelledby="testimonials-heading">
    <div className="container-custom">
      <div className="text-center mb-14">
        <p className="section-subtitle inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold tracking-wider">
          CLIENT STORIES
        </p>
        <h2 id="testimonials-heading" className="section-heading mt-4">
          Trusted by Founders, SMEs & Professionals
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Real outcomes from businesses across Delhi NCR and India who rely on ARS Financial Enterprises for GST, tax and compliance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex flex-col gap-4 hover:shadow-xl transition-shadow"
          >
            <Stars count={t.rating} />
            <blockquote className="text-slate-700 leading-relaxed flex-grow">“{t.text}”</blockquote>
            <figcaption className="border-t border-slate-100 pt-4">
              <p className="font-bold text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-500">
                {t.role} · {t.location}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
