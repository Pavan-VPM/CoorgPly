import React from 'react';
import { Link } from 'react-router-dom';

export default function Story() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/10 to-surface"></div>
        <div className="relative z-10 max-w-container-max px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-headline-display text-4xl sm:text-5xl md:text-headline-display text-primary mb-6">
            Every strong structure begins with a solid foundation. <br />
            <span className="italic font-normal">Ours began with a vision.</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-12 mb-8"></div>
        </div>
      </section>

      {/* Section 2: The Humble Beginnings */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-gutter items-center">
          <div>
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest block mb-4">Origins</span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-8">The Humble Beginnings</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
              The journey of Hi Tech Wood Industries started decades ago with a humble sawmill, fueled by nothing but the aromatic scent of fresh timber and an unwavering commitment to quality.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed italic border-l-4 border-primary pl-6">
              "Hard work and integrity weren't just business strategies; they were the very fibers of our daily operation."
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-lg overflow-hidden shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwPkMdYPJgoqJ1hdHw1EYuPDhwiDL7DpvlnRJ7gSYS-76dx0_CHFR4MxCKY4IOLSqjwt-1Aht9RJ8QN5fT60dZ20aGzU1WSVDhTCgy5U3q3_WD7B3PFnYVB9fX9KAs-OanTwDrEP5BhMDTzARDfT5omHdnKf_2cb0h9SpN9I9a2Hz1ZVRyQjmzKjBd_uNg3Fmaa2cjx0YQf7IWcaR-J32XMzhVvU82PQ6grB45si3xobVW6FVZOCkuU9AvCFv-c_BwLCs6E5bDrNY')"
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Architect of Vision */}
      <section className="bg-primary-container text-on-primary py-section-gap overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10"></div>
        <div className="max-w-container-max px-margin-mobile md:px-margin-desktop mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <span className="font-label-lg text-label-lg text-on-primary-container uppercase tracking-widest block mb-4">
                Legacy Leadership
              </span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-white mb-8">The Architect of Vision</h2>
              <p className="font-headline-md text-xl md:text-headline-md text-primary-fixed mb-12">
                <span className="bg-primary-fixed text-primary px-2 py-0.5 rounded-sm font-bold">Mr. A. A. Chandy's</span><br />vision transformed a simple sawmill into a trusted name that resonates across the architecture and construction industry.
              </p>
              <div className="flex gap-6 sm:gap-12 border-t border-white/10 pt-12">
                <div>
                  <div className="font-headline-md text-headline-md mb-2">40+</div>
                  <div className="font-label-md text-label-md text-on-primary-container uppercase">Years of Heritage</div>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md mb-2">100%</div>
                  <div className="font-label-md text-label-md text-on-primary-container uppercase">Ethical Sourcing</div>
                </div>
              </div>
            </div>
            {/* Founder Portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-white/20 rounded-sm"></div>
                <img
                  className="relative z-10 w-80 md:w-96 aspect-[3/4] object-cover object-top rounded-sm shadow-2xl grayscale"
                  alt="Mr. A. A. Chandy — Founder (1927–1981)"
                  src="/founder.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Expansion & Leadership */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-8">Expansion & Innovation</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 text-justify">
            Under the leadership of Mr. A. C. Anthony, Coorg Ply achieved a monumental shift. By introducing state-of-the-art veneer peeling units and specialized manufacturing processes, he bridged the gap between raw nature and refined engineering.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Innovation wasn't just about machinery; it was about reimagining what plywood could be. His relentless pursuit of perfection led to the birth of products that can withstand the harshest environments while gracing the most elegant interiors.
          </p>
        </div>
      </section>

      {/* Section 5: Modern Operations (Bento Grid) */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 text-center">
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest block mb-4">
              The Next Generation
            </span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary">Modern Operations & Future-Proofing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter">
            <div className="md:col-span-3 bg-white p-12 rounded shadow-sm border border-outline-variant/10">
              <h3 className="font-headline-md text-headline-md text-primary mb-6">
                Mr. Sisson Chandy <span className="text-body-lg text-secondary font-normal ml-4">— COO</span>
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Combining traditional values with modern manufacturing logistics, Mr. Sisson Chandy steers the company toward a tech-forward future. His focus on precision manufacturing ensures every sheet of plywood leaving our facility is a masterpiece of stability.
              </p>
            </div>
            <div className="relative overflow-hidden rounded min-h-[300px]">
              <div
                className="w-full h-full bg-cover bg-center absolute inset-0"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida/AP1WRLteqNwTPwqINFJaWAtCIvdIauy0jYEE94mlVerKBiYL2LES08R4ki7moPcljRZabrmpG7MMsggt4A7eeOKSyLFJdqBCR4Auj9FbkiVA0HeR069GhVaAXeDrmq7bJ2orZEC_elEOBOYpwKb7NsycPZei9OWdWN6RunYYVdRJgOmvZHNMOIQu7wQQwquDG5I5Y6jRTUs0tdmqXmUTL0W37e7SWIxHTcbmHeLSDl1a-kB0m16W3G9uqPo5MQ')"
                }}
              ></div>
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm p-8 flex flex-col justify-end text-white">
                <span className="font-label-md text-label-md uppercase mb-2">Manufacturing Edge</span>
                <p className="font-headline-md text-headline-md">BWP & BWR Grade Excellence</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-primary p-12 rounded">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <span className="px-4 py-1 border border-primary-fixed text-primary-fixed rounded-full font-label-md text-label-md">
                  MR GRADE
                </span>
                <span className="px-4 py-1 border border-primary-fixed text-primary-fixed rounded-full font-label-md text-label-md">
                  BWR GRADE
                </span>
                <span className="px-4 py-1 border border-primary-fixed text-primary-fixed rounded-full font-label-md text-label-md">
                  BWP GRADE
                </span>
                <span className="px-4 py-1 border border-primary-fixed text-primary-fixed rounded-full font-label-md text-label-md">
                  E0 CERTIFIED
                </span>
              </div>
              <p className="font-body-lg text-body-lg text-on-primary/80 text-center md:text-left">
                Our modern operations are certified to the highest international standards, ensuring that our growth never compromises the environmental legacy of the forests we steward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Excellence & Promise */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-6xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-10">Excellence & Promise</h2>
          <blockquote className="font-headline-md text-xl sm:text-2xl md:text-headline-md italic text-on-surface-variant leading-snug mb-12">
            "To build products that become the foundation of beautiful homes and lasting memories. We don't just supply wood; we provide peace of mind."
          </blockquote>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-primary mb-2">Moisture Resistant</div>
              <div className="text-sm text-on-surface-variant">Durability in every humid climate</div>
            </div>
            <div className="p-6 bg-white border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-primary mb-2">Boiling Water Proof</div>
              <div className="text-sm text-on-surface-variant">The ultimate architectural shield</div>
            </div>
            <div className="p-6 bg-white border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-primary mb-2">Termite Proof</div>
              <div className="text-sm text-on-surface-variant">Borer-free legacy for generations</div>
            </div>
            <div className="p-6 bg-white border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-primary mb-2">Structural Integrity</div>
              <div className="text-sm text-on-surface-variant">Unyielding strength in every ply</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Closing */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-60 mix-blend-overlay">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOOd6R5jT2syxoYcPLEBPi3VwuT3N9k7T9K1YcxEQXYMK_utrWLwX5S66eqwAfDfrwaM08HquSC8XBaZDBf8CAHU_fCKzT1ILwbC0cQxIVW2NhYbjIdt-j11-UERDWX3ARL8dtIa9pNafujUIph9QIvIl3satJlhHpCZNkkwuM1WCSNkwXODBtD7fleg78_wGVHfT1A-07mz9lH2PZggFZQykRbirTndkCX5mqimgyL3Gt0ZAuQXav3y1g4qdgAX4X9EfpqaDp4Os')"
            }}
          ></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-display text-4xl sm:text-5xl md:text-headline-display text-white mb-6">
            Plywood is more than a product.<br />
            <span className="italic text-primary-fixed">It is a legacy.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block mt-8 px-12 py-4 bg-primary-fixed text-on-primary-fixed font-bold font-label-lg text-label-lg rounded-full hover:bg-white transition-colors"
          >
            Contact Us To Collaborate
          </Link>
        </div>
      </section>
    </>
  );
}
