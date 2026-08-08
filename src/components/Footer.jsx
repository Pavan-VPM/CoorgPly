import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0b2b20] to-[#04120d] text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(163,90,31,0.05),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(15,76,58,0.1),transparent_60%)] pointer-events-none" />

      {/* Main Links Container */}
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-margin-desktop py-8 md:py-16 relative z-10">
        
        {/* ────────── MOBILE VIEW (Minimal & Collapsible) ────────── */}
        <div className="md:hidden space-y-6">
          {/* Mobile Brand Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img alt="Coorg Ply Logo" className="h-10 w-auto brightness-0 invert" src="/logo.webp" />
                <span className="font-headline-md text-lg font-bold tracking-tight">Coorg Ply</span>
              </div>
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-2">
                {[
                  {
                    label: 'Facebook',
                    href: 'https://facebook.com',
                    svg: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/coorgply?igsh=NzE4bHR2a2tza2hp',
                    svg: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://linkedin.com',
                    svg: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    )
                  }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#a35a1f] hover:text-white transition-all active:scale-95"
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>

            <p className="font-body-md text-xs text-white/60 leading-relaxed">
              Premium Calibrated Plywood engineered with architectural precision. Built on tradition since 1958.
            </p>
          </div>

          {/* Mobile Accordions */}
          <div className="border-t border-white/10 pt-2 space-y-1">
            {/* Explore Section Accordion */}
            <details className="group border-b border-white/10 py-3">
              <summary className="flex items-center justify-between font-label-lg uppercase tracking-[0.15em] text-xs font-bold text-[#a35a1f] cursor-pointer list-none select-none">
                <span>Explore</span>
                <span className="material-symbols-outlined text-base text-white/50 transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <ul className="mt-3 space-y-2.5 text-xs font-body-md text-white/60 pl-1 pb-1">
                {['Home', 'Our Story', 'Products', 'Manufacturing', 'Contact'].map((link, idx) => {
                  const paths = ['/', '/story', '/products', '/manufacturing', '/contact'];
                  return (
                    <li key={idx}>
                      <Link to={paths[idx]} className="hover:text-white transition-colors block py-0.5">
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>

            {/* Our Products Accordion */}
            <details className="group border-b border-white/10 py-3">
              <summary className="flex items-center justify-between font-label-lg uppercase tracking-[0.15em] text-xs font-bold text-[#a35a1f] cursor-pointer list-none select-none">
                <span>Our Products</span>
                <span className="material-symbols-outlined text-base text-white/50 transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <ul className="mt-3 space-y-2.5 text-xs font-body-md text-white/60 pl-1 pb-1">
                {[
                  { label: 'MR Grade Crystal', path: '/products/mr-crystal' },
                  { label: 'BWR Grade Diamond', path: '/products/bwr-diamond' },
                  { label: 'BWP Grade Platinum', path: '/products/bwp-platinum' },
                  { label: 'MR Calibrated', path: '/products/mr-calibrated' },
                  { label: 'BWR Calibrated', path: '/products/bwr-calibrated' },
                  { label: 'BWP Calibrated', path: '/products/bwp-calibrated' }
                ].map((prod, idx) => (
                  <li key={idx}>
                    <Link to={prod.path} className="hover:text-white transition-colors block py-0.5">
                      {prod.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            {/* Headquarters Accordion */}
            <details className="group border-b border-white/10 py-3">
              <summary className="flex items-center justify-between font-label-lg uppercase tracking-[0.15em] text-xs font-bold text-[#a35a1f] cursor-pointer list-none select-none">
                <span>Headquarters</span>
                <span className="material-symbols-outlined text-base text-white/50 transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <ul className="mt-3 space-y-3 text-xs font-body-md text-white/60 pl-1 pb-1">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0 mt-0.5">location_on</span>
                  <span className="leading-relaxed">Madikeri - Virajpet Rd, Kadanur, Virajpet, Karnataka 571218</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0">mail</span>
                  <a href="mailto:coorgplyindustries@gmail.com" className="hover:text-white transition-colors break-all">coorgplyindustries@gmail.com</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0 mt-0.5">call</span>
                  <div className="space-y-1">
                    <a href="tel:+919353927123" className="hover:text-white transition-colors block">+91 9353927123</a>
                    <a href="tel:+919448057309" className="hover:text-white transition-colors block">+91 9448057309</a>
                  </div>
                </li>
              </ul>
            </details>
          </div>
        </div>

        {/* ────────── DESKTOP VIEW (Full Grid) ────────── */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          {/* Brand info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img alt="Coorg Ply Logo" className="h-10 sm:h-14 w-auto brightness-0 invert" src="/logo.webp" />
              <span className="font-headline-md text-lg sm:text-xl font-bold tracking-tight">Coorg Ply</span>
            </div>
            <p className="font-body-md text-xs sm:text-sm text-white/60 mb-6 max-w-sm leading-relaxed">
              Premium Calibrated Plywood engineered with architectural precision. Built on tradition and structural trust since 1958.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3.5">
              {[
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/coorgply?igsh=NzE4bHR2a2tza2hp',
                  svg: (
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                {
                  label: 'Gmail',
                  href: 'mailto:coorgplyindustries@gmail.com',
                  svg: (
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>
                  )
                }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#a35a1f] hover:border-[#a35a1f] hover:text-white transition-all duration-300 active:scale-95"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-label-lg uppercase tracking-[0.2em] text-xs font-bold text-[#a35a1f] mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-body-md text-white/60">
              {['Home', 'Our Story', 'Products', 'Manufacturing', 'Contact'].map((link, idx) => {
                const paths = ['/', '/story', '/products', '/manufacturing', '/contact'];
                return (
                  <li key={idx}>
                    <Link to={paths[idx]} className="hover:text-white transition-colors relative group inline-block py-0.5">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a35a1f] transition-all duration-300 group-hover:w-8" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <h4 className="font-label-lg uppercase tracking-[0.2em] text-xs font-bold text-[#a35a1f] mb-6">Our Products</h4>
            <ul className="space-y-4 text-sm font-body-md text-white/60">
              {[
                { label: 'MR Grade Crystal', path: '/products/mr-crystal' },
                { label: 'BWR Grade Diamond', path: '/products/bwr-diamond' },
                { label: 'BWP Grade Platinum', path: '/products/bwp-platinum' },
                { label: 'MR Calibrated', path: '/products/mr-calibrated' },
                { label: 'BWR Calibrated', path: '/products/bwr-calibrated' },
                { label: 'BWP Calibrated', path: '/products/bwp-calibrated' }
              ].map((prod, idx) => (
                <li key={idx}>
                  <Link to={prod.path} className="hover:text-white transition-colors relative group inline-block py-0.5">
                    {prod.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a35a1f] transition-all duration-300 group-hover:w-8" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HQ Contact Info */}
          <div className="md:col-span-3">
            <h4 className="font-label-lg uppercase tracking-[0.2em] text-xs font-bold text-[#a35a1f] mb-6">Headquarters</h4>
            <ul className="space-y-4 text-sm font-body-md text-white/60">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0 mt-0.5">location_on</span>
                <span className="leading-relaxed">Madikeri - Virajpet Rd, Kadanur, Virajpet, Karnataka 571218</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0">mail</span>
                <a href="mailto:coorgplyindustries@gmail.com" className="hover:text-white transition-colors break-all">coorgplyindustries@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0 mt-0.5">call</span>
                <div className="space-y-1">
                  <a href="tel:+919353927123" className="hover:text-white transition-colors block">+91 9353927123</a>
                  <a href="tel:+919448057309" className="hover:text-white transition-colors block">+91 9448057309</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 sm:py-8 relative z-10">
        <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-margin-desktop flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-label-md text-white/40">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© 2026 Coorg Ply Industries. ISO 9001:2015 Certified.</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-white/50">
              <Link to="/technical-specs" className="hover:text-white transition-colors py-0.5">Technical Specs</Link>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white transition-colors py-0.5">Privacy Policy</a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white transition-colors py-0.5">Terms</a>
            </div>
          </div>
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all group shrink-0 active:scale-95 text-xs"
          >
            <span>Back to Top</span>
            <span className="material-symbols-outlined text-sm transform transition-transform group-hover:-translate-y-0.5">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

