"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Gallery() {
    useEffect(() => {
        // Lightbox Logic
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('projectLightbox');
        if (!lightbox) return; // avoid errors if not rendered
        const lbImg = document.getElementById('lbImg');
        const lbTitle = document.getElementById('lbTitle');
        const lbRating = document.getElementById('lbRating');
        const lbLocation = document.getElementById('lbLocation');
        const lbMaterial = document.getElementById('lbMaterial');
        const lbWood = document.getElementById('lbWood');
        const lbFinish = document.getElementById('lbFinish');
        const lbColor = document.getElementById('lbColor');
        const lbClose = lightbox.querySelector('.lb-close');
        const lbPrev = document.getElementById('lbPrev');
        const lbNext = document.getElementById('lbNext');
        
        let currentIndex = 0;
        let visibleItems = [];

        function updateLightboxData(item) {
            const img = item.querySelector('img').src;
            const detailsStr = item.getAttribute('data-details');
            if (detailsStr) {
                try {
                    const details = JSON.parse(detailsStr);
                    lbImg.src = img;
                    lbTitle.textContent = details.title || 'Project';
                    lbRating.textContent = details.rating || '★★★★★';
                    lbLocation.textContent = details.location || 'Hyderabad';
                    lbMaterial.textContent = details.material || '-';
                    lbWood.textContent = details.wood || '-';
                    lbFinish.textContent = details.finish || '-';
                    lbColor.textContent = details.color || '-';
                } catch(e) { console.error('Error parsing details', e); }
            }
        }

        galleryItems.forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                // Update visible items based on current filter
                visibleItems = Array.from(galleryItems).filter(i => window.getComputedStyle(i).display !== 'none');
                currentIndex = visibleItems.indexOf(item);
                if (currentIndex === -1) currentIndex = 0;
                
                updateLightboxData(item);
                
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        if (lbClose) {
            lbClose.addEventListener('click', () => {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        if (lbPrev) {
            lbPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                if (visibleItems.length > 0) {
                    currentIndex = (currentIndex > 0) ? currentIndex - 1 : visibleItems.length - 1;
                    updateLightboxData(visibleItems[currentIndex]);
                }
            });
        }
        
        if (lbNext) {
            lbNext.addEventListener('click', (e) => {
                e.stopPropagation();
                if (visibleItems.length > 0) {
                    currentIndex = (currentIndex < visibleItems.length - 1) ? currentIndex + 1 : 0;
                    updateLightboxData(visibleItems[currentIndex]);
                }
            });
        }
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-images')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Filter Logic
        const filterInputs = document.querySelectorAll('input[name="cat"]');
        filterInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const cat = e.target.value;
                galleryItems.forEach(item => {
                    if (cat === 'all' || item.getAttribute('data-cat') === cat) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Initial URL parameter filter
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('cat');
        if (catParam) {
            const input = document.querySelector(`input[name="cat"][value="${catParam}"]`);
            if (input) {
                input.checked = true;
                input.dispatchEvent(new Event('change'));
            }
        }
    }, []);

    return (
        <main>
            <style dangerouslySetInnerHTML={{ __html: `
                .portfolio-layout {
                    display: grid;
                    grid-template-columns: 250px 1fr;
                    gap: 2rem;
                    align-items: start;
                }
                .filter-sidebar {
                    background: #1C1613;
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                    border: 1px solid rgba(197, 160, 89, 0.3);
                    position: sticky;
                    top: 100px;
                }
                .filter-group { margin-bottom: 2rem; }
                .filter-group h4 { margin-bottom: 1rem; border-bottom: 1px solid rgba(197, 160, 89, 0.3); padding-bottom: 0.5rem; color: #FFFFFF; font-family: 'Cinzel', serif; }
                .filter-list { list-style: none; padding: 0; }
                .filter-list li { margin-bottom: 0.5rem; }
                .filter-label {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.85);
                    transition: var(--transition-fast);
                }
                .filter-label:hover { color: var(--color-gold); }
                .filter-label input { accent-color: var(--color-gold); }
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .lightbox {
                    position: fixed; inset: 0;
                    background: rgba(17, 17, 17, 0.95);
                    z-index: 9999;
                    display: flex;
                    opacity: 0; pointer-events: none;
                    transition: opacity 0.1s ease;
                }
                .lightbox.active { opacity: 1; pointer-events: auto; }
                .lightbox-container {
                    width: 90%; max-width: 1200px;
                    margin: auto;
                    background: #1C1613;
                    border: 1px solid rgba(197, 160, 89, 0.4);
                    border-radius: var(--radius-md);
                    display: grid; grid-template-columns: 2fr 1fr;
                    overflow: hidden;
                    max-height: 90vh;
                    color: #FFFFFF;
                    position: relative;
                }
                .lightbox-images { position: relative; background: #0F0B09; display: flex; align-items: center; justify-content: center; padding: 1.5rem; width: 100%; height: 100%; }
                .lightbox-main-img { max-width: 100%; max-height: 80vh; width: auto; height: auto; object-fit: contain !important; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
                .lightbox-details { padding: 2rem; overflow-y: auto; background: #1C1613; color: #FFFFFF; }
                .lb-title { font-size: 2rem; margin-bottom: 0.5rem; color: #FFFFFF; font-family: 'Cinzel', serif; }
                .lb-rating { color: var(--color-gold); margin-bottom: 1.5rem; }
                .lb-specs { list-style: none; padding: 0; margin-bottom: 2rem; }
                .lb-specs li { margin-bottom: 0.8rem; display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(255, 255, 255, 0.15); padding-bottom: 0.5rem; }
                .lb-specs span.lbl { color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; }
                .lb-specs span.val { font-weight: 500; color: #FFFFFF; }
                .lb-close { position: absolute; top: 15px; right: 15px; font-size: 1.5rem; color: var(--color-white); background: rgba(0,0,0,0.5); border: none; cursor: pointer; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 10; transition: background 0.3s ease; }
                .lb-close:hover { background: var(--color-gold); color: #000; }
                .lb-nav { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 50%; background: rgba(0,0,0,0.6); color: var(--color-white); border: 1px solid rgba(255,255,255,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; transition: var(--transition-fast); }
                .lb-nav:hover { background: var(--color-gold); color: #000; border-color: var(--color-gold); }
                .lb-prev { left: 15px; }
                .lb-next { right: 15px; }
                @media (max-width: 992px) {
                    .portfolio-layout { grid-template-columns: 1fr; }
                    .filter-sidebar { position: relative; top: 0; }
                    .lightbox-container { 
                        width: 100%; 
                        max-height: 100vh;
                        height: 100vh;
                        border-radius: 0;
                        border: none;
                        grid-template-columns: 1fr; 
                        grid-template-rows: 60vh 1fr; 
                        overflow-y: auto; 
                    }
                    .lightbox-images { padding: 0; height: 100%; }
                    .lightbox-main-img { max-height: 100%; border-radius: 0; object-fit: contain !important; }
                    .lightbox-details { padding: 1.5rem; height: 100%; }
                    .lb-nav { top: 30vh; }
                }
            `}} />
            <section className="services-header-banner">
        <div className="container">
            <span className="hero-badge"><i className="fas fa-hammer"></i> Work Portfolio</span>
            <h1 className="page-title">Projects Gallery</h1>
            <p className="page-subtitle">Explore our bespoke modular wardrobes, kitchens, TV units, teak doors, and aluminium partitions.</p>
        </div>
    </section>

    <section className="section" style={{"paddingTop":"3rem","backgroundColor":"#15110F !important"}}>
        <div className="container">
            <div className="portfolio-layout">
                {/*  Sidebar Filters  */}
                <aside className="filter-sidebar">
                    <div className="filter-group">
                        <h4>Category</h4>
                        <ul className="filter-list">
                            <li><label className="filter-label"><input type="radio" name="cat" value="all" defaultChecked /> All Projects</label></li>
                            <li><label className="filter-label"><input type="radio" name="cat" value="wardrobes" /> Wardrobes</label></li>
                            <li><label className="filter-label"><input type="radio" name="cat" value="kitchen" /> Kitchen Cabinets</label></li>
                            <li><label className="filter-label"><input type="radio" name="cat" value="tv" /> TV Units</label></li>
                            <li><label className="filter-label"><input type="radio" name="cat" value="doors" /> Doors & Windows</label></li>
                            <li><label className="filter-label"><input type="radio" name="cat" value="aluminium" /> Aluminium Works</label></li>
                        </ul>
                    </div>
                </aside>

                {/*  Gallery  */}
                <div className="gallery-grid" id="galleryGrid">

                    {/*  ================= 1. WARDROBES =================  */}
                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="walnut" data-finish="gloss" data-style={{}} 
                         data-details='{"title":"Herringbone Pattern Sliding Wardrobe","rating":"★★★★★","material":"BWP Marine Plywood & HDMR","wood":"Teak & Teak Pattern Veneer","finish":"Custom Herringbone Polish","color":"Walnut","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/aluminium (2).png" alt="Herringbone Pattern Sliding Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Herringbone Sliding Wardrobe</h3><p className="project-meta">BROWN • SLIDING WARDROBE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="white" data-finish="laminate" data-style={{}} 
                         data-details='{"title":"Minimalist White & Grey Gloss Sliding Wardrobe","rating":"★★★★★","material":"BWP Marine Plywood & HDMR Core","wood":"White & Grey Polyurethane Gloss","finish":"Soft-Touch Gloss Finish","color":"White & Grey","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/aluminium (3).png" alt="Minimalist White & Grey Gloss Sliding Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">White Gloss Sliding Wardrobe</h3><p className="project-meta">WHITE • SLIDING WARDROBE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="walnut" data-finish="pvc" data-style={{}} 
                         data-details='{"title":"Geometric Wood Grain Sliding Wardrobe","rating":"★★★★★","material":"BWP Plywood & Geometric Texture Laminate","wood":"Walnut Wood Grain","finish":"Matte Texture Finish","color":"Walnut","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/aluminium (1).png" alt="Geometric Wood Grain Sliding Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Geometric Sliding Wardrobe</h3><p className="project-meta">WALNUT • SLIDING WARDROBE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="walnut" data-finish="wood" data-style={{}} 
                         data-details='{"title":"Full Height 3-Door Sliding Wardrobe","rating":"★★★★★","material":"BWP Plywood & Loft Storage Unit","wood":"Dark Walnut Finish","finish":"Polyurethane Soft Polish","color":"Dark Walnut","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/aluminium (4).png" alt="Full Height 3-Door Sliding Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">3-Door Sliding Wardrobe</h3><p className="project-meta">DARK WALNUT • SLIDING</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="walnut" data-finish="gloss" data-style={{}} 
                         data-details='{"title":"Herringbone Custom Wooden Wardrobe","rating":"★★★★★","material":"BWP Marine Plywood & HDMR","wood":"Teak & Teak Pattern Veneer","finish":"Custom Herringbone Polish","color":"Walnut","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe_custom_herringbone.jpg" alt="Herringbone Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Herringbone Custom Wardrobe</h3><p className="project-meta">HERRINGBONE • TEAK VENEER</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="grey" data-finish="wood" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #3","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Wood Premium Polish","color":"Grey","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (1).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">GREY • WOOD</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="walnut" data-finish="matte" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #4","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Matte Premium Polish","color":"Walnut","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (10).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">WALNUT • MATTE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="oak" data-finish="gloss" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #5","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Gloss Premium Polish","color":"Oak","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (11).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">OAK • GLOSS</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="teak" data-finish="laminate" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #6","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Laminate Premium Polish","color":"Teak","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (12).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">TEAK • LAMINATE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="brown" data-finish="acrylic" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #7","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Acrylic Premium Polish","color":"Brown","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (13).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">BROWN • ACRYLIC</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="white" data-finish="pvc" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #8","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Pvc Premium Polish","color":"White","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (2).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">WHITE • PVC</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="black" data-finish="wood" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #9","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Wood Premium Polish","color":"Black","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (3).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">BLACK • WOOD</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="grey" data-finish="matte" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #10","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Matte Premium Polish","color":"Grey","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (4).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">GREY • MATTE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="teak" data-finish="acrylic" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #11","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Acrylic Premium Polish","color":"Teak","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (7).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">TEAK • ACRYLIC</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="brown" data-finish="pvc" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #12","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Pvc Premium Polish","color":"Brown","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (8).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">BROWN • PVC</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="wardrobes" data-color="white" data-finish="wood" data-style={{}} 
                         data-details='{"title":"Custom Wooden Wardrobe #13","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Wood Premium Polish","color":"White","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/wardrobe (9).png" alt="Custom Wooden Wardrobe" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Custom Wooden Wardrobe</h3><p className="project-meta">WHITE • WOOD</p></div></div>
                    </div>


                    {/*  ================= 2. KITCHEN CABINETS =================  */}
                    <div className="project-card gallery-item" data-cat="kitchen" data-color="grey" data-finish="acrylic" data-style={{}} 
                         data-details='{"title":"Modern Kitchen Interior #14","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Acrylic Premium Polish","color":"Grey","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/kitchen (1).png" alt="Modern Kitchen Interior" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Modern Kitchen Interior</h3><p className="project-meta">GREY • ACRYLIC</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="kitchen" data-color="walnut" data-finish="pvc" data-style={{}} 
                         data-details='{"title":"Modern Kitchen Interior #15","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Pvc Premium Polish","color":"Walnut","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/kitchen (2).png" alt="Modern Kitchen Interior" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Modern Kitchen Interior</h3><p className="project-meta">WALNUT • PVC</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="kitchen" data-color="oak" data-finish="wood" data-style={{}} 
                         data-details='{"title":"Modern Kitchen Interior #16","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Wood Premium Polish","color":"Oak","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/kitchen (3).png" alt="Modern Kitchen Interior" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Modern Kitchen Interior</h3><p className="project-meta">OAK • WOOD</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="kitchen" data-color="teak" data-finish="matte" data-style={{}} 
                         data-details='{"title":"Modern Kitchen Interior #17","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Matte Premium Polish","color":"Teak","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/kitchen (4).png" alt="Modern Kitchen Interior" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Modern Kitchen Interior</h3><p className="project-meta">TEAK • MATTE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="kitchen" data-color="brown" data-finish="gloss" data-style={{}} 
                         data-details='{"title":"Modern Kitchen Interior #18","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Gloss Premium Polish","color":"Brown","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/kitchen (5).png" alt="Modern Kitchen Interior" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Modern Kitchen Interior</h3><p className="project-meta">BROWN • GLOSS</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="kitchen" data-color="white" data-finish="laminate" data-style={{}} 
                         data-details='{"title":"Modern Kitchen Interior #19","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Laminate Premium Polish","color":"White","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/kitchen (6).png" alt="Modern Kitchen Interior" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Modern Kitchen Interior</h3><p className="project-meta">WHITE • LAMINATE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="kitchen" data-color="black" data-finish="acrylic" data-style={{}} 
                         data-details='{"title":"Modern Kitchen Interior #20","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Acrylic Premium Polish","color":"Black","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/kitchen (7).png" alt="Modern Kitchen Interior" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Modern Kitchen Interior</h3><p className="project-meta">BLACK • ACRYLIC</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="kitchen" data-color="grey" data-finish="pvc" data-style={{}} 
                         data-details='{"title":"Modern Kitchen Interior #21","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Pvc Premium Polish","color":"Grey","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/kitchen (8).png" alt="Modern Kitchen Interior" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Modern Kitchen Interior</h3><p className="project-meta">GREY • PVC</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="kitchen" data-color="walnut" data-finish="wood" data-style={{}} 
                         data-details='{"title":"Modern Kitchen Interior #22","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Wood Premium Polish","color":"Walnut","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/kitchen.png" alt="Modern Kitchen Interior" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Modern Kitchen Interior</h3><p className="project-meta">WALNUT • WOOD</p></div></div>
                    </div>


                    {/*  ================= 3. TV UNITS =================  */}
                    <div className="project-card gallery-item" data-cat="tv" data-color="teak" data-finish="gloss" data-style={{}} 
                         data-details='{"title":"Architectural TV Unit & Display Cabinet","rating":"★★★★★","material":"BWP Plywood & Ambient Profile Lighting","wood":"Dark Floral Veneer & Pebble Backdrop","finish":"High Gloss & Ambient LED","color":"Dark Walnut","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/TVunit (5).png" alt="Architectural TV Unit & Display Cabinet" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Architectural TV Unit & Display</h3><p className="project-meta">DARK WALNUT • AMBIENT LED</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="tv" data-color="oak" data-finish="matte" data-style={{}} 
                         data-details='{"title":"Luxury TV Panel Unit #24","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Matte Premium Polish","color":"Oak","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/tvunit (1).png" alt="Luxury TV Panel Unit" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Luxury TV Panel Unit</h3><p className="project-meta">OAK • MATTE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="tv" data-color="brown" data-finish="laminate" data-style={{}} 
                         data-details='{"title":"Luxury TV Panel Unit #25","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Laminate Premium Polish","color":"Brown","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/tvunit (3).png" alt="Luxury TV Panel Unit" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Luxury TV Panel Unit</h3><p className="project-meta">BROWN • LAMINATE</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="tv" data-color="white" data-finish="acrylic" data-style={{}} 
                         data-details='{"title":"Luxury TV Panel Unit #26","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Acrylic Premium Polish","color":"White","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/tvunit (4).png" alt="Luxury TV Panel Unit" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Luxury TV Panel Unit</h3><p className="project-meta">WHITE • ACRYLIC</p></div></div>
                    </div>

                    <div className="project-card gallery-item" data-cat="tv" data-color="black" data-finish="pvc" data-style={{}} 
                         data-details='{"title":"Luxury TV Panel Unit #27","rating":"★★★★★","material":"BWP Commercial Plywood & HDMR","wood":"Teak / Dark Walnut Veneer","finish":"Pvc Premium Polish","color":"Black","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/tvunit.png" alt="Luxury TV Panel Unit" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Luxury TV Panel Unit</h3><p className="project-meta">BLACK • PVC</p></div></div>
                    </div>


                    {/*  ================= 4. DOORS & WINDOWS =================  */}
                    <div className="project-card gallery-item" data-cat="doors" data-color="black" data-finish="laminate" data-style={{}} 
                         data-details='{"title":"Teak Wood Main Door #28","rating":"★★★★★","material":"Solid Teak Wood & CNC Carving","wood":"Teak Wood","finish":"Laminate Premium Polish","color":"Teak","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/door.png" alt="Teak Wood Main Door" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Teak Wood Main Door</h3><p className="project-meta">SOLID TEAK • CARVED</p></div></div>
                    </div>


                    {/*  ================= 5. ALUMINIUM WORKS =================  */}
                    <div className="project-card gallery-item" data-cat="aluminium" data-color="white" data-finish="gloss" data-style={{}} 
                         data-details='{"title":"Aluminium Glass Partition System","rating":"★★★★★","material":"Precision Powder-Coated Aluminium & Toughened Glass","wood":"Slim Architectural Frame","finish":"Gloss White Powder Coated","color":"White / Clear Glass","location":"Hyderabad, Telangana"}'>
                        <div className="crop-wrap" style={{"width":"100%","height":"100%"}}><img loading="lazy" decoding="async" src="assets/aluminium.png" alt="Aluminium Glass Partition System" /></div>
                        <div className="project-overlay"><div className="project-info"><h3 className="project-title">Aluminium Glass Partition</h3><p className="project-meta">SLIM FRAME • TOUGHENED GLASS</p></div></div>
                    </div>

                </div>
            </div>
        </div>
    </section>


            {/* Advanced Lightbox Modal */}
            <div className="lightbox" id="projectLightbox">
                <div className="lightbox-container">
                    <button className="lb-close"><i className="fas fa-times"></i></button>
                    <div className="lightbox-images">
                        <button className="lb-nav lb-prev" id="lbPrev"><i className="fas fa-chevron-left"></i></button>
                        <img src="" alt="Project View" className="lightbox-main-img" id="lbImg" />
                        <button className="lb-nav lb-next" id="lbNext"><i className="fas fa-chevron-right"></i></button>
                    </div>
                    <div className="lightbox-details">
                        <span style={{color: "var(--color-gold)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700, marginBottom: "0.5rem", display: "block"}}><i className="fas fa-map-marker-alt"></i> <span id="lbLocation">Hyderabad</span></span>
                        <h2 className="lb-title" id="lbTitle">Project Title</h2>
                        <div className="lb-rating" id="lbRating">★★★★★</div>
                        
                        <p style={{color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: 1.6}}>Crafted with precision using premium materials and state-of-the-art machinery to ensure lifetime durability.</p>
                        
                        <h4 style={{color: "#C5A059", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px", marginBottom: "1rem", borderBottom: "1px solid rgba(197, 160, 89, 0.3)", paddingBottom: "0.5rem"}}>Project Specifications</h4>
                        <ul className="lb-specs">
                            <li><span className="lbl">Base Material</span> <span className="val" id="lbMaterial">-</span></li>
                            <li><span className="lbl">Wood/Veneer</span> <span className="val" id="lbWood">-</span></li>
                            <li><span className="lbl">Exterior Finish</span> <span className="val" id="lbFinish">-</span></li>
                            <li><span className="lbl">Primary Color</span> <span className="val" id="lbColor">-</span></li>
                        </ul>
                        
                        <a href="https://wa.me/918341745511?text=Hello!%20I%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20carpentry%20and%20interior%20design%20services.%20I%20would%20like%20to%20know%20more%20about%20your%20wardrobes%2C%20modular%20kitchens%2C%20TV%20units%2C%20custom%20furniture%2C%20aluminium%20works%2C%20and%20pricing.%20Please%20share%20the%20details%20and%20help%20me%20get%20a%20quotation.%20Thank%20you!" target="_blank" className="btn-hero-gold" style={{width: "100%", textAlign: "center"}} rel="noreferrer"><i className="fab fa-whatsapp"></i> Inquire About This Design</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
