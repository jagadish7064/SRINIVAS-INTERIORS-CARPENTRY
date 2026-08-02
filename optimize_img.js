const fs = require('fs');
const path = require('path');

const files = [
    'src/app/page.js',
    'src/app/services/page.js',
    'src/app/product/page.js'
];

function optimizeImages(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all <img ...> that don't already have loading="lazy" 
    // This simple regex matches <img and injects attributes if missing.
    let updatedContent = content.replace(/<img(?!.*loading="lazy")([^>]+)>/g, '<img loading="lazy" decoding="async"$1>');
    
    if (filePath.includes('page.js') && !filePath.includes('services') && !filePath.includes('product')) {
        // Special case for the home page: first image should not be lazy loaded but fetchpriority="high"
        // It's the kitchen (1).png
        updatedContent = updatedContent.replace(
            /<img loading="lazy" decoding="async" src="\/assets\/kitchen \(1\)\.png" alt="Luxury Modular Kitchen" \/>/,
            '<img fetchpriority="high" src="/assets/kitchen (1).png" alt="Luxury Modular Kitchen" />'
        );
    }

    if(content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        console.log('Optimized images in', filePath);
    }
}

files.forEach(f => optimizeImages(path.join(__dirname, f)));
