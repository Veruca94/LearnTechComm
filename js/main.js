// LearnTechComm - Main JavaScript File
// Provides interactive functionality for the Technical Communication career guide website

(function() {
    'use strict';

    // Initialize when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        initSmoothScroll();
        initCardAnimations();
        initBackToTop();
        addAccessibilityEnhancements();
        initHeaderScrollBehavior();
    });

    /**
     * Enable smooth scrolling for anchor links
     */
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Only process if it's an actual anchor link (not just #)
                if (href && href.length > 1) {
                    const target = document.querySelector(href);

                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    /**
     * Hide/show header based on scroll direction
     */
    function initHeaderScrollBehavior() {
        const header = document.querySelector('header');
        if (!header) return;

        let lastScrollTop = 0;
        let scrollTimeout;
        const scrollThreshold = 10; // Minimum scroll distance to trigger

        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(function() {
                const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // Don't hide header if we're at the very top
                if (currentScrollTop <= 0) {
                    header.classList.remove('header-hidden');
                    header.classList.add('header-visible');
                    lastScrollTop = currentScrollTop;
                    return;
                }

                // Check scroll direction
                if (Math.abs(currentScrollTop - lastScrollTop) > scrollThreshold) {
                    if (currentScrollTop > lastScrollTop) {
                        // Scrolling down - hide header
                        header.classList.add('header-hidden');
                        header.classList.remove('header-visible');
                    } else {
                        // Scrolling up - show header
                        header.classList.remove('header-hidden');
                        header.classList.add('header-visible');
                    }
                }

                lastScrollTop = currentScrollTop;
            }, 50);
        });
    }

    /**
     * Add scroll-triggered animations for cards
     */
    function initCardAnimations() {
        const cards = document.querySelectorAll('.card');

        if (cards.length === 0) return;

        // Check if Intersection Observer is supported
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = 'translateY(20px)';

                        // Trigger reflow
                        void entry.target.offsetWidth;

                        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            cards.forEach((card, index) => {
                // Stagger the animations
                card.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(card);
            });
        }
    }

    /**
     * Add a "Back to Top" button for better navigation
     */
    function initBackToTop() {
        // Only add on subfield pages (pages with .subfield-page class)
        if (!document.querySelector('.subfield-page')) return;

        // Create back to top button
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = '↑';
        backToTopButton.setAttribute('aria-label', 'Back to top');
        backToTopButton.className = 'back-to-top';
        backToTopButton.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
        `;

        document.body.appendChild(backToTopButton);

        // Show/hide based on scroll position
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.style.opacity = '1';
                    backToTopButton.style.visibility = 'visible';
                } else {
                    backToTopButton.style.opacity = '0';
                    backToTopButton.style.visibility = 'hidden';
                }
            }, 100);
        });

        // Scroll to top on click
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effect
        backToTopButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        backToTopButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    /**
     * Add accessibility enhancements
     */
    function addAccessibilityEnhancements() {
        // Add skip to main content link for screen readers
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--primary-color);
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            z-index: 1000;
        `;

        skipLink.addEventListener('focus', function() {
            this.style.top = '0';
        });

        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Ensure main content has an id
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main';
        }

        // Add keyboard navigation hints for cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }

    /**
     * Add print-friendly styles dynamically
     */
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .navbar, footer, .back-to-top, .skip-link {
                display: none !important;
            }
            .card, .content-card {
                break-inside: avoid;
                page-break-inside: avoid;
            }
            body {
                background: white;
            }
            a {
                color: #000;
                text-decoration: underline;
            }
        }
    `;
    document.head.appendChild(printStyles);

})();
