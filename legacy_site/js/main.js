/**
 * Main JavaScript for Srinivas Interiors Luxury Website
 * High-performance, GPU-accelerated scroll animations & micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Page Transition ---
    const pageTransition = document.querySelector('.page-transition');
    if (pageTransition) {
        setTimeout(() => {
            pageTransition.classList.remove('active');
        }, 400);
    }

    // --- 2. Scroll Progress Bar ---
    const progressBar = document.getElementById('scrollProgressBar');
    
    function updateScrollProgress() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollHeight > 0 && progressBar) {
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }
    }

    // --- 3. Sticky Header & Active Nav Highlighting ---
    const header = document.getElementById('header');
    const fabTop = document.getElementById('fabTop');
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function handleScrollState() {
        const scrollY = window.scrollY;

        // Sticky Header Class
        if (header) {
            if (scrollY > 50) {
                header.classList.add('scrolled');
                header.classList.remove('glass');
            } else {
                header.classList.remove('scrolled');
                header.classList.add('glass');
            }
        }

        // Back to top button visibility
        if (fabTop) {
            if (scrollY > 300) {
                fabTop.classList.add('visible');
            } else {
                fabTop.classList.remove('visible');
            }
        }

        // Active Nav Section Highlighting
        let currentSectionId = '';
        const headerHeight = header ? header.offsetHeight : 80;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${currentSectionId}` || href.endsWith(`#${currentSectionId}`)) {
                    link.classList.add('active');
                } else if (href && href.startsWith('#')) {
                    link.classList.remove('active');
                }
            });
        }

        updateScrollProgress();
    }

    // Throttled Scroll Listener for 60 FPS Performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                handleScrollState();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    // Initial check
    handleScrollState();

    // --- 4. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            
            const spans = menuToggle.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // --- 5. Intersection Observer for Scroll Reveals & Stagger Sequence ---
    // Apply automatic stagger delay classes to children in grids/containers
    const staggerContainers = document.querySelectorAll('.gallery-grid, .services-grid, .features-grid, .stagger-container');
    staggerContainers.forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, idx) => {
            if (!child.classList.contains('fade-in-up') && !child.classList.contains('scale-up')) {
                child.classList.add('fade-in-up');
            }
            const delayClass = `stagger-delay-${(idx % 6) + 1}`;
            child.classList.add(delayClass);
        });
    });

    const revealElements = document.querySelectorAll('.fade-in-up, .fade-in, .slide-up, .scale-up, .reveal-text');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 6. Animated Statistical Counters ---
    const counterElements = document.querySelectorAll('.counter, .stat-number, [data-counter]');

    function animateCounter(el) {
        const targetText = el.getAttribute('data-target') || el.innerText.trim();
        const targetNum = parseFloat(targetText.replace(/[^0-9.]/g, ''));
        const prefix = targetText.match(/^[^\d]+/)?.[0] || '';
        const suffix = targetText.match(/[^\d]+$/)?.[0] || '';

        if (isNaN(targetNum)) return;

        let startNum = 0;
        const duration = 1600; // ms
        const startTime = performance.now();

        function updateCount(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * targetNum);

            el.innerText = `${prefix}${currentVal}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                el.innerText = targetText;
            }
        }

        requestAnimationFrame(updateCount);
    }

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    counterElements.forEach(el => {
        counterObserver.observe(el);
    });

    // --- 7. Smooth Anchor Scrolling & Back To Top ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                if (navList && navList.classList.contains('active')) {
                    menuToggle.click();
                }

                const headerHeight = header ? header.offsetHeight : 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 8. Hero Slider / Carousel Motion ---
    const track = document.querySelector('.hero-slider-track');
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;
    let slideTimer = null;

    if (slides.length > 0) {
        function showSlide(index) {
            if (track) {
                track.style.transform = `translateX(-${index * 100}%)`;
            }
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }

        function nextSlide() {
            let nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        function prevSlide() {
            let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        }

        function startAutoPlay() {
            stopAutoPlay();
            slideTimer = setInterval(nextSlide, 5000);
        }

        function stopAutoPlay() {
            if (slideTimer) clearInterval(slideTimer);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                startAutoPlay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                startAutoPlay();
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showSlide(i);
                startAutoPlay();
            });
        });

        // Touch swipe support for mobile
        let touchStartX = 0;
        const sliderContainer = document.querySelector('.hero-slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            sliderContainer.addEventListener('touchend', e => {
                let touchEndX = e.changedTouches[0].screenX;
                if (touchStartX - touchEndX > 50) {
                    nextSlide();
                    startAutoPlay();
                } else if (touchEndX - touchStartX > 50) {
                    prevSlide();
                    startAutoPlay();
                }
            }, { passive: true });
        }

        startAutoPlay();
    }

    // --- 9. Universal Fullscreen Image Lightbox Modal ---
    function initGlobalLightbox() {
        let glb = document.getElementById('globalLightbox');
        if (!glb) {
            glb = document.createElement('div');
            glb.id = 'globalLightbox';
            glb.className = 'global-lightbox';
            glb.innerHTML = `
                <button class="global-lightbox-close" id="glbClose" aria-label="Close Fullscreen">&times;</button>
                <div class="global-lightbox-content">
                    <img src="" alt="Full View" id="glbImg" class="global-lightbox-img">
                    <div id="glbCaption" class="global-lightbox-caption"></div>
                </div>
            `;
            document.body.appendChild(glb);
        }

        const glbImg = document.getElementById('glbImg');
        const glbCaption = document.getElementById('glbCaption');
        const glbClose = document.getElementById('glbClose');

        function openLightbox(imgSrc, captionText) {
            if (!imgSrc) return;
            glbImg.src = imgSrc;
            glbCaption.innerText = captionText || '';
            glbCaption.style.display = captionText ? 'inline-block' : 'none';
            glb.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            glb.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (glbClose) glbClose.addEventListener('click', closeLightbox);
        glb.addEventListener('click', (e) => {
            if (e.target === glb || e.target.classList.contains('global-lightbox-content')) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && glb.classList.contains('active')) {
                closeLightbox();
            }
        });

        // Delegate image click across service cards, crop wraps, project cards, and content images
        const clickableSelectors = '.service-img-wrap, .crop-wrap, .service-card img, .project-card img, .product-main-image img, .gallery-item img';
        
        document.querySelectorAll(clickableSelectors).forEach(element => {
            element.style.cursor = 'pointer';
            element.addEventListener('click', (e) => {
                // Prevent bubbling if inside special links
                const targetImg = element.tagName === 'IMG' ? element : element.querySelector('img');
                if (!targetImg) return;

                const parentCard = element.closest('.service-card, .project-card, .service-img-wrap, .crop-wrap');
                let caption = targetImg.alt || '';
                if (parentCard) {
                    const titleEl = parentCard.querySelector('.service-title, .project-title, h3, h4');
                    if (titleEl) caption = titleEl.innerText;
                }
                openLightbox(targetImg.src, caption);
            });
        });
    }

    initGlobalLightbox();

});
