document.addEventListener('DOMContentLoaded', () => {
    let catalogData = {};
    
    // Fetch Data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            catalogData = data;
            renderWardrobesGallery();
        })
        .catch(err => console.error("Error loading catalog data:", err));

    // Filter Logic
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    filterCheckboxes.forEach(cb => {
        cb.addEventListener('change', renderWardrobesGallery);
    });

    function renderWardrobesGallery() {
        const grid = document.getElementById('wardrobes-gallery-grid');
        if (!grid) return;
        
        // Get active filters
        const activeFilters = {
            colour: [], finish: [], style: []
        };
        
        filterCheckboxes.forEach(cb => {
            if (cb.checked) {
                activeFilters[cb.getAttribute('data-type')].push(cb.value);
            }
        });

        // Filter data
        let filtered = catalogData.wardrobes || [];
        
        if (activeFilters.colour.length > 0) {
            filtered = filtered.filter(item => item.filters.colour.some(c => activeFilters.colour.includes(c)));
        }
        if (activeFilters.finish.length > 0) {
            filtered = filtered.filter(item => item.filters.finish.some(f => activeFilters.finish.includes(f)));
        }
        if (activeFilters.style.length > 0) {
            filtered = filtered.filter(item => item.filters.style.some(s => activeFilters.style.includes(s)));
        }

        // Render HTML
        grid.innerHTML = '';
        if (filtered.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">No products match your filters.</p>';
            return;
        }

        filtered.forEach(product => {
            const el = document.createElement('div');
            el.className = 'gallery-item';
            el.style.cursor = 'pointer';
            el.innerHTML = `<img src="${product.images[0]}" alt="${product.name}"><p>${product.name}</p>`;
            el.addEventListener('click', () => openProductDetail(product));
            grid.appendChild(el);
        });
    }

    // Product Detail Logic
    const pdModal = document.getElementById('product-detail-modal');
    const pdClose = document.getElementById('close-product-detail');

    if(pdClose) {
        pdClose.addEventListener('click', () => {
            pdModal.classList.remove('active');
        });
    }

    function openProductDetail(product) {
        document.getElementById('pd-title').textContent = product.name;
        document.getElementById('pd-price').textContent = product.price || "Price on Request";
        document.getElementById('pd-material').textContent = product.material;
        document.getElementById('pd-dimensions').textContent = product.dimensions;
        document.getElementById('pd-finish').textContent = product.woodFinish;
        document.getElementById('pd-warranty').textContent = product.warranty;
        document.getElementById('pd-delivery').textContent = product.deliveryTime;
        document.getElementById('pd-location').textContent = product.projectLocation;
        document.getElementById('pd-rating').textContent = '★ ' + product.customerRating;

        // Features
        const featuresList = document.getElementById('pd-features');
        featuresList.innerHTML = '';
        product.features.forEach(f => {
            const li = document.createElement('li');
            li.textContent = f;
            featuresList.appendChild(li);
        });

        // Gallery Slider
        const heroImg = document.getElementById('hero-slider-image');
        const thumbnailRow = document.getElementById('thumbnail-row');
        heroImg.src = product.images[0];
        
        thumbnailRow.innerHTML = '';
        product.images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.className = 'thumbnail' + (index === 0 ? ' active' : '');
            thumb.addEventListener('click', () => {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                heroImg.src = imgSrc;
            });
            thumbnailRow.appendChild(thumb);
        });

        // Before After Logic
        const baContainer = document.getElementById('ba-slider-container');
        if (product.beforeAfter) {
            baContainer.style.display = 'block';
            document.getElementById('ba-before').src = product.beforeAfter.before;
            document.getElementById('ba-after').src = product.beforeAfter.after;
            
            // Basic BA logic
            baContainer.addEventListener('mousemove', (e) => {
                const rect = baContainer.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let percent = (x / rect.width) * 100;
                if(percent < 0) percent = 0;
                if(percent > 100) percent = 100;
                
                document.getElementById('ba-after').style.clipPath = `polygon(${percent}% 0, 100% 0, 100% 100%, ${percent}% 100%)`;
                document.getElementById('ba-handle').style.left = `${percent}%`;
            });
        } else {
            baContainer.style.display = 'none';
        }

        // WhatsApp Custom Message
        const whatsappBtn = document.getElementById('pd-whatsapp');
        const message = encodeURIComponent(`Hi, I am interested in getting a quote for the ${product.name}. Please provide more details.`);
        whatsappBtn.href = `https://wa.me/918341745511?text=${message}`;

        pdModal.classList.add('active');
    }
});
