const fs = require('fs');
let code = fs.readFileSync('src/components/ServicesSection.tsx', 'utf8');

code = code.replace(
  /const categoryIcons: Record<string, any> = {/,
  `const categoryIcons: Record<string, any> = {
  'Cards': IdCard,
  'Government Schemes': ShieldCheck,`
);

fs.writeFileSync('src/components/ServicesSection.tsx', code, 'utf8');
