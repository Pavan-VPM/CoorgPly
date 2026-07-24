import React from 'react';
import { Link } from 'react-router-dom';
import { plywoodProducts } from '../data/plywoodProducts';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-surface-container-lowest">
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Typographic Content */}
            <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
              <div className="overflow-hidden mb-2">
                <span className="font-label-lg text-secondary tracking-[0.4em] uppercase block">Est. in the Hills</span>
              </div>
              <h1 className="font-headline-display text-5xl sm:text-7xl lg:text-[80px] leading-[0.95] text-primary mb-8 tracking-tighter">
                Nature's <span className="italic font-normal serif">Resilience,</span> <br />
                Crafted.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed border-l-2 border-outline-variant pl-8">
                Premium calibrated plywood engineered for lasting architectural integrity. Sourced responsibly from the heart of Coorg's misty landscapes.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <Link
                  className="bg-primary text-on-primary px-10 py-5 rounded-sm font-label-lg text-label-lg uppercase tracking-[0.15em] hover:bg-primary-container transition-all shadow-2xl flex items-center gap-3 group"
                  to="/products"
                >
                  Explore Collection
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </Link>
                <Link
                  className="group flex items-center gap-4 font-label-lg text-label-lg uppercase tracking-widest text-secondary hover:text-primary transition-colors"
                  to="/story"
                >
                  <span className="w-12 h-[1px] bg-secondary group-hover:w-16 group-hover:bg-primary transition-all"></span>
                  Our Heritage
                </Link>
              </div>
            </div>

            {/* Asymmetrical Image Integration */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <div className="relative z-20 hero-img-mask overflow-hidden shadow-[30px_30px_0px_0px_rgba(27,51,42,0.05)] aspect-[4/5] lg:aspect-auto lg:h-[700px]">
                <img
                  alt="Premium Coorg Plywood Craftsmanship"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s] ease-out"
                  src="/hero_plywood.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container/30 -z-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 font-headline-display text-7xl md:text-[120px] text-surface-container-highest/50 select-none -z-10 opacity-40">
                PLY
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
              <div
                key={`${product.id}-${idx}`}
                className="group bg-surface-container-lowest p-1 rounded-sm shadow-sm border border-outline-variant/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col flex-shrink-0"
                style={{ width: '320px' }}
              >
                <div className="relative overflow-hidden" style={{ height: '280px' }}>
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={product.name}
                    src={product.image}
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 text-on-primary px-3 py-1 rounded-full font-label-md z-10 text-xs uppercase tracking-wider">
                    {product.grade} GRADE
                  </div>
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap justify-center gap-2 px-4">
                      {product.features.slice(0, 2).map((f, i) => (
                        <span
                          key={i}
                          className="bg-surface/90 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        >
                          {f.split(' ').slice(0, 3).join(' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 py-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="font-headline-md text-primary mb-1 text-xl">{product.name}</h3>
                    <p className="font-label-sm text-secondary uppercase tracking-wider text-xs mb-3">{product.series} Series · {product.thickness}</p>
                    <p className="font-body-md text-on-surface-variant mb-4 line-clamp-2 text-sm">
                      {product.summary}
                    </p>
                    <p className="font-body-lg text-primary font-bold text-lg mb-6">{product.priceRange} <span className="font-body-sm text-on-surface-variant text-xs font-normal">per sq ft</span></p>
                  </div>
                  <Link
                    className="inline-flex items-center gap-2 text-primary font-label-lg uppercase tracking-wider group/link border-b-2 border-transparent hover:border-primary transition-all text-sm"
                    to={`/products/${product.id}`}
                  >
                    Specifications{' '}
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">
                      trending_flat
                    </span>
                  </Link>
                </div>
              </div>
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
            <div className="relative">
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

      {/* Get In Touch Banner Section */}
      <section className="py-section-gap bg-surface" id="contact">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-surface-container-lowest shadow-2xl rounded-sm overflow-hidden border border-outline-variant/10">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-primary p-6 sm:p-12 lg:p-16 text-on-primary flex flex-col justify-between">
                <div>
                  <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-6">Let's Build Together</h2>
                  <p className="font-body-md opacity-80 mb-12">
                    Have a specific requirement or need a custom quote? Our technical experts are here to assist you.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary-fixed-dim mt-1">mail</span>
                      <div>
                        <p className="font-label-lg uppercase tracking-widest text-primary-fixed-dim">Email Us</p>
                        <p className="font-body-md">coorgplyindustries@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary-fixed-dim mt-1">call</span>
                      <div>
                        <p className="font-label-lg uppercase tracking-widest text-primary-fixed-dim">Call Us</p>
                        <p className="font-body-md">
                          +91 9353927123
                          <br />
                          +91 9448057309
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary-fixed-dim mt-1">location_on</span>
                      <div>
                        <p className="font-label-lg uppercase tracking-widest text-primary-fixed-dim">Visit Us</p>
                        <p className="font-body-md">
                          Madikeri - Virajpet Rd, Virajpet,
                          <br />
                          Kadanur, Karnataka 571218
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-12 border-t border-white/10 mt-12 lg:mt-0">
                  <p className="font-label-md text-on-primary/60 mb-2">OPERATING HOURS</p>
                  <p className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="lg:col-span-3 p-6 sm:p-12 lg:p-16">
                <h2 className="font-headline-md text-headline-md text-primary mb-8">Send an Inquiry</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! Your inquiry has been sent successfully.");
                    e.target.reset();
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                >
                  <div className="col-span-1">
                    <label className="font-label-md text-on-surface-variant uppercase tracking-wider mb-2 block">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary outline-none py-3 transition-all"
                      type="text"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="font-label-md text-on-surface-variant uppercase tracking-wider mb-2 block">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary outline-none py-3 transition-all"
                      type="email"
                      required
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                    <label className="font-label-md text-on-surface-variant uppercase tracking-wider mb-2 block">
                      Your Message
                    </label>
                    <textarea
                      className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary outline-none py-3 transition-all resize-none"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="col-span-1 sm:col-span-2 pt-4">
                    <button
                      className="bg-primary text-on-primary px-12 py-4 rounded-sm font-label-lg uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg w-full sm:w-auto"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
