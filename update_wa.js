const fs = require('fs');
const path = require('path');

const newLink = 'https://wa.me/918341745511?text=Hello!%20I%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20carpentry%20and%20interior%20design%20services.%20I%20would%20like%20to%20know%20more%20about%20your%20wardrobes%2C%20modular%20kitchens%2C%20TV%20units%2C%20custom%20furniture%2C%20aluminium%20works%2C%20and%20pricing.%20Please%20share%20the%20details%20and%20help%20me%20get%20a%20quotation.%20Thank%20you!';

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /https:\/\/wa\.me\/918341745511[^"'\s]*/g;
    const newContent = content.replace(regex, newLink);
    if(content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log('Updated', filePath);
    }
}

const files = [
    'src/components/FloatingActions.jsx',
    'src/components/Footer.jsx',
    'src/app/services/page.js',
    'src/app/contact/page.js',
    'src/app/product/page.js',
    'src/app/gallery/page.js'
];

files.forEach(f => replaceInFile(path.join(__dirname, f)));
