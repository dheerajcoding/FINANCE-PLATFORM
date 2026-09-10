import React from 'react';
import { Link } from 'react-router-dom';
import { SITE, waLink, telLink } from '../lib/siteMeta';
import { track } from '../lib/analytics';

/**
 * Conversion band used across service pages and the About page.
 */
const LeadCta = ({
  heading = 'Get a Free Consultation & Quote',
  subheading = 'Tell us what you need. A specialist replies within one business day with a clear scope, timeline and fixed price.',
  context = 'generic',
}) => (
  <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-10" aria-hidden="true" />
    <div className="container-custom relative z-10">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-white/90 text-lg mb-8">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            onClick={() => track('cta_click', { location: context, label: 'Get Free Quote' })}
            className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-9 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 text-lg"
          >
            Get My Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={waLink(`Hi ARS Financial Enterprises, I need help with: ${context}.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('whatsapp_click', { location: context })}
            className="bg-[#25D366] hover:brightness-95 text-white font-semibold py-4 px-9 rounded-lg transition-all inline-flex items-center justify-center gap-2 text-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.489-.955zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href={telLink(SITE.phonePrimary)}
            onClick={() => track('call_click', { location: context })}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-9 rounded-lg transition-all border border-white/30 inline-flex items-center justify-center gap-2 text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {SITE.phonePrimaryDisplay}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LeadCta;
