"use client";

import Link from "next/link";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your consultation request has been submitted to Srinivas Interiors.");
    };

    return (
        <main>
            <section className="services-header-banner" style={{ backgroundColor: "#15110F", borderBottom: "2px solid #D4AF37" }}>
                <div className="container">
                    <span className="hero-badge"><i className="fas fa-paper-plane"></i> Get In Touch</span>
                    <h1 className="page-title">Contact <span style={{ color: "var(--color-gold)" }}>Srinivas Interiors</span></h1>
                    <p className="page-subtitle">We would love to discuss your custom furniture and interior project. Reach out directly for a free consultation.</p>
                </div>
            </section>

            <section className="section section-dark" style={{ backgroundColor: "#15110F", padding: "4rem 0 2rem 0" }}>
                <div className="container">
                    <div className="grid grid-4">
                        <div className="feature-strip-card fade-in-up delay-1">
                            <div className="feature-strip-icon"><i className="fas fa-building-columns"></i></div>
                            <h4 style={{ color: "#FFFFFF", fontSize: "1.1rem", marginBottom: "0.5rem", fontFamily: "'Cinzel', serif" }}>Workshop Visit</h4>
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginBottom: 0 }}>Inspect premium timber, hardware, and finishes at our Hyderabad facility.</p>
                        </div>
                        <div className="feature-strip-card fade-in-up delay-2">
                            <div className="feature-strip-icon"><i className="fas fa-drafting-compass"></i></div>
                            <h4 style={{ color: "#FFFFFF", fontSize: "1.1rem", marginBottom: "0.5rem", fontFamily: "'Cinzel', serif" }}>Free On-Site Quote</h4>
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginBottom: 0 }}>Get precise measurements and itemized cost estimates tailored for your space.</p>
                        </div>
                        <div className="feature-strip-card fade-in-up delay-3">
                            <div className="feature-strip-icon"><i className="fas fa-user-gear"></i></div>
                            <h4 style={{ color: "#FFFFFF", fontSize: "1.1rem", marginBottom: "0.5rem", fontFamily: "'Cinzel', serif" }}>Master Craftsmanship</h4>
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginBottom: 0 }}>Direct guidance from founder Srinivasarao Vasamsetti.</p>
                        </div>
                        <div className="feature-strip-card fade-in-up delay-4">
                            <div className="feature-strip-icon"><i className="fas fa-shield-halved"></i></div>
                            <h4 style={{ color: "#FFFFFF", fontSize: "1.1rem", marginBottom: "0.5rem", fontFamily: "'Cinzel', serif" }}>10-Year Guarantee</h4>
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginBottom: 0 }}>Engineered using BWP Marine Plywood & certified soft-close hardware.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-dark" style={{ backgroundColor: "#15110F", padding: "3rem 0 6rem 0" }}>
                <div className="container">
                    <div className="contact-grid">
                        
                        <div className="contact-card-dark fade-in-up delay-1">
                            <span style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "0.5rem" }}>DIRECT ACCESS</span>
                            <h2 style={{ color: "#FFFFFF", marginBottom: "1.5rem", fontSize: "2.3rem", fontFamily: "'Cinzel', serif" }}>Owner Contact Details</h2>
                            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", marginBottom: "2.5rem", lineHeight: 1.6 }}>Speak directly with our founder or send us a message. We guarantee quick turnaround on all project inquiries.</p>
                            
                            <div className="contact-detail-item">
                                <div className="contact-icon-badge"><i className="fas fa-user-tie"></i></div>
                                <div>
                                    <h4 style={{ color: "var(--color-gold-light)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "4px" }}>Business Owner</h4>
                                    <p style={{ color: "#FFFFFF", fontSize: "1.3rem", fontWeight: 800, marginBottom: "2px" }}>Srinivasarao Vasamsetti</p>
                                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Founder & Master Carpenter</span>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-icon-badge"><i className="fas fa-phone-alt"></i></div>
                                <div>
                                    <h4 style={{ color: "var(--color-gold-light)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "4px" }}>Phone Call Direct</h4>
                                    <p style={{ color: "#FFFFFF", fontSize: "1.25rem", fontWeight: 700, marginBottom: 0 }}>
                                        <a href="tel:+918341745511" style={{ color: "#FFFFFF", textDecoration: "none" }}>+91 83417 45511</a>
                                    </p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-icon-badge" style={{ background: "rgba(37, 211, 102, 0.15)", borderColor: "rgba(37, 211, 102, 0.4)", color: "#25D366" }}>
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <div>
                                    <h4 style={{ color: "var(--color-gold-light)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "4px" }}>WhatsApp Direct</h4>
                                    <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 0 }}>
                                        <a href="https://wa.me/918341745511?text=Hello!%20I%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20carpentry%20and%20interior%20design%20services.%20I%20would%20like%20to%20know%20more%20about%20your%20wardrobes%2C%20modular%20kitchens%2C%20TV%20units%2C%20custom%20furniture%2C%20aluminium%20works%2C%20and%20pricing.%20Please%20share%20the%20details%20and%20help%20me%20get%20a%20quotation.%20Thank%20you!" target="_blank" style={{ color: "#25D366", textDecoration: "none" }} rel="noreferrer">+91 83417 45511 (Instant Chat)</a>
                                    </p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-icon-badge"><i className="fas fa-envelope"></i></div>
                                <div>
                                    <h4 style={{ color: "var(--color-gold-light)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "4px" }}>Email Address</h4>
                                    <p style={{ color: "#FFFFFF", fontSize: "1.1rem", fontWeight: 600, marginBottom: 0 }}>
                                        <a href="mailto:info@srinivasinteriors.com" style={{ color: "#FFFFFF", textDecoration: "none" }}>info@srinivasinteriors.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-icon-badge"><i className="fas fa-map-marker-alt"></i></div>
                                <div>
                                    <h4 style={{ color: "var(--color-gold-light)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "4px" }}>Workshop & Office Location</h4>
                                    <p style={{ color: "#FFFFFF", fontSize: "1.05rem", marginBottom: 0 }}>Hyderabad, Telangana, India</p>
                                </div>
                            </div>
                            <div className="contact-detail-item" style={{ marginBottom: 0 }}>
                                <div className="contact-icon-badge"><i className="fas fa-clock"></i></div>
                                <div>
                                    <h4 style={{ color: "var(--color-gold-light)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "4px" }}>Working Hours</h4>
                                    <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", marginBottom: 0 }}>Mon - Sat: 9:00 AM - 8:00 PM <br /><span style={{ fontSize: "0.85rem", color: "var(--color-gold-light)" }}>(Sunday by appointment)</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card-dark fade-in-up delay-2">
                            <span style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "0.5rem" }}>ESTIMATE REQUEST</span>
                            <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>Request a Free Consultation</h3>
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", marginBottom: "2rem" }}>Fill out your requirements below and our team will get back to you immediately.</p>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="form-group-dark">
                                    <label htmlFor="name" className="form-label-dark">Full Name *</label>
                                    <input type="text" id="name" name="name" className="form-control-dark" required placeholder="Enter your full name" />
                                </div>
                                
                                <div className="form-group-dark">
                                    <label htmlFor="phone" className="form-label-dark">Phone Number / WhatsApp *</label>
                                    <input type="tel" id="phone" name="phone" className="form-control-dark" required placeholder="+91 XXXXX XXXXX" />
                                </div>

                                <div className="form-group-dark">
                                    <label htmlFor="service" className="form-label-dark">Service Interested In *</label>
                                    <select id="service" name="service" className="form-control-dark" required defaultValue="">
                                        <option value="" disabled>Select a Service</option>
                                        <option value="modular_kitchen">Modular Kitchen Cabinets</option>
                                        <option value="wardrobe">Modular Wardrobes & Storage</option>
                                        <option value="tv_unit">TV Units & Wall Paneling</option>
                                        <option value="doors">Wooden Doors & Windows</option>
                                        <option value="aluminium">Aluminium & Glass Partitions</option>
                                        <option value="complete_interior">Complete Home Interiors</option>
                                    </select>
                                </div>

                                <div className="form-group-dark" style={{ marginBottom: "2rem" }}>
                                    <label htmlFor="message" className="form-label-dark">Project Requirements</label>
                                    <textarea id="message" name="message" className="form-control-dark" rows="4" placeholder="Share dimensions, room details, timber preferences, or special requests..."></textarea>
                                </div>
                                
                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                    <button type="submit" className="btn-hero-gold" style={{ flex: 1, cursor: "pointer", fontSize: "0.9rem" }}>
                                        <i className="fas fa-paper-plane"></i> SUBMIT REQUEST
                                    </button>
                                    
                                    <a href="https://wa.me/918341745511?text=Hello!%20I%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20carpentry%20and%20interior%20design%20services.%20I%20would%20like%20to%20know%20more%20about%20your%20wardrobes%2C%20modular%20kitchens%2C%20TV%20units%2C%20custom%20furniture%2C%20aluminium%20works%2C%20and%20pricing.%20Please%20share%20the%20details%20and%20help%20me%20get%20a%20quotation.%20Thank%20you!" target="_blank" className="btn" style={{ background: "#25D366", color: "#FFFFFF", border: "none", padding: "15px 22px", fontWeight: 700, borderRadius: "30px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", textDecoration: "none", boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)", fontSize: "0.9rem", transition: "var(--transition-fast)" }} rel="noreferrer">
                                        <i className="fab fa-whatsapp" style={{ fontSize: "1.2rem" }}></i> WhatsApp Direct
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-dark" style={{ backgroundColor: "#15110F", padding: "0 0 6rem 0" }}>
                <div className="container fade-in-up delay-1">
                    <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                        <span style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>WORKSHOP LOCATION</span>
                        <h3 style={{ fontSize: "2.2rem", color: "#FFFFFF", fontFamily: "'Cinzel', serif", marginTop: "0.3rem" }}>Visit Our Workshop & Showroom</h3>
                        <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "600px", margin: "0.5rem auto 0 auto" }}>Located in Hyderabad, Telangana. Experience our raw material quality, sliding door mechanisms, and custom woodworking in person.</p>
                    </div>
                    
                    <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", height: "420px", boxShadow: "0 20px 45px rgba(0,0,0,0.5)", border: "1px solid rgba(197, 160, 89, 0.3)" }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90510221373!2d78.24323630232468!3d17.4126086367332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
