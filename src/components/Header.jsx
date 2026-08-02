"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className={`header glass ${scrolled ? "scrolled" : ""}`} id="header">
            <div className="container header-container">
                <Link href="/" className="logo">
                    <div className="logo-icon-wrap">
                        <i className="fas fa-hammer"></i>
                    </div>
                    <div className="logo-text-group">
                        <span className="logo-text">SRINIVAS</span>
                        <span className="logo-subtext">INTERIORS & CARPENTRY</span>
                    </div>
                </Link>
                <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
                    <ul className={`nav-list ${isMenuOpen ? "active" : ""}`} id="navList">
                        <li><Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>HOME</Link></li>
                        <li><Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>ABOUT US</Link></li>
                        <li><Link href="/services" className={`nav-link ${pathname === "/services" ? "active" : ""}`}>SERVICES</Link></li>
                        <li><Link href="/gallery" className={`nav-link ${pathname === "/gallery" ? "active" : ""}`}>PROJECTS</Link></li>
                        <li><Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>CONTACT</Link></li>
                        <li><Link href="/contact" className="btn btn-primary nav-btn">GET A QUOTE</Link></li>
                    </ul>
                    <div className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} id="menuToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    );
}
