import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { filmFaceProduct, plywoodProducts } from '../data/plywoodProducts';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');

  const veneerSamples = [
    { name: 'Natural Teak', type: 'Golden Crown', image: 'https://i.pinimg.com/736x/49/45/48/4945484357c905a068ec587af8051854.jpg' },
    { name: 'American Walnut', type: 'Exotic Grain', image: 'https://i.pinimg.com/control1/1200x/83/29/a1/8329a1b7775eed6d00eb6de5b24d8253.jpg' },
    { name: 'Smoked Oak', type: 'Dark Flitched', image: 'https://i.pinimg.com/control1/1200x/bc/72/3a/bc723a8097728ac28667dee640020d41.jpg' },
    { name: 'Santos Rosewood', type: 'Exotic Stripe', image: 'https://i.pinimg.com/control1/736x/d0/78/d8/d078d856a929c17e5bf9f61fbcc826be.jpg' },
    { name: 'Figured Maple', type: 'Fiddleback Wave', image: 'https://i.pinimg.com/736x/58/58/bf/5858bf712a8bef9650d9cb799c487518.jpg' },
    { name: 'Ebonized Wenge', type: 'Linear Luxury', image: 'https://i.pinimg.com/control1/1200x/ff/52/a5/ff52a5de9d9d787e5199bc7c798fb8a2.jpg' },
  ];

  const filterButtons = [
    { id: 'all', label: 'All Products' },
    { id: 'plywood', label: 'Plywood Grades' },
    { id: 'veneers', label: 'Decorative Veneers' },
    { id: 'doors', label: 'Doors & Boards' },
  ];

  const showPlywood = activeFilter === 'all' || activeFilter === 'plywood';
  const showVeneers = activeFilter === 'all' || activeFilter === 'veneers';
  const showDoors = activeFilter === 'all' || activeFilter === 'doors';

  return (
    <>
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" alt="Coorg Ply - The Collection" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="font-label-lg text-primary-fixed-dim uppercase tracking-[0.3em] block mb-4">Coorg Ply</span>
          <h1 className="font-headline-display text-5xl md:text-[72px] text-white mb-5 leading-tight">The Collection</h1>
          <p className="font-body-lg text-white/80 max-w-lg leading-relaxed">
            Precision crafted panels and decorative boards — built to last, designed to impress.
          </p>
        </div>
      </section>

      <div className="sticky top-16 md:top-24 z-30 bg-surface border-b border-outline-variant/20 shadow-sm">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {filterButtons.map((btn) => {
              const active = activeFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full font-label-md text-label-md transition-all uppercase tracking-wider text-xs ${active
                    ? 'bg-primary text-on-primary font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container'
                    }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {showVeneers && (
        <section className="py-20 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-label-lg text-secondary tracking-[0.2em] uppercase block mb-4">Decorative Range</span>
                <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-6">Interior &amp; Decorative Veneers</h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-8">
                  Sliced from premium log timbers, our decorative veneers carry the fingerprint of the forest — every grain unique, every pattern unrepeatable. Applied over our calibrated core panels, they transform spaces with warmth, depth, and natural luxe.
                </p>
                <ul className="space-y-3 mb-10 text-sm text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                    <span><strong>Species Available:</strong> Teak, Wenge, Oak, Birch, Gurjan &amp; more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                    <span><strong>Thickness:</strong> 0.5mm - 4mm decorative face</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                    <span><strong>Ideal For:</strong> Wall paneling, main doors, premium office interiors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                    <span><strong>Surface Finish:</strong> Raw, semi-polished, or lacquer-ready</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-sm font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-container transition-all">
                  Request Sample Kit <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </Link>
              </div>
              <div className="relative group overflow-hidden rounded shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                <img src="/veneer_interior.webp" alt="Luxury wood veneer interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="font-label-md uppercase tracking-wider text-primary-fixed-dim text-xs block mb-1">Application</span>
                  <p className="font-headline-md text-xl">Floor-to-Ceiling Paneling</p>
                </div>
              </div>
            </div>

            {/* Seamless Auto-Rolling Veneer Showcase */}
            <div className="mt-20">
              <div className="mb-8">
                <span className="font-label-lg text-secondary tracking-[0.2em] uppercase block mb-2">Exotic Textures</span>
                <h3 className="font-headline-md text-2xl text-primary font-bold">Veneer Texture Samples Showcase</h3>
                <p className="font-body-md text-sm text-on-surface-variant/80 mt-2 max-w-xl">
                  A rolling showcase of our most popular natural wood veneer grains. Hover over any sample to pause scrolling.
                </p>
              </div>
              <div className="relative -mx-margin-mobile md:-mx-margin-desktop overflow-hidden border-y border-outline-variant/20 py-8 bg-surface-container-low/40">
                <div className="flex w-full overflow-hidden relative">
                  <div className="flex gap-6 animate-marquee-loop whitespace-nowrap hover:[animation-play-state:paused]">
                    {veneerSamples.map((sample, idx) => (
                      <div key={`sample-1-${idx}`} className="inline-block w-[230px] md:w-[270px] flex-shrink-0 bg-white border border-outline-variant/30 rounded-xl overflow-hidden p-3.5 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="h-[270px] w-full rounded-lg overflow-hidden relative">
                          <img src={sample.image} alt={sample.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                      </div>
                    ))}
                    {veneerSamples.map((sample, idx) => (
                      <div key={`sample-2-${idx}`} className="inline-block w-[230px] md:w-[270px] flex-shrink-0 bg-white border border-outline-variant/30 rounded-xl overflow-hidden p-3.5 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="h-[270px] w-full rounded-lg overflow-hidden relative">
                          <img src={sample.image} alt={sample.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {showPlywood && (
        <section className="relative overflow-hidden border-t border-outline-variant/10 bg-[linear-gradient(180deg,#f5f1ea_0%,#fcf9f8_38%,#f7f3ef_100%)] py-20">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_left,rgba(183,140,85,0.28),transparent_52%),radial-gradient(circle_at_top_right,rgba(5,30,22,0.08),transparent_38%)]"></div>
          <div className="absolute left-[-6rem] top-32 h-56 w-56 rounded-full bg-secondary/10 blur-3xl"></div>
          <div className="absolute right-[-4rem] top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl"></div>

          <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-14">
              <span className="font-label-lg text-secondary tracking-[0.22em] uppercase block mb-3">Brochure Range 2026</span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary">Our Plywood Range</h2>
            </div>
            {/* Plywood Sheet Showcase Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12 mb-16 border-b border-outline-variant/20 pb-16">
              <div className="lg:col-span-5">
                <span className="font-label-lg text-secondary tracking-[0.2em] uppercase block mb-3">Material Authenticity</span>
                <h3 className="font-headline-md text-3xl text-primary font-bold mb-6">Built on Genuine Hardwoods</h3>
                <p className="font-body-md text-sm text-on-surface-variant/80 leading-relaxed mb-6">
                  Every genuine Coorg Ply sheet is processed using premium hardwood species and calibrated cores. Our boards are characterized by their signature edge stamps, high-density cores, and uniform calibration to deliver flawless results for architectural projects, modular kitchens, and high-end cabinetry.
                </p>
                <div className="space-y-4 text-xs text-on-surface-variant">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-base">verified</span>
                    <span><strong>Gurjan Face:</strong> Premium natural veneer facing for outstanding polish retention.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-base">verified</span>
                    <span><strong>100% Neem Wood:</strong> Solid, pesticide-treated core offering natural termite defiance.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-base">verified</span>
                    <span><strong>Okoume Face:</strong> Rich pinkish-red tone with high strength and uniform texture.</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-white p-3.5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
                    <img src="/coorg_plywood_sheet_1.webp" alt="Coorg Ply Plywood Sheet - Gurjan Face" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="font-headline-md text-sm text-primary font-bold">Gurjan Face Veneer</span>
                    <p className="text-[10px] text-secondary uppercase tracking-wider mt-0.5">IS:710 Marine Grade</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-white p-3.5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
                    <img src="/coorg_plywood_sheet_2.webp" alt="Coorg Ply Plywood Sheet - 100% Neem Wood" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="font-headline-md text-sm text-primary font-bold">100% Neem Wood Core</span>
                    <p className="text-[10px] text-secondary uppercase tracking-wider mt-0.5">25-Year Guarantee</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-white p-3.5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
                    <img src="/okoume_face_plywood.jpg" alt="Coorg Ply Plywood Sheet - Okoume Face" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="font-headline-md text-sm text-primary font-bold">Okoume Face Veneer</span>
                    <p className="text-[10px] text-secondary uppercase tracking-wider mt-0.5">Premium Face Veneer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {plywoodProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0f4c3a_0%,#a35a1f_100%)]"></div>

                  <div className="p-6 relative z-10 flex-grow flex flex-col">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <span className="mb-2 inline-flex rounded-md bg-primary-fixed-dim text-primary px-3 py-1 font-label-md text-[10px] uppercase tracking-wider font-bold">
                          {product.series}
                        </span>
                        <h3 className="font-headline-md text-2xl text-primary font-bold mt-1">{product.name}</h3>
                        <p className="mt-1 font-label-md text-xs uppercase tracking-wider text-secondary">{product.subtitle}</p>
                      </div>
                      <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low px-4 py-2.5 text-right">
                        <p className="font-label-md text-[9px] uppercase tracking-wider text-on-surface-variant/60">Grade</p>
                        <p className="font-headline-md text-xl leading-none text-[#a35a1f] mt-1 font-bold">{product.grade}</p>
                      </div>
                    </div>

                    <p className="mb-6 font-body-md text-sm text-on-surface-variant/80 leading-relaxed">{product.summary}</p>

                    <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-3 border-t border-outline-variant/30 pt-5 text-sm">
                      <div>
                        <p className="font-label-md text-[10px] uppercase tracking-wider text-on-surface-variant/60">Price Band</p>
                        <p className="mt-1 font-sans font-bold text-[#2c7d59]">{product.priceRange}</p>
                      </div>
                      <div>
                        <p className="font-label-md text-[10px] uppercase tracking-wider text-on-surface-variant/60">Thickness</p>
                        <p className="mt-1 font-semibold text-primary">{product.thickness}</p>
                      </div>
                      <div>
                        <p className="font-label-md text-[10px] uppercase tracking-wider text-on-surface-variant/60">Panel Type</p>
                        <p className="mt-1 font-semibold text-primary">{product.standard}</p>
                      </div>
                      <div>
                        <p className="font-label-md text-[10px] uppercase tracking-wider text-on-surface-variant/60">Face</p>
                        <p className="mt-1 font-semibold text-[#a35a1f]">{product.face}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-outline-variant/30 bg-surface-container-low/50 px-6 py-5">
                    <div className="mb-4 grid grid-cols-3 gap-2 text-center">
                      {product.prices.slice(0, 3).map(([size, price]) => (
                        <div key={size} className="rounded-lg border border-outline-variant/20 bg-white/70 px-2 py-2">
                          <p className="font-label-md text-[9px] uppercase tracking-wider text-on-surface-variant/50">{size}</p>
                          <p className="mt-0.5 text-xs font-bold text-primary">{price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <span className="flex-1 rounded-xl bg-white border border-primary text-primary px-4 py-3 text-center font-label-lg text-xs uppercase tracking-wider font-bold hover:bg-primary/5 transition-colors">
                        Get Quote
                      </span>
                      <span className="flex-1 rounded-xl bg-[#a35a1f] text-white px-4 py-3 text-center font-label-lg text-xs uppercase tracking-wider font-bold hover:bg-[#bd6c2b] transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
              <div className="grid gap-8 px-8 py-9 md:grid-cols-[1.05fr_0.95fr] md:px-10">
                <div className="text-primary">
                  <span className="inline-flex rounded-md bg-primary-fixed-dim text-primary px-3 py-1 font-label-md text-[10px] uppercase tracking-wider font-bold">
                    {filmFaceProduct.label}
                  </span>
                  <h3 className="mt-4 font-headline-md text-3xl text-primary font-bold">{filmFaceProduct.name}</h3>
                  <p className="mt-4 max-w-xl font-body-md text-sm leading-relaxed text-on-surface-variant/80">{filmFaceProduct.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2.5 text-[10px] font-bold uppercase tracking-wider text-secondary">
                    <span className="rounded-full bg-surface-container border border-outline-variant/20 px-3.5 py-1.5">Strong</span>
                    <span className="rounded-full bg-surface-container border border-outline-variant/20 px-3.5 py-1.5">Durable</span>
                    <span className="rounded-full bg-surface-container border border-outline-variant/20 px-3.5 py-1.5">Water Resistant</span>
                    <span className="rounded-full bg-surface-container border border-outline-variant/20 px-3.5 py-1.5">Eco Friendly</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-container-low p-6 border border-outline-variant/20">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-label-lg text-xs uppercase tracking-wider text-primary font-bold">Film Face Rate Card</p>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-label-md text-[10px] uppercase tracking-wider text-primary font-bold">Shuttering</span>
                  </div>
                  <div className="space-y-2.5">
                    {filmFaceProduct.weights.map(([weight, price]) => (
                      <div key={`${weight}-${price}`} className="flex items-center justify-between rounded-xl border border-outline-variant/20 bg-white px-4 py-3 text-sm">
                        <span className="font-bold text-primary">{weight}</span>
                        <span className="font-bold text-[#a35a1f]">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {showDoors && (
        <section className="py-20 bg-surface-container-low border-t border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-14">
              <span className="font-label-lg text-secondary tracking-[0.2em] uppercase block mb-3">Architectural Range</span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary">Architectural Doors &amp; Boards</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="relative h-80 overflow-hidden rounded-t-2xl">
                  <img src="https://images.unsplash.com/photo-1603673298820-40d77252226d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Solid Core Flush Doors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary-fixed-dim text-primary text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider border border-outline-variant/20 shadow-sm">IS:2202</div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-2xl text-primary font-bold mb-3">Solid Core Flush Doors</h3>
                    <p className="font-body-md text-sm text-on-surface-variant/80 mb-6 leading-relaxed">
                      Solid timber-core flush doors veneered with premium decorative faces. Built with internal bracing for warp-free performance across monsoon and summer climates.
                    </p>
                    <ul className="space-y-2 mb-8 text-sm text-on-surface-variant/85">
                      <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Core:</strong> Solid timber / Particle board / Hollow core variants</span></li>
                      <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Face:</strong> Teak, rose wood, oak &amp; custom veneers</span></li>
                      <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Sizes:</strong> Standard &amp; custom to order</span></li>
                    </ul>
                  </div>
                  <Link to="/contact" className="w-full rounded-xl bg-[#a35a1f] text-white px-5 py-3.5 text-center font-label-lg text-xs uppercase tracking-wider font-bold hover:bg-[#bd6c2b] transition-colors mt-4">
                    Inquire Now
                  </Link>
                </div>
              </div>

              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="relative h-80 overflow-hidden rounded-t-2xl">
                  <img src="/block_boards.webp" alt="Precision Block Boards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary-fixed-dim text-primary text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider border border-outline-variant/20 shadow-sm">IS:1659</div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-2xl text-primary font-bold mb-3">Precision Block Boards</h3>
                    <p className="font-body-md text-sm text-on-surface-variant/80 mb-6 leading-relaxed">
                      Manufactured with a solid timber batten core bonded between thin veneer sheets. Excellent screw-holding ability and dimensional stability, perfect for shelving and heavy furniture.
                    </p>
                    <ul className="space-y-2 mb-8 text-sm text-on-surface-variant/85">
                      <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Core:</strong> Timber battens (softwood/hardwood)</span></li>
                      <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Thickness:</strong> 19mm, 25mm, 32mm</span></li>
                      <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Best For:</strong> Shelves, table tops, workbenches</span></li>
                    </ul>
                  </div>
                  <Link to="/contact" className="w-full rounded-xl bg-[#a35a1f] text-white px-5 py-3.5 text-center font-label-lg text-xs uppercase tracking-wider font-bold hover:bg-[#bd6c2b] transition-colors mt-4">
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-primary-container text-on-primary-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label-lg text-primary-fixed-dim uppercase tracking-[0.2em] block mb-4">Next Steps</span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-white mb-6">Bring Heritage to Your Project</h2>
            <p className="font-body-lg text-on-primary-container/80 leading-relaxed mb-10">
              Whether you're an architect, a builder, or a homeowner — we have the right panel for you. Talk to our technical team and get a complimentary sample kit delivered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-primary px-8 py-4 font-label-lg text-label-lg uppercase tracking-wider rounded-sm hover:bg-primary-fixed transition-colors shadow-lg">
                Contact Our Team
              </Link>
              <Link to="/manufacturing" className="border border-on-primary-container/30 text-white px-8 py-4 font-label-lg text-label-lg uppercase tracking-wider rounded-sm hover:bg-white/10 transition-colors">
                Our Process →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded p-6 text-center">
              <p className="font-headline-display text-5xl text-white font-bold mb-2">30+</p>
              <p className="font-label-md text-xs text-on-primary-container/70 uppercase tracking-wider">Years in Business</p>
            </div>
            <div className="bg-white/10 rounded p-6 text-center">
              <p className="font-headline-display text-5xl text-white font-bold mb-2">7</p>
              <p className="font-label-md text-xs text-on-primary-container/70 uppercase tracking-wider">Brochure Plywood Lines</p>
            </div>
            <div className="bg-white/10 rounded p-6 text-center">
              <p className="font-headline-display text-5xl text-white font-bold mb-2">6mm</p>
              <p className="font-label-md text-xs text-on-primary-container/70 uppercase tracking-wider">Starting Thickness</p>
            </div>
            <div className="bg-white/10 rounded p-6 text-center">
              <p className="font-headline-display text-5xl text-white font-bold mb-2">25mm</p>
              <p className="font-label-md text-xs text-on-primary-container/70 uppercase tracking-wider">Maximum Thickness</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
