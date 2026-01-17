import '../css/main-style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!mobileNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    }

    // Enhanced smooth scrolling
    function smoothScrollToHash(hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            const headerOffset = 10; // Height of fixed header + extra space
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollToHash(href);
            }
        });
    });

    // Throttling function for performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Scroll-dependent functionalities
    const handleScroll = throttle(() => {
        const header = document.querySelector('header');
        const shapes = document.querySelectorAll('.shape');
        const scrolled = window.pageYOffset;

        if (header) {
            header.classList.toggle('scrolled', scrolled > 50);
        }

        updateActiveMenuItem();

        if (shapes.length > 0) {
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        }
    }, 16);

    window.addEventListener('scroll', handleScroll);

    // Active menu item highlighting
    function updateActiveMenuItem() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
        if (sections.length === 0 || navLinks.length === 0) return;

        let currentSection = '';
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('load', updateActiveMenuItem);

    // Neural lines pulse effect
    const neuralLines = document.querySelectorAll('.neural-line');
    if (neuralLines.length > 0) {
        setInterval(() => {
            neuralLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'scaleX(1.2)';
                    setTimeout(() => {
                        line.style.opacity = '0.2';
                        line.style.transform = 'scaleX(0.5)';
                    }, 200);
                }, index * 300);
            });
        }, 2000);
    }

    // Enhanced particle generation
    function createQuantumParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        const sizePx = Math.random() * 4 + 1; // px size
        particle.style.width = `${sizePx}px`;
        particle.style.height = `${sizePx}px`;
        const bg = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
        particle.style.background = bg;
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = '100vh';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.boxShadow = `0 0 10px ${bg}`;
        document.body.appendChild(particle);

        const duration = Math.random() * 3000 + 2000;
        const drift = (Math.random() - 0.5) * 200;

        if (particle.animate) {
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
                { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        } else {
            // fallback for browsers without Element.animate
            particle.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
            requestAnimationFrame(() => {
                particle.style.transform = `translateY(-100vh) translateX(${drift}px)`;
                particle.style.opacity = '1';
            });
            setTimeout(() => particle.remove(), duration + 50);
        }
    }

    // If the page was loaded with a hash, adjust scroll to account for fixed header
    if (window.location.hash) {
        // small delay to allow browser default jump to happen first, then correct it.
        setTimeout(() => smoothScrollToHash(window.location.hash), 50);
    }

    setInterval(createQuantumParticle, 1500);

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Functional Form Submission with Fetch and Client-Side Validation
    const form = document.getElementById('contact-form');
    if (form) {
        const submitBtn = form.querySelector('.submit-btn');
        const formStatus = document.getElementById('form-status');

        const validateEmail = (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };

        const showValidationError = (field, message) => {
            field.classList.add('is-invalid');
            let error = field.nextElementSibling;
            if (!error || !error.classList.contains('invalid-feedback')) {
                error = document.createElement('div');
                error.classList.add('invalid-feedback');
                field.parentNode.insertBefore(error, field.nextSibling);
            }
            error.textContent = message;
        };

        const clearValidationErrors = () => {
            form.querySelectorAll('.is-invalid').forEach(field => {
                field.classList.remove('is-invalid');
            });
            form.querySelectorAll('.invalid-feedback').forEach(error => {
                error.textContent = '';
            });
        };

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            clearValidationErrors();

            const name = form.querySelector('#name');
            const email = form.querySelector('#email');
            const subject = form.querySelector('#subject');
            const message = form.querySelector('#message');
            let isValid = true;

            if (!name.value.trim()) {
                showValidationError(name, 'Name is required.');
                isValid = false;
            }
            if (!email.value.trim()) {
                showValidationError(email, 'Email is required.');
                isValid = false;
            } else if (!validateEmail(email.value)) {
                showValidationError(email, 'Please enter a valid email address.');
                isValid = false;
            }
            if (!subject.value.trim()) {
                showValidationError(subject, 'Subject is required.');
                isValid = false;
            }
            if (!message.value.trim()) {
                showValidationError(message, 'Message is required.');
                isValid = false;
            }

            if (!isValid) {
                formStatus.textContent = 'Please correct the errors above.';
                formStatus.classList.add('error');
                return;
            }

            submitBtn.innerHTML = 'TRANSMITTING...';
            submitBtn.disabled = true;
            formStatus.textContent = '';
            formStatus.className = '';

            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: new FormData(event.target),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    submitBtn.innerHTML = 'TRANSMISSION COMPLETE';
                    formStatus.textContent = "Thank you! Your message has been sent.";
                    formStatus.classList.add('success');
                    form.reset();
                } else {
                    throw new Error('Server responded with an error.');
                }
            } catch (error) {
                submitBtn.innerHTML = 'TRANSMISSION FAILED';
                formStatus.textContent = "Oops! There was a problem submitting your form.";
                formStatus.classList.add('error');
            } finally {
                setTimeout(() => {
                    submitBtn.innerHTML = 'Send Project Inquiry';
                    submitBtn.disabled = false;
                    formStatus.textContent = '';
                    formStatus.className = '';
                }, 4000);
            }
        });
    }
});
