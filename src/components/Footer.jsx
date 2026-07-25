import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img alt="Coorg Ply Logo" className="h-16 w-auto brightness-0 invert" src="/logo.png" />
            <span className="font-headline-md text-on-primary">Coorg Ply</span>
          </div>
          <p className="font-body-md text-on-primary/70 mb-8 max-w-xs">
            Premium Calibrated Plywood from the hills of Coorg. Built on trust and heritage since 1958.
          </p>
          {/* Social Media Logos */}
          <div className="flex items-center gap-6 text-on-primary/70">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <h4 className="font-label-lg uppercase tracking-[0.2em] mb-8">Navigation</h4>
          <ul className="space-y-4 font-body-md text-on-primary/70">
            <li><Link className="hover:text-on-primary transition-colors" to="/">Home</Link></li>
            <li><Link className="hover:text-on-primary transition-colors" to="/story">Our Story</Link></li>
            <li><Link className="hover:text-on-primary transition-colors" to="/products">Products</Link></li>
            <li><Link className="hover:text-on-primary transition-colors" to="/manufacturing">Manufacturing</Link></li>
            <li><Link className="hover:text-on-primary transition-colors" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h4 className="font-label-lg uppercase tracking-[0.2em] mb-8">Products</h4>
          <ul className="space-y-4 font-body-md text-on-primary/70">
            <li><Link className="hover:text-on-primary transition-colors" to="/products">MR Grade Commercial</Link></li>
            <li><Link className="hover:text-on-primary transition-colors" to="/products">BWR Grade Waterproof</Link></li>
            <li><Link className="hover:text-on-primary transition-colors" to="/products">BWP Marine Grade</Link></li>
            <li><Link className="hover:text-on-primary transition-colors" to="/products">Calibrated Core</Link></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h4 className="font-label-lg uppercase tracking-[0.2em] mb-8">Resources</h4>
          <ul className="space-y-4 font-body-md text-on-primary/70">
            <li><Link className="hover:text-on-primary transition-colors" to="/technical-specs">Technical Specs</Link></li>
            <li><Link className="hover:text-on-primary transition-colors" to="/manufacturing">Sustainability Report</Link></li>
            <li><a className="hover:text-on-primary transition-colors" href="#">Terms &amp; Conditions</a></li>
            <li><a className="hover:text-on-primary transition-colors" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-on-primary/10 py-8 text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-label-md text-on-primary/50">
          <p>© 2026 Coorg Ply Industries. ISO 9001:2015 Certified. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
