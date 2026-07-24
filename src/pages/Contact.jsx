import React, { useState } from 'react';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowToast(true);

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        plyType: 'Select Requirement',
        message: ''
      });

      // Clear success state and toast after timeout
      setTimeout(() => {
        setIsSuccess(false);
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-10 -z-10"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-block px-4 py-1 mb-6 text-label-md font-label-md uppercase tracking-widest text-primary bg-primary-fixed/30 rounded-full">
            Connectivity & Trust
          </span>
          <h1 className="font-headline-display text-4xl sm:text-5xl md:text-headline-display text-primary max-w-4xl mx-auto mb-6">
            Let's Build Something Great
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Connecting tradition with modern architectural precision. Reach out to our Coorg-based manufacturing hub for inquiries on premium calibrated plywood.
          </p>
        </div>
      </section>

      {/* Main Content Section: Bento Layout */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Contact Information Column */}
          <div className="lg:col-span-5 flex flex-col gap-gutter">
            <div className="p-6 sm:p-10 bg-white border border-outline-variant/10 shadow-sm rounded-lg flex flex-col gap-8 flex-grow">
              <h2 className="font-headline-md text-2xl md:text-headline-md text-primary">Regional Headquarters</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-on-primary-container rounded-lg shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Madikeri - Virajpet Rd, Virajpet,
                    <br />
                    Kadanur, Karnataka 571218, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-on-primary-container rounded-lg shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-1">Direct Email</p>
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                    href="mailto:coorgplyindustries@gmail.com"
                  >
                    coorgplyindustries@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-on-primary-container rounded-lg shrink-0">
                  <span className="material-symbols-outlined">phone_iphone</span>
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-1">Call Assistance</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-1">+91 9353927123</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">+91 9448057309</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-8 bg-primary text-on-primary rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  schedule
                </span>
                <p className="font-label-lg text-label-lg uppercase">Working Hours</p>
              </div>
              <div className="flex justify-between border-b border-on-primary/10 py-3">
                <span className="opacity-70">Mon — Sat</span>
                <span>09:00 AM — 07:00 PM</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="opacity-70">Sunday</span>
                <span className="font-bold">Closed</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-outline-variant/10 shadow-sm rounded-lg p-6 sm:p-10 h-full">
              <h2 className="font-headline-md text-2xl md:text-headline-md text-primary mb-8">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-label-md font-label-md text-primary uppercase mb-2">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-background border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all px-0 py-3 font-body-md text-body-md placeholder:text-outline-variant"
                      placeholder="Your Name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-label-md font-label-md text-primary uppercase mb-2">Email Address</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-background border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all px-0 py-3 font-body-md text-body-md placeholder:text-outline-variant"
                      placeholder="example@email.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-label-md font-label-md text-primary uppercase mb-2">Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-background border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all px-0 py-3 font-body-md text-body-md placeholder:text-outline-variant"
                      placeholder="+91 00000 00000"
                      type="tel"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-label-md font-label-md text-primary uppercase mb-2">Plywood Type</label>
                    <select
                      name="plyType"
                      value={formData.plyType}
                      onChange={handleInputChange}
                      className="w-full bg-background border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all px-0 py-3 font-body-md text-body-md"
                    >
                      <option>Select Requirement</option>
                      <option>Marine Grade (BWP)</option>
                      <option>Commercial (MR)</option>
                      <option>Calibrated Core</option>
                      <option>Architectural Grade</option>
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-label-md font-label-md text-primary uppercase mb-2">Your Requirements</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-background border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-all px-0 py-3 font-body-md text-body-md placeholder:text-outline-variant resize-none"
                    placeholder="Describe your project, thickness requirements, and quantity..."
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full py-5 font-label-lg text-label-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-xl transition-all active:scale-[0.98] ${
                      isSuccess
                        ? 'bg-emerald-700 text-white'
                        : 'bg-primary text-on-primary'
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
                        Submit Requirement
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </>
                    )}
                  </button>
                  <p className="text-label-md font-label-md text-center mt-4 opacity-60 italic">
                    Our technical team will respond within 24 business hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section: Immersive Layout */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="relative overflow-hidden rounded-lg border border-outline-variant/10 shadow-lg">
          <div className="w-full relative bg-surface-container overflow-hidden" style={{ height: '480px' }}>
            <iframe
              src="https://maps.google.com/maps?q=Coorg+Ply,+Madikeri+Virajpet+Rd,+Kadanur,+Virajpet,+Karnataka+571218&t=k&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coorg Ply Location Map"
            ></iframe>

            {/* Information Card Overlay */}
            <div className="absolute bottom-10 right-10 z-30 bg-white p-8 shadow-2xl border-l-[6px] border-primary max-w-sm hidden md:block">
              <h3 className="font-headline-md text-xl md:text-headline-md text-primary mb-3">Our Facility</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-2">Coorg Ply</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
                Madikeri - Virajpet Rd, Virajpet,
                <br />
                Kadanur, Karnataka 571218
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Coorg+Ply,+Madikeri+-+Virajpet+Rd,+Virajpet,+Kadanur,+Karnataka+571218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-on-primary py-3.5 px-6 font-label-lg text-label-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-lg">directions</span>
                  Get Directions
                </a>
                <a
                  href="https://www.google.com/maps/search/Coorg+Ply,+Madikeri+-+Virajpet+Rd,+Virajpet,+Kadanur,+Karnataka+571218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-primary text-primary py-3.5 px-6 font-label-lg text-label-lg flex items-center justify-center gap-3 hover:bg-primary/5 transition-all text-center"
                >
                  View on Google Maps
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile version of the card */}
          <div className="md:hidden bg-white p-6 border-t border-outline-variant/10">
            <h3 className="font-headline-md text-xl md:text-headline-md text-primary mb-2">Our Facility</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
              Madikeri - Virajpet Rd, Virajpet, Kadanur, Karnataka 571218
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Coorg+Ply,+Madikeri+-+Virajpet+Rd,+Virajpet,+Kadanur,+Karnataka+571218"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-on-primary py-3 px-4 font-label-lg text-label-lg flex items-center justify-center gap-2 text-center"
              >
                <span className="material-symbols-outlined text-lg">directions</span>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-emerald-800 text-white px-6 py-4 rounded shadow-2xl flex items-center gap-3 transition-transform duration-300">
          <span className="material-symbols-outlined text-emerald-300">verified</span>
          <div>
            <p className="font-bold">Inquiry Sent Successfully</p>
            <p className="text-xs text-emerald-100">Thank you! We will get back to you shortly.</p>
          </div>
        </div>
      )}
    </>
  );
}
