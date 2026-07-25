import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { plywoodProducts } from '../data/plywoodProducts';

export default function Home() {
  const [activeTab, setActiveTab] = useState('plywood');

  const heroSlides = {
    plywood: {
      tag: "Est. in the Hills",
      title: (
        <>
          Nature's <span className="italic font-normal serif">Resilience,</span> <br />
          Crafted.
        </>
      ),
      description: "Premium calibrated plywood engineered for lasting architectural integrity. Sourced responsibly from the heart of Coorg's misty landscapes.",
      image: "/hero_plywood.png",
      primaryLink: "/products",
      primaryLabel: "Explore Plywood",
      secondaryLink: "/story",
      secondaryLabel: "Our Heritage"
    },
    veneers: {
      tag: "Decorative Elegance",
      title: (
        <>
          Fingerprints of <span className="italic font-normal serif">Forests,</span> <br />
          Unveiled.
        </>
      ),
      description: "Luxurious wood veneers sliced from choice timber grains. Bringing organic depth, warmth, and textured character to sophisticated architectural interiors.",
      image: "/veneer_interior.png",
      primaryLink: "/products",
      primaryLabel: "View Veneers",
      secondaryLink: "/contact",
      secondaryLabel: "Request Samples"
    },
    doors: {
      tag: "Structural Defiance",
      title: (
        <>
          Moisture <span className="italic font-normal serif">Warp-Free,</span> <br />
          Guaranteed.
        </>
      ),
      description: "Solid core flush doors built with internal bracing and block boards designed to survive severe monsoon dampness while holding perfect lines.",
      image: "/flush_door.png",
      primaryLink: "/products",
      primaryLabel: "Browse Doors",
      secondaryLink: "/contact",
      secondaryLabel: "Get in Touch"
    }
  };

  const currentSlide = heroSlides[activeTab];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-surface-container-lowest">
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Typographic Content */}
            <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
              
              {/* Tab Selector */}
              <div className="flex gap-1.5 mb-8 bg-surface-container p-1 rounded-full border border-outline-variant/20 self-start shadow-sm">
                {Object.keys(heroSlides).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-5 py-2.5 rounded-full font-label-md text-xs uppercase tracking-wider transition-all duration-300 ${
                      activeTab === key
                        ? 'bg-primary text-on-primary font-bold shadow-md'
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface/50'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              <div key={activeTab} className="animate-fade-in flex flex-col items-start">
                <div className="overflow-hidden mb-2">
                  <span className="font-label-lg text-secondary tracking-[0.4em] uppercase block">
                    {currentSlide.tag}
                  </span>
                </div>
                <h1 className="font-headline-display text-5xl sm:text-7xl lg:text-[80px] leading-[0.95] text-primary mb-8 tracking-tighter">
                  {currentSlide.title}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed border-l-2 border-outline-variant pl-8">
                  {currentSlide.description}
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <Link
                    className="bg-primary text-on-primary px-10 py-5 rounded-sm font-label-lg text-label-lg uppercase tracking-[0.15em] hover:bg-primary-container transition-all shadow-2xl flex items-center gap-3 group"
                    to={currentSlide.primaryLink}
                  >
                    {currentSlide.primaryLabel}
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">
                      arrow_right_alt
                    </span>
                  </Link>
                  <Link
                    className="group flex items-center gap-4 font-label-lg text-label-lg uppercase tracking-widest text-secondary hover:text-primary transition-colors"
                    to={currentSlide.secondaryLink}
                  >
                    <span className="w-12 h-[1px] bg-secondary group-hover:w-16 group-hover:bg-primary transition-all"></span>
                    {currentSlide.secondaryLabel}
                  </Link>
                </div>
              </div>
            </div>

            {/* Asymmetrical Image Integration */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <div key={activeTab} className="animate-fade-in relative z-20 hero-img-mask overflow-hidden shadow-[12px_12px_0px_0px_rgba(27,51,42,0.05)] md:shadow-[30px_30px_0px_0px_rgba(27,51,42,0.05)] aspect-[1.4] sm:aspect-[4/3] md:aspect-[4/5] lg:aspect-auto lg:h-[700px]">
                <img
                  alt={currentSlide.tag}
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s] ease-out"
                  src={currentSlide.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container/30 -z-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 font-headline-display text-7xl md:text-[120px] text-surface-container-highest/50 select-none -z-10 opacity-30 uppercase tracking-widest">
                {activeTab}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-section-gap bg-surface" id="story">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  alt="Coorg Ply Heritage — Wood processing in Coorg"
                  src="/heritage.png"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 text-on-primary rounded-sm shadow-xl hidden md:block max-w-xs">
                <p className="font-headline-md italic leading-tight">
                  "Coorg is not just where we work. It is where our story began."
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-8">
                <header>
                  <span className="font-label-lg text-label-lg text-secondary tracking-[0.2em] uppercase">
                    Our Heritage
                  </span>
                  <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mt-4">
                    Where Nature Meets Craftsmanship
                  </h2>
                </header>
                <div className="space-y-6 text-on-surface-variant font-body-lg text-justify">
                  <p>
                    Surrounded by forests and mist-covered hills, Coorg Ply was built on a simple belief: Strong wood
                    should reflect nature’s strength and beauty.
                  </p>
                  <p>
                    What started as a vision to bring world-class plywood manufacturing to Coorg has grown into the
                    region's first dedicated plywood and decorative veneer unit.
                  </p>
                </div>
                <div className="pt-6 grid grid-cols-2 gap-6 border-t border-outline-variant/30">
                  <div className="bg-primary/[0.03] p-5 border-l-4 border-primary rounded-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                    <h4 className="font-headline-md text-3xl text-primary font-bold">25+</h4>
                    <p className="font-label-md text-on-surface-variant uppercase tracking-wider text-xs mt-1 font-semibold">
                      Years Guarantee
                    </p>
                  </div>
                  <div className="bg-primary/[0.03] p-5 border-l-4 border-primary rounded-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                    <h4 className="font-headline-md text-3xl text-primary font-bold">ISO</h4>
                    <p className="font-label-md text-on-surface-variant uppercase tracking-wider text-xs mt-1 font-semibold">
                      9001:2015 Certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-section-gap bg-surface-container-low overflow-hidden" id="products">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-label-lg text-secondary tracking-[0.2em] uppercase">The Collection</span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mt-4">
                Our Premium Plywood Products
              </h2>
              <p className="font-body-lg text-on-surface-variant mt-4 leading-relaxed">
                Engineered for diverse applications, from high-end interior cabinetry to maritime structures.
              </p>
            </div>
            <Link
              to="/products"
              className="shrink-0 inline-flex items-center gap-2 text-primary font-label-lg uppercase tracking-wider border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all whitespace-nowrap"
            >
              View All Products
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Marquee track — full-bleed, edge-faded */}
        <div
          className="relative w-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div
            className="flex gap-6 w-max"
            style={{
              animation: 'marquee-ltr 32s linear infinite',
            }}
            onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
          >
            {/* Render twice for seamless loop */}
            {[...plywoodProducts, ...plywoodProducts].map((product, idx) => (
              <Link
                key={`${product.id}-${idx}`}
                to={`/products/${product.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex-shrink-0"
                style={{ width: '320px' }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0f4c3a_0%,#a35a1f_100%)]"></div>

                <div className="px-6 py-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-md bg-primary-fixed-dim text-primary px-3 py-1.5 font-label-md text-[10px] uppercase tracking-wider font-bold">
                        {product.grade} GRADE
                      </span>
                      <span className="text-secondary font-label-md text-[10px] uppercase tracking-wider font-bold">{product.series}</span>
                    </div>
                    <h3 className="font-headline-md text-primary mb-2 text-xl font-bold">{product.name}</h3>
                    <p className="font-label-sm text-secondary uppercase tracking-wider text-xs mb-3">{product.thickness}</p>
                    <p className="font-body-md text-on-surface-variant/80 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {product.summary}
                    </p>
                    <p className="font-body-lg text-[#2c7d59] font-bold text-lg">{product.priceRange} <span className="font-body-sm text-on-surface-variant/60 text-xs font-normal">per sq ft</span></p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}

      <section className="py-section-gap bg-primary text-on-primary overflow-hidden" id="manufacturing">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="font-label-lg text-primary-fixed-dim tracking-[0.2em] uppercase">Process Integrity</span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg mt-4 mb-8">Manufacturing Excellence</h2>
              <p className="font-body-lg text-on-primary-container leading-relaxed mb-12 opacity-80">
                Inside our manufacturing unit on Madikeri Road, every plywood board goes through carefully controlled
                processes. From seasoning and bonding to pressing and finishing, precision is maintained at every stage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-primary-fixed-dim">verified</span>
                  <div>
                    <h4 className="font-label-lg text-white mb-1">Calibrated Precision</h4>
                    <p className="text-xs text-on-primary/60">Uniform thickness guaranteed across all sheets.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-primary-fixed-dim">eco</span>
                  <div>
                    <h4 className="font-label-lg text-white mb-1">Grade A Strength</h4>
                    <p className="text-xs text-on-primary/60">Consistently superior bonding and core quality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-primary-fixed-dim">factory</span>
                  <div>
                    <h4 className="font-label-lg text-white mb-1">ISO Certified</h4>
                    <p className="text-xs text-on-primary/60">Rigorous quality management standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-primary-fixed-dim">location_on</span>
                  <div>
                    <h4 className="font-label-lg text-white mb-1">Made in Coorg</h4>
                    <p className="text-xs text-on-primary/60">Sourced and manufactured locally with pride.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-10 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    className="rounded-sm shadow-lg w-full aspect-square object-cover"
                    alt="Finished Coorg Ply board"
                    src="/board_texture.png"
                  />
                  <img
                    className="rounded-sm shadow-lg w-full aspect-[4/5] object-cover"
                    alt="Stack of plywood sheets inspection"
                    src="/plywood_inspection.png"
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <img
                    className="rounded-sm shadow-lg w-full aspect-[4/5] object-cover"
                    alt="Coorg Ply manufacturing facility"
                    src="/manufacturing_facility.png"
                  />
                  <img
                    className="rounded-sm shadow-lg w-full aspect-square object-cover"
                    alt="Finished interior furniture installation"
                    src="/door_installation.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Redesigned Premium Contact Section */}
      <section className="py-24 bg-[linear-gradient(180deg,#fcf9f8_0%,#f5f1ea_100%)] relative overflow-hidden border-t border-outline-variant/10" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,76,58,0.05),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(163,90,31,0.05),transparent_45%)] pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-16">
            <span className="font-label-lg text-secondary tracking-[0.25em] uppercase block mb-3">Get in Touch</span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary">Connect With Coorg Ply</h2>
            <p className="font-body-md text-sm text-on-surface-variant/80 mt-4 max-w-xl mx-auto leading-relaxed">
              Reach out to our regional headquarters and state-of-the-art manufacturing plant. Let's discuss your architectural projects, volume order requirements, or custom configurations.
            </p>
          </div>

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
                
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! Your inquiry has been sent successfully.");
                    e.target.reset();
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="font-label-md text-primary text-[10px] uppercase tracking-wider mb-2 font-bold">
                        Full Name
                      </label>
                      <div className="border border-outline-variant/50 rounded-xl bg-surface-container-lowest/50 px-4 py-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                        <input
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
                        <select className="w-full bg-transparent border-none outline-none py-1.5 text-sm text-on-surface font-body-md cursor-pointer">
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
                        className="w-full bg-transparent border-none outline-none text-sm text-on-surface font-body-md resize-none"
                        rows="4"
                        placeholder="Detail your requirements (dimensions, grade, quantity, etc.)..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      className="bg-primary text-on-primary py-4 rounded-xl font-label-lg text-xs uppercase tracking-widest hover:bg-[#0b382b] hover:shadow-lg transition-all duration-300 w-full font-bold"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Embedded Google Map */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30 h-96 relative hidden md:block">
            <iframe 
              src="https://maps.google.com/maps?q=Coorg%20Ply%20Industries,%20Madikeri%20Road,%20Virajpet,%20Coorg,%20Karnataka&t=k&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
