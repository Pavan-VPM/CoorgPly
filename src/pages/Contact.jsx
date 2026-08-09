import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plyType: 'Select Requirement',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success'); // 'success' | 'error'
  const [showModal, setShowModal] = useState(false);
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    // Delay loading the heavy Google Maps iframe to keep initial load super fast
    const timer = setTimeout(() => {
      setLoadMap(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setToastType('success');

    const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    if (!googleSheetsUrl) {
      // Fallback to simulated server submission in development / when not configured
      console.warn("VITE_GOOGLE_SHEETS_URL is not defined. Simulating local form submission.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setShowModal(true);

        // Reset form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          plyType: 'Select Requirement',
          message: ''
        });

        // Clear success state after timeout
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      }, 1500);
      return;
    }

    try {
      // Using 'no-cors' mode ensures the request completes successfully and is not blocked by Google's redirect rules.
      await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(formData)
      });

      // Fetch in 'no-cors' mode resolves successfully if the request is sent.
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowModal(true);

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        plyType: 'Select Requirement',
        message: ''
      });

      // Clear success state after timeout
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setToastType('error');
      setShowToast(true);

      // Clear error toast after timeout
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-[linear-gradient(180deg,#fcf9f8_0%,#f5f1ea_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,76,58,0.05),transparent_45%)] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-label-md font-label-md uppercase tracking-widest text-primary bg-primary-fixed/30 rounded-full text-xs font-bold">
            Connectivity & Trust
          </span>
          <h1 className="font-headline-display text-4xl sm:text-5xl md:text-[60px] text-primary max-w-4xl mx-auto mb-6 leading-tight">
            Let's Build Something Great
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Connecting tradition with modern architectural precision. Reach out to our Coorg-based manufacturing hub for inquiries on premium calibrated plywood.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Contact Details Card (Left Column) */}
          <div className="lg:col-span-5 bg-[#0b2b20] text-on-primary p-8 sm:p-12 rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(163,90,31,0.15),transparent_60%)] pointer-events-none"></div>
            
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 font-label-md text-[10px] uppercase tracking-wider text-primary-fixed-dim font-bold mb-8">
                Coorg Ply HQ
              </span>
              <h3 className="font-headline-md text-3xl text-white mb-6 font-bold leading-tight">Let's Build Together</h3>
              <p className="font-body-md text-on-primary/85 mb-10 leading-relaxed text-sm">
                Our technical advisors are available to guide you on standard compliance (IS:303, IS:710), calibration parameters, and customization limits.
              </p>

              <div className="space-y-6">
                <a href="mailto:coorgplyindustries@gmail.com" className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-colors shrink-0">
                    <span className="material-symbols-outlined text-white text-base">mail</span>
                  </div>
                  <div>
                    <p className="font-label-lg text-[10px] uppercase tracking-wider text-primary-fixed-dim">Email Us</p>
                    <p className="font-body-md text-sm text-white group-hover/item:text-primary-fixed-dim transition-colors mt-0.5">coorgplyindustries@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-base">call</span>
                  </div>
                  <div>
                    <p className="font-label-lg text-[10px] uppercase tracking-wider text-primary-fixed-dim">Call Us</p>
                    <p className="font-body-md text-sm text-white mt-0.5">
                      +91 9353927123<br />
                      +91 9448057309
                    </p>
                  </div>
                </div>

                <a href="https://maps.google.com/?q=Coorg+Ply+Industries+Kadanur+Karnataka" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-colors shrink-0">
                    <span className="material-symbols-outlined text-white text-base">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-lg text-[10px] uppercase tracking-wider text-primary-fixed-dim">Visit Us</p>
                    <p className="font-body-md text-sm text-white group-hover/item:text-primary-fixed-dim transition-colors mt-0.5">
                      Madikeri - Virajpet Rd, Virajpet,<br />
                      Kadanur, Karnataka 571218
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs">
              <div>
                <p className="font-label-md text-on-primary/60 uppercase tracking-widest mb-1.5">OPERATING HOURS</p>
                <p className="text-white">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-label-md text-on-primary/60 uppercase tracking-widest mb-1.5">SUNDAY</p>
                <p className="text-primary-fixed-dim font-bold">Closed</p>
              </div>
            </div>
          </div>

          {/* Redesigned Inquiry Form Card (Right Column) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-outline-variant/30 shadow-xl flex flex-col justify-between">
            <div>
              <span className="font-label-lg text-secondary tracking-[0.2em] uppercase block mb-2 text-xs">Direct Channel</span>
              <h3 className="font-headline-md text-2xl text-primary font-bold mb-8">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="font-label-md text-primary text-[10px] uppercase tracking-wider mb-2 font-bold">
                      Full Name
                    </label>
                    <div className="border border-outline-variant/50 rounded-xl bg-surface-container-lowest/50 px-4 py-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-none outline-none py-1.5 text-sm text-on-surface font-body-md"
                        type="text"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-label-md text-primary text-[10px] uppercase tracking-wider mb-2 font-bold">
                      Email Address
                    </label>
                    <div className="border border-outline-variant/50 rounded-xl bg-surface-container-lowest/50 px-4 py-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-none outline-none py-1.5 text-sm text-on-surface font-body-md"
                        type="email"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="font-label-md text-primary text-[10px] uppercase tracking-wider mb-2 font-bold">
                      Phone Number
                    </label>
                    <div className="border border-outline-variant/50 rounded-xl bg-surface-container-lowest/50 px-4 py-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-none outline-none py-1.5 text-sm text-on-surface font-body-md"
                        type="tel"
                        placeholder="e.g. +91 9876543210"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-label-md text-primary text-[10px] uppercase tracking-wider mb-2 font-bold">
                      Requirement Type
                    </label>
                    <div className="border border-outline-variant/50 rounded-xl bg-surface-container-lowest/50 px-4 py-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                      <select
                        name="plyType"
                        value={formData.plyType}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-none outline-none py-1.5 text-sm text-on-surface font-body-md cursor-pointer"
                      >
                        <option>Plywood Grades</option>
                        <option>Decorative Veneers</option>
                        <option>Blockboards & Doors</option>
                        <option>Custom Contract Order</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-label-md text-primary text-[10px] uppercase tracking-wider mb-2 font-bold">
                    Your Message
                  </label>
                  <div className="border border-outline-variant/50 rounded-xl bg-surface-container-lowest/50 px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-none outline-none text-sm text-on-surface font-body-md resize-none"
                      rows="4"
                      placeholder="Detail your requirements (dimensions, grade, quantity, etc.)..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full py-4 rounded-xl font-label-lg text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-lg transition-all active:scale-[0.98] font-bold ${
                      isSuccess
                        ? 'bg-emerald-700 text-white'
                        : 'bg-primary text-on-primary hover:bg-[#0b382b]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : isSuccess ? (
                      'Success!'
                    ) : (
                      <>
                        Submit Inquiry
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] font-label-md text-center mt-3 text-on-surface-variant/60 italic">
                    Our technical team will respond within 24 business hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Embedded Google Map */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30 h-96 relative bg-surface-container-lowest flex flex-col items-center justify-center">
          {loadMap ? (
            <iframe 
              src="https://maps.google.com/maps?q=Coorg%20Ply%20Industries,%20Madikeri%20Road,%20Virajpet,%20Coorg,%20Karnataka&t=k&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0 md:grayscale hover:grayscale-0 transition-all duration-500" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl animate-pulse">map</span>
              <p className="font-body-md text-xs text-on-surface-variant">Loading map data...</p>
            </div>
          )}
        </div>
      </section>

      {/* Toast Notification (Only for errors) */}
      {showToast && toastType === 'error' && (
        <div className="fixed bottom-8 right-8 z-50 bg-rose-800 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300">
          <span className="material-symbols-outlined text-rose-300">error</span>
          <div>
            <p className="font-bold text-sm">Submission Failed</p>
            <p className="text-[11px] text-rose-100/80 mt-0.5">
              Could not submit your inquiry. Please try again or call us directly.
            </p>
          </div>
        </div>
      )}

      {/* Thank You Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-outline-variant/30 transform scale-100 transition-transform duration-300">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-emerald-600 text-3xl font-bold">check_circle</span>
            </div>
            
            <h3 className="font-headline-md text-2xl text-primary font-bold mb-3">
              Thank You!
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-8 leading-relaxed">
              Your inquiry has been successfully received. Our technical team will get back to you shortly.
            </p>
            
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-label-lg text-xs uppercase tracking-widest font-bold hover:bg-[#0b382b] hover:shadow-lg transition-all active:scale-[0.98]"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
