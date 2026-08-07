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

      {/* Main Links Grid */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        {/* Brand info */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <img alt="Coorg Ply Logo" className="h-14 w-auto brightness-0 invert" src="/logo.webp" />
            <span className="font-headline-md text-xl font-bold tracking-tight">Coorg Ply</span>
          </div>
          <p className="font-body-md text-sm text-white/60 mb-8 max-w-sm leading-relaxed">
            Premium Calibrated Plywood engineered with architectural precision. Built on tradition and structural trust since 1958.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
              { label: 'Instagram', icon: 'photo_camera', href: 'https://instagram.com' },
              { label: 'LinkedIn', icon: 'work', href: 'https://linkedin.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#a35a1f] hover:border-[#a35a1f] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <span className="material-symbols-outlined text-lg">{social.icon}</span>
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
                  <Link to={paths[idx]} className="hover:text-white transition-colors relative group block py-0.5">
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
              { label: 'MR Commercial Plywood', path: '/products' },
              { label: 'BWR Waterproof Plywood', path: '/products' },
              { label: 'BWP Marine Grade Plywood', path: '/products' },
              { label: 'Premium Veneers & Doors', path: '/products' }
            ].map((prod, idx) => (
              <li key={idx}>
                <Link to={prod.path} className="hover:text-white transition-colors relative group block py-0.5">
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
              <span>Madikeri - Virajpet Rd, Kadanur, Virajpet, Karnataka 571218</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0">mail</span>
              <a href="mailto:coorgplyindustries@gmail.com" className="hover:text-white transition-colors">coorgplyindustries@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#a35a1f] text-base shrink-0 mt-0.5">call</span>
              <div>
                <p>+91 9353927123</p>
                <p>+91 9448057309</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-label-md text-white/40">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© 2026 Coorg Ply Industries. ISO 9001:2015 Certified.</p>
            <div className="flex gap-4">
              <Link to="/technical-specs" className="hover:text-white transition-colors">Technical Specs</Link>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all group shrink-0 active:scale-95"
          >
            <span>Back to Top</span>
            <span className="material-symbols-outlined text-sm transform transition-transform group-hover:-translate-y-0.5">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
