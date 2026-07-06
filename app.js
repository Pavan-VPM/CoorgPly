document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Interactivity
    const header = document.getElementById('main-header');
    if (header) {
        const toggleHeaderStyle = () => {
            if (window.scrollY > 50) {
                header.classList.add('nav-scrolled');
                header.classList.remove('bg-transparent', 'h-28');
                header.classList.add('h-24');
            } else {
                header.classList.remove('nav-scrolled', 'h-24');
                if (header.dataset.transparent === "true") {
                    header.classList.add('bg-transparent', 'h-28');
                } else {
                    header.classList.add('h-24');
                }
            }
        };

        // Check initial state
        toggleHeaderStyle();
        window.addEventListener('scroll', toggleHeaderStyle);
    }

    // 2. Active Link Highlighter
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Remove default active styling classes
        link.classList.remove('text-primary', 'font-bold', 'after:content-[\'\']', 'after:absolute', 'after:-bottom-2', 'after:left-0', 'after:w-full', 'after:h-[4px]', 'after:bg-primary', 'after:rounded-full', 'after:bottom-[-4px]', 'after:h-[2px]');
        link.classList.add('text-on-surface-variant', 'hover:text-primary');

        if (
            (currentPath === 'index.html' && (href === 'index.html' || href === '#' || href === '')) ||
            (currentPath === href) ||
            (currentPath !== 'index.html' && href.includes(currentPath))
        ) {
            link.classList.remove('text-on-surface-variant', 'hover:text-primary');
            link.classList.add('text-primary', 'font-bold', 'relative');
            
            // Add custom active line styling
            const underline = document.createElement('span');
            underline.className = 'absolute -bottom-2 left-0 w-full h-[3px] bg-primary rounded-full';
            if (currentPath === 'index.html') {
                underline.className = 'absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary';
            }
            link.appendChild(underline);
        }
    });

    // 3. Scroll Reveal Animations (Removed for instant page loading)

    // 4. Mobile Navigation Menu Toggle
    const setupMobileMenu = () => {
        const headerContainer = document.querySelector('#main-header > div');
        if (!headerContainer) return;

        // Create Burger Button
        const burgerBtn = document.createElement('button');
        burgerBtn.className = 'lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 text-primary focus:outline-none';
        burgerBtn.setAttribute('aria-label', 'Toggle Mobile Menu');
        burgerBtn.innerHTML = `
            <span class="w-6 h-[2px] bg-current transition-all duration-300 origin-center" id="bar1"></span>
            <span class="w-6 h-[2px] bg-current transition-all duration-300" id="bar2"></span>
            <span class="w-6 h-[2px] bg-current transition-all duration-300 origin-center" id="bar3"></span>
        `;

        // Create Mobile Menu Panel (Drawer)
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'fixed inset-0 bg-surface z-40 transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center gap-8 text-center px-6';
        
        // Populate Mobile Links
        const menuLinks = [
            { text: 'Home', href: 'index.html' },
            { text: 'Our Story', href: 'story.html' },
            { text: 'Products', href: 'products.html' },
            { text: 'Manufacturing', href: 'manufacturing.html' },
            { text: 'Contact', href: 'contact.html' }
        ];

        let linksHtml = '';
        menuLinks.forEach(link => {
            const isActive = currentPath === link.href || (currentPath === 'index.html' && link.href === 'index.html');
            linksHtml += `<a href="${link.href}" class="font-headline-md text-2xl ${isActive ? 'text-primary font-bold' : 'text-on-surface-variant'}">${link.text}</a>`;
        });
        
        mobileMenu.innerHTML = `
            <div class="flex flex-col gap-6 w-full max-w-xs">
                ${linksHtml}
                <a href="contact.html" class="mt-4 bg-primary text-on-primary py-4 rounded-sm font-label-lg text-label-lg uppercase tracking-wider text-center shadow-lg">Get a Quote</a>
            </div>
        `;

        headerContainer.appendChild(burgerBtn);
        document.body.appendChild(mobileMenu);

        let menuOpen = false;
        burgerBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                burgerBtn.querySelector('#bar1').style.transform = 'rotate(45deg) translate(5px, 6px)';
                burgerBtn.querySelector('#bar2').style.opacity = '0';
                burgerBtn.querySelector('#bar3').style.transform = 'rotate(-45deg) translate(5px, -6px)';
                document.body.classList.add('overflow-hidden');
            } else {
                mobileMenu.classList.add('translate-x-full');
                burgerBtn.querySelector('#bar1').style.transform = 'none';
                burgerBtn.querySelector('#bar2').style.opacity = '1';
                burgerBtn.querySelector('#bar3').style.transform = 'none';
                document.body.classList.remove('overflow-hidden');
            }
        });

        // Close menu when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                burgerBtn.querySelector('#bar1').style.transform = 'none';
                burgerBtn.querySelector('#bar2').style.opacity = '1';
                burgerBtn.querySelector('#bar3').style.transform = 'none';
                document.body.classList.remove('overflow-hidden');
                menuOpen = false;
            });
        });
    };
    setupMobileMenu();

    // 5. Contact Form Simulation & Success Toast
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic fields check
            const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('border-error');
                } else {
                    input.classList.remove('border-error');
                }
            });

            if (!valid) return;

            // Submit animation styling
            const submitBtn = contactForm.querySelector('button[type="submit"]') || contactForm.querySelector('button');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> Sending...
            `;

            setTimeout(() => {
                // Success feedback
                submitBtn.innerHTML = 'Success!';
                submitBtn.classList.remove('bg-primary');
                submitBtn.classList.add('bg-emerald-700');

                // Create success toast
                const toast = document.createElement('div');
                toast.className = 'fixed bottom-8 right-8 z-50 bg-emerald-800 text-white px-6 py-4 rounded shadow-2xl flex items-center gap-3 transition-transform translate-y-20 duration-300';
                toast.innerHTML = `
                    <span class="material-symbols-outlined text-emerald-300">verified</span>
                    <div>
                        <p class="font-bold">Inquiry Sent Successfully</p>
                        <p class="text-xs text-emerald-100">Thank you! We will get back to you shortly.</p>
                    </div>
                `;
                document.body.appendChild(toast);
                setTimeout(() => toast.classList.remove('translate-y-20'), 100);

                // Reset form
                contactForm.reset();

                // Clear success states
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.add('bg-primary');
                    submitBtn.classList.remove('bg-emerald-700');
                    toast.classList.add('translate-y-20');
                    setTimeout(() => toast.remove(), 300);
                }, 4000);

            }, 1500);
        });
    }

    // 6. Map Zoom Controls Simulation
    const mapControls = document.querySelectorAll('[z-40] button');
    if (mapControls.length > 0) {
        mapControls.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                // simple visual click effect
                btn.classList.add('scale-95');
                setTimeout(() => btn.classList.remove('scale-95'), 100);
            });
        });
    }
});
