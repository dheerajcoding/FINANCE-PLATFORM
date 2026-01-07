import React, { useState } from 'react';
import axios from 'axios';
import contactBg from './images/image20.avif';
import contactDesk from './images/image5.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContactTime: '',
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const services = [
    'GST Registration / GST Returns',
    'Income Tax Return (ITR)',
    'Accounting Services',
    'Firm Registration / Shop Act Registration',
    'Digital Signature Certificate (DSC)',
    'Import Export Code (IEC)',
    'Logo / Trademark / Copyright Registration',
    'ESIC / PF Registration & Consultancy',
    'Internal Auditing',
    'Loan Facilities & Other Professional Services',
    'Other',
  ];

  const contactHighlights = [
    { label: 'Relationship Phones', value: '+91 9818774800 / +91 9599402692', hint: 'WhatsApp ready · Priority routing' },
    { label: 'Executive Email', value: 'anil.choudhary6@yahoo.co.in', hint: 'Direct responses under 12 hrs' },
    { label: 'Desk Hours', value: 'Mon - Sat · 9 AM - 8 PM', hint: 'After-hours monitoring for urgent filings' },
  ];

  const conciergeStats = [
    { value: '15+', label: 'Years advisory depth' },
    { value: '500+', label: 'Regulatory filings yearly' },
    { value: '<24h', label: 'Guaranteed response SLA' },
  ];

  const engagementPillars = [
    {
      title: 'Discovery Call',
      description: 'Rapid requirement mapping with compliance heat-map and documentation checklist.',
    },
    {
      title: 'Execution Pod',
      description: 'Specialist pod assigned to track filings, escalations, and banker discussions.',
    },
    {
      title: 'Visibility',
      description: 'Weekly progress pulse covering submissions, pending artefacts, and risk outlook.',
    },
    {
      title: 'Accountability',
      description: 'Single concierge desk orchestrating CA, CS, and legal inputs on your behalf.',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      showAlert('error', 'Please enter your full name');
      return false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      showAlert('error', 'Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      showAlert('error', 'Please enter a valid phone number');
      return false;
    }
    if (!formData.service) {
      showAlert('error', 'Please select a service');
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      showAlert('error', 'Please enter a message (minimum 10 characters)');
      return false;
    }
    return true;
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.data.success) {
        showAlert('success', 'Thank you! We\'ve received your request and will contact you soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferredContactTime: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error.response?.data?.message || 'Something went wrong. Please try again later.';
      showAlert('error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img src={contactBg} alt="Contact background" className="w-full h-full object-cover scale-105 brightness-[0.35]" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-primary/80" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -top-24 -right-20 w-96 h-96 bg-accent/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-12 w-80 h-80 bg-primary/30 blur-3xl rounded-full" />
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-accent/90 mb-3 font-medium">WORK WITH US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Tell us what success looks like for you</h2>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            A specialist consultant from our concierge desk will respond with a tailored compliance and growth blueprint within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 lg:items-start">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl h-full">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <p className="text-xs uppercase tracking-wider text-primary/60 font-semibold">Inquiry Blueprint</p>
                <span className="px-3 py-1 rounded-full bg-green-50 text-xs font-medium text-green-700 border border-green-200">Avg. reply &lt; 12 hrs</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Let's orchestrate your filings</h3>
            </div>
            {alert.show && (
              <div
                role={alert.type === 'success' ? 'status' : 'alert'}
                className={`mb-6 p-4 rounded-2xl ${
                  alert.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{alert.type === 'success' ? '✓' : '✕'}</span>
                  <span className="font-semibold">{alert.message}</span>
                </div>
              </div>
            )}

            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input border-slate-300"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input border-slate-300"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input border-slate-300"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                  />
                  <p className="mt-2 text-xs text-slate-500">Tip: Enter your WhatsApp number if you prefer WhatsApp updates.</p>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input border-slate-300 bg-white"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredContactTime" className="block text-sm font-medium text-slate-700 mb-2">
                  Preferred Contact Time (Optional)
                </label>
                <select
                  id="preferredContactTime"
                  name="preferredContactTime"
                  value={formData.preferredContactTime}
                  onChange={handleChange}
                  className="form-input border-slate-300 bg-white"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="form-textarea border-slate-300"
                  placeholder="Tell us about your requirement..."
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-7 bg-accent hover:bg-accent/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-base shadow-lg hover:shadow-xl ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Inquiry'
              )}
            </button>

            <p className="mt-5 text-xs text-slate-500 text-center leading-relaxed">
              By submitting, you authorize ARS Financial Consultancy to connect over phone, email, or WhatsApp regarding your request.
            </p>
          </form>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-10 h-full flex flex-col gap-6 shadow-2xl">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary/60 font-semibold mb-2">Client Concierge</p>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Dedicated Relationship Desk</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Expect a curated action plan, compliance checklist, and scheduling link from your assigned concierge moments after we review your inquiry.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {conciergeStats.map((stat) => (
                  <div key={stat.label} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-5 border border-primary/20 text-center">
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-wide text-primary/70 font-medium leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img src={contactDesk} alt="Concierge desk" className="w-full h-52 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-xs uppercase tracking-wider text-white/80 font-medium mb-1">White-glove onboarding</p>
                  <p className="text-xl font-bold">ARS Relationship Suite</p>
                </div>
              </div>

              <div className="space-y-4">
                {contactHighlights.map((item) => (
                  <div key={item.label} className="bg-gradient-to-r from-slate-50 to-primary/5 border border-slate-200 rounded-xl p-5">
                    <p className="text-xs uppercase tracking-wider text-primary/60 font-medium mb-1">{item.label}</p>
                    <p className="text-lg text-slate-900 font-bold mb-1">{item.value}</p>
                    {item.hint && <p className="text-sm text-slate-500">{item.hint}</p>}
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {engagementPillars.map((pillar) => (
                  <div key={pillar.title} className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-4">
                    <p className="text-sm font-bold text-primary mb-2">{pillar.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
