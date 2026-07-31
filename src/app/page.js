"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
    useEffect(() => {
        // Simple slider logic for the hero section
        const track = document.querySelector('.hero-slider-track');
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slider-dot');
        const prevBtn = document.querySelector('.slider-arrow.prev');
        const nextBtn = document.querySelector('.slider-arrow.next');

        if (track && slides.length > 0) {
            let currentSlide = 0;
            const slideCount = slides.length;

            const updateSlider = () => {
                track.style.transform = `translateX(-${currentSlide * 100}%)`;
                slides.forEach((slide, index) => {
                    slide.classList.toggle('active', index === currentSlide);
                });
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            };

            const nextSlide = () => {
                currentSlide = (currentSlide + 1) % slideCount;
                updateSlider();
            };

            const prevSlide = () => {
                currentSlide = (currentSlide - 1 + slideCount) % slideCount;
                updateSlider();
            };

            if (nextBtn) nextBtn.addEventListener('click', nextSlide);
            if (prevBtn) prevBtn.addEventListener('click', prevSlide);

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentSlide = index;
                    updateSlider();
                });
            });

            const interval = setInterval(nextSlide, 5000);

            return () => {
                if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
                if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
                clearInterval(interval);
            };
        }
    }, []);

    const handleQuoteSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your quotation request has been received. We will call you shortly.');
    };

    return (
        <main>
            <section className="hero-slider-container">
                <div className="hero-slider-track">
                    <div className="hero-slide active">
                        <div className="hero-slide-bg crop-wrap">
                            <img src="/assets/kitchen (1).png" alt="Luxury Modular Kitchen" />
                        </div>
                        <div className="hero-slide-overlay"></div>
                        <div className="hero-slide-content">
                            <span className="hero-badge"><i className="fas fa-crown"></i> Modular Kitchen Architecture</span>
                            <h1 className="hero-title-sample">LUXURY MODULAR <span className="gold-text">KITCHEN CABINTRY & ISLANDS</span></h1>
                            <p className="hero-subtitle" style={{ fontSize: "1.15rem", letterSpacing: "1px", fontWeight: 500, color: "rgba(255,255,255,0.92)", marginBottom: "2rem" }}>Custom L-Shape, U-Shape & Island Kitchens engineered with Boiling Water Proof Marine Plywood & Soft-Close Hardware.</p>
                            <div className="hero-buttons">
                                <Link href="/services" className="btn-hero-gold"><i className="fas fa-utensils"></i> EXPLORE KITCHENS</Link>
                                <a href="#quote-section" className="btn-hero-outline"><i className="fas fa-calculator"></i> GET FREE QUOTE</a>
                            </div>
                        </div>
                    </div>

                    <div className="hero-slide">
                        <div className="hero-slide-bg crop-wrap">
                            <img src="/assets/wardrobe (1).png" alt="Bespoke Wardrobe Design" />
                        </div>
                        <div className="hero-slide-overlay"></div>
                        <div className="hero-slide-content">
                            <span className="hero-badge"><i className="fas fa-gem"></i> Custom Bedroom Storage</span>
                            <h1 className="hero-title-sample">BESPOKE MODULAR <span className="gold-text">WARDROBES & WALK-IN STORAGE</span></h1>
                            <p className="hero-subtitle" style={{ fontSize: "1.15rem", letterSpacing: "1px", fontWeight: 500, color: "rgba(255,255,255,0.92)", marginBottom: "2rem" }}>Custom veneer, high-gloss acrylic shutters, integrated LED lofts, and soft-close sliding door systems.</p>
                            <div className="hero-buttons">
                                <Link href="/gallery?cat=wardrobes" className="btn-hero-gold"><i className="fas fa-door-closed"></i> EXPLORE WARDROBES</Link>
                                <a href="#quote-section" className="btn-hero-outline"><i className="fas fa-calculator"></i> GET FREE QUOTE</a>
                            </div>
                        </div>
                    </div>

                    <div className="hero-slide">
                        <div className="hero-slide-bg crop-wrap">
                            <img src="/assets/TVunit (5).png" alt="Luxury TV Panel Unit" />
                        </div>
                        <div className="hero-slide-overlay"></div>
                        <div className="hero-slide-content">
                            <span className="hero-badge"><i className="fas fa-tv"></i> Living Room Centerpieces</span>
                            <h1 className="hero-title-sample">ARCHITECTURAL <span className="gold-text">TV UNITS & WALL PANELING</span></h1>
                            <p className="hero-subtitle" style={{ fontSize: "1.15rem", letterSpacing: "1px", fontWeight: 500, color: "rgba(255,255,255,0.92)", marginBottom: "2rem" }}>Floating entertainment units with integrated warm LED profile lighting, charcoal louver paneling, and concealed wiring.</p>
                            <div className="hero-buttons">
                                <Link href="/gallery?cat=tv" className="btn-hero-gold"><i className="fas fa-tv"></i> EXPLORE TV UNITS</Link>
                                <a href="#quote-section" className="btn-hero-outline"><i className="fas fa-calculator"></i> GET FREE QUOTE</a>
                            </div>
                        </div>
                    </div>

                    <div className="hero-slide">
                        <div className="hero-slide-bg crop-wrap">
                            <img src="/assets/door.png" alt="Solid Teak Wooden Door" />
                        </div>
                        <div className="hero-slide-overlay"></div>
                        <div className="hero-slide-content">
                            <span className="hero-badge"><i className="fas fa-door-open"></i> Solid Teak Woodwork</span>
                            <h1 className="hero-title-sample">SOLID TEAK WOOD <span className="gold-text">MAIN DOORS & CARVINGS</span></h1>
                            <p className="hero-subtitle" style={{ fontSize: "1.15rem", letterSpacing: "1px", fontWeight: 500, color: "rgba(255,255,255,0.92)", marginBottom: "2rem" }}>Hand-carved main entry doors, designer CNC bedroom doors, and weatherproof wooden window frames.</p>
                            <div className="hero-buttons">
                                <Link href="/gallery?cat=doors" className="btn-hero-gold"><i className="fas fa-door-open"></i> EXPLORE DOORS</Link>
                                <a href="#quote-section" className="btn-hero-outline"><i className="fas fa-calculator"></i> GET FREE QUOTE</a>
                            </div>
                        </div>
                    </div>

                    <div className="hero-slide">
                        <div className="hero-slide-bg crop-wrap">
                            <img src="/assets/aluminium.png" alt="Aluminium & Glass Partitions" />
                        </div>
                        <div className="hero-slide-overlay"></div>
                        <div className="hero-slide-content">
                            <span className="hero-badge"><i className="fas fa-drafting-compass"></i> Aluminium & Glass Fabrication</span>
                            <h1 className="hero-title-sample">PRECISION ALUMINIUM <span className="gold-text">SLIDING & GLASS PARTITIONS</span></h1>
                            <p className="hero-subtitle" style={{ fontSize: "1.15rem", letterSpacing: "1px", fontWeight: 500, color: "rgba(255,255,255,0.92)", marginBottom: "2rem" }}>Slim-profile glass sliding doors, office room partitions, SS mosquito mesh, and balcony safety installations.</p>
                            <div className="hero-buttons">
                                <Link href="/gallery?cat=aluminium" className="btn-hero-gold"><i className="fas fa-border-all"></i> EXPLORE ALUMINIUM</Link>
                                <a href="#quote-section" className="btn-hero-outline"><i className="fas fa-calculator"></i> GET FREE QUOTE</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button className="slider-arrow prev" aria-label="Previous Slide"><i className="fas fa-chevron-left"></i></button>
                <button className="slider-arrow next" aria-label="Next Slide"><i className="fas fa-chevron-right"></i></button>

                <div className="slider-dots">
                    <span className="slider-dot active"></span>
                    <span className="slider-dot"></span>
                    <span className="slider-dot"></span>
                    <span className="slider-dot"></span>
                    <span className="slider-dot"></span>
                </div>
            </section>

            <section id="about" className="section resp-padding-section" style={{ backgroundColor: "#15110F" }}>
                <div className="container">
                    <div className="grid grid-2 resp-gap-lg" style={{ alignItems: "center" }}>
                        <div className="about-image crop-wrap" style={{ borderRadius: "var(--radius-lg)", boxShadow: "0 25px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(197, 160, 89, 0.4)" }}>
                            <img src="/assets/tvunit (1).png" alt="Craftsmanship & Luxury Interior Design" />
                        </div>
                        <div className="about-content fade-in-up delay-2">
                            <span style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px", display: "block", marginBottom: "0.5rem" }}><i className="fas fa-crown" style={{ marginRight: "6px" }}></i> Our Heritage</span>
                            <h2 className="resp-title-lg" style={{ marginBottom: "1.5rem", color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>Master Woodworking & <span style={{ color: "var(--color-gold)" }}>Luxury Interiors</span></h2>
                            
                            <div style={{ borderLeft: "3px solid var(--color-gold)", padding: "1rem 1.25rem", background: "rgba(197, 160, 89, 0.06)", borderRadius: "0 12px 12px 0", marginBottom: "1.8rem" }}>
                                <p style={{ fontSize: "1.1rem", marginBottom: 0, color: "#FFFFFF", lineHeight: 1.85 }}>
                                    Founded by master craftsman <strong style={{ color: "var(--color-gold)" }}>Srinivasarao Vasamsetti</strong>, <span style={{ color: "var(--color-gold)", fontWeight: 700 }}>Srinivas Interiors</span> is a family-owned carpentry & interior design company based in Hyderabad. We specialize in transforming houses into luxurious homes through bespoke furniture.
                                </p>
                            </div>

                            <p style={{ fontSize: "1.05rem", marginBottom: "2rem", color: "rgba(255, 255, 255, 0.82)", lineHeight: 1.8 }}>
                                Combining traditional woodworking expertise with modern state-of-the-art CNC precision manufacturing, our team delivers 100% Boiling Water Proof (BWP) Marine wood interiors built to endure for generations.
                            </p>
                            
                            <div style={{ display: "flex", gap: "2rem", marginBottom: "2.2rem", paddingTop: "1rem", borderTop: "1px solid rgba(197, 160, 89, 0.2)" }}>
                                <div>
                                    <h3 style={{ fontSize: "2.2rem", color: "var(--color-gold)", marginBottom: 0, fontFamily: "'Cinzel', serif", fontWeight: 700 }}>15+</h3>
                                    <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>Years Experience</p>
                                </div>
                                <div style={{ borderLeft: "1px solid rgba(255,255,255,0.15)", paddingLeft: "2rem" }}>
                                    <h3 style={{ fontSize: "2.2rem", color: "var(--color-gold)", marginBottom: 0, fontFamily: "'Cinzel', serif", fontWeight: 700 }}>500+</h3>
                                    <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>Projects Delivered</p>
                                </div>
                            </div>
                            
                            <Link href="/about" className="btn btn-outline"><i className="fas fa-book-open" style={{ marginRight: "8px" }}></i> READ OUR FULL STORY</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h5 className="fade-in-up" style={{ textAlign: "center", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 600 }}>Our Expertise</h5>
                    <h2 className="section-title fade-in-up delay-1">Premium Services</h2>
                    
                    <div className="grid grid-3">
                        <div className="service-card fade-in-up delay-1">
                            <div className="service-img-wrap crop-wrap">
                                <img src="/assets/wardrobe (1).png" alt="Modular Wardrobes" />
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Modular Wardrobes</h3>
                                <p>Elegant, space-saving designs customized for your bedroom with premium finishes.</p>
                                <Link href="/services" className="btn btn-outline" style={{ marginTop: "1rem" }}>Learn More</Link>
                            </div>
                        </div>
                        
                        <div className="service-card fade-in-up delay-2">
                            <div className="service-img-wrap crop-wrap">
                                <img src="/assets/kitchen (3).png" alt="Kitchen Cabinets" />
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">Kitchen Cabinets</h3>
                                <p>Functional and stunning modern kitchens tailored to your cooking style.</p>
                                <Link href="/services" className="btn btn-outline" style={{ marginTop: "1rem" }}>Learn More</Link>
                            </div>
                        </div>
                        
                        <div className="service-card fade-in-up delay-3">
                            <div className="service-img-wrap crop-wrap">
                                <img src="/assets/TVunit (5).png" alt="TV Units & Wall Paneling" />
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">TV Units</h3>
                                <p>Sophisticated entertainment centers that become the focal point of your living room.</p>
                                <Link href="/services" className="btn btn-outline" style={{ marginTop: "1rem" }}>Learn More</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ textAlign: "center", marginTop: "3rem" }}>
                        <Link href="/services" className="btn btn-primary fade-in-up delay-2">View All Services</Link>
                    </div>
                </div>
            </section>

            <section id="quote-section" className="section section-dark resp-padding-section" style={{ backgroundColor: "#1C1613", color: "#FFFFFF", borderTop: "3px solid #C5A059" }}>
                <div className="container">
                    <div className="grid grid-2 resp-gap-lg" style={{ alignItems: "center" }}>
                        <div>
                            <span className="hero-badge"><i className="fas fa-calculator"></i> Free Cost Estimate</span>
                            <h2 className="resp-title-lg" style={{ color: "#FFFFFF", margin: "1rem 0", fontFamily: "'Cinzel', serif" }}>Get An Instant Free Quotation For Your Dream Home</h2>
                            <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem", marginBottom: "2rem", lineHeight: 1.7 }}>Plan your interior budget with zero obligations. Share your requirements and our master carpenter team will prepare a detailed cost estimate within 24 hours.</p>
                            
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                    <i className="fas fa-check-circle" style={{ color: "#C5A059", fontSize: "1.5rem" }}></i>
                                    <span style={{ fontSize: "1.1rem", color: "#FFFFFF", fontWeight: 600 }}>100% Transparent Factory Pricing</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                    <i className="fas fa-check-circle" style={{ color: "#C5A059", fontSize: "1.5rem" }}></i>
                                    <span style={{ fontSize: "1.1rem", color: "#FFFFFF", fontWeight: 600 }}>Boiling Water Proof (BWP) Marine Materials</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                    <i className="fas fa-check-circle" style={{ color: "#C5A059", fontSize: "1.5rem" }}></i>
                                    <span style={{ fontSize: "1.1rem", color: "#FFFFFF", fontWeight: 600 }}>10-Year Warranty & Free On-Site Inspection</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card-dark fade-in-up">
                            <span style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "0.5rem" }}>INSTANT ESTIMATE</span>
                            <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>Request Custom Quote</h3>
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", marginBottom: "2rem" }}>Fill out the details below and we will contact you immediately.</p>
                            
                            <form onSubmit={handleQuoteSubmit}>
                                <div className="form-group-dark">
                                    <label className="form-label-dark">Full Name *</label>
                                    <input type="text" className="form-control-dark" required placeholder="Enter your full name" />
                                </div>
                                <div className="form-group-dark">
                                    <label className="form-label-dark">Phone Number / WhatsApp *</label>
                                    <input type="tel" className="form-control-dark" required placeholder="+91 XXXXX XXXXX" />
                                </div>
                                <div className="form-group-dark" style={{ marginBottom: "2rem" }}>
                                    <label className="form-label-dark">Select Required Service *</label>
                                    <select className="form-control-dark" required defaultValue="">
                                        <option value="" disabled>Choose Service...</option>
                                        <option value="kitchen">Modular Kitchen Cabinets</option>
                                        <option value="wardrobe">Modular Wardrobes & Storage</option>
                                        <option value="tv">TV Units & Wall Paneling</option>
                                        <option value="doors">Wooden Doors & Windows</option>
                                        <option value="aluminium">Aluminium & Glass Partitions</option>
                                        <option value="fullhome">Full Home Interior Works</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn-hero-gold" style={{ width: "100%", cursor: "pointer" }}>SUBMIT FOR FREE ESTIMATE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title fade-in-up">Our Work Process</h2>
                    <p className="section-subtitle fade-in-up delay-1">A seamless journey from concept to completion, ensuring absolute perfection at every step.</p>
                    
                    <div className="timeline">
                        <div className="timeline-item fade-in-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-step">Step 1</div>
                                <h3>Consultation</h3>
                                <p>We discuss your vision, requirements, and budget to understand your unique lifestyle.</p>
                            </div>
                        </div>
                        <div className="timeline-item fade-in-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-step">Step 2</div>
                                <h3>Site Visit</h3>
                                <p>Our experts take precise measurements and assess the architectural flow of your space.</p>
                            </div>
                        </div>
                        <div className="timeline-item fade-in-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-step">Step 3</div>
                                <h3>3D Design</h3>
                                <p>We create realistic 3D renderings so you can visualize the final outcome before production begins.</p>
                            </div>
                        </div>
                        <div className="timeline-item fade-in-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-step">Step 4</div>
                                <h3>Material Selection</h3>
                                <p>Choose from our curated collection of premium woods, laminates, and luxury finishes.</p>
                            </div>
                        </div>
                        <div className="timeline-item fade-in-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-step">Step 5</div>
                                <h3>Manufacturing</h3>
                                <p>Our master craftsmen bring the designs to life using state-of-the-art machinery and hand-finished details.</p>
                            </div>
                        </div>
                        <div className="timeline-item fade-in-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-step">Step 6</div>
                                <h3>Installation</h3>
                                <p>Clean, efficient, and precise installation by our professional team.</p>
                            </div>
                        </div>
                        <div className="timeline-item fade-in-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-step">Step 7</div>
                                <h3>Customer Satisfaction</h3>
                                <p>A final walkthrough to ensure every detail meets our rigorous standards and exceeds your expectations.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-4" style={{ marginTop: "6rem", textAlign: "center" }}>
                        <div className="fade-in-up delay-1">
                            <i className="fas fa-gem" style={{ fontSize: "2.5rem", color: "var(--color-gold)", marginBottom: "1rem" }}></i>
                            <h4 style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, color: "#FFFFFF" }}>Premium Materials</h4>
                        </div>
                        <div className="fade-in-up delay-2">
                            <i className="fas fa-hammer" style={{ fontSize: "2.5rem", color: "var(--color-gold)", marginBottom: "1rem" }}></i>
                            <h4 style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, color: "#FFFFFF" }}>Experienced Craftsmanship</h4>
                        </div>
                        <div className="fade-in-up delay-3">
                            <i className="fas fa-drafting-compass" style={{ fontSize: "2.5rem", color: "var(--color-gold)", marginBottom: "1rem" }}></i>
                            <h4 style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, color: "#FFFFFF" }}>Custom Design</h4>
                        </div>
                        <div className="fade-in-up delay-4">
                            <i className="fas fa-award" style={{ fontSize: "2.5rem", color: "var(--color-gold)", marginBottom: "1rem" }}></i>
                            <h4 style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, color: "#FFFFFF" }}>Perfect Finishing</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title fade-in-up text-center">Client Experiences</h2>
                    <div className="grid grid-3">
                        <div className="contact-card-dark fade-in-up delay-1" style={{ padding: "2rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                                <img src="https://ui-avatars.com/api/?name=Rajesh+Kumar&background=C5A059&color=1C1613&rounded=true" alt="Rajesh K." style={{ width: "50px", height: "50px" }} />
                                <div>
                                    <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>Rajesh Kumar</h4>
                                    <div style={{ color: "var(--color-gold)", fontSize: "0.9rem" }}>★★★★★</div>
                                </div>
                            </div>
                            <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>"Excellent craftsmanship and premium finishing."</p>
                        </div>
                        
                        <div className="contact-card-dark fade-in-up delay-2" style={{ padding: "2rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                                <img src="https://ui-avatars.com/api/?name=Anjali+Menon&background=C5A059&color=1C1613&rounded=true" alt="Anjali M." style={{ width: "50px", height: "50px" }} />
                                <div>
                                    <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>Anjali Menon</h4>
                                    <div style={{ color: "var(--color-gold)", fontSize: "0.9rem" }}>★★★★★</div>
                                </div>
                            </div>
                            <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>"Our modular kitchen was completed on time."</p>
                        </div>

                        <div className="contact-card-dark fade-in-up delay-3" style={{ padding: "2rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                                <img src="https://ui-avatars.com/api/?name=Vikram+Reddy&background=C5A059&color=1C1613&rounded=true" alt="Vikram R." style={{ width: "50px", height: "50px" }} />
                                <div>
                                    <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>Vikram Reddy</h4>
                                    <div style={{ color: "var(--color-gold)", fontSize: "0.9rem" }}>★★★★★</div>
                                </div>
                            </div>
                            <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>"Affordable pricing with excellent quality."</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
