"use client";

import { useState, useEffect } from "react";

export default function GlobalLightbox() {
    const [isOpen, setIsOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    const [imgAlt, setImgAlt] = useState("");

    useEffect(() => {
        const handleGlobalClick = (e) => {
            // Check if clicked element is an image
            if (e.target.tagName === 'IMG') {
                // Ignore specific images
                // 1. Inside another lightbox
                if (e.target.closest('.lightbox') || e.target.closest('.global-lightbox')) return;
                // 2. Inside gallery item (Gallery page has its own advanced lightbox)
                if (e.target.closest('.gallery-item')) return;
                // 3. Product gallery thumbnails (they just change the main image)
                if (e.target.closest('.product-gallery')) return;
                // 4. Exclude avatars if needed (e.g. ui-avatars.com)
                if (e.target.src.includes('ui-avatars.com')) return;
                
                // Open lightbox
                setImgSrc(e.target.src);
                setImgAlt(e.target.alt || 'Image');
                setIsOpen(true);
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('click', handleGlobalClick);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('click', handleGlobalClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!isOpen) return null;

    return (
        <div 
            className="global-lightbox active" 
            onClick={() => setIsOpen(false)}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(17, 17, 17, 0.95)',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'zoom-out',
                opacity: isOpen ? 1 : 0,
                transition: 'opacity 0.2s ease'
            }}
        >
            <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10001,
                    transition: 'background 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gold)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
            >
                <i className="fas fa-times"></i>
            </button>
            <img 
                src={imgSrc} 
                alt={imgAlt} 
                style={{
                    maxWidth: '90%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    cursor: 'default'
                }}
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
    );
}
