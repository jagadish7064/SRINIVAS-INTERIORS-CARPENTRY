import Link from "next/link";

export default function Services() {
    return (
        <main>
            <style dangerouslySetInnerHTML={{ __html: `
                .service-badge-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin: 1rem 0 1.5rem;
                }
                .service-badge {
                    background: rgba(197, 160, 89, 0.15);
                    color: var(--color-gold);
                    font-size: 0.82rem;
                    font-weight: 600;
                    padding: 5px 12px;
                    border-radius: 20px;
                    border: 1px solid rgba(197, 160, 89, 0.4);
                }
                .service-features {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.8rem;
                    text-align: left;
                }
                .service-features li {
                    position: relative;
                    padding-left: 24px;
                    margin-bottom: 8px;
                    font-size: 0.92rem;
                    color: rgba(255, 255, 255, 0.85);
                }
                .service-features li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: var(--color-gold);
                    font-weight: bold;
                }
                .service-card-actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-top: auto;
                }
                .services-wrapper {
                    background-color: #15110F;
                    padding: 4rem 0 6rem 0;
                }
                .core-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
                    gap: 2.5rem;
                }
            ` }} />

            <section className="services-header-banner">
                <div className="container">
                    <span className="hero-badge"><i className="fas fa-crown"></i> Family-Owned Excellence</span>
                    <h1 className="page-title">Custom Carpentry & Interiors</h1>
                    <p className="page-subtitle">Precision engineering & bespoke manufacturing tailored for every room in your home.</p>
                </div>
            </section>

            <section className="services-wrapper">
                <div className="container">
                    <div className="core-grid">
                        
                        {/* 1. Modular Wardrobes */}
                        <div className="service-card">
                            <div className="service-img-wrap crop-wrap">
                                <img src="/assets/wardrobe (1).png" alt="Modular Wardrobes" />
                            </div>
                            <div className="service-content">
                                <div>
                                    <h3 className="service-title" style={{ color: "#FFFFFF", fontSize: "1.8rem", fontFamily: "'Cinzel', serif" }}>Modular Wardrobes</h3>
                                    <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "1rem" }}>Space-saving, custom-built bedroom storage designed for lifetime durability and luxury aesthetics.</p>
                                    
                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Available Sub-Categories & Styles</h5>
                                    <div className="service-badge-list">
                                        <span className="service-badge">Sliding Wardrobes</span>
                                        <span className="service-badge">Hinged Wardrobes</span>
                                        <span className="service-badge">Mirror Wardrobes</span>
                                        <span className="service-badge">Walk-in Wardrobes</span>
                                        <span className="service-badge">Kids Wardrobes</span>
                                        <span className="service-badge">Luxury Wood Texture</span>
                                    </div>

                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Key Specifications</h5>
                                    <ul className="service-features">
                                        <li>BWP Marine Plywood & HDMR Core</li>
                                        <li>Matte, High-Gloss, Acrylic & Veneer Finishes</li>
                                        <li>Custom Internal Drawers, Hangers & Lofts</li>
                                    </ul>
                                </div>
                                <div className="service-card-actions">
                                    <Link href="/gallery?cat=wardrobes" className="btn btn-outline" style={{ padding: "10px 20px", flex: 1, textAlign: "center" }}>View Gallery</Link>
                                    <a href="https://wa.me/918341745511?text=Hi%20Srinivas%20Interiors%2C%20I%20am%20interested%20in%20a%20price%20quotation%20for%20Modular%20Wardrobes." target="_blank" className="btn" style={{ backgroundColor: "#25D366", color: "white", border: "none", padding: "10px 20px", fontWeight: 700, borderRadius: "6px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", textDecoration: "none", flex: 1 }} rel="noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp Quote</a>
                                </div>
                            </div>
                        </div>

                        {/* 2. Kitchen Cabinets */}
                        <div className="service-card">
                            <div className="service-img-wrap crop-wrap">
                                <img src="/assets/kitchen (1).png" alt="Kitchen Cabinets" />
                            </div>
                            <div className="service-content">
                                <div>
                                    <h3 className="service-title" style={{ color: "#FFFFFF", fontSize: "1.8rem", fontFamily: "'Cinzel', serif" }}>Modular Kitchen Cabinets</h3>
                                    <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "1rem" }}>Ergonomic, modern kitchens manufactured with 100% waterproof and termite-proof core materials.</p>
                                    
                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Available Layouts & Finishes</h5>
                                    <div className="service-badge-list">
                                        <span className="service-badge">L-Shape Kitchen</span>
                                        <span className="service-badge">U-Shape Kitchen</span>
                                        <span className="service-badge">Parallel Kitchen</span>
                                        <span className="service-badge">Island Kitchen</span>
                                        <span className="service-badge">PVC & Acrylic Kitchen</span>
                                        <span className="service-badge">Gloss & Matte Finish</span>
                                    </div>

                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Key Specifications</h5>
                                    <ul className="service-features">
                                        <li>Soft-close Blum/Hettich drawer systems</li>
                                        <li>Boiling Water Proof (BWP) Plywood</li>
                                        <li>Quartz countertop integration</li>
                                    </ul>
                                </div>
                                <div className="service-card-actions">
                                    <Link href="/gallery?cat=kitchen" className="btn btn-outline" style={{ padding: "10px 20px", flex: 1, textAlign: "center" }}>View Gallery</Link>
                                    <a href="https://wa.me/918341745511?text=Hi%20Srinivas%20Interiors%2C%20I%20am%20interested%20in%20a%20price%20quotation%20for%20Modular%20Kitchen%20Cabinets." target="_blank" className="btn" style={{ backgroundColor: "#25D366", color: "white", border: "none", padding: "10px 20px", fontWeight: 700, borderRadius: "6px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", textDecoration: "none", flex: 1 }} rel="noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp Quote</a>
                                </div>
                            </div>
                        </div>

                        {/* 3. TV Units & Wall Paneling */}
                        <div className="service-card">
                            <div className="service-img-wrap crop-wrap">
                                <img src="/assets/TVunit (5).png" alt="TV Units & Wall Paneling" />
                            </div>
                            <div className="service-content">
                                <div>
                                    <h3 className="service-title" style={{ color: "#FFFFFF", fontSize: "1.8rem", fontFamily: "'Cinzel', serif" }}>TV Units & Wall Paneling</h3>
                                    <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "1rem" }}>Architectural living room entertainment centers crafted with ambient profile lighting and seamless storage.</p>
                                    
                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Available Styles & Features</h5>
                                    <div className="service-badge-list">
                                        <span className="service-badge">Wall Mounted Units</span>
                                        <span className="service-badge">Floating TV Units</span>
                                        <span className="service-badge">LED Profile Units</span>
                                        <span className="service-badge">Storage TV Units</span>
                                        <span className="service-badge">Wood Finish Paneling</span>
                                    </div>

                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Key Specifications</h5>
                                    <ul className="service-features">
                                        <li>Concealed wire management channels</li>
                                        <li>Charcoal & Louver wooden paneling</li>
                                        <li>Integrated glass display shelves</li>
                                    </ul>
                                </div>
                                <div className="service-card-actions">
                                    <Link href="/gallery?cat=tv" className="btn btn-outline" style={{ padding: "10px 20px", flex: 1, textAlign: "center" }}>View Gallery</Link>
                                    <a href="https://wa.me/918341745511?text=Hi%20Srinivas%20Interiors%2C%20I%20am%20interested%20in%20a%20price%20quotation%20for%20TV%20Units%20%26%20Wall%20Paneling." target="_blank" className="btn" style={{ backgroundColor: "#25D366", color: "white", border: "none", padding: "10px 20px", fontWeight: 700, borderRadius: "6px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", textDecoration: "none", flex: 1 }} rel="noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp Quote</a>
                                </div>
                            </div>
                        </div>

                        {/* 4. Doors & Windows */}
                        <div className="service-card">
                            <div className="service-img-wrap crop-wrap">
                                <img src="/assets/door.png" alt="Wooden Doors & Windows" />
                            </div>
                            <div className="service-content">
                                <div>
                                    <h3 className="service-title" style={{ color: "#FFFFFF", fontSize: "1.8rem", fontFamily: "'Cinzel', serif" }}>Wooden Doors & Windows</h3>
                                    <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "1rem" }}>Solid teak and designer wood doors engineered for security, elegance, and lifetime weather resistance.</p>
                                    
                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Available Types & Designs</h5>
                                    <div className="service-badge-list">
                                        <span className="service-badge">Teak Wood Main Door</span>
                                        <span className="service-badge">Designer CNC Doors</span>
                                        <span className="service-badge">Bedroom Doors</span>
                                        <span className="service-badge">Pooja Room Doors</span>
                                        <span className="service-badge">Wooden Sliding Windows</span>
                                    </div>

                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Key Specifications</h5>
                                    <ul className="service-features">
                                        <li>100% Solid Teak Wood Frame & Panels</li>
                                        <li>Intricate hand carvings & CNC designs</li>
                                        <li>High-grade PU varnish polish</li>
                                    </ul>
                                </div>
                                <div className="service-card-actions">
                                    <Link href="/gallery?cat=doors" className="btn btn-outline" style={{ padding: "10px 20px", flex: 1, textAlign: "center" }}>View Gallery</Link>
                                    <a href="https://wa.me/918341745511?text=Hi%20Srinivas%20Interiors%2C%20I%20am%20interested%20in%20a%20price%20quotation%20for%20Wooden%20Doors%20%26%20Windows." target="_blank" className="btn" style={{ backgroundColor: "#25D366", color: "white", border: "none", padding: "10px 20px", fontWeight: 700, borderRadius: "6px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", textDecoration: "none", flex: 1 }} rel="noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp Quote</a>
                                </div>
                            </div>
                        </div>

                        {/* 5. Aluminium & Glass Works */}
                        <div className="service-card">
                            <div className="service-img-wrap crop-wrap">
                                <img src="/assets/aluminium.png" alt="Aluminium & Glass Works" />
                            </div>
                            <div className="service-content">
                                <div>
                                    <h3 className="service-title" style={{ color: "#FFFFFF", fontSize: "1.8rem", fontFamily: "'Cinzel', serif" }}>Aluminium & Glass Works</h3>
                                    <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "1rem" }}>Slim-profile powder-coated aluminium fabrications, glass partitions, and mosquito mesh installations.</p>
                                    
                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Available Applications</h5>
                                    <div className="service-badge-list">
                                        <span className="service-badge">Aluminium Sliding Doors</span>
                                        <span className="service-badge">Office Glass Partitions</span>
                                        <span className="service-badge">Balcony Safety Works</span>
                                        <span className="service-badge">SS Mosquito Mesh</span>
                                        <span className="service-badge">Toughened Glass Windows</span>
                                    </div>

                                    <h5 style={{ color: "var(--color-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>Key Specifications</h5>
                                    <ul className="service-features">
                                        <li>Powder-coated anodized aluminium track</li>
                                        <li>Toughened acoustic glass partitions</li>
                                        <li>Rustproof SS 304 mosquito mesh</li>
                                    </ul>
                                </div>
                                <div className="service-card-actions">
                                    <Link href="/gallery?cat=aluminium" className="btn btn-outline" style={{ padding: "10px 20px", flex: 1, textAlign: "center" }}>View Gallery</Link>
                                    <a href="https://wa.me/918341745511?text=Hi%20Srinivas%20Interiors%2C%20I%20am%20interested%20in%20a%20price%20quotation%20for%20Aluminium%20%26%20Glass%20Works." target="_blank" className="btn" style={{ backgroundColor: "#25D366", color: "white", border: "none", padding: "10px 20px", fontWeight: 700, borderRadius: "6px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", textDecoration: "none", flex: 1 }} rel="noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp Quote</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
