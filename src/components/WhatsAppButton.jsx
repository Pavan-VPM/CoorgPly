import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919353927123?text=Hello%20Coorg%20Ply%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed w-12 h-12 bottom-6 right-6 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-[10000] group"
      aria-label="Request Quote via WhatsApp"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.508 5.362 1.509 5.373 0 9.743-4.373 9.746-9.743.001-2.602-1.01-5.05-2.846-6.886C17.073 2.197 14.62 1.185 12.01 1.185 6.633 1.185 2.26 5.558 2.258 10.933c0 2.199.593 4.143 1.636 5.927l-.995 3.635 3.758-.941zm11.233-6.082c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.672.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.519-1.758-4.717-3.277-5.247-4.19-.15-.25-.015-.386.12-.522.12-.123.27-.315.405-.473.136-.157.18-.27.27-.45.09-.18.045-.337-.023-.487-.068-.15-.672-1.62-.92-2.21-.24-.58-.504-.5-.69-.51-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52 1.4.61 2.213.827 2.96.96.787.14 1.5.107 2.063.023.627-.094 1.774-.725 2.023-1.425.25-.7.25-1.3 0-1.425-.085-.025-.27-.125-.57-.275z" />
      </svg>
      <span className="absolute right-16 bg-neutral-900 text-white text-xs font-medium py-2 px-3 rounded shadow-md border border-neutral-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Request a Quote
      </span>
    </a>
  );
}
