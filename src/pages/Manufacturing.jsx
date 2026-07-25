import React from 'react';
import { Link } from 'react-router-dom';

export default function Manufacturing() {
  const steps = [
    {
      num: '01',
      title: 'Premium Timber Selection',
      tag: 'ORIGIN',
      text: 'Our manufacturing journey begins with the careful selection of high-quality timber sourced from trusted suppliers. Every log is inspected to ensure it meets our strict standards for strength, density, and durability.',
      image: '/timber_selection.png',
      layout: 'split-dynamic'
    },
    {
      num: '02',
      title: 'Log Preparation',
      text: 'The selected logs are debarked. This process makes it ideal for producing smooth, uniform veneers while preserving the natural strength of the wood.',
      image: '/log_prep.png',
      layout: 'inset'
    },
    {
      num: '03',
      title: 'Precision Veneer Peeling',
      text: 'Using state-of-the-art rotary peeling technology, the logs are converted into continuous veneer sheets of consistent thickness. This ensures excellent dimensional accuracy and optimal material utilization.',
      layout: 'grid-light'
    },
    {
      num: '04',
      title: 'Controlled Veneer Drying',
      text: 'The veneers are dried under carefully monitored temperatures to achieve the ideal moisture content. Proper drying enhances adhesive bonding, improves stability, and contributes to the overall durability of the finished plywood.',
      layout: 'grid-dark'
    },
    {
      num: '05',
      title: 'Quality Grading & Inspection',
      text: 'Each veneer is individually inspected and graded based on its appearance, strength, and structural integrity. Only veneers that meet our quality standards move forward in the production process.',
      image: '/quality_grading.png',
      layout: 'full-bleed'
    },
    {
      num: '06',
      title: 'Advanced Adhesive Application',
      text: 'High-performance resin systems are evenly applied using precision glue spreaders to ensure superior bonding between every layer. The choice of adhesive is tailored to the intended application.',
      image: '/wood_grain.png',
      layout: 'textured-right',
      stepLabel: 'STEP 06'
    },
    {
      num: '07',
      title: 'Cross-Laminated Panel Assembly',
      text: 'The veneers are carefully arranged with alternating grain directions. This cross-laminated construction significantly enhances strength, dimensional stability, and resistance to warping or cracking.',
      image: '/cross_lamination.png',
      layout: 'textured-left',
      stepLabel: 'STEP 07'
    },
    {
      num: '08',
      title: 'High-Pressure Hot Pressing',
      text: 'The assembled panels are compressed under precisely controlled heat and pressure. This process permanently bonds the veneers into a solid, high-strength plywood panel capable of withstanding demanding applications.',
      image: '/hot_pressing.png',
      layout: 'power-phase',
      tag: 'THE TRANSFORMATION'
    },
    {
      num: '09',
      title: 'Precision Finishing',
      text: 'After pressing, each panel is trimmed, calibrated, and sanded to achieve accurate dimensions, consistent thickness, and a smooth surface suitable for furniture, interiors, and construction.',
      layout: 'final-left'
    },
    {
      num: '10',
      title: 'Rigorous Quality Assurance',
      text: 'Every finished panel undergoes comprehensive quality inspections to verify strength, bonding performance, dimensional accuracy, and overall finish. Only products that meet our stringent quality standards are approved for dispatch.',
      layout: 'final-right'
    }
  ];

  return (
    <>
      {/* Hero Section / Immersive Manufacturing Experience */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Manufacturing process hero image" className="w-full h-full object-cover" src="/manufacturing_facility.png" />
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>
        <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-surface-container-lowest">
          <div className="max-w-4xl">
            <span className="font-label-lg text-label-lg tracking-[0.2em] mb-6 block uppercase opacity-80">Precision Crafted. Quality Assured.</span>
            <h1 className="font-headline-display text-4xl sm:text-5xl md:text-headline-display mb-8 leading-tight">Our Manufacturing Process</h1>
            <p className="font-body-lg text-body-lg mb-10 opacity-90 leading-relaxed max-w-2xl">
              At Coorg Ply, every sheet of plywood is manufactured using advanced technology, premium raw materials, and stringent quality control measures. From carefully selected timber to the final finished panel, each stage of our manufacturing process is designed to ensure exceptional strength, durability, and long-lasting performance.
            </p>
            <a className="inline-flex items-center space-x-4 bg-primary-fixed-dim text-primary px-8 py-4 font-label-lg text-label-lg hover:bg-surface-container-lowest transition-all group" href="#process-start">
              <span>EXPLORE THE JOURNEY</span>
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">south</span>
            </a>
          </div>
        </div>
      </section>

      {/* The Process Journey */}
      <section className="bg-surface pb-section-gap" id="process-start">
        {/* Journey Narrative Start */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 md:pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-outline-variant/30 pb-12">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary max-w-xl">A Master Journey from Timber to Surface</h2>
            <div className="text-on-surface-variant font-label-lg max-w-xs md:text-right">
              CHRONOLOGY OF CRAFTSMANSHIP<br />
              EST. 1982
            </div>
          </div>
        </div>

        {/* 10 Step Journey */}
        <div className="flex flex-col space-y-0">

          {/* Step 1: Split Dynamic */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 relative h-[300px] md:h-[500px]">
              <img alt={steps[0].title} className="w-full h-full object-cover" src={steps[0].image} />
            </div>
            <div className="md:col-span-5 px-margin-mobile md:px-margin-desktop py-12 md:py-16 md:pl-16">
              <span className="text-primary/60 font-label-lg mb-4 block">{steps[0].tag}</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-6">{steps[0].title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">{steps[0].text}</p>
            </div>
          </div>

          {/* Step 2: Inset Content */}
          <div className="bg-surface-container-low py-12 md:py-20 px-margin-mobile md:px-margin-desktop">
            <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-4xl font-headline-md text-primary bg-surface p-4 border border-outline-variant/30">{steps[1].num}</span>
                  <h3 className="font-headline-md text-headline-md text-primary">{steps[1].title}</h3>
                </div>
                <p className="font-body-md text-on-surface-variant leading-relaxed">{steps[1].text}</p>
              </div>
              <div className="order-1 md:order-2">
                <img alt={steps[1].title} className="w-full aspect-video object-cover shadow-xl" src={steps[1].image} />
              </div>
            </div>
          </div>

          {/* Step 3 & 4: Compact Grid Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-y border-outline-variant/20">
            <div className="p-8 sm:p-16 border-r border-outline-variant/20 flex flex-col justify-center bg-surface-container-lowest">
              <span className="text-primary font-bold text-5xl mb-8 opacity-20">{steps[2].num}</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-6">{steps[2].title}</h3>
              <p className="font-body-md text-on-surface-variant">{steps[2].text}</p>
            </div>
            <div className="p-8 sm:p-16 flex flex-col justify-center bg-primary text-surface-container-lowest">
              <span className="text-primary-fixed-dim font-bold text-5xl mb-8 opacity-40">{steps[3].num}</span>
              <h3 className="font-headline-md text-headline-md mb-6">{steps[3].title}</h3>
              <p className="font-body-md opacity-80">{steps[3].text}</p>
            </div>
          </div>

          {/* Step 5: Full Bleed Storytelling */}
          <div className="relative h-[450px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
            <img alt={steps[4].title} className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" src={steps[4].image} />
            <div className="relative z-10 text-center max-w-2xl px-margin-mobile">
              <div className="mb-8 inline-block border-2 border-surface-container-lowest/30 px-6 py-2 text-surface-container-lowest font-label-lg tracking-[0.4em]">{steps[4].num}</div>
              <h3 className="font-headline-lg text-3xl md:text-headline-lg text-surface-container-lowest mb-8">{steps[4].title}</h3>
              <p className="font-body-lg text-surface-container-lowest/80">{steps[4].text}</p>
            </div>
          </div>

          {/* Step 6 & 7: Alternating Textured Layout */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 space-y-16 md:space-y-24">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <span className="text-secondary font-bold text-lg mb-4 block">{steps[5].stepLabel}</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-6">{steps[5].title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-8">{steps[5].text}</p>
                <div className="w-16 h-1 bg-secondary/30"></div>
              </div>
              <div className="md:w-1/2 bg-surface-container p-4">
                <img alt={steps[5].title} className="w-full aspect-square object-cover grayscale" src={steps[5].image} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="md:w-1/2">
                <span className="text-secondary font-bold text-lg mb-4 block">{steps[6].stepLabel}</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-6">{steps[6].title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">{steps[6].text}</p>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20"></div>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-outline-variant/30 relative group">
                    <img alt={steps[6].title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src={steps[6].image} />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none transition-opacity duration-300 group-hover:opacity-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 8: Power Phase Full Bleed Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-primary-container text-surface">
            <div className="h-[300px] md:h-[600px] overflow-hidden">
              <img alt={steps[7].title} className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-[3s]" src={steps[7].image} />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-16 md:p-24 relative">
              <span className="step-number-outline text-9xl font-bold absolute top-12 right-12 opacity-10">{steps[7].num}</span>
              <span className="font-label-lg tracking-widest text-primary-fixed-dim mb-8">{steps[7].tag}</span>
              <h3 className="font-headline-md text-headline-md mb-8">{steps[7].title}</h3>
              <p className="font-body-lg opacity-80 leading-relaxed">{steps[7].text}</p>
            </div>
          </div>

          {/* Step 9 & 10: Final Precision Conclusion */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface-container-low p-6 sm:p-12 border-t-4 border-primary">
                <div className="flex items-start gap-6 mb-8">
                  <span className="font-headline-md text-3xl text-primary/40">{steps[8].num}</span>
                  <h3 className="font-headline-md text-headline-md text-primary">{steps[8].title}</h3>
                </div>
                <p className="font-body-md text-on-surface-variant">{steps[8].text}</p>
              </div>
              <div className="bg-surface-container-high p-6 sm:p-12 border-t-4 border-secondary">
                <div className="flex items-start gap-6 mb-8">
                  <span className="font-headline-md text-3xl text-primary/40">{steps[9].num}</span>
                  <h3 className="font-headline-md text-headline-md text-primary">{steps[9].title}</h3>
                </div>
                <p className="font-body-md text-on-surface-variant">{steps[9].text}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Crafted for Performance Callout */}
      <section className="bg-primary-container text-surface-container-lowest py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-8">Crafted for Performance</h2>
              <p className="font-body-lg text-body-lg opacity-80 mb-12 leading-relaxed">
                Our commitment to innovation, precision manufacturing, and uncompromising quality enables us to produce plywood that meets the expectations of architects, designers, contractors, furniture manufacturers, and homeowners alike. Every sheet of Coorg Ply reflects our dedication to excellence, delivering exceptional strength, reliability, and lasting value for every project.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/products" className="bg-primary-fixed-dim text-primary px-8 py-4 font-label-lg text-label-lg font-bold hover:scale-105 transition-all text-center inline-block">VIEW CATALOGUE</Link>
                <Link to="/contact" className="border border-surface-container-highest/30 text-surface-container-lowest px-8 py-4 font-label-lg text-label-lg hover:bg-white/10 transition-all text-center inline-block">REQUEST SAMPLES</Link>
              </div>
            </div>
            <div className="relative">
              <img alt="Finished Application Showcase" className="w-full rounded-lg shadow-2xl grayscale contrast-125" src="/finished_showcase.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quality Metrics */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-primary text-on-primary p-12 rounded-xl flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[160px]">straighten</span>
              </div>
              <div>
                <span className="font-label-lg opacity-60 uppercase tracking-widest mb-6 block">Standard</span>
                <h4 className="font-headline-md mb-4 text-primary-fixed">Calibrated Thickness</h4>
                <p className="font-body-md opacity-80">Our state-of-the-art wide belt sanders achieve thickness tolerance levels that exceed international standards.</p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <span className="font-headline-lg text-4xl md:text-5xl text-primary-fixed">±0.01</span>
                <span className="font-label-md">MM TOLERANCE</span>
              </div>
            </div>
            <div className="bg-white border border-outline-variant p-12 rounded-xl flex flex-col justify-between overflow-hidden relative group shadow-sm">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
              </div>
              <div>
                <span className="font-label-lg text-primary uppercase tracking-widest mb-6 block">Protection</span>
                <h4 className="font-headline-md mb-4 text-primary">Termite Resistance</h4>
                <p className="font-body-md text-on-surface-variant">Every layer is chemically treated with Glue Line Poisoning (GLP) technology for 100% borer immunity.</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-primary">
                <span className="font-headline-lg text-4xl md:text-5xl">100%</span>
                <span className="font-label-md">IMMUNITY</span>
              </div>
            </div>
            <div className="bg-white border border-outline-variant p-12 rounded-xl flex flex-col justify-between overflow-hidden relative group shadow-sm">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>forest</span>
              </div>
              <div>
                <span className="font-label-lg text-primary uppercase tracking-widest mb-6 block">Structure</span>
                <h4 className="font-headline-md mb-4 text-primary">Grade A Core</h4>
                <p className="font-body-md text-on-surface-variant">We use only full-panel core veneers, eliminating gaps and overlaps to prevent internal blistering.</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-primary">
                <span className="font-headline-lg text-4xl md:text-5xl">GAP</span>
                <span className="font-label-md">FREE VENEERS</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container via-transparent to-transparent scale-150"></div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-primary mb-8 max-w-3xl mx-auto">Build with Uncompromising Integrity</h2>
          <p className="font-body-lg text-primary-fixed mb-12 max-w-xl mx-auto">Request a physical sample kit to experience the calibrated finish and structural density of our premium architectural panels.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-on-primary text-primary px-10 py-4 font-label-lg rounded-DEFAULT hover:bg-primary-fixed transition-colors shadow-lg text-center">
              Request Samples
            </Link>
            <Link to="/technical-specs" className="border border-on-primary/30 text-on-primary px-10 py-4 font-label-lg rounded-DEFAULT hover:bg-on-primary/10 transition-colors text-center">
              View Technical Specs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
