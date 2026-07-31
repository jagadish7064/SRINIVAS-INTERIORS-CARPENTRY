"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductDetails() {
    const [mainImage, setMainImage] = useState("/assets/wardrobe (1).png");

    return (
        <main>
            <style dangerouslySetInnerHTML={{ __html: `
                .product-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    margin-bottom: 4rem;
                }
                .product-images { position: sticky; top: 100px; }
                .product-main-img {
                    width: 100%;
                    height: auto;
                    border-radius: var(--radius-md);
                    margin-bottom: 1rem;
                    box-shadow: 0 20px 45px rgba(0,0,0,0.5);
                    border: 1px solid rgba(197, 160, 89, 0.3);
                }
                .product-gallery {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                }
                .product-gallery img {
                    width: 100%;
                    aspect-ratio: 1;
                    object-fit: cover;
                    border-radius: var(--radius-sm);
                    cursor: pointer;
                    border: 2px solid transparent;
                    transition: var(--transition-fast);
                }
                .product-gallery img:hover, .product-gallery img.active {
                    border-color: var(--color-gold);
                }
                .product-title { font-size: 3rem; margin-bottom: 0.5rem; color: #FFFFFF; font-family: 'Cinzel', serif; }
                .product-price { font-size: 1.5rem; color: var(--color-gold); margin-bottom: 2rem; display: block; font-weight: bold; }
                .product-desc { font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.8; color: rgba(255, 255, 255, 0.85); }
                .specs-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }
                .spec-item {
                    background: #1C1613;
                    padding: 1.5rem;
                    border-radius: var(--radius-sm);
                    border: 1px solid rgba(197, 160, 89, 0.3);
                    border-left: 4px solid var(--color-gold);
                }
                .spec-label { font-size: 0.8rem; text-transform: uppercase; color: var(--color-gold); margin-bottom: 0.5rem; display: block; letter-spacing: 1px; }
                .spec-value { font-weight: 500; font-size: 1.1rem; color: #FFFFFF; }
                .product-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
                .features-list { list-style: none; padding: 0; margin-bottom: 3rem; }
                .features-list li { position: relative; padding-left: 30px; margin-bottom: 1rem; font-size: 1.1rem; color: rgba(255, 255, 255, 0.85); }
                .features-list li::before { content: '✓'; position: absolute; left: 0; top: 0; color: var(--color-gold); font-weight: bold; }
                @media (max-width: 992px) {
                    .product-grid { grid-template-columns: 1fr; }
                    .product-images { position: relative; top: 0; }
                }
            `}} />

            <section className="services-header-banner">
                <div className="container">
                    <span className="hero-badge"><i className="fas fa-crown"></i> Product Showcase</span>
                    <h1 className="page-title">Custom Furniture Details</h1>
                    <p className="page-subtitle">Premium materials, custom dimensions, and hand-finished craftsmanship.</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: "3rem", backgroundColor: "#15110F" }}>
                <div className="container">
                    <div className="product-grid">
                        
                        <div className="product-images fade-in-up">
                            <div className="crop-wrap" style={{ borderRadius: "var(--radius-md)", marginBottom: "1rem" }}>
                                <img src={mainImage} alt="Main Product View" className="product-main-img" />
                            </div>
                            
                            <div className="product-gallery">
                                <img src="/assets/wardrobe (1).png" alt="Dark Marble Finish" className={mainImage === "/assets/wardrobe (1).png" ? "active" : ""} onClick={() => setMainImage("/assets/wardrobe (1).png")} />
                                <img src="/assets/wardrobe_custom_herringbone.jpg" alt="Herringbone Wood Finish" className={mainImage === "/assets/wardrobe_custom_herringbone.jpg" ? "active" : ""} onClick={() => setMainImage("/assets/wardrobe_custom_herringbone.jpg")} />
                                <img src="/assets/wardrobe (2).png" alt="Thumb 3" className={mainImage === "/assets/wardrobe (2).png" ? "active" : ""} onClick={() => setMainImage("/assets/wardrobe (2).png")} />
                                <img src="/assets/wardrobe (3).png" alt="Thumb 4" className={mainImage === "/assets/wardrobe (3).png" ? "active" : ""} onClick={() => setMainImage("/assets/wardrobe (3).png")} />
                            </div>
                        </div>

                        <div className="product-info fade-in-up delay-1">
                            <h1 className="product-title">Bespoke Modular Wardrobe System</h1>
                            <span className="product-price">Price: Upon Request</span>
                            
                            <p className="product-desc">Experience the pinnacle of bedroom organization with our Luxury Glass Wardrobe. Featuring tinted toughened glass, integrated warm LED lighting, and soft-close mechanisms, this wardrobe transforms storage into a stunning visual display.</p>
                            
                            <div className="specs-grid">
                                <div className="spec-item"><span className="spec-label">Material</span><span className="spec-value">HDF / BWP Plywood</span></div>
                                <div className="spec-item"><span className="spec-label">Dimensions</span><span className="spec-value">Custom Built</span></div>
                                <div className="spec-item"><span className="spec-label">Wood Finish</span><span className="spec-value">Dark Walnut Veneer</span></div>
                                <div className="spec-item"><span className="spec-label">Warranty</span><span className="spec-value">10 Years Structural</span></div>
                                <div className="spec-item"><span className="spec-label">Delivery Time</span><span className="spec-value">25 - 30 Days</span></div>
                            </div>

                            <h3 style={{ marginBottom: "1.5rem" }}>Key Features</h3>
                            <ul className="features-list">
                                <li>Soft-close Hettich / Blum hinges and sliders</li>
                                <li>Sensor-activated interior warm LED profile lights</li>
                                <li>Toughened bronze-tinted glass with aluminium profile frame</li>
                                <li>Anti-termite and moisture-resistant core materials</li>
                            </ul>

                            <div className="product-actions">
                                <Link href="/contact" className="btn btn-primary" style={{ flex: 1 }}><i className="fas fa-envelope"></i> Request Quote</Link>
                                <a href="tel:+918341745511" className="btn btn-outline" style={{ flex: 1 }}><i className="fas fa-phone-alt"></i> Call</a>
                                <a href="https://wa.me/918341745511" className="btn" style={{ flex: 1, backgroundColor: "#25D366", color: "white" }} rel="noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
