import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TechnicalSpecs() {
  const [activeTab, setActiveTab] = useState('standard');

  const standardGrades = [
    {
      name: 'MR Grade Crystal',
      subtitle: 'Gurjan Face - Commercial',
      badge: 'MR Grade',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/50',
      prices: [
        { size: '6 mm', price: 37 },
        { size: '9 mm', price: 44 },
        { size: '12 mm', price: 53 },
        { size: '16 mm', price: 61 },
        { size: '18 mm', price: 65 },
        { size: '25 mm', price: 78 },
      ]
    },
    {
      name: 'BWR Grade Diamond',
      subtitle: 'Gurjan Face - Water Resistant',
      badge: 'BWR Grade',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/50',
      prices: [
        { size: '6 mm', price: 43 },
        { size: '9 mm', price: 51 },
        { size: '12 mm', price: 60 },
        { size: '16 mm', price: 73 },
        { size: '18 mm', price: 83 },
        { size: '25 mm', price: 85 },
      ]
    },
    {
      name: 'BWP Grade Platinum',
      subtitle: 'Gurjan Face - Waterproof Marine',
      badge: 'BWP Grade',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
      prices: [
        { size: '6 mm', price: 51 },
        { size: '9 mm', price: 61 },
        { size: '12 mm', price: 68 },
        { size: '16 mm', price: 81 },
        { size: '18 mm', price: 113 },
        { size: '25 mm', price: 123 },
      ]
    }
  ];

  const calibratedGrades = [
    {
      name: 'MR Calibrated',
      subtitle: 'Gurjan Face - Calibrated Commercial',
      badge: 'MR Grade',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/50',
      prices: [
        { size: '6 mm', price: 45 },
        { size: '9 mm', price: 51 },
        { size: '12 mm', price: 63 },
        { size: '16 mm', price: 81 },
        { size: '18 mm', price: 98 },
        { size: '25 mm', price: 128 },
      ]
    },
    {
      name: 'BWR Calibrated',
      subtitle: 'Gurjan Face - Calibrated BWR',
      badge: 'BWR Grade',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/50',
      prices: [
        { size: '6 mm', price: 49 },
        { size: '9 mm', price: 56 },
        { size: '12 mm', price: 69 },
        { size: '16 mm', price: 89 },
        { size: '18 mm', price: 111 },
        { size: '25 mm', price: 145 },
      ]
    },
    {
      name: 'BWP Calibrated',
      subtitle: 'Gurjan Face - Calibrated Marine',
      badge: 'BWP Grade',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
      prices: [
        { size: '6 mm', price: 55 },
        { size: '9 mm', price: 63 },
        { size: '12 mm', price: 78 },
        { size: '16 mm', price: 102 },
        { size: '18 mm', price: 125 },
        { size: '25 mm', price: 163 },
      ]
    }
  ];

  const filmFacePrices = [
    { weight: '25 KG', bonding: 'MUF (Melamine Urea Formaldehyde)', price: 53 },
    { weight: '30 KG', bonding: 'MUF (Melamine Urea Formaldehyde)', price: 61 },
    { weight: '34 KG', bonding: 'MUF (Melamine Urea Formaldehyde)', price: 71 },
    { weight: '34 KG', bonding: 'PF (Phenol Formaldehyde)', price: 78 },
  ];

  const featuresList = activeTab === 'standard' ? [
    { title: 'Superior Strength', desc: 'Engineered for long-lasting structural performance under loaded stress.', icon: 'fitness_center' },
    { title: 'Termite & Borer Resistant', desc: 'Chemically treated layers offering reliable termite defiance for years.', icon: 'gpp_good' },
    { title: 'Moisture Resistant', desc: 'Bonded to withstand high humidity and tropical weather variances.', icon: 'water_drop' },
    { title: 'Smooth Finish & Uniform Core', desc: 'Provides a flawless surface ideal for veneers, laminates, and painting.', icon: 'texture' },
  ] : [
    { title: 'Calibrated Thickness', desc: 'Precision engineered to uniform thickness limits (+/- 0.2mm tolerance).', icon: 'straighten' },
    { title: 'Premium Gurjan Face', desc: 'Sourced premium Gurjan face veneer offering absolute structural finish.', icon: 'workspace_premium' },
    { title: 'Moisture Defiance', desc: 'Bonded with high-solid synthetic resins to prevent delamination.', icon: 'umbrella' },
    { title: 'Perfect for Joinery', desc: 'Ideal for modular CNC routing, high-end kitchens, and architectural paneling.', icon: 'grid_view' },
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-[linear-gradient(180deg,#fcf9f8_0%,#f5f1ea_100%)] border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,76,58,0.05),transparent_45%)] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-label-md font-label-md uppercase tracking-widest text-secondary bg-secondary/10 rounded-full text-xs font-bold">
            Technical Specifications
          </span>
          <h1 className="font-headline-display text-4xl sm:text-5xl md:text-[56px] text-primary max-w-4xl mx-auto mb-6 leading-tight">
            Plywood Specification &amp; Rates
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Review detailed thickness indices, grade parameters, and prices per square foot for the entire Coorg Ply collection.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          
          {/* Tab Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-surface-container-low p-1.5 border border-outline-variant/20 shadow-sm">
              <button
                onClick={() => setActiveTab('standard')}
                className={`px-6 py-3 rounded-full font-label-md text-xs uppercase tracking-wider transition-all font-bold ${
                  activeTab === 'standard'
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'text-on-surface-variant hover:bg-surface-container-lowest'
                }`}
              >
                Premium Alternate Plywood
              </button>
              <button
                onClick={() => setActiveTab('calibrated')}
                className={`px-6 py-3 rounded-full font-label-md text-xs uppercase tracking-wider transition-all font-bold ${
                  activeTab === 'calibrated'
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'text-on-surface-variant hover:bg-surface-container-lowest'
                }`}
              >
                Precision Calibrated Plywood
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Features Column (Left 4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-[#0b2b20] text-on-primary p-8 rounded-3xl shadow-xl relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(163,90,31,0.12),transparent_60%)] pointer-events-none"></div>
                <span className="font-label-lg text-primary-fixed-dim tracking-[0.2em] uppercase text-[10px] font-bold block mb-2">Technical Standards</span>
                <h3 className="font-headline-md text-2xl text-white font-bold mb-6">
                  {activeTab === 'standard' ? 'Premium Alternate Range' : 'Precision Calibrated Range'}
                </h3>
                <p className="text-xs text-on-primary/70 mb-8 leading-relaxed">
                  Every sheet is processed using premium hardwood species and calibrated cores. Our boards are characterized by their signature edge stamps, high-density cores, and uniform calibration.
                </p>
                <div className="space-y-6">
                  {featuresList.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-base">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-sm text-white font-bold">{item.title}</h4>
                        <p className="text-[11px] text-on-primary/60 mt-0.5 leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Box */}
              <div className="bg-white border border-outline-variant/30 p-8 rounded-3xl shadow-sm text-center">
                <h4 className="font-headline-md text-lg text-primary font-bold mb-3">Require Custom Sizes?</h4>
                <p className="font-body-md text-xs text-on-surface-variant/80 mb-6 leading-relaxed">
                  We supply custom configurations and bulk orders directly to modular kitchen factories and builders.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex justify-center bg-primary text-on-primary px-8 py-3.5 rounded-xl font-label-lg text-xs uppercase tracking-wider hover:bg-[#0b382b] transition-all w-full font-bold shadow-md"
                >
                  Contact For Bulk Rates
                </Link>
              </div>
            </div>

            {/* Pricing Tables Column (Right 8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Conditional Grade Loops */}
              {(activeTab === 'standard' ? standardGrades : calibratedGrades).map((grade, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-outline-variant/30 shadow-sm overflow-hidden">
                  <div className="p-6 md:p-8 bg-surface-container-lowest border-b border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="font-headline-md text-xl text-primary font-bold">{grade.name}</h4>
                      <p className="text-xs text-on-surface-variant/60 mt-0.5">{grade.subtitle}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${grade.badgeColor}`}>
                      {grade.badge}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface/50 border-b border-outline-variant/20 font-label-lg text-[10px] uppercase tracking-wider text-secondary">
                          <th className="py-4 px-6 md:px-8 font-bold">Plywood Thickness</th>
                          <th className="py-4 px-6 md:px-8 text-right font-bold">Price per sq ft (alternate)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {grade.prices.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="border-b border-outline-variant/10 last:border-0 hover:bg-surface/30 transition-colors font-body-md text-sm text-on-surface"
                          >
                            <td className="py-4 px-6 md:px-8 font-medium">{row.size} Plywood</td>
                            <td className="py-4 px-6 md:px-8 text-right font-bold text-primary">₹ {row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {/* Show Film Face / Shuttering Plywood only in standard tab */}
              {activeTab === 'standard' && (
                <div className="bg-white rounded-3xl border border-outline-variant/30 shadow-sm overflow-hidden">
                  <div className="p-6 md:p-8 bg-surface-container-lowest border-b border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="font-headline-md text-xl text-primary font-bold">Film Face (Shuttering Plywood)</h4>
                      <p className="text-xs text-on-surface-variant/60 mt-0.5">Heavy duty construction &amp; formwork</p>
                    </div>
                    <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border bg-slate-50 text-slate-700 border-slate-200/50">
                      IS:4990 Shuttering
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface/50 border-b border-outline-variant/20 font-label-lg text-[10px] uppercase tracking-wider text-secondary">
                          <th className="py-4 px-6 md:px-8 font-bold">Weight Category</th>
                          <th className="py-4 px-6 md:px-8 font-bold">Chemical Bonding</th>
                          <th className="py-4 px-6 md:px-8 text-right font-bold">Price per sq ft</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filmFacePrices.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="border-b border-outline-variant/10 last:border-0 hover:bg-surface/30 transition-colors font-body-md text-sm text-on-surface"
                          >
                            <td className="py-4 px-6 md:px-8 font-medium">{row.weight} Board</td>
                            <td className="py-4 px-6 md:px-8 text-on-surface-variant/80 text-xs">{row.bonding}</td>
                            <td className="py-4 px-6 md:px-8 text-right font-bold text-primary">₹ {row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Page Footer Note */}
              <div className="bg-surface-container-low/40 rounded-2xl border border-outline-variant/20 p-6 flex items-start gap-4 text-xs text-on-surface-variant leading-relaxed">
                <span className="material-symbols-outlined text-primary shrink-0">info</span>
                <div>
                  <p className="font-bold text-primary mb-1">Standard Terms &amp; Conditions</p>
                  <ul className="list-disc pl-4 space-y-1 mt-1 text-[11px]">
                    <li>All rates are ex-factory, exclusive of GST and local transit freight.</li>
                    <li>Calibration tolerance limits conform strictly to global standard deviations (+/- 0.2mm).</li>
                    <li>25-Year Guarantee covers core delamination, warp, or manufacturing structural defaults under normal installation protocols.</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
