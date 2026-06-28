document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const mobileBtnIcon = mobileMenuBtn.querySelector('i');

    function toggleMenu() {
        mobileMenu.classList.toggle('open');
        if (mobileMenu.classList.contains('open')) {
            mobileBtnIcon.classList.remove('ph-list');
            mobileBtnIcon.classList.add('ph-x');
            document.body.style.overflow = 'hidden';
        } else {
            mobileBtnIcon.classList.remove('ph-x');
            mobileBtnIcon.classList.add('ph-list');
            document.body.style.overflow = '';
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 2. Navbar Scroll Effect & Active Link Highlight
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link highlight
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Reveal Elements on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 4. Set Current Year in Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // 5. Contact Form Submission (Mock)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation check (html tags like required handle most)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Loading state
            submitBtn.innerHTML = '<i class="ph-bold ph-spinner ph-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Mock API Call delay
            setTimeout(() => {
                formStatus.textContent = "Thank you! Your request has been sent successfully. We will contact you shortly.";
                formStatus.className = 'form-status success';
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }
});
