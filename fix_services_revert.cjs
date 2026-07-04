const fs = require('fs');

let code = fs.readFileSync('src/components/ServicesSection.tsx', 'utf8');

code = code.replace(
  /'income-certificate': '\/services\/certificates',\s*'caste-certificate': '\/services\/certificates',\s*'domicile-certificate': '\/services\/certificates',\s*'ews-ncl-certificate': '\/services\/certificates',/g,
  `'mamlatdar-certificates': '/services/certificates',`
);

fs.writeFileSync('src/components/ServicesSection.tsx', code, 'utf8');
