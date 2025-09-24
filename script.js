// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Animate progress bars when they come into view
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach((bar, index) => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !bar.classList.contains('animated')) {
                bar.classList.add('animated');
                const targetWidth = bar.style.getPropertyValue('--target-width') || bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, index * 200); // Stagger the animations
            }
        });
    }

    // Trigger progress bar animation on scroll
    window.addEventListener('scroll', animateProgressBars);

    // Navbar background change on scroll
    function updateNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '#212529';
            navbar.style.backdropFilter = 'none';
        }
    }

    window.addEventListener('scroll', updateNavbarBackground);

    // Typing effect for hero section
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing effect if hero text exists
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1000);
    }

    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-arrow');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Project card hover effects (handled in enhanced interactions below)

    // Smooth reveal animation for sections
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8;
            
            if (isVisible) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize reveal animations
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial call

    // Mobile menu toggle enhancement
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.navbar-nav .nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarCollapse.classList.remove('show');
            });
        });
    }

    // Add scroll to top functionality
    function addScrollToTop() {
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(0,123,255,0.3);
        `;

        document.body.appendChild(scrollToTopBtn);

        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        });

        // Scroll to top functionality
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effects
        scrollToTopBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 20px rgba(0,123,255,0.4)';
        });

        scrollToTopBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0,123,255,0.3)';
        });
    }

    addScrollToTop();

    // Performance optimization: Throttle scroll events
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

    // Apply throttling to scroll events
    const throttledScrollHandler = throttle(function() {
        updateActiveNav();
        updateNavbarBackground();
        revealOnScroll();
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScrollHandler);

    // Interactive image modal functionality
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const imageModalLabel = document.getElementById('imageModalLabel');
    
    if (imageModal && modalImage && imageModalLabel) {
        imageModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const imageSrc = button.getAttribute('data-src');
            const imageTitle = button.getAttribute('data-title');
            
            modalImage.src = imageSrc;
            imageModalLabel.textContent = imageTitle;
        });
    }

    // Enhanced project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
        });
    });

    // Add parallax effect to hero section
    function addParallaxEffect() {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                heroSection.style.transform = `translateY(${rate}px)`;
            });
        }
    }

    addParallaxEffect();

    // Add typing effect to hero subtitle
    function typeWriterSubtitle() {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            const originalText = heroSubtitle.textContent;
            heroSubtitle.textContent = '';
            let i = 0;
            
            function type() {
                if (i < originalText.length) {
                    heroSubtitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(type, 100);
                }
            }
            
            setTimeout(type, 2000);
        }
    }

    typeWriterSubtitle();

    // Load projects dynamically
    function loadProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        // Project icons mapping
        const projectIcons = {
            'climate-risk-analyzer': '🌍',
            'retail-demand-forecasting': '📈',
            'trade-policy-prediction': '📊',
            'paper-insight-engine': '🔍',
            'sentiment-analysis': '💭',
            'data-visualization-dashboard': '📊'
        };

        // Sample projects data (in a real implementation, this would come from projects-data.js)
        const projects = [
            {
                id: "climate-risk-analyzer",
                title: "Climate Risk & Business Vulnerability Analyzer",
                slug: "climate-risk-analyzer",
                blurb: "A comprehensive analytics platform that combines climate data, disaster records, and industry sector information to assess business vulnerability to climate events and provide actionable risk insights.",
                ctaType: "learn",
                detailsPage: true,
                demoUrl: null,
                githubUrl: "https://github.com/praneethvykuntam/climateRisk-BusinessVulnerabilityAnalyzer"
            },
            {
                id: "retail-demand-forecasting",
                title: "Retail Demand Forecasting & Price Elasticity",
                slug: "retail-demand-forecasting",
                blurb: "End-to-end ML pipeline for forecasting weekly retail demand and estimating price elasticity. Features advanced time series forecasting and price sensitivity analysis for inventory optimization.",
                ctaType: "learn",
                detailsPage: true,
                demoUrl: null,
                githubUrl: "https://github.com/praneethvykuntam/Retail-Demand-Forecasting-Price-Elasticity"
            },
            {
                id: "trade-policy-prediction",
                title: "Trade Policy Prediction",
                slug: "trade-policy-prediction",
                blurb: "Using advanced NLP and machine learning to understand policy signals and forecast economic impacts. Analyzes sentiment in trade policy documents to predict market movements.",
                ctaType: "learn",
                detailsPage: true,
                demoUrl: null,
                githubUrl: "https://github.com/praneethvykuntam/tradepolicy"
            },
            {
                id: "paper-insight-engine",
                title: "Paper Insight Engine",
                slug: "paper-insight-engine",
                blurb: "An AI-powered semantic search and summarization engine designed for academic literature. Helps researchers quickly discover and understand relevant papers through advanced NLP techniques.",
                ctaType: "learn",
                detailsPage: true,
                demoUrl: null,
                githubUrl: "https://github.com/praneethvykuntam/paper_insight_engine"
            },
            {
                id: "sentiment-analysis",
                title: "Sentiment Analysis Framework",
                slug: "sentiment-analysis",
                blurb: "Advanced sentiment analysis framework using machine learning and deep learning techniques to analyze text data and extract meaningful insights with emotion detection capabilities.",
                ctaType: "learn",
                detailsPage: true,
                demoUrl: null,
                githubUrl: "https://github.com/praneethvykuntam/Sentiment-Analysis"
            },
            {
                id: "data-visualization-dashboard",
                title: "Interactive Data Visualization Dashboard",
                slug: "data-visualization-dashboard",
                blurb: "A comprehensive dashboard for interactive data visualization and business intelligence. Features real-time analytics, customizable charts, and advanced filtering capabilities.",
                ctaType: "external",
                detailsPage: true,
                demoUrl: "https://example-demo.com",
                githubUrl: "https://github.com/praneethvykuntam"
            }
        ];

        projectsGrid.innerHTML = projects.map(project => {
            const icon = projectIcons[project.id] || '💼';
            const actionText = project.ctaType === 'external' ? 'Try it' : 'Learn More';
            const actionUrl = project.ctaType === 'external' && project.demoUrl ? project.demoUrl : `${project.slug}-details.html`;
            const targetAttr = project.ctaType === 'external' ? 'target="_blank"' : '';

            return `
                <div class="col-12 col-md-6 col-lg-4">
                    <a href="${actionUrl}" class="project-card" ${targetAttr} aria-label="View ${project.title} project">
                        <div class="project-icon" aria-hidden="true">${icon}</div>
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-blurb">${project.blurb}</p>
                            <div class="project-action">
                                <span class="project-action-link">${actionText}</span>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }).join('');
    }

    // Load projects immediately
    loadProjects();

    console.log('Portfolio website loaded successfully!');
});