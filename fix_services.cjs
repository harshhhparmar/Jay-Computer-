const fs = require('fs');

let code = fs.readFileSync('src/components/ServicesSection.tsx', 'utf8');

code = code.replace(
  /'mamlatdar-certificates': '\/services\/certificates',/g,
  `'income-certificate': '/services/certificates',
    'caste-certificate': '/services/certificates',
    'domicile-certificate': '/services/certificates',
    'ews-ncl-certificate': '/services/certificates',`
);

fs.writeFileSync('src/components/ServicesSection.tsx', code, 'utf8');
