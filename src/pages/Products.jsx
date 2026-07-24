import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { filmFaceProduct, plywoodProducts } from '../data/plywoodProducts';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');

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
        <img src="/hero_collection.png" alt="Coorg Ply - The Collection" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="font-label-lg text-primary-fixed-dim uppercase tracking-[0.3em] block mb-4">Coorg Ply</span>
          <h1 className="font-headline-display text-5xl md:text-[72px] text-white mb-5 leading-tight">The Collection</h1>
          <p className="font-body-lg text-white/80 max-w-lg leading-relaxed">
            Precision crafted panels and decorative boards — built to last, designed to impress.
          </p>
        </div>
      </section>

      <div className="sticky top-24 z-30 bg-surface border-b border-outline-variant/20 shadow-sm">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {filterButtons.map((btn) => {
              const active = activeFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full font-label-md text-label-md transition-all uppercase tracking-wider text-xs ${
                    active
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
                <img src="/veneer_interior.png" alt="Luxury wood veneer interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="font-label-md uppercase tracking-wider text-primary-fixed-dim text-xs block mb-1">Application</span>
                  <p className="font-headline-md text-xl">Floor-to-Ceiling Paneling</p>
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

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {plywoodProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#1b332a] bg-[linear-gradient(180deg,#0a251c_0%,#051e16_100%)] shadow-[0_24px_60px_rgba(5,30,22,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_75px_rgba(5,30,22,0.5)]"
                >
                  <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#0f4c3a_0%,#2c7d59_50%,#b9783e_100%)]"></div>
                  <div className="absolute right-0 top-0 h-36 w-36 bg-[radial-gradient(circle_at_top_right,rgba(177,205,192,0.1),transparent_62%)]"></div>

                  <div className="p-7 pb-6 relative z-10">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div>
                          <span className="mb-2 inline-flex rounded-full bg-[#1b332a] px-3 py-1 font-label-md text-[11px] uppercase tracking-[0.22em] text-[#efe6db]">
                            {product.series}
                          </span>
                          <h3 className="font-headline-md text-[28px] leading-[1.05] text-white">{product.name}</h3>
                          <p className="mt-1 font-label-md text-xs uppercase tracking-[0.2em] text-[#efe6db]/60">{product.subtitle}</p>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right shadow-sm">
                        <p className="font-label-md text-[10px] uppercase tracking-[0.22em] text-[#efe6db]/60">Grade</p>
                        <p className="font-headline-md text-2xl leading-none text-[#b9783e]">{product.grade}</p>
                      </div>
                    </div>

                    <p className="mb-6 font-body-md text-sm leading-7 text-[#efe6db]/70">{product.summary}</p>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-4 border-t border-white/10 pt-5 text-sm">
                      <div>
                        <p className="font-label-md text-[11px] uppercase tracking-[0.2em] text-[#efe6db]/50">Price Band</p>
                        <p className="mt-1 font-sans font-semibold text-lg text-[#52c48e]">{product.priceRange}</p>
                      </div>
                      <div>
                        <p className="font-label-md text-[11px] uppercase tracking-[0.2em] text-[#efe6db]/50">Thickness</p>
                        <p className="mt-1 font-semibold text-white">{product.thickness}</p>
                      </div>
                      <div>
                        <p className="font-label-md text-[11px] uppercase tracking-[0.2em] text-[#efe6db]/50">Panel Type</p>
                        <p className="mt-1 font-semibold text-white">{product.standard}</p>
                      </div>
                      <div>
                        <p className="font-label-md text-[11px] uppercase tracking-[0.2em] text-[#efe6db]/50">Face</p>
                        <p className="mt-1 font-semibold text-[#b9783e]">{product.face}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto border-t border-white/10 bg-black/25 px-7 py-5 relative z-10">
                    <div className="mb-4 grid grid-cols-3 gap-2 text-center">
                      {product.prices.slice(0, 3).map(([size, price]) => (
                        <div key={size} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                          <p className="font-label-md text-[10px] uppercase tracking-[0.18em] text-[#efe6db]/60">{size}</p>
                          <p className="mt-1 text-sm font-semibold text-white">{price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <span className="flex-1 rounded-2xl bg-white/10 border border-white/10 px-5 py-3.5 text-center font-label-lg text-sm uppercase tracking-[0.14em] text-white hover:bg-white/15 transition-colors">
                        Get Quote
                      </span>
                      <span className="flex-1 rounded-2xl bg-[#a35a1f] px-5 py-3.5 text-center font-label-lg text-sm uppercase tracking-[0.14em] text-white hover:bg-[#bd6c2b] transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-[32px] border border-[#d8cabd] bg-[linear-gradient(135deg,#143f31_0%,#0a241b_55%,#1f5844_100%)] shadow-[0_18px_50px_rgba(11,32,24,0.2)]">
              <div className="grid gap-8 px-8 py-9 md:grid-cols-[1.05fr_0.95fr] md:px-10">
                <div className="text-white">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 font-label-md text-[11px] uppercase tracking-[0.22em] text-primary-fixed-dim">
                    {filmFaceProduct.label}
                  </span>
                  <h3 className="mt-4 font-headline-md text-3xl text-white">{filmFaceProduct.name}</h3>
                  <p className="mt-4 max-w-xl font-body-md text-sm leading-7 text-white/74">{filmFaceProduct.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-primary-fixed-dim">
                    <span className="rounded-full border border-white/10 px-3 py-2">Strong</span>
                    <span className="rounded-full border border-white/10 px-3 py-2">Durable</span>
                    <span className="rounded-full border border-white/10 px-3 py-2">Water Resistant</span>
                    <span className="rounded-full border border-white/10 px-3 py-2">Eco Friendly</span>
                  </div>
                </div>

                <div className="rounded-[28px] bg-[#f8f3ec] p-5 shadow-inner">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-label-lg text-xs uppercase tracking-[0.22em] text-primary">Film Face Rate Card</p>
                    <span className="rounded-full bg-[#efe3d1] px-3 py-1 font-label-md text-[10px] uppercase tracking-[0.18em] text-secondary">Shuttering</span>
                  </div>
                  <div className="space-y-2.5">
                    {filmFaceProduct.weights.map(([weight, price]) => (
                      <div key={`${weight}-${price}`} className="flex items-center justify-between rounded-2xl border border-[#dccfbe] bg-white px-4 py-3 text-sm">
                        <span className="font-semibold text-primary">{weight}</span>
                        <span className="font-semibold text-[#8d4b18]">{price}</span>
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
              <div className="product-card group bg-white rounded shadow-sm border border-outline-variant/10 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-80 overflow-hidden">
                  <img src="/flush_door.png" alt="Solid Core Flush Doors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">IS:2202</div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-2xl text-primary mb-3">Solid Core Flush Doors</h3>
                    <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                      Solid timber-core flush doors veneered with premium decorative faces. Built with internal bracing for warp-free performance across monsoon and summer climates.
                    </p>
                    <ul className="space-y-2 mb-8 text-sm text-on-surface-variant">
                      <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Core:</strong> Solid timber / Particle board / Hollow core variants</span></li>
                      <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Face:</strong> Teak, rose wood, oak &amp; custom veneers</span></li>
                      <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Sizes:</strong> Standard &amp; custom to order</span></li>
                    </ul>
                  </div>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-6 rounded-sm font-label-lg text-xs uppercase tracking-wider hover:bg-primary-container transition-all">
                    Inquire Now <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </Link>
                </div>
              </div>

              <div className="product-card group bg-white rounded shadow-sm border border-outline-variant/10 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-80 overflow-hidden">
                  <img src="/block_boards.png" alt="Precision Block Boards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">IS:1659</div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-2xl text-primary mb-3">Precision Block Boards</h3>
                    <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                      Manufactured with a solid timber batten core bonded between thin veneer sheets. Excellent screw-holding ability and dimensional stability, perfect for shelving and heavy furniture.
                    </p>
                    <ul className="space-y-2 mb-8 text-sm text-on-surface-variant">
                      <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Core:</strong> Timber battens (softwood/hardwood)</span></li>
                      <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Thickness:</strong> 19mm, 25mm, 32mm</span></li>
                      <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">verified</span> <span><strong>Best For:</strong> Shelves, table tops, workbenches</span></li>
                    </ul>
                  </div>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-6 rounded-sm font-label-lg text-xs uppercase tracking-wider hover:bg-primary-container transition-all">
                    Inquire Now <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
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
