import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer footer-responsive-padding" style={{ backgroundColor: "#1C1613", color: "#FFFFFF", borderTop: "2px solid #C5A059" }}>
            <div className="container">
                <div className="footer-top footer-responsive-grid">
                    <div>
                        <Link href="/" className="logo footer-logo" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                            <div className="logo-icon-wrap" style={{ width: "40px", height: "40px", background: "#C5A059", color: "#1C1613", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                                <i className="fas fa-hammer"></i>
                            </div>
                            <div className="logo-text-group">
                                <span className="logo-text" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif", fontSize: "1.4rem", fontWeight: 800, letterSpacing: "2px" }}>SRINIVAS</span>
                                <span className="logo-subtext" style={{ color: "#C5A059", fontSize: "0.65rem", letterSpacing: "3px", fontWeight: 700 }}>INTERIORS & CARPENTRY</span>
                            </div>
                        </Link>
                        <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6, fontSize: "0.95rem" }}>Bespoke furniture, modular kitchens, wardrobes, and aluminium architectural solutions crafted with precision and passion.</p>
                    </div>
                    <div>
                        <h4 style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "1rem", letterSpacing: "1.5px", marginBottom: "1.2rem", fontWeight: 700 }}>Quick Links</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li><Link href="/" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>Home</Link></li>
                            <li><Link href="/about" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>About Us</Link></li>
                            <li><Link href="/services" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>Services</Link></li>
                            <li><Link href="/gallery" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>Projects Gallery</Link></li>
                            <li><Link href="/contact" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "1rem", letterSpacing: "1.5px", marginBottom: "1.2rem", fontWeight: 700 }}>Core Services</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li><Link href="/services" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>Modular Kitchens</Link></li>
                            <li><Link href="/services" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>Modular Wardrobes</Link></li>
                            <li><Link href="/services" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>TV Panel Units</Link></li>
                            <li><Link href="/services" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>Wooden Doors & Windows</Link></li>
                            <li><Link href="/services" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem" }}>Aluminium & Glass Partitions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "1rem", letterSpacing: "1.5px", marginBottom: "1.2rem", fontWeight: 700 }}>Owner Contact Details</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                            <li style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.05rem" }}><i className="fas fa-user-tie" style={{ color: "#C5A059", marginRight: "10px" }}></i> Srinivasarao Vasamsetti <span style={{ fontWeight: 400, color: "#C5A059", fontSize: "0.85rem", display: "block", marginLeft: "24px" }}>(Owner & Master Craftsman)</span></li>
                            <li><a href="tel:+918341745511" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600 }}><i className="fas fa-phone-alt" style={{ color: "#C5A059", marginRight: "10px" }}></i> +91 83417 45511</a></li>
                            <li><a href="https://wa.me/918341745511" style={{ color: "#25D366", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600 }}><i className="fab fa-whatsapp" style={{ marginRight: "10px" }}></i> WhatsApp Consultation</a></li>
                            <li><a href="mailto:info@srinivasinteriors.com" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem" }}><i className="fas fa-envelope" style={{ color: "#C5A059", marginRight: "10px" }}></i> info@srinivasinteriors.com</a></li>
                            <li style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" }}><i className="fas fa-map-marker-alt" style={{ color: "#C5A059", marginRight: "10px" }}></i> Hyderabad, Telangana, India</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", margin: 0 }}>&copy; 2026 Srinivas Interiors & Carpentry. All Rights Reserved.</p>
                    <div style={{ display: "flex", gap: "1.2rem" }}>
                        <a href="#" style={{ color: "#C5A059", fontSize: "1.2rem" }}><i className="fab fa-facebook"></i></a>
                        <a href="#" style={{ color: "#C5A059", fontSize: "1.2rem" }}><i className="fab fa-instagram"></i></a>
                        <a href="https://wa.me/918341745511" style={{ color: "#25D366", fontSize: "1.2rem" }}><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
