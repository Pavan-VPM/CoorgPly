import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ────────────────────── static wrapper (no animations) ─────────────────── */

function Reveal({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

/* ───────────────────────── step data ─────────────────────────────── */

const steps = [
  {
    num: '01',
    title: 'Premium Timber Selection',
    tag: 'ORIGIN',
    text: 'Our manufacturing journey begins with the careful selection of high-quality timber sourced from trusted suppliers. Every log is inspected to ensure it meets our strict standards for strength, density, and durability.',
    image: '/timber_selection.webp',
    icon: 'park',
  },
  {
    num: '02',
    title: 'Log Preparation',
    text: 'The selected logs are debarked. This process makes it ideal for producing smooth, uniform veneers while preserving the natural strength of the wood.',
    image: '/log_prep.webp',
    icon: 'carpenter',
  },
  {
    num: '03',
    title: 'Precision Veneer Peeling',
    text: 'Using state-of-the-art rotary peeling technology, the logs are converted into continuous veneer sheets of consistent thickness. This ensures excellent dimensional accuracy and optimal material utilization.',
    image: '/veneer_peeling.webp',
    icon: 'layers',
  },

  {
    num: '04',
    title: 'Quality Grading & Inspection',
    text: 'Each veneer is individually inspected and graded based on its appearance, strength, and structural integrity. Only veneers that meet our quality standards move forward in the production process.',
    image: '/quality_grading.png',
    icon: 'verified',
  },
  {
    num: '05',
    title: 'Controlled Veneer Drying',
    text: 'The veneers are dried under carefully monitored temperatures to achieve the ideal moisture content. Proper drying enhances adhesive bonding, improves stability, and contributes to the overall durability of the finished plywood.',
    image: '/veneer_drying.webp',
    icon: 'local_fire_department',
  },
  {
    num: '06',
    title: 'Advanced Adhesive Application',
    text: 'High-performance resin systems are evenly applied using precision glue spreaders to ensure superior bonding between every layer. The choice of adhesive is tailored to the intended application.',
    image: '/adhesive_application.webp',
    icon: 'water_drop',
  },
  {
    num: '07',
    title: 'Cross Panel Assembly',
    text: 'The veneers are carefully arranged with alternating grain directions. This cross-laminated construction significantly enhances strength, dimensional stability, and resistance to warping or cracking.',
    image: '/cross_lamination.webp',
    icon: 'grid_view',
  },
  {
    num: '08',
    title: 'High-Pressure Hot Pressing',
    tag: 'THE TRANSFORMATION',
    text: 'The assembled panels are compressed under precisely controlled heat and pressure. This process permanently bonds the veneers into a solid, high-strength plywood panel capable of withstanding demanding applications.',
    image: '/hot_pressing.webp',
    icon: 'compress',
  },
  {
    num: '09',
    title: 'Precision Finishing',
    text: 'After pressing, each panel is trimmed, calibrated, and sanded to achieve accurate dimensions, consistent thickness, and a smooth surface suitable for furniture, interiors, and construction.',
    image: '/precision_finishing.webp',
    icon: 'straighten',
  },
  {
    num: '10',
    title: 'Rigorous Quality Assurance',
    text: 'Every finished panel undergoes comprehensive quality inspections to verify strength, bonding performance, dimensional accuracy, and overall finish. Only products that meet our stringent quality standards are approved for dispatch.',
    image: '/quality_assurance.webp',
    icon: 'task_alt',
  },
];

/* ═══════════════════════ COMPONENT ═══════════════════════════════ */

export default function Manufacturing() {
  /* ── active-step tracking for the vertical progress bar ────────── */
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.stepIdx);
            setActiveStep((prev) => Math.max(prev, idx));
          }
        });
      },
      { threshold: 0.3 },
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ════════════════════ HERO ════════════════════════════════ */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-end pb-16 sm:pb-20 pt-24 sm:pt-32 overflow-hidden">
        {/* Background image + overlays */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Coorg Ply manufacturing facility"
            className="w-full h-full object-cover"
            src="/manufacturing_facility.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-primary/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 px-4 sm:px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2 font-label-lg text-[10px] sm:text-[11px] text-white/90 tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-fixed-dim" />
              Precision Crafted. Quality Assured.
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-body-lg font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[68px] text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight max-w-4xl">
              The Art &amp; Science of<br />
              <span className="text-white/80 font-normal">Our Manufacturing</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="font-body-md sm:font-body-lg text-white/75 max-w-2xl mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg">
              At Coorg Ply, every sheet of plywood is manufactured using advanced technology, premium raw materials, and stringent quality control measures — from carefully selected timber to the final finished panel.
            </p>
          </Reveal>
          <Reveal>
            <a
              className="group inline-flex items-center justify-center gap-3 bg-white text-primary px-6 sm:px-8 py-3.5 sm:py-4 font-label-lg text-xs sm:text-label-lg uppercase tracking-[0.15em] hover:bg-primary-fixed-dim transition-all shadow-2xl w-full sm:w-auto text-center"
              href="#process-start"
            >
              Explore the Journey
              <span className="material-symbols-outlined text-lg">south</span>
            </a>
          </Reveal>

          {/* Quick stats ribbon */}
          <Reveal>
            <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-2 sm:gap-10 max-w-2xl border-t border-white/15 pt-6 sm:pt-8">
              {[
                { label: 'Manufacturing Steps', value: '10' },
                { label: 'Years of Heritage', value: '40+' },
                { label: 'Quality Checkpoints', value: '15+' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-body-lg text-xl sm:text-3xl text-white font-bold">{s.value}</p>
                  <p className="font-label-md text-[8px] sm:text-[10px] text-white/60 uppercase tracking-wider sm:tracking-widest mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ PROCESS JOURNEY ═════════════════════════ */}
      <section className="bg-surface-container-lowest relative" id="process-start">
        {/* Section header */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 md:pt-28 pb-8">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8 border-b border-outline-variant/30 pb-12">
              <div>
                <span className="font-label-lg text-secondary tracking-[0.25em] uppercase block mb-4">The Process</span>
                <h2 className="font-body-lg font-bold text-3xl md:text-4xl text-primary max-w-xl tracking-tight">
                  A Master Journey from Timber to Surface
                </h2>
              </div>
              <div className="text-on-surface-variant font-label-lg max-w-xs md:text-right text-sm">
                CHRONOLOGY OF CRAFTSMANSHIP<br />EST. 1982
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Steps with vertical timeline ───────────────────────── */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24 relative">
          {/* Vertical progress line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-outline-variant/20" />
            <div
              className="absolute top-0 left-0 w-full bg-primary"
              style={{ height: `${Math.min(100, ((activeStep + 1) / steps.length) * 100)}%` }}
            />
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const hasImage = !!step.image;

              return (
                <div
                  key={step.num}
                  ref={(el) => (stepRefs.current[idx] = el)}
                  data-step-idx={idx}
                  className="relative"
                >
                  {/* Timeline dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-20">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-label-lg text-sm font-bold shadow-lg ${activeStep >= idx
                        ? 'bg-primary text-on-primary scale-100'
                        : 'bg-surface-container border-2 border-outline-variant text-on-surface-variant scale-90'
                        }`}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${isEven ? '' : 'lg:[direction:rtl]'}`}>
                    {/* Text side */}
                    <Reveal className={`${isEven ? 'lg:pr-20 lg:text-right' : 'lg:pl-20 lg:text-left'} [direction:ltr]`}>
                      {step.tag && (
                        <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 font-label-md text-[10px] uppercase tracking-[0.2em] rounded-full mb-5 font-bold">
                          {step.tag}
                        </span>
                      )}

                      {/* Mobile step number */}
                      <div className="lg:hidden flex items-center gap-4 mb-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-label-md text-xs font-bold ${activeStep >= idx ? 'bg-primary text-on-primary' : 'bg-surface-container border border-outline-variant text-on-surface-variant'
                            }`}
                        >
                          {step.num}
                        </div>
                        <div className="flex-1 h-px bg-outline-variant/30" />
                      </div>

                      <h3 className="font-body-lg font-bold text-xl sm:text-2xl md:text-3xl text-primary mb-3 sm:mb-4 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed text-left sm:text-justify text-sm sm:text-base">{step.text}</p>
                    </Reveal>

                    {/* Image / visual side */}
                    <Reveal className="[direction:ltr]">
                      {hasImage ? (
                        <div className="relative group overflow-hidden rounded-lg shadow-xl">
                          <img
                            alt={step.title}
                            className="w-full max-h-[260px] sm:max-h-[400px] object-cover block"
                            src={step.image}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-label-md text-[9px] sm:text-[10px] uppercase tracking-widest text-primary font-bold">
                            Step {step.num}
                          </div>
                        </div>
                      ) : (
                        /* No image: decorative visual card */
                        <div className={`relative p-6 sm:p-10 md:p-14 rounded-lg overflow-hidden ${idx % 4 < 2 ? 'bg-primary text-on-primary' : 'bg-surface-container-high border border-outline-variant/20'}`}>
                          <span
                            className="absolute -right-4 -bottom-4 font-headline-display text-[100px] sm:text-[140px] leading-none select-none pointer-events-none"
                            style={{ opacity: idx % 4 < 2 ? 0.06 : 0.04 }}
                          >
                            {step.num}
                          </span>
                          <span
                            className="material-symbols-outlined mb-4 sm:mb-6 block"
                            style={{
                              fontSize: '40px',
                              color: idx % 4 < 2 ? 'rgba(177,205,192,0.6)' : 'rgba(5,30,22,0.15)',
                            }}
                          >
                            {step.icon}
                          </span>
                          <p className={`font-label-lg text-xs sm:text-sm uppercase tracking-widest ${idx % 4 < 2 ? 'text-primary-fixed-dim' : 'text-primary'}`}>
                            Step {step.num}
                          </p>
                          <h4 className={`font-headline-md text-lg sm:text-xl mt-2 ${idx % 4 < 2 ? '' : 'text-primary'}`}>
                            {step.title}
                          </h4>
                        </div>
                      )}
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ QUALITY METRICS ═════════════════════════ */}
      <section className="py-16 sm:py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-margin-desktop">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="font-label-lg text-secondary tracking-[0.25em] uppercase block mb-3 sm:mb-4 text-xs">Performance</span>
              <h2 className="font-body-lg font-bold text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight">Quality Metrics That Matter</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
            {/* Metric 1 — Calibrated Thickness */}
            <Reveal>
              <div className="bg-primary text-on-primary p-6 sm:p-10 md:p-12 rounded-xl flex flex-col justify-between overflow-hidden relative group h-full">
                <div className="absolute -right-8 -bottom-8 opacity-[0.07]">
                  <span className="material-symbols-outlined text-[100px] sm:text-[140px]">straighten</span>
                </div>
                <div>
                  <span className="font-label-lg opacity-60 uppercase tracking-widest mb-3 sm:mb-5 block text-xs">Standard</span>
                  <h4 className="font-body-lg font-semibold mb-2 sm:mb-3 text-primary-fixed text-lg sm:text-xl">Calibrated Thickness</h4>
                  <p className="font-body-md opacity-75 text-xs sm:text-sm leading-relaxed">
                    Our state-of-the-art wide belt sanders achieve thickness tolerance levels that exceed international standards.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 flex items-baseline gap-2">
                  <span className="font-body-lg text-3xl sm:text-4xl md:text-5xl text-primary-fixed font-bold">
                    ±0.3
                  </span>
                  <span className="font-label-md text-[10px] sm:text-xs uppercase tracking-wider opacity-80">MM Tolerance</span>
                </div>
              </div>
            </Reveal>

            {/* Metric 2 — Termite Resistance */}
            <Reveal>
              <div className="bg-white border border-outline-variant/30 p-10 md:p-12 rounded-xl flex flex-col justify-between overflow-hidden relative group shadow-sm h-full">
                <div className="absolute -right-8 -bottom-8 opacity-[0.04]">
                  <span className="material-symbols-outlined text-[140px]" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
                </div>
                <div>
                  <span className="font-label-lg text-primary uppercase tracking-widest mb-5 block text-xs">Protection</span>
                  <h4 className="font-body-lg font-semibold mb-3 text-primary text-xl">Termite Resistance</h4>
                  <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                    Every layer is chemically treated with Glue Line Poisoning (GLP) technology for 100% borer immunity.
                  </p>
                </div>
                <div className="mt-8 flex items-baseline gap-2 text-primary">
                  <span className="font-body-lg text-4xl md:text-5xl font-bold">100%</span>
                  <span className="font-label-md text-xs uppercase tracking-wider">Immunity</span>
                </div>
              </div>
            </Reveal>

            {/* Metric 3 — Grade A Core */}
            <Reveal>
              <div className="bg-white border border-outline-variant/30 p-10 md:p-12 rounded-xl flex flex-col justify-between overflow-hidden relative group shadow-sm h-full">
                <div className="absolute -right-8 -bottom-8 opacity-[0.04]">
                  <span className="material-symbols-outlined text-[140px]" style={{ fontVariationSettings: "'FILL' 1" }}>forest</span>
                </div>
                <div>
                  <span className="font-label-lg text-primary uppercase tracking-widest mb-5 block text-xs">Structure</span>
                  <h4 className="font-body-lg font-semibold mb-3 text-primary text-xl">Grade A Core</h4>
                  <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                    We use only full-panel core veneers, eliminating gaps and overlaps to prevent internal blistering.
                  </p>
                </div>
                <div className="mt-8 flex items-baseline gap-2 text-primary">
                  <span className="font-body-lg text-4xl md:text-5xl font-bold">GAP</span>
                  <span className="font-label-md text-xs uppercase tracking-wider">Free Veneers</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ CRAFTED FOR PERFORMANCE ════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Full-bleed background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Finished plywood application"
            className="w-full h-full object-cover"
            src="/finished_showcase.webp"
          />
          <div className="absolute inset-0 bg-primary/90 z-10" />
        </div>

        <div className="relative z-20 py-16 sm:py-24 lg:py-section-gap px-4 sm:px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
            <Reveal>
              <div>
                <span className="font-label-lg text-primary-fixed-dim tracking-[0.25em] uppercase block mb-3 sm:mb-4 text-xs">Commitment</span>
                <h2 className="font-body-lg font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-6 sm:mb-8 tracking-tight">Crafted for Performance</h2>
                <p className="font-body-md sm:font-body-lg text-white/75 mb-6 sm:mb-10 leading-relaxed text-sm sm:text-base">
                  Our commitment to innovation, precision manufacturing, and uncompromising quality enables us to produce plywood that meets the expectations of architects, designers, contractors, furniture manufacturers, and homeowners alike.
                </p>
                <p className="font-body-sm sm:font-body-md text-white/55 mb-8 sm:mb-12 leading-relaxed text-xs sm:text-sm">
                  Every sheet of Coorg Ply reflects our dedication to excellence, delivering exceptional strength, reliability, and lasting value for every project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <Link
                    to="/products"
                    className="bg-white text-primary px-6 sm:px-8 py-3.5 sm:py-4 font-label-lg text-xs sm:text-label-lg font-bold uppercase tracking-wider hover:bg-primary-fixed-dim transition-all shadow-lg text-center"
                  >
                    View Catalogue
                  </Link>
                  <Link
                    to="/contact"
                    className="border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-label-lg text-xs sm:text-label-lg uppercase tracking-wider hover:bg-white/10 transition-all text-center"
                  >
                    Request Samples
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative mt-4 lg:mt-0">
                {/* Decorative frame */}
                <div className="absolute -inset-2 sm:-inset-3 border border-white/10 rounded-lg pointer-events-none" />
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <img
                    alt="Board texture close-up"
                    className="rounded-lg shadow-xl w-full aspect-square object-cover"
                    src="/board_texture.webp"
                  />
                  <img
                    alt="Manufacturing facility"
                    className="rounded-lg shadow-xl w-full aspect-square object-cover mt-4 sm:mt-8"
                    src="/coorg_plywood_sheet_1.webp"
                  />
                  <img
                    alt="Plywood quality inspection"
                    className="rounded-lg shadow-xl w-full aspect-square object-cover -mt-4 sm:-mt-8"
                    src="/quality_assurance.webp"
                  />
                  <img
                    alt="Cross lamination"
                    className="rounded-lg shadow-xl w-full aspect-square object-cover"
                    src="/coorg_plywood_sheet_2.webp"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════════ FINAL CTA ═════════════════════════════ */}
      <section className="relative bg-surface-container-lowest py-16 sm:py-24 md:py-32 overflow-hidden">
        {/* Subtle radial gradient decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,76,58,0.05),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(163,90,31,0.04),transparent_50%)] pointer-events-none" />

        <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-margin-desktop relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="font-label-lg text-secondary tracking-[0.25em] uppercase block mb-3 sm:mb-4 text-xs">Take the next step</span>
              <h2 className="font-body-lg font-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-4 sm:mb-6 tracking-tight">
                Build with Uncompromising Integrity
              </h2>
              <p className="font-body-md sm:font-body-lg text-on-surface-variant mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base">
                Request a physical sample kit to experience the calibrated finish and structural density of our premium architectural panels.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
                <Link
                  to="/contact"
                  className="bg-primary text-on-primary px-8 sm:px-10 py-3.5 sm:py-4 font-label-lg uppercase text-xs sm:text-sm tracking-wider hover:bg-primary-container transition-colors shadow-lg text-center"
                >
                  Request Samples
                </Link>
                <Link
                  to="/technical-specs"
                  className="border border-primary/30 text-primary px-8 sm:px-10 py-3.5 sm:py-4 font-label-lg uppercase text-xs sm:text-sm tracking-wider hover:bg-primary/5 transition-colors text-center"
                >
                  View Technical Specs
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
