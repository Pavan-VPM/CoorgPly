import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const isHome = currentPath === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  }, [currentPath]);

  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Our Story', href: '/story' },
    { text: 'Products', href: '/products' },
    { text: 'Manufacturing', href: '/manufacturing' },
    { text: 'Contact', href: '/contact' }
  ];

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    if (nextState) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  // Determine header classes
  let headerClass = "fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ";
  if (isHome && !scrolled) {
    headerClass += "bg-transparent h-20 md:h-28";
  } else if (scrolled) {
    headerClass += "nav-scrolled";
  } else {
    headerClass += "h-16 md:h-24 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30";
  }

  return (
    <>
      <header className={headerClass} id="main-header">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-full">
          <Link to="/" className="flex items-center gap-3">
            <img alt="Coorg Ply Logo" className="h-12 md:h-20 w-auto" src="/logo.webp" />
            <span className="font-headline-md text-2xl md:text-3xl font-bold text-primary tracking-tight">Coorg Ply</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  className={`font-headline-md text-base tracking-wide relative transition-colors ${
                    active
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                  to={link.href}
                >
                  {link.text}
                  {active && (
                    <span
                      className="absolute left-0 w-full h-[3px] bg-primary rounded-full -bottom-2"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:block bg-primary text-on-primary px-8 py-3.5 rounded-sm font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-container transition-all shadow-lg active:scale-95 text-center"
            >
              Get a Quote
            </Link>
 
            {/* Burger Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 focus:outline-none"
              aria-label="Toggle Mobile Menu"
              style={{ color: 'var(--color-primary, #051e16)' }}
            >
              <span
                className={`w-6 h-[2px] bg-current transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-current transition-all duration-300 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-surface z-40 transform transition-transform duration-300 flex flex-col items-center justify-center gap-8 text-center px-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 w-full max-w-xs">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-headline-md text-2xl ${
                currentPath === link.href ? 'text-primary font-bold' : 'text-on-surface-variant'
              }`}
            >
              {link.text}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-primary text-on-primary py-4 rounded-sm font-label-lg text-label-lg uppercase tracking-wider text-center shadow-lg"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
