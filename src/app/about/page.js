import Link from "next/link";

export default function About() {
    return (
        <main>
            {/* Solid Luxury Header Banner */}
            <section className="services-header-banner">
                <div className="container">
                    <span className="hero-badge"><i className="fas fa-crown"></i> Our Heritage</span>
                    <h1 className="page-title">About Srinivas Interiors</h1>
                    <p className="page-subtitle">Generations of passion for wood, precision engineering, and bespoke luxury interiors.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="section resp-padding-section" style={{ backgroundColor: "#15110F" }}>
                <div className="container">
                    <div className="grid grid-2 resp-gap-lg" style={{ alignItems: "center" }}>
                        <div className="about-content fade-in-up">
                            <span style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px", display: "block", marginBottom: "0.5rem" }}><i className="fas fa-crown" style={{ marginRight: "6px" }}></i> Who We Are</span>
                            <h2 className="resp-title-lg" style={{ marginBottom: "1.8rem", color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>Master Woodworking & <br /><span style={{ color: "var(--color-gold)" }}>Luxury Interior Design</span></h2>
                            
                            <div style={{ borderLeft: "3px solid var(--color-gold)", padding: "1.2rem 1.5rem", background: "rgba(197, 160, 89, 0.06)", borderRadius: "0 14px 14px 0", marginBottom: "2rem" }}>
                                <p style={{ fontSize: "1.15rem", marginBottom: 0, color: "#FFFFFF", lineHeight: 1.85, fontWeight: 400 }}>
                                    Founded by master craftsman <strong style={{ color: "var(--color-gold)" }}>Srinivasarao Vasamsetti</strong>, <span style={{ color: "var(--color-gold)", fontWeight: 700 }}>Srinivas Interiors</span> is a premier family-owned carpentry and interior design company in Hyderabad. We specialize in transforming residential & commercial spaces into bespoke architectural masterworks.
                                </p>
                            </div>

                            <p style={{ fontSize: "1.05rem", marginBottom: "1.5rem", color: "rgba(255, 255, 255, 0.82)", lineHeight: 1.85, fontWeight: 300 }}>
                                What began as a modest heritage carpentry workshop has evolved into a full-scale luxury interior design studio—seamlessly fusing traditional hand-carving techniques with modern, computer-numeric-control (CNC) precision manufacturing.
                            </p>

                            <p style={{ fontSize: "1.05rem", marginBottom: "2.2rem", color: "rgba(255, 255, 255, 0.82)", lineHeight: 1.85, fontWeight: 300 }}>
                                Our unwavering commitment to utilizing 100% Boiling Water Proof (BWP) Marine Plywood, certified soft-close hardware, and mirror-gloss polyurethane finishes ensures lifetime structural guarantee and unmatched visual splendor.
                            </p>

                            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: "2.5rem", paddingTop: "1.2rem", borderTop: "1px solid rgba(197, 160, 89, 0.2)" }}>
                                <div>
                                    <h3 style={{ fontSize: "2.4rem", color: "var(--color-gold)", marginBottom: 0, fontFamily: "'Cinzel', serif", fontWeight: 700 }}>15+</h3>
                                    <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>Years Experience</p>
                                </div>
                                <div style={{ borderLeft: "1px solid rgba(255,255,255,0.15)", paddingLeft: "2rem" }}>
                                    <h3 style={{ fontSize: "2.4rem", color: "var(--color-gold)", marginBottom: 0, fontFamily: "'Cinzel', serif", fontWeight: 700 }}>500+</h3>
                                    <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>Homes Transformed</p>
                                </div>
                                <div style={{ borderLeft: "1px solid rgba(255,255,255,0.15)", paddingLeft: "2rem" }}>
                                    <h3 style={{ fontSize: "2.4rem", color: "var(--color-gold)", marginBottom: 0, fontFamily: "'Cinzel', serif", fontWeight: 700 }}>100%</h3>
                                    <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>BWP Marine Wood</p>
                                </div>
                            </div>

                            <Link href="/contact" className="btn-hero-gold"><i className="fas fa-paper-plane" style={{ marginRight: "8px" }}></i> TALK TO OUR MASTER CARPENTER</Link>
                        </div>

                        <div className="about-image crop-wrap" style={{ borderRadius: "var(--radius-lg)", boxShadow: "0 25px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(197, 160, 89, 0.4)" }}>
                            <img src="/assets/tvunit (2).png" alt="Luxury TV Paneling & Custom Woodwork" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
