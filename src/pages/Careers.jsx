import React, { useEffect, useState, useRef } from 'react';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Sales & Business Development (Architects, Dealers & Projects)',
    customRole: '',
    experience: '1 - 3 Years',
    location: '',
    message: ''
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeBase64, setResumeBase64] = useState('');
  const [fileError, setFileError] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const fileInputRef = useRef(null);

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

  const jobRoles = [
    { id: 'sales', label: 'Sales & Business Development (Architects, Dealers & Projects)' },
    { id: 'marketing', label: 'Marketing & Brand Promotion (Field, Trade & Digital)' },
    { id: 'qa-qc', label: 'Plant Quality Assurance & Testing (IS 710 / 303 Standards)' },
    { id: 'plant-ops', label: 'Factory Production & Machine Operator (Press, Lathe, Calibrator)' },
    { id: 'timber-procurement', label: 'Timber Procurement, Forestry & Supply Chain' },
    { id: 'admin-accounts', label: 'Accounts, Billing & Office Administration' },
    { id: 'other', label: 'Other (Please specify role below)' }
  ];

  const experienceOptions = [
    'Fresher / Less than 1 Year',
    '1 - 3 Years',
    '3 - 5 Years',
    '5 - 8 Years',
    '8+ Years'
  ];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateAndProcessFile = (file) => {
    if (!file) return;

    // Check size limit: 5MB
    if (file.size > 5 * 1024 * 1024) {
      setFileError('File size exceeds 5MB limit. Please upload a smaller PDF or Word doc.');
      return;
    }

    const validExtensions = ['.pdf', '.doc', '.docx'];
    const lowerName = file.name.toLowerCase();
    const isValidExtension = validExtensions.some((ext) => lowerName.endsWith(ext));

    if (!isValidExtension) {
      setFileError('Invalid file format. Please upload a PDF, DOC, or DOCX document.');
      return;
    }

    setFileError('');
    setResumeFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setResumeBase64(reader.result);
    };
    reader.onerror = () => {
      setFileError('Failed to read the file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    validateAndProcessFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    validateAndProcessFile(file);
  };

  const removeSelectedFile = () => {
    setResumeFile(null);
    setResumeBase64('');
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setToastMessage('Please complete all required fields.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
      return;
    }

    if (formData.role === 'Other (Please specify role below)' && !formData.customRole.trim()) {
      setToastMessage('Please specify the role you are applying for.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
      return;
    }

    setIsSubmitting(true);

    const effectiveRole =
      formData.role === 'Other (Please specify role below)'
        ? `Other: ${formData.customRole.trim()}`
        : formData.role;

    const payload = {
      formType: 'Career Application',
      timestamp: new Date().toISOString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      role: effectiveRole,
      experience: formData.experience,
      location: formData.location.trim() || 'Not specified',
      message: formData.message.trim() || 'No cover message',
      resumeFileName: resumeFile ? resumeFile.name : 'No resume uploaded',
      resumeFileSize: resumeFile ? `${(resumeFile.size / 1024).toFixed(1)} KB` : '0 KB',
      resumeBase64: resumeBase64 || ''
    };

    const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    if (!googleSheetsUrl) {
      console.warn('VITE_GOOGLE_SHEETS_URL is not defined. Simulating local application submission.');
      setTimeout(() => {
        setIsSubmitting(false);
        setShowModal(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: 'Sales & Business Development (Architects, Dealers & Projects)',
          customRole: '',
          experience: '1 - 3 Years',
          location: '',
          message: ''
        });
        removeSelectedFile();
      }, 1400);
      return;
    }

    try {
      await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      setIsSubmitting(false);
      setShowModal(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'Sales & Business Development (Architects, Dealers & Projects)',
        customRole: '',
        experience: '1 - 3 Years',
        location: '',
        message: ''
      });
      removeSelectedFile();
    } catch (error) {
      console.error('Error submitting application:', error);
      setIsSubmitting(false);
      setToastMessage('Could not submit application. Please contact us directly via email.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  return (
    <>
      {/* Hero Section - Screen-fitted, minimal & elegant */}
      <section className="relative min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center overflow-hidden bg-[linear-gradient(180deg,#eaf1ec_0%,#eaf1ec_70%,#f3f7f4_85%,#fcf9f8_100%)] pt-20 md:pt-24 pb-8 md:pb-12">
        {/* Subtle decorative background ambience */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(205,233,219,0.5),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(245,179,53,0.08),transparent_65%)] pointer-events-none" />

        {/* Bottom smooth color fade into Philosophy section */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-b from-transparent to-[#fcf9f8] pointer-events-none" />

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
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 bg-[#051e16] hover:bg-[#153a2e] text-white font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
                >
                  <span>Apply for Roles</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-y-0.5">
                    arrow_downward
                  </span>
                </a>
                <a
                  href="#philosophy"
                  className="inline-flex items-center justify-center bg-[#f5b335] hover:bg-[#e7a323] text-[#051e16] font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
                >
                  <span>Our Philosophy</span>
                </a>
              </div>
            </div>

            {/* Right Column - Team Photo Collage */}
            <div className="lg:col-span-7 xl:col-span-7 reveal-on-scroll reveal-delay-200 flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5 xl:gap-4.5 w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[480px] xl:max-w-[540px] 2xl:max-w-[580px]">
                {/* Inner Left Column: 2 Cards */}
                <div className="flex flex-col gap-3 sm:gap-3.5 xl:gap-4.5 justify-between">
                  <div className="group relative bg-[#cfe2f3] rounded-2xl sm:rounded-[26px] overflow-hidden aspect-[1.12/1] max-h-[180px] sm:max-h-[215px] xl:max-h-[235px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-1.jpg"
                      alt="Coorg Ply Team Member"
                      style={{ objectPosition: 'center 20%' }}
                      className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/75 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-slate-700">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                  </div>

                  <div className="group relative bg-[#fde3b3] rounded-2xl sm:rounded-[26px] overflow-hidden aspect-[0.76/1] max-h-[250px] sm:max-h-[290px] xl:max-h-[320px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-2.jpg"
                      alt="Coorg Ply Team Member"
                      style={{ objectPosition: 'center 35%' }}
                      className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/75 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-slate-700">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Inner Right Column: 3 Cards */}
                <div className="flex flex-col gap-3 sm:gap-3.5 xl:gap-4.5 justify-between">
                  <div className="group relative bg-[#fae4ce] rounded-2xl sm:rounded-[26px] overflow-hidden aspect-[1.3/1] max-h-[150px] sm:max-h-[175px] xl:max-h-[190px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-3.jpg"
                      alt="Coorg Ply Team Member"
                      style={{ objectPosition: 'center 20%' }}
                      className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/75 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-slate-700">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="group relative bg-[#d8eedf] rounded-2xl sm:rounded-[26px] overflow-hidden aspect-[1.3/1] max-h-[150px] sm:max-h-[175px] xl:max-h-[190px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-4.jpg"
                      alt="Coorg Ply Team Member"
                      style={{ objectPosition: 'center 18%' }}
                      className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/75 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-slate-700">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
                      </svg>
                    </div>
                  </div>

                  <div className="group relative bg-[#dce7f5] rounded-2xl sm:rounded-[28px] overflow-hidden aspect-[1.3/1] max-h-[150px] sm:max-h-[175px] xl:max-h-[190px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/70">
                    <img
                      src="/team/member-5.jpg"
                      alt="Coorg Ply Team Member"
                      style={{ objectPosition: 'center 24%' }}
                      className="w-full h-full object-cover object-[center_24%] group-hover:scale-105 transition-transform duration-500"
                    />
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

        {/* Minimalist 4-Pillar Grid: 2x2 on mobile, 4 columns on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {principles.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 lg:p-8 border border-[#e5ebe6] hover:border-[#a35a1f]/40 hover:shadow-[0_16px_36px_rgba(5,30,22,0.05)] transition-all duration-300 flex flex-col justify-between reveal-on-scroll"
            >
              <div>
                {/* Top Row: Numeral & Icon */}
                <div className="flex items-center justify-between mb-3 pb-2 sm:mb-8 sm:pb-4 border-b border-[#eef2ee]">
                  <span className="font-headline-display text-sm sm:text-xl font-bold text-[#a35a1f]/80 group-hover:text-[#a35a1f] transition-colors">
                    {item.num}
                  </span>
                  <span className="material-symbols-outlined text-lg sm:text-xl text-[#051e16]/30 group-hover:text-[#051e16] transition-colors">
                    {item.icon}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-headline-display text-sm sm:text-xl lg:text-2xl font-bold text-[#051e16] mb-1 sm:mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <span className="text-[10px] sm:text-xs font-medium text-[#a35a1f] tracking-wide block mb-2 sm:mb-4">
                  {item.subtitle}
                </span>

                {/* Description */}
                <p className="font-body-md text-[11px] sm:text-sm text-[#4a544e] leading-snug sm:leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom hairline accent */}
              <div className="w-5 sm:w-8 h-[2px] bg-[#e2eae4] group-hover:w-10 sm:group-hover:w-16 group-hover:bg-[#a35a1f] transition-all duration-500 mt-4 sm:mt-8 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────── MODERN CAREER APPLICATION SECTION ──────────────── */}
      <section id="apply" className="relative py-12 sm:py-20 lg:py-28 bg-[linear-gradient(180deg,#fcf9f8_0%,#f5f9f6_120px,#f5f9f6_100%)] scroll-mt-20 overflow-hidden">
        {/* Top smooth color fade from Philosophy section */}
        <div className="absolute inset-x-0 top-0 h-20 sm:h-32 bg-gradient-to-b from-[#fcf9f8] to-transparent pointer-events-none" />
        <div className="max-w-[1360px] mx-auto px-3.5 sm:px-8 lg:px-12 xl:px-16">

          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-10 lg:mb-14 reveal-on-scroll">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#a35a1f] uppercase block mb-2 sm:mb-3">
              Career Opportunities
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-5xl text-[#051e16] font-bold">
              Join the Coorg Ply Team
            </h2>
            <p className="text-[#4a544e] text-xs sm:text-base mt-2 sm:mt-3 leading-relaxed">
              We are constantly scouting for driven minds across sales, marketing, timber engineering, factory operations, and administration. Fill out the application below to connect with us.
            </p>
          </div>

          {/* Centered Modern Application Form */}
          <div className="max-w-3xl mx-auto bg-white p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-[#d8e3dc] shadow-lg sm:shadow-xl relative reveal-on-scroll">

            <div className="mb-5 sm:mb-8">
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#a35a1f] block mb-1 sm:mb-2">
                Application Form
              </span>
              <h3 className="font-headline-md text-xl sm:text-2xl lg:text-3xl font-bold text-[#051e16]">
                Submit Your Candidacy
              </h3>
              <p className="font-body-md text-xs sm:text-sm text-[#5a645e] mt-1 leading-relaxed">
                Fill in your details below and upload your resume. Don't see your specific role? Select <strong>"Other"</strong> to submit your discipline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-6">

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                <div className="flex flex-col">
                  <label className="font-label-md text-[#051e16] text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 sm:mb-2 font-bold flex items-center gap-1">
                    <span>Full Name</span>
                    <span className="text-[#a35a1f] font-bold">*</span>
                  </label>
                  <div className="border border-[#c2c8c3] rounded-xl bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 focus-within:border-[#051e16] focus-within:ring-2 focus-within:ring-[#051e16]/10 transition-all shadow-sm">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-transparent border-none outline-none text-sm text-[#051e16] font-body-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-label-md text-[#051e16] text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 sm:mb-2 font-bold flex items-center gap-1">
                    <span>Email Address</span>
                    <span className="text-[#a35a1f] font-bold">*</span>
                  </label>
                  <div className="border border-[#c2c8c3] rounded-xl bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 focus-within:border-[#051e16] focus-within:ring-2 focus-within:ring-[#051e16]/10 transition-all shadow-sm">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@email.com"
                      className="w-full bg-transparent border-none outline-none text-sm text-[#051e16] font-body-md"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Current Location Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                <div className="flex flex-col">
                  <label className="font-label-md text-[#051e16] text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 sm:mb-2 font-bold flex items-center gap-1">
                    <span>Contact Number</span>
                    <span className="text-[#a35a1f] font-bold">*</span>
                  </label>
                  <div className="border border-[#c2c8c3] rounded-xl bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 focus-within:border-[#051e16] focus-within:ring-2 focus-within:ring-[#051e16]/10 transition-all shadow-sm">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent border-none outline-none text-sm text-[#051e16] font-body-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-label-md text-[#051e16] text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 sm:mb-2 font-bold block">
                    <span>Current City / Location</span>
                  </label>
                  <div className="border border-[#c2c8c3] rounded-xl bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 focus-within:border-[#051e16] focus-within:ring-2 focus-within:ring-[#051e16]/10 transition-all shadow-sm">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Virajpet, Bangalore, Mysore"
                      className="w-full bg-transparent border-none outline-none text-sm text-[#051e16] font-body-md"
                    />
                  </div>
                </div>
              </div>

              {/* Role of Interest & Experience Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                <div className="flex flex-col">
                  <label className="font-label-md text-[#051e16] text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 sm:mb-2 font-bold flex items-center gap-1">
                    <span>Role Interested In</span>
                    <span className="text-[#a35a1f] font-bold">*</span>
                  </label>
                  <div className="border border-[#c2c8c3] rounded-xl bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 focus-within:border-[#051e16] focus-within:ring-2 focus-within:ring-[#051e16]/10 transition-all shadow-sm relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-none outline-none text-sm text-[#051e16] font-body-md cursor-pointer pr-7 appearance-none truncate"
                    >
                      {jobRoles.map((role) => (
                        <option key={role.id} value={role.label} className="text-[#051e16] py-1">
                          {role.label}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined text-[#051e16]/50 text-base absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      unfold_more
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-label-md text-[#051e16] text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 sm:mb-2 font-bold flex items-center gap-1">
                    <span>Relevant Experience</span>
                    <span className="text-[#a35a1f] font-bold">*</span>
                  </label>
                  <div className="border border-[#c2c8c3] rounded-xl bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 focus-within:border-[#051e16] focus-within:ring-2 focus-within:ring-[#051e16]/10 transition-all shadow-sm relative">
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-none outline-none text-sm text-[#051e16] font-body-md cursor-pointer pr-7 appearance-none truncate"
                    >
                      {experienceOptions.map((exp, idx) => (
                        <option key={idx} value={exp} className="text-[#051e16] py-1">
                          {exp}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined text-[#051e16]/50 text-base absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      unfold_more
                    </span>
                  </div>
                </div>
              </div>

              {/* CONDITIONAL TEXT ENTRY FOR "OTHER" ROLE */}
              {formData.role === 'Other (Please specify role below)' && (
                <div className="p-3.5 sm:p-4 bg-[#fbf6ee] border border-[#f5b335]/50 rounded-xl sm:rounded-2xl animate-fade-in">
                  <label className="font-label-md text-[#8e4c17] text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 sm:mb-2 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#8e4c17]">edit_note</span>
                    <span>Specify Your Target Role or Expertise</span>
                    <span className="text-[#a35a1f] font-bold">*</span>
                  </label>
                  <div className="border border-[#e7a323] rounded-xl bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 focus-within:border-[#051e16] focus-within:ring-2 focus-within:ring-[#051e16]/10 transition-all shadow-sm">
                    <input
                      type="text"
                      name="customRole"
                      required
                      value={formData.customRole}
                      onChange={handleInputChange}
                      placeholder="e.g. Senior Timber Grader, Maintenance Tech..."
                      className="w-full bg-transparent border-none outline-none text-sm text-[#051e16] font-body-md"
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#8e4c17]/80 mt-1 sm:mt-1.5">
                    Tell us the exact position or skills you bring so we can direct your resume to the right team.
                  </p>
                </div>
              )}

              {/* RESUME UPLOAD SECTION */}
              <div className="flex flex-col">
                <label className="font-label-md text-[#051e16] text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 sm:mb-2 font-bold flex flex-wrap items-center justify-between gap-1">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#a35a1f]">upload_file</span>
                    <span>Upload Resume / CV</span>
                  </span>
                  <span className="text-[10px] sm:text-xs font-normal text-[#5a645e] tracking-normal">
                    PDF, DOC, DOCX (Max 5MB)
                  </span>
                </label>

                {/* Hidden native input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {!resumeFile ? (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-7 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center ${isDragging
                      ? 'border-[#051e16] bg-[#eaf1ec]'
                      : 'border-[#c2c8c3] bg-[#fafcfb] hover:border-[#051e16]/60 hover:bg-[#f4f8f5]'
                      }`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#eaf1ec] flex items-center justify-center text-[#051e16] mb-2 sm:mb-3">
                      <span className="material-symbols-outlined text-xl sm:text-2xl">cloud_upload</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#051e16]">
                      <span className="sm:hidden">Tap to choose resume</span>
                      <span className="hidden sm:inline">Click to browse or drag and drop your resume</span>
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#5a645e] mt-0.5 sm:mt-1">
                      Accepted formats: PDF or Microsoft Word (.pdf, .doc, .docx)
                    </p>
                  </div>
                ) : (
                  <div className="border border-[#b1cdc0] bg-[#eef7f2] rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-2.5 sm:gap-3.5 overflow-hidden">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#051e16] text-[#cde9db] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-lg sm:text-xl">description</span>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm font-bold text-[#051e16] truncate">
                          {resumeFile.name}
                        </p>
                        <p className="text-[11px] sm:text-xs text-[#486355]">
                          {(resumeFile.size / 1024).toFixed(1)} KB • Ready to submit
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold text-[#051e16] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-[#b1cdc0]"
                      >
                        Change
                      </button>
                      <button
                        type="button"
                        onClick={removeSelectedFile}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 flex items-center justify-center transition-colors"
                        title="Remove file"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                  </div>
                )}

                {fileError && (
                  <p className="text-xs text-rose-700 font-medium mt-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">error</span>
                    <span>{fileError}</span>
                  </p>
                )}
              </div>

              {/* Brief Message / Cover Note */}
              <div className="flex flex-col">
                <label className="font-label-md text-[#051e16] text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 sm:mb-2 font-bold flex items-center justify-between">
                  <span>Brief Introduction or Notes (Optional)</span>
                </label>
                <div className="border border-[#c2c8c3] rounded-xl bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 focus-within:border-[#051e16] focus-within:ring-2 focus-within:ring-[#051e16]/10 transition-all shadow-sm">
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share a short note about your past achievements, notice period, or what drives you..."
                    className="w-full bg-transparent border-none outline-none text-sm text-[#051e16] font-body-md resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 sm:py-4 rounded-xl font-label-lg text-xs sm:text-sm uppercase tracking-wider font-bold transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2.5 ${isSubmitting
                    ? 'bg-[#c2c8c3] text-[#5a645e] cursor-not-allowed'
                    : 'bg-[#051e16] hover:bg-[#153a2e] text-white hover:shadow-lg'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </>
                  )}
                </button>
                <p className="text-[10px] sm:text-[11px] text-center text-[#5a645e] mt-2.5 sm:mt-3">
                  Your data and resume remain confidential and are strictly used for recruitment evaluation at Coorg Ply Industries.
                </p>
              </div>
            </form>

            {/* Direct HR Connect Footer Bar */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#eef2ee] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-[#5a645e]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0">mail</span>
                <span className="truncate">Direct HR Email: <a href="mailto:coorgplyindustries@gmail.com" className="font-semibold text-[#051e16] hover:underline">coorgplyindustries@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0">call</span>
                <span>HR Phone: <strong className="text-[#051e16] whitespace-nowrap">+91 9353927123 / +91 9448057309</strong></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────── SUCCESS MODAL ──────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-[#d8e3dc] transform scale-100 transition-transform duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-[#eaf1ec] rounded-full flex items-center justify-center mx-auto mb-6 text-[#051e16]">
              <span className="material-symbols-outlined text-4xl text-[#0e5c3c]">check_circle</span>
            </div>

            <h3 className="font-headline-md text-2xl text-[#051e16] font-bold mb-3">
              Application Received!
            </h3>
            <p className="font-body-md text-sm text-[#4a544e] mb-6 leading-relaxed">
              Thank you for applying to Coorg Ply Industries. Our recruitment team has safely received your details and resume. We will evaluate your profile and contact you soon.
            </p>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="w-full py-3.5 bg-[#051e16] hover:bg-[#153a2e] text-white rounded-xl font-label-lg text-xs uppercase tracking-widest font-bold transition-all shadow-md active:scale-98"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* ──────────────── TOAST NOTIFICATION ──────────────── */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#051e16] text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-white/10 animate-fade-in">
          <span className="material-symbols-outlined text-[#f5b335]">info</span>
          <p className="text-xs font-medium text-white/95">{toastMessage}</p>
        </div>
      )}
    </>
  );
}
