import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getPlywoodProductById, plywoodProducts } from '../data/plywoodProducts';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = getPlywoodProductById(productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = plywoodProducts.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f4efe7_0%,#f8f3ec_45%,#fcf9f8_100%)] pt-32 pb-20">
        <div className="absolute left-[-7rem] top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute right-[-5rem] top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(183,140,85,0.18),transparent_54%)]"></div>

        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-10 flex flex-wrap items-center gap-3 text-sm">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to Products
            </Link>
            <span className="text-on-surface-variant">/</span>
            <span className="text-on-surface-variant">{product.name}</span>
          </div>

          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(180deg,#123126_0%,#0d241c_100%)] p-6 sm:p-8 shadow-[0_30px_90px_rgba(12,32,24,0.22)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(177,205,192,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(183,140,85,0.10),transparent_32%)]"></div>
                <div className="relative">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-primary-fixed-dim px-4 py-1.5 font-label-md text-[10px] uppercase tracking-[0.22em] text-primary">
                      {product.series} Collection
                    </span>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 font-label-md text-[10px] uppercase tracking-[0.22em] text-white/80">
                      {product.standard}
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 rounded-[24px] border border-white/15 bg-[linear-gradient(180deg,rgba(7,24,18,0.94),rgba(12,33,25,0.9))] px-5 py-4 shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-md">
                        <p className="font-label-md text-[10px] uppercase tracking-[0.24em] text-[#d8c3a8]">Brochure Price Band</p>
                        <p className="mt-2 font-sans font-bold text-3xl sm:text-4xl leading-none text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]">{product.priceRange}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-white backdrop-blur-sm">
                      <p className="font-label-md text-[10px] uppercase tracking-[0.18em] text-primary-fixed-dim">Available Thickness</p>
                      <p className="mt-3 font-headline-md text-3xl">{product.thickness}</p>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-white backdrop-blur-sm">
                      <p className="font-label-md text-[10px] uppercase tracking-[0.18em] text-primary-fixed-dim">Surface Face</p>
                      <p className="mt-3 font-headline-md text-3xl">{product.face}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex rounded-full border border-[#dcccc0] bg-[#f3ebdf] px-4 py-1.5 font-label-md text-[10px] uppercase tracking-[0.22em] text-secondary">
                {product.grade} Grade
              </span>
              <h1 className="mt-5 max-w-3xl font-headline-display text-[44px] leading-[0.98] text-primary sm:text-[58px] xl:text-[68px]">
                {product.name}
              </h1>
              <p className="mt-4 font-label-lg text-sm uppercase tracking-[0.24em] text-on-surface-variant">
                {product.subtitle}
              </p>

              <p className="mt-8 max-w-2xl font-body-lg text-[19px] leading-9 text-on-surface-variant">
                {product.summary}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-[#ded2c5] bg-white px-6 py-5 shadow-sm">
                  <p className="font-label-md text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">Panel Type</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight text-primary">{product.standard}</p>
                </div>
                <div className="rounded-[28px] border border-[#ded2c5] bg-white px-6 py-5 shadow-sm">
                  <p className="font-label-md text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">Best Use</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight text-primary">{product.applications}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="flex-1 rounded-[22px] bg-primary px-7 py-4 text-center font-label-lg text-base uppercase tracking-[0.14em] text-on-primary transition-colors hover:bg-primary-container"
                >
                  Request Quote
                </Link>
                <a
                  href={`https://wa.me/919353927123?text=${encodeURIComponent(`Hello Coorg Ply, I would like details and a quote for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-[22px] border border-[#c9d9cd] bg-[#eef7f0] px-7 py-4 text-center font-label-lg text-base uppercase tracking-[0.14em] text-[#17643e] transition-colors hover:bg-[#e1f1e5]"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[32px] border border-[#ddd0c1] bg-white p-8 sm:p-10 shadow-[0_18px_50px_rgba(58,43,24,0.06)]">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-center">
              <div>
                <p className="font-label-lg text-xs uppercase tracking-[0.24em] text-secondary">Application Focus</p>
                <h2 className="mt-3 font-headline-md text-3xl leading-tight text-primary">
                  Built for practical, high-confidence use
                </h2>
              </div>
              <div className="border-t border-[#ded2c5] pt-6 lg:border-t-0 lg:pt-0 lg:pl-10 lg:border-l lg:border-outline-variant/40">
                <div className="mb-6 flex flex-wrap gap-2.5">
                  {product.applications.split(',').map((item) => (
                    <span
                      key={`${product.id}-${item.trim()}`}
                      className="rounded-full border border-[#ddd0c1] bg-[#faf7f2] px-4 py-2 text-sm text-on-surface-variant font-medium"
                    >
                      {item.trim()}
                    </span>
                  ))}
                </div>
                <p className="text-lg leading-8 text-on-surface-variant">
                  This collection balances finish quality, panel stability, and brochure-backed sizing for projects that need dependable everyday performance with a premium feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 max-w-3xl">
            <span className="font-label-lg text-secondary tracking-[0.2em] uppercase block mb-4">Product Overview</span>
            <h2 className="font-headline-lg text-3xl md:text-5xl text-primary">Aligned specs, clearer sections, and a more spacious layout.</h2>
          </div>

          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[34px] border border-[#e5d9ce] bg-white p-7 sm:p-8 shadow-[0_18px_50px_rgba(58,43,24,0.06)]">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-outline-variant/50 bg-[#faf7f2] text-primary">
                  <span className="material-symbols-outlined text-lg">checklist</span>
                </div>
                <div>
                  <p className="font-label-lg text-xs uppercase tracking-[0.22em] text-on-surface-variant">Key Features</p>
                  <p className="mt-1 text-sm text-on-surface-variant">Performance details from the brochure-led product positioning.</p>
                </div>
              </div>
              <ul className="grid gap-4">
                {product.features.map((feature) => (
                  <li key={`${product.id}-${feature}`} className="flex items-start gap-4 rounded-[24px] border border-[#ece1d7] bg-[#fcf8f3] px-5 py-4 text-base leading-8 text-on-surface-variant">
                    <span className="material-symbols-outlined mt-1 text-[#1d6b49]">check_circle</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="rounded-[34px] border border-[#dfe6df] bg-[linear-gradient(180deg,#eef5ef_0%,#f7faf7_100%)] p-7 sm:p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d2dcd4] bg-[#faf7f2] text-[#9d5a21]">
                    <span className="material-symbols-outlined text-lg">forest</span>
                  </div>
                  <div>
                    <p className="font-label-lg text-xs uppercase tracking-[0.22em] text-on-surface-variant">Material Notes</p>
                    <p className="mt-1 text-sm text-on-surface-variant">Core info presented with more breathing room and better emphasis.</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-[#d8e1da] bg-white/80 p-5">
                    <p className="font-label-md text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">Grade</p>
                    <p className="mt-3 text-3xl font-semibold text-primary">{product.grade}</p>
                  </div>
                  <div className="rounded-[24px] border border-[#d8e1da] bg-white/80 p-5">
                    <p className="font-label-md text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">Wood Face</p>
                    <p className="mt-3 text-3xl font-semibold text-primary">{product.face}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[34px] border border-[#e4d7cb] bg-[linear-gradient(180deg,#fffefd_0%,#f8f1e6_100%)] p-7 sm:p-8 shadow-[0_14px_34px_rgba(58,43,24,0.05)]">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-outline-variant/50 bg-[#faf7f2] text-primary">
                    <span className="material-symbols-outlined text-lg">straighten</span>
                  </div>
                  <div>
                    <p className="font-label-lg text-xs uppercase tracking-[0.22em] text-on-surface-variant">Available Thicknesses</p>
                    <p className="mt-1 text-sm text-on-surface-variant">Brochure sizes from 6mm to 25mm.</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  {product.prices.map(([size]) => (
                    <span
                      key={`${product.id}-${size}-chip`}
                      className="rounded-2xl border border-[#dccfc1] bg-white px-3 py-3.5 font-semibold text-[#17643e] shadow-sm text-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e8] py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="font-label-lg text-secondary tracking-[0.2em] uppercase block mb-4">Pricing</span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-primary">Brochure Rate Chart</h2>
            </div>
            <span className="inline-flex self-start rounded-full bg-[#efe3d1] px-4 py-1.5 font-label-md text-[10px] uppercase tracking-[0.18em] text-secondary">
              July 2026 brochure
            </span>
          </div>

          <div className="rounded-[36px] border border-[#dfd3c6] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(58,43,24,0.08)]">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {product.prices.map(([size, price]) => (
                <div key={`${product.id}-${size}-${price}`} className="rounded-[26px] border border-[#e3d6ca] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6f0_100%)] px-5 py-5 shadow-sm">
                  <p className="font-label-md text-[12px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">{size} Plywood</p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <p className="font-sans font-bold text-3xl text-primary">{price}</p>
                    <span className="text-xs uppercase tracking-[0.16em] text-[#9d5a21]">Sq.ft</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-container py-20 text-on-primary-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(135deg,#123126_0%,#0c221a_60%,#1b4c3a_100%)] px-6 py-10 sm:px-8 lg:px-12 lg:py-12 shadow-[0_26px_70px_rgba(0,0,0,0.18)]">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <span className="font-label-lg text-primary-fixed-dim uppercase tracking-[0.2em] block mb-4">Next Step</span>
                <h2 className="font-headline-lg text-3xl md:text-5xl text-white mb-5">Ready to specify {product.name} for your project?</h2>
                <p className="font-body-lg leading-8 text-on-primary-container/80">
                  Connect with the Coorg Ply team for pricing confirmation, quantity guidance, and the right plywood recommendation for your interior or construction requirement.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:min-w-[260px]">
                <Link
                  to="/contact"
                  className="rounded-[22px] bg-white px-7 py-4 text-center font-label-lg text-base uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary-fixed"
                >
                  Contact Our Team
                </Link>
                <a
                  href={`https://wa.me/919353927123?text=${encodeURIComponent(`Hello Coorg Ply, I would like details and a quote for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[22px] border border-white/16 bg-white/8 px-7 py-4 text-center font-label-lg text-base uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/12"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-label-lg text-secondary tracking-[0.2em] uppercase block mb-3">Explore More</span>
              <h2 className="font-headline-md text-3xl md:text-4xl text-primary">Related Plywood Collections</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-label-lg uppercase tracking-[0.16em] hover:text-secondary transition-colors">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0f4c3a_0%,#a35a1f_100%)]"></div>

                <div className="p-7 relative z-10 flex-grow flex flex-col pt-8">
                  <div className="mb-4 flex items-center justify-between gap-3 font-bold">
                    <span className="inline-flex rounded-full bg-[#efe6db] px-3 py-1 font-label-md text-[10px] uppercase tracking-[0.18em] text-secondary">
                      {item.series}
                    </span>
                    <span className="text-sm text-[#17643e]">{item.priceRange}</span>
                  </div>
                  <h3 className="font-headline-md text-2xl text-primary font-bold">{item.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-on-surface-variant/85">{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
