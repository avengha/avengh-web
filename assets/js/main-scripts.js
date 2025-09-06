// JavaScript Document
// Mobile menu functionality
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');

        // Check if elements exist before adding event listeners
        if (!mobileMenuToggle || !mobileNav) {
            console.warn('Mobile menu elements not found');
        }

        if (mobileMenuToggle && mobileNav) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenuToggle.classList.toggle('active');
                mobileNav.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on links
        if (mobileMenuToggle && mobileNav) {
            document.querySelectorAll('.mobile-nav a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenuToggle.classList.remove('active');
                    mobileNav.classList.remove('active');
                });
            });
        }

        // Close mobile menu when clicking outside
        if (mobileMenuToggle && mobileNav) {
            document.addEventListener('click', (e) => {
                if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                    mobileMenuToggle.classList.remove('active');
                    mobileNav.classList.remove('active');
                }
            });
        }

        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Cache DOM elements for better performance
        const header = document.querySelector('header');
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
        const shapes = document.querySelectorAll('.shape');
        
        // Throttle function for performance
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

        // Enhanced header functionality with throttling
        const handleScroll = throttle(() => {
            const scrolled = window.pageYOffset;
            
            if (header) {
                if (scrolled > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
            
            // Update active menu item
            updateActiveMenuItem();
            
            // Parallax effect for geometric shapes
            if (shapes.length > 0) {
                shapes.forEach((shape, index) => {
                    const speed = (index + 1) * 0.3;
                    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
                });
            }
        }, 16); // ~60fps

        window.addEventListener('scroll', handleScroll);

        // Active menu item highlighting
        function updateActiveMenuItem() {
            if (sections.length === 0 || navLinks.length === 0) return;
            
            let currentSection = '';
            const scrollPos = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('load', updateActiveMenuItem);

        // Parallax effect is now handled in the throttled scroll handler above

        // Neural lines pulse effect with cached elements
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
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100vh';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            const drift = (Math.random() - 0.5) * 200;
            
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
                { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Generate quantum particles
        setInterval(createQuantumParticle, 1500);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items and hexagons
        document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Functional Form Submission with Fetch
        const form = document.getElementById('contact-form');
        const submitBtn = form ? form.querySelector('.submit-btn') : null;
        const formStatus = document.getElementById('form-status');
        
        // Check if form elements exist
        if (!form || !submitBtn || !formStatus) {
            console.warn('Form elements not found on this page');
        }

        async function handleSubmit(event) {
            event.preventDefault();
            
            // Update button for submission in progress
            submitBtn.innerHTML = 'TRANSMITTING...';
            submitBtn.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';
            submitBtn.disabled = true;
            formStatus.textContent = '';
            formStatus.className = '';

            const data = new FormData(event.target);
            
            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success
                    submitBtn.innerHTML = 'TRANSMISSION COMPLETE';
                    submitBtn.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
                    formStatus.textContent = "Thank you! Your message has been sent.";
                    formStatus.classList.add('success');
                    form.reset();
                } else {
                    // Server-side error
                    formStatus.textContent = "Oops! There was a problem submitting your form.";
                    formStatus.classList.add('error');
                    submitBtn.innerHTML = 'TRANSMISSION FAILED';
                    submitBtn.style.background = 'linear-gradient(45deg, #ff0000, #ff69b4)';
                }
            } catch (error) {
                // Network error
                formStatus.textContent = "Oops! There was a network problem.";
                formStatus.classList.add('error');
                submitBtn.innerHTML = 'TRANSMISSION FAILED';
                submitBtn.style.background = 'linear-gradient(45deg, #ff0000, #ff69b4)';
            } finally {
                // Re-enable button and reset to original state after a delay
                setTimeout(() => {
                    submitBtn.innerHTML = 'Send Project Inquiry';
                    submitBtn.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
                    submitBtn.disabled = false;
                }, 4000);
            }
        }

        if (form && submitBtn && formStatus) {
            form.addEventListener("submit", handleSubmit);
        }
