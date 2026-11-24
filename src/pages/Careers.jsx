import React, { useEffect, useState } from 'react';

export default function Careers() {
  const [activeJob, setActiveJob] = useState(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -20px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-mask');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const principles = [
    {
      num: '01',
      title: 'Heritage & Trust',
      subtitle: 'Rooted since 1958',
      desc: 'Over four decades of honest timber craftsmanship. We honor our origins, our community, and the generations of structural trust placed in our wood.',
      icon: 'verified'
    },
    {
      num: '02',
      title: 'Sub-Millimeter Precision',
      subtitle: 'Quad-calibrated tolerance',
      desc: 'Zero tolerance for uneven surfaces. High-tonnage hydraulic pressing and micrometer calibration (±0.1mm) trusted by premier architects.',
      icon: 'tune'
    },
    {
      num: '03',
      title: 'Artisan Mentorship',
      subtitle: 'Master guild culture',
      desc: 'Work directly alongside 30-year veteran sawyers and chemical engineers. Rare timber grading and adhesive arts passed from hands to hands.',
      icon: 'handshake'
    },
    {
      num: '04',
      title: 'Campus & Wellbeing',
      subtitle: 'Virajpet, Coorg Hills',
      desc: 'Clean air and green living amidst Coorg’s hills. Dust-extracted clean facilities, full family healthcare, and competitive performance incentives.',
      icon: 'nature_people'
    }
  ];

  const openPositions = [
    {
      id: 'qa-supervisor',
      title: 'Plant Quality Assurance Supervisor',
      department: 'Manufacturing & QC',
      location: 'Virajpet, Coorg, Karnataka',
      type: 'Full-time',
      experience: '3 - 6 Years',
      description: 'Oversee veneer grading, boiling water resistance tests, calibration tolerances, and ensure compliance with ISO and IS 710 / IS 303 standards.',
      responsibilities: [
        'Perform cyclic boiling water resistance (BWR/BWP) test audits',
        'Enforce ±0.1mm quad-calibration thickness tolerances across batches',
        'Supervise log peeling, face veneer inspection and glue-line integrity',
        'Maintain daily quality logs and compliance documentation'
      ]
    },
    {
      id: 'sales-exec',
      title: 'Sales & Business Development Executive',
      department: 'Sales & Distribution',
      location: 'Bangalore / South India',
      type: 'Full-time',
      experience: '2 - 5 Years',
      description: 'Build relationships with top-tier architects, interior designers, commercial contractors, and dealer networks to promote Coorg Ply calibrated products.',
      responsibilities: [
        'Engage high-end interior designers and architectural project leads',
        'Drive secondary retail distribution across Karnataka, Kerala & Tamil Nadu',
        'Present technical specs and mockups for commercial developments',
        'Achieve quarterly sales benchmarks with attractive commission bonuses'
      ]
    },
    {
      id: 'machine-operator',
      title: 'Industrial Machine Operator & Maintenance Tech',
      department: 'Plant Operations',
      location: 'Virajpet, Coorg, Karnataka',
      type: 'Full-time',
      experience: '2 - 4 Years',
      description: 'Operate and maintain high-tonnage hydraulic hot presses, veneer peeling lathes, sanders, and calibration machinery.',
      responsibilities: [
        'Operate multi-daylight hydraulic hot press machines with precision cycle times',
        'Perform preventive maintenance, hydraulic oil checks and sensor calibration',
        'Diagnose electrical and pneumatic anomalies in real time',
        'Maintain zero-downtime manufacturing safety standards'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section - Screen-fitted, minimal & elegant */}
      <section className="relative min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#eaf1ec] pt-20 md:pt-24 pb-6 md:pb-8 border-b border-[#d8e3dc]">
        {/* Subtle decorative background ambience */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(205,233,219,0.5),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(245,179,53,0.08),transparent_65%)] pointer-events-none" />

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-14 items-center">

            {/* Left Column - Copy & CTA */}
            <div className="lg:col-span-5 xl:col-span-5 reveal-on-scroll py-2">
              <span className="font-label-lg text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#486355] mb-2 sm:mb-3 block">
                CAREERS
              </span>
              <h1 className="font-headline-display text-3xl sm:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[60px] font-bold text-[#051e16] tracking-tight leading-[1.08] mb-3 sm:mb-4 lg:mb-5">
                Make it happen <br className="hidden sm:inline" />
                with us!
              </h1>
              <p className="font-body-md text-[#3f4a44] text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-6 lg:mb-8">
                We make great things happen, and we make them matter — shaping sustainable spaces, architectural precision, and timber excellence for the world.
              </p>
              <div>
                <a
                  href="#philosophy"
                  className="inline-flex items-center justify-center bg-[#f5b335] hover:bg-[#e7a323] text-[#051e16] font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
                >
                  <span>Explore Our Philosophy</span>
                </a>
              </div>
            </div>

            {/* Right Column - Team Photo Collage */}
            <div className="lg:col-span-7 xl:col-span-7 reveal-on-scroll reveal-delay-200 flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5 xl:gap-4.5 w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[480px] xl:max-w-[540px] 2xl:max-w-[580px]">

                {/* Inner Left Column: 2 Cards (Square + Tall) */}
                <div className="flex flex-col gap-3 sm:gap-3.5 xl:gap-4.5 justify-between">
                  {/* Card 1: Top Left */}
                  <div className="group relative bg-[#cfe2f3] rounded-2xl sm:rounded-[26px] overflow-hidden aspect-[1.12/1] max-h-[160px] sm:max-h-[190px] xl:max-h-[210px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-1.jpg"
                      alt="Coorg Ply Team Member"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating Glass Badge (Globe) */}
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/75 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-slate-700">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                  </div>

                  {/* Card 2: Bottom Left (Tall) */}
                  <div className="group relative bg-[#fde3b3] rounded-2xl sm:rounded-[26px] overflow-hidden aspect-[0.76/1] max-h-[230px] sm:max-h-[265px] xl:max-h-[295px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-2.jpg"
                      alt="Coorg Ply Team Member"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating Glass Badge (Rocket) */}
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/75 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-slate-700">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Inner Right Column: 3 Cards */}
                <div className="flex flex-col gap-3 sm:gap-3.5 xl:gap-4.5 justify-between">
                  {/* Card 3: Top Right */}
                  <div className="group relative bg-[#fae4ce] rounded-2xl sm:rounded-[26px] overflow-hidden aspect-[1/0.92] max-h-[125px] sm:max-h-[145px] xl:max-h-[160px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-3.jpg"
                      alt="Coorg Ply Team Member"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating Glass Badge (Smile) */}
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/75 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-slate-700">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Card 4: Middle Right */}
                  <div className="group relative bg-[#d8eedf] rounded-2xl sm:rounded-[26px] overflow-hidden aspect-[1/0.92] max-h-[125px] sm:max-h-[145px] xl:max-h-[160px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-4.jpg"
                      alt="Coorg Ply Team Member"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating Glass Badge (Thumbs Up) */}
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/75 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-slate-700">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
                      </svg>
                    </div>
                  </div>

                  {/* Card 5: Bottom Right */}
                  <div className="group relative bg-[#dce7f5] rounded-2xl sm:rounded-[28px] overflow-hidden aspect-[1/0.92] max-h-[125px] sm:max-h-[145px] xl:max-h-[160px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-5.jpg"
                      alt="Coorg Ply Team Member"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating Glass Badge (Heart) */}
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/75 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-slate-700">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────── ELEGANT & MINIMAL PHILOSOPHY SECTION ──────────────── */}
      <section id="philosophy" className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1360px] mx-auto scroll-mt-20">
        
        {/* Understated Editorial Header */}
        <div className="max-w-2xl mb-14 lg:mb-20 reveal-on-scroll">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#a35a1f] uppercase block mb-3">
            Our Philosophy
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#051e16] font-bold tracking-tight leading-tight">
            The Standards We Build By.
          </h2>
          <p className="font-body-md text-[#4a544e] text-base mt-4 leading-relaxed">
            We believe enduring woodwork is born from quiet discipline, ethical forestry stewardship, and unhurried precision.
          </p>
        </div>

        {/* Minimalist 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {principles.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 sm:p-9 border border-[#e5ebe6] hover:border-[#a35a1f]/40 hover:shadow-[0_16px_36px_rgba(5,30,22,0.05)] transition-all duration-300 flex flex-col justify-between reveal-on-scroll"
            >
              <div>
                {/* Top Row: Numeral & Icon */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#eef2ee]">
                  <span className="font-headline-display text-xl font-bold text-[#a35a1f]/80 group-hover:text-[#a35a1f] transition-colors">
                    {item.num}
                  </span>
                  <span className="material-symbols-outlined text-xl text-[#051e16]/30 group-hover:text-[#051e16] transition-colors">
                    {item.icon}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-headline-display text-xl sm:text-2xl font-bold text-[#051e16] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <span className="text-xs font-medium text-[#a35a1f] tracking-wide block mb-4">
                  {item.subtitle}
                </span>

                {/* Description */}
                <p className="font-body-md text-sm text-[#4a544e] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Elegant hairline accent line */}
              <div className="w-8 h-[2px] bg-[#e2eae4] group-hover:w-16 group-hover:bg-[#a35a1f] transition-all duration-500 mt-8 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────── OPEN POSITIONS SECTION ──────────────── */}
      <section id="openings" className="py-20 lg:py-28 bg-[#f5f9f6] border-y border-[#d8e3dc] scroll-mt-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 reveal-on-scroll gap-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#a35a1f] uppercase block mb-3">
                Opportunities
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-5xl text-[#051e16] font-bold">
                Current Openings
              </h2>
            </div>
            <p className="text-[#4a544e] text-sm sm:text-base max-w-md">
              Looking for a custom role or speculative application? We welcome driven timber specialists, engineers, and sales leaders.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((job) => {
              const isOpen = activeJob === job.id;
              return (
                <div
                  key={job.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#a35a1f] shadow-lg ring-1 ring-[#a35a1f]/20' : 'border-[#e0e8e2] shadow-sm hover:border-[#051e16]/30 hover:shadow-md'
                  }`}
                >
                  <div
                    onClick={() => setActiveJob(isOpen ? null : job.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e7f2eb] text-[#0e5c3c]">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#faf3e8] text-[#8e4c17]">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f0f3f2] text-[#424845]">
                          Exp: {job.experience}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-[#051e16]">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#5a645e]">
                        <span className="material-symbols-outlined text-base text-[#a35a1f]">location_on</span>
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={`mailto:coorgplyindustries@gmail.com?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 bg-[#051e16] hover:bg-[#153a2e] text-white px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
                      >
                        <span>Apply</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                      <button
                        type="button"
                        className="w-10 h-10 rounded-xl bg-[#f2f6f4] hover:bg-[#e4ede8] flex items-center justify-center text-[#051e16] transition-colors"
                        aria-label="Toggle details"
                      >
                        <span className={`material-symbols-outlined text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Expanded Job Responsibilities */}
                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-[#eaf0eb] bg-[#fafcfb] animate-fade-in">
                      <p className="font-body-md text-sm sm:text-base text-[#4a544e] leading-relaxed mb-4">
                        {job.description}
                      </p>
                      <h4 className="font-label-lg uppercase tracking-wider text-xs font-bold text-[#a35a1f] mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {job.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#38413b]">
                            <span className="material-symbols-outlined text-[#1b734c] text-base shrink-0 mt-0.5">check</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-4">
                        <a
                          href={`mailto:coorgplyindustries@gmail.com?subject=Job%20Application%20-%20${encodeURIComponent(job.title)}`}
                          className="inline-flex items-center gap-2 bg-[#f5b335] hover:bg-[#e7a323] text-[#051e16] font-semibold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
                        >
                          <span>Email Resume for this Role</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
