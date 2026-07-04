const fs = require('fs');

let code = fs.readFileSync('src/data.ts', 'utf8');

const replacement = `{
    id: 'income-certificate',
    categoryEn: 'Government Documents',
    categoryGu: 'સરકારી ડોક્યુમેન્ટ્સ',
    titleEn: 'Income Certificate',
    titleGu: 'આવકનો દાખલો',
    iconName: 'Award',
    descriptionEn: 'Income Certificate required for scholarship, admission, etc.',
    descriptionGu: 'આવકનો દાખલો સ્કોલરશિપ, એડમિશન વગેરે માટે જરૂરી છે.',
    documentsEn: ["Form and Photo", "Ration Card Copy", "School Leaving Certificate", "Talati\\'s Income Certificate", "Last Light Bill", "Aadhaar Card"],
    documentsGu: ["ફોર્મ અને ફોટો", "રેશન કાર્ડની નકલ", "સ્કુલ લીવીંગ સર્ટી", "તલાટીનો આવકનો દાખલો", "છેલ્લું લાઈટ બિલ", "આધારકાર્ડ"],
    popular: true
  },
  {
    id: 'caste-certificate',
    categoryEn: 'Government Documents',
    categoryGu: 'સરકારી ડોક્યુમેન્ટ્સ',
    titleEn: 'Caste Certificate',
    titleGu: 'જાતિનો દાખલો',
    iconName: 'Award',
    descriptionEn: 'Caste Certificate for educational and government purposes.',
    descriptionGu: 'શૈક્ષણિક અને સરકારી હેતુઓ માટે જાતિનો દાખલો.',
    documentsEn: ["Form and Photo", "Ration Card Copy", "School Leaving Certificate", "Father/Brother/Sister\\'s School Leaving", "Last Light Bill", "Talati\\'s Caste Certificate", "Aadhaar Card"],
    documentsGu: ["ફોર્મ અને ફોટો", "રેશન કાર્ડની નકલ", "સ્કુલ લીવીંગ સર્ટી", "પિતા / ભાઈ / બહેનનું સ્કુલ લીવીંગ", "છેલ્લું લાઈટ બિલ", "તલાટીનો જાતિનો દાખલો", "આધારકાર્ડ"],
    popular: true
  },
  {
    id: 'domicile-certificate',
    categoryEn: 'Government Documents',
    categoryGu: 'સરકારી ડોક્યુમેન્ટ્સ',
    titleEn: 'Domicile Certificate',
    titleGu: 'ડોમિસાઈલ સર્ટી',
    iconName: 'Award',
    descriptionEn: 'Domicile Certificate for proving residence in Gujarat state.',
    descriptionGu: 'ગુજરાત રાજ્યમાં રહેઠાણ સાબિત કરવા માટે ડોમિસાઈલ સર્ટી.',
    documentsEn: ["Form and Photo", "Ration Card Copy", "School Leaving Certificate", "Talati\\'s 10-year Residence Certificate", "Residence Affidavit (Sogandnamu)", "Last Light Bill", "Birth Certificate", "Police Station Certificate", "Aadhaar Card"],
    documentsGu: ["ફોર્મ અને ફોટો", "રેશન કાર્ડની નકલ", "સ્કુલ લીવીંગ સર્ટી", "તલાટીનો ૧૦ વર્ષનો રહેઠાણનો દાખલો", "રહેઠાણનું સોગંદનામું", "છેલ્લું લાઈટ બિલ", "જન્મનો દાખલો", "પોલીસ સ્ટેનો દાખલો", "આધારકાર્ડ"],
    popular: true
  },
  {
    id: 'ews-ncl-certificate',
    categoryEn: 'Government Documents',
    categoryGu: 'સરકારી ડોક્યુમેન્ટ્સ',
    titleEn: 'EWS / Non-Creamy Layer',
    titleGu: 'EWS / નોન-ક્રીમી લેયર દાખલો',
    iconName: 'Award',
    descriptionEn: 'EWS and Non-Creamy Layer certificates for unreserved/reserved categories.',
    descriptionGu: 'બિન-અનામત વર્ગ માટે EWS અને આરક્ષિત વર્ગ માટે નોન-ક્રીમી લેયર દાખલો.',
    documentsEn: ["Form and Photo", "Ration Card Copy", "School Leaving Certificate", "Income Certificate (Last 3 years for NCL)", "Talati\\'s Caste/EWS Certificate", "Last Light Bill", "Aadhaar Card"],
    documentsGu: ["ફોર્મ અને ફોટો", "રેશન કાર્ડની નકલ", "સ્કુલ લીવીંગ સર્ટી", "આવકનો દાખલો (NCL માટે છેલ્લા ૩ વર્ષનો)", "તલાટીનો દાખલો", "છેલ્લું લાઈટ બિલ", "આધારકાર્ડ"],
    popular: true
  }`;

code = code.replace(/{[\s\S]*?id:\s*'mamlatdar-certificates'[\s\S]*?popular:\s*true\s*}/g, replacement);
fs.writeFileSync('src/data.ts', code, 'utf8');
