"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function FloatingActions() {
    useEffect(() => {
        const handleScroll = () => {
            const fabTop = document.getElementById("fabTop");
            if (fabTop) {
                if (window.scrollY > 500) {
                    fabTop.style.transform = "scale(1)";
                    fabTop.style.opacity = "1";
                } else {
                    fabTop.style.transform = "scale(0)";
                    fabTop.style.opacity = "0";
                }
            }
            
            // Scroll Progress Bar
            const progressBar = document.getElementById("scrollProgressBar");
            if (progressBar) {
                const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const progress = (window.scrollY / totalHeight) * 100;
                progressBar.style.width = progress + "%";
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div id="scrollProgressBar" className="scroll-progress-bar"></div>
            <div className="fab-container">
                <a href="#" className="fab-btn fab-top" id="fabTop" title="Back to Top" onClick={scrollToTop} style={{ transform: "scale(0)", opacity: 0, transition: "all 0.3s ease" }}>
                    <i className="fas fa-arrow-up"></i>
                </a>
                <Link href="/contact" className="fab-btn fab-call" title="Get Quote" style={{ backgroundColor: "var(--color-primary)" }}>
                    <i className="fas fa-envelope-open-text"></i>
                </Link>
                <a href="tel:+918341745511" className="fab-btn fab-call" title="Call Now"><i className="fas fa-phone-alt"></i></a>
                <a href="https://wa.me/918341745511?text=Hello!%20I%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20carpentry%20and%20interior%20design%20services.%20I%20would%20like%20to%20know%20more%20about%20your%20wardrobes%2C%20modular%20kitchens%2C%20TV%20units%2C%20custom%20furniture%2C%20aluminium%20works%2C%20and%20pricing.%20Please%20share%20the%20details%20and%20help%20me%20get%20a%20quotation.%20Thank%20you!" className="fab-btn fab-whatsapp" title="WhatsApp" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
        </>
    );
}
