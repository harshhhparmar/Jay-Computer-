import { Service } from './types';

export const services: Service[] = [
  // Government Documents
  {
    id: 'income-certificate',
    categoryEn: 'Government Documents',
    categoryGu: 'સરકારી ડોક્યુમેન્ટ્સ',
    titleEn: 'Income Certificate',
    titleGu: 'આવકનો દાખલો',
    iconName: 'Award',
    descriptionEn: 'Income Certificate required for scholarship, admission, etc.',
    descriptionGu: 'આવકનો દાખલો સ્કોલરશિપ, એડમિશન વગેરે માટે જરૂરી છે.',
    documentsEn: ["Form and Photo", "Ration Card Copy", "Talati\'s Income Certificate", "Last Light Bill", "Aadhaar Card"],
    documentsGu: ["ફોર્મ અને ફોટો", "રેશન કાર્ડની નકલ", "તલાટીનો આવકનો દાખલો", "છેલ્લું લાઈટ બિલ", "આધારકાર્ડ"],
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
    documentsEn: ["Form and Photo", "Ration Card Copy", "School Leaving Certificate", "Father/Brother/Sister\'s School Leaving", "Last Light Bill", "Talati\'s Caste Certificate", "Aadhaar Card"],
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
    documentsEn: ["Form and Photo", "Ration Card Copy", "School Leaving Certificate", "Talati\'s 10-year Residence Certificate", "Residence Affidavit (Sogandnamu)", "Last Light Bill", "Birth Certificate", "Police Station Certificate", "Aadhaar Card"],
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
    documentsEn: ["Form and Photo", "Ration Card Copy", "School Leaving Certificate", "Income Certificate (Last 3 years for NCL)", "Talati\'s Caste/EWS Certificate", "Last Light Bill", "Aadhaar Card"],
    documentsGu: ["ફોર્મ અને ફોટો", "રેશન કાર્ડની નકલ", "સ્કુલ લીવીંગ સર્ટી", "આવકનો દાખલો (NCL માટે છેલ્લા ૩ વર્ષનો)", "તલાટીનો દાખલો", "છેલ્લું લાઈટ બિલ", "આધારકાર્ડ"],
    popular: true
  },

  // Cards
  {
    id: 'ration-card',
    categoryEn: 'Cards',
    categoryGu: 'કાર્ડ સંબંધિત કામગીરી',
    titleEn: 'Ration Card Support',
    titleGu: 'રેશન કાર્ડ',
    iconName: 'FileText',
    descriptionEn: 'Apply for new ration card, name addition/removal, and ration card correction.',
    descriptionGu: 'નવું રેશન કાર્ડ કઢાવવા, નામ ઉમેરવા/કમી કરવા, અને જરૂરી સુધારા કરવા.',
    documentsEn: ['Aadhaar Card of all members', 'Light Bill', 'Income Proof', 'Passport Photo', 'Old Ration Card (if any)'],
    documentsGu: ['પરિવારના તમામ સભ્યોના આધાર કાર્ડ', 'લાઈટ બિલ', 'આવકનો પુરાવો', 'પાસપોર્ટ ફોટો', 'જૂનું રેશન કાર્ડ (જો હોય તો)'],
    popular: true
  },
  {
    id: 'pancard',
    categoryEn: 'Cards',
    categoryGu: 'કાર્ડ સંબંધિત કામગીરી',
    titleEn: 'PAN Card Services',
    titleGu: 'પાન કાર્ડ',
    iconName: 'CreditCard',
    descriptionEn: 'New PAN Card application, corrections, or reprint services.',
    descriptionGu: 'નવું પાન કાર્ડ, પાન કાર્ડમાં સુધારો, અને ખોવાયેલ પાન કાર્ડ કઢાવવા.',
    documentsEn: ['Aadhaar Card', '2 Passport Size Photos'],
    documentsGu: ['આધાર કાર્ડ', '2 પાસપોર્ટ સાઈઝના ફોટા'],
    popular: true
  },
  {
    id: 'voter-id',
    categoryEn: 'Cards',
    categoryGu: 'કાર્ડ સંબંધિત કામગીરી',
    titleEn: 'Voter ID Services',
    titleGu: 'ચૂંટણી કાર્ડ',
    iconName: 'UserCheck',
    descriptionEn: 'Apply for a new Voter ID, correct details, or replace lost card.',
    descriptionGu: 'નવું ચૂંટણી કાર્ડ, સુધારો કરવા, અને પીવીસી કાર્ડ કઢાવવા.',
    documentsEn: ['Aadhaar Card', 'Passport Photo', 'Age Proof'],
    documentsGu: ['આધાર કાર્ડ', 'પાસપોર્ટ ફોટો', 'ઉંમરનો પુરાવો'],
    popular: false
  },
  {
    id: 'ayushman-abha-card',
    categoryEn: 'Cards',
    categoryGu: 'કાર્ડ સંબંધિત કામગીરી',
    titleEn: 'Ayushman Card (PMJAY) & ABHA Card',
    titleGu: 'આયુષ્માન કાર્ડ (PMJAY) અને આભા કાર્ડ',
    iconName: 'HeartPulse',
    descriptionEn: 'Ayushman Bharat Card enrollment and ABHA Health ID generation.',
    descriptionGu: 'આયુષ્માન ભારત કાર્ડ કઢાવવા અને આભા (ABHA) હેલ્થ આઈડી બનાવવા.',
    documentsEn: ['Aadhaar Card', 'Ration Card', 'Income Certificate (if applicable)'],
    documentsGu: ['આધાર કાર્ડ', 'રેશન કાર્ડ', 'આવકનો દાખલો (જો હોય તો)'],
    popular: true
  },
  {
    id: 'e-shram-card',
    categoryEn: 'Cards',
    categoryGu: 'કાર્ડ સંબંધિત કામગીરી',
    titleEn: 'E-Shram Card',
    titleGu: 'ઇ-શ્રમ કાર્ડ',
    iconName: 'Users',
    descriptionEn: 'E-Shram card registration for unorganized workers.',
    descriptionGu: 'અસંગઠિત કામદારો માટે ઇ-શ્રમ કાર્ડ નોંધણી.',
    documentsEn: ['Aadhaar Card', 'Aadhaar Linked Mobile', 'Bank Passbook'],
    documentsGu: ['આધાર કાર્ડ', 'આધાર સાથે લિંક મોબાઈલ', 'બેંક પાસબુક'],
    popular: false
  },

  // Government Schemes
  {
    id: 'pm-kisan',
    categoryEn: 'Government Schemes',
    categoryGu: 'સરકારી યોજનાઓ',
    titleEn: 'PM Kisan Samman Nidhi',
    titleGu: 'પીએમ કિસાન સન્માન નિધિ',
    iconName: 'Tractor',
    descriptionEn: 'Registration and e-KYC for PM Kisan Yojna.',
    descriptionGu: 'પીએમ કિસાન યોજના માટે નોંધણી અને e-KYC.',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Land Documents (7/12 & 8A)'],
    documentsGu: ['આધાર કાર્ડ', 'બેંક પાસબુક', 'જમીનના દસ્તાવેજો (૭/૧૨ અને ૮-અ)'],
    popular: true
  },
  {
    id: 'vidhva-sahay',
    categoryEn: 'Government Schemes',
    categoryGu: 'સરકારી યોજનાઓ',
    titleEn: 'Widow Pension (Vidhva Sahay)',
    titleGu: 'વિધવા સહાય યોજના',
    iconName: 'HeartHandshake',
    descriptionEn: 'Application for Widow Pension Scheme.',
    descriptionGu: 'વિધવા સહાય (ગંગા સ્વરૂપ આર્થિક સહાય) યોજના માટે અરજી.',
    documentsEn: ['Aadhaar Card', 'Husband Death Certificate', 'Income Certificate', 'Bank Passbook', 'Ration Card'],
    documentsGu: ['આધાર કાર્ડ', 'પતિના મરણનો દાખલો', 'આવકનો દાખલો', 'બેંક પાસબુક', 'રેશન કાર્ડ'],
    popular: true
  },
  {
    id: 'vrudh-sahay',
    categoryEn: 'Government Schemes',
    categoryGu: 'સરકારી યોજનાઓ',
    titleEn: 'Old Age Pension (Vrudh Sahay)',
    titleGu: 'વૃદ્ધ સહાય યોજના',
    iconName: 'UserPlus',
    descriptionEn: 'Application for Old Age Pension Scheme.',
    descriptionGu: 'વૃદ્ધ સહાય યોજના (નિરાધાર વૃદ્ધ સહાય) માટે અરજી.',
    documentsEn: ['Aadhaar Card', 'Age Proof', 'Income Certificate', 'Bank Passbook', 'Ration Card'],
    documentsGu: ['આધાર કાર્ડ', 'ઉંમરનો પુરાવો (59+ વર્ષ)', 'આવકનો દાખલો', 'બેંક પાસબુક', 'રેશન કાર્ડ'],
    popular: true
  },
  {
    id: 'e-kutir',
    categoryEn: 'Government Schemes',
    categoryGu: 'સરકારી યોજનાઓ',
    titleEn: 'Manav Kalyan Yojana',
    titleGu: 'માનવ કલ્યાણ યોજના',
    iconName: 'Package',
    descriptionEn: 'Application for Manav Kalyan Yojana / e-Kutir portal schemes.',
    descriptionGu: 'માનવ કલ્યાણ યોજના હેઠળ સાધન સહાય માટેની અરજી.',
    documentsEn: ['Aadhaar Card', 'Ration Card', 'Income Certificate', 'Bank Passbook'],
    documentsGu: ['આધાર કાર્ડ', 'રેશન કાર્ડ', 'આવકનો દાખલો', 'બેંક પાસબુક'],
    popular: true
  },

  // Student / Labour / Scholarship
  {
    id: 'e-nirman-scholarship',
    categoryEn: 'Student / Labour / Scholarship',
    categoryGu: 'વિદ્યાર્થી / શ્રમિક / શિષ્યવૃત્તિ',
    titleEn: 'E-Nirman Card & Scholarship',
    titleGu: 'ઇ-નિર્માણ કાર્ડ અને શિષ્યવૃત્તિ',
    iconName: 'HardHat',
    descriptionEn: 'Registration for construction workers and their children\'s scholarship.',
    descriptionGu: 'બાંધકામ શ્રમિકો માટે કાર્ડ અને તેમના બાળકો માટે શિષ્યવૃત્તિ નોંધણી.',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Contractor Letter (90 days)', 'Children Marksheets'],
    documentsGu: ['આધાર કાર્ડ', 'બેંક પાસબુક', 'કોન્ટ્રાક્ટરનો દાખલો (૯૦ દિવસ)', 'બાળકોની માર્કશીટ'],
    popular: true
  },
  {
    id: 'digital-gujarat-scholarship',
    categoryEn: 'Student / Labour / Scholarship',
    categoryGu: 'વિદ્યાર્થી / શ્રમિક / શિષ્યવૃત્તિ',
    titleEn: 'Digital Gujarat Scholarship',
    titleGu: 'ડિજિટલ ગુજરાત શિષ્યવૃત્તિ',
    iconName: 'GraduationCap',
    descriptionEn: 'Online scholarship application for school/college students.',
    descriptionGu: 'શાળા/કોલેજના વિદ્યાર્થીઓ માટે ઓનલાઈન શિષ્યવૃત્તિ અરજી.',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Last Year Marksheet', 'Income Certificate', 'Caste Certificate', 'Fee Receipt'],
    documentsGu: ['આધાર કાર્ડ', 'બેંક પાસબુક', 'ગયા વર્ષની માર્કશીટ', 'આવકનો દાખલો', 'જાતિનો દાખલો', 'ફી પહોંચ'],
    popular: true
  },
  {
    id: 'rte-admission',
    categoryEn: 'Student / Labour / Scholarship',
    categoryGu: 'વિદ્યાર્થી / શ્રમિક / શિષ્યવૃત્તિ',
    titleEn: 'RTE Admission',
    titleGu: 'RTE એડમિશન',
    iconName: 'BookOpen',
    descriptionEn: 'RTE (Right to Education) free admission online form.',
    descriptionGu: 'રાઈટ ટુ એજ્યુકેશન (RTE) અંતર્ગત મફત શિક્ષણ માટેના ઓનલાઈન ફોર્મ.',
    documentsEn: ['Child Birth Certificate', 'Aadhaar Card of Child & Parents', 'Income Certificate', 'Address Proof', 'Caste Certificate'],
    documentsGu: ['બાળકનો જન્મનો દાખલો', 'બાળક અને માતાપિતાનું આધાર કાર્ડ', 'આવકનો દાખલો', 'રહેઠાણનો પુરાવો', 'જાતિનો દાખલો'],
    popular: true
  },

  // LIC Services
  {
    id: 'lic-premium',
    categoryEn: 'LIC Services',
    categoryGu: 'LIC સેવાઓ',
    titleEn: 'LIC Premium Support & Payment',
    titleGu: 'LIC પ્રીમિયમ પેમેન્ટ',
    iconName: 'ShieldCheck',
    descriptionEn: 'Online payment and receipt generation for LIC policies.',
    descriptionGu: 'તમામ LIC પોલિસીઓ માટે ઓનલાઈન પ્રીમિયમ પેમેન્ટ અને રસીદ.',
    documentsEn: ['Policy Number', 'Mobile Number', 'Email ID'],
    documentsGu: ['પોલિસી નંબર', 'મોબાઈલ નંબર', 'ઈમેલ આઈડી'],
    popular: true
  },
  {
    id: 'lic-new-policy',
    categoryEn: 'LIC Services',
    categoryGu: 'LIC સેવાઓ',
    titleEn: 'New LIC Policy',
    titleGu: 'નવી LIC પોલિસી',
    iconName: 'FilePlus',
    descriptionEn: 'Guidance and application for new LIC policies suited to your needs.',
    descriptionGu: 'તમારી જરૂરિયાત મુજબની નવી LIC પોલિસી માટે માર્ગદર્શન અને અરજી.',
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Bank Details', 'Passport Photo'],
    documentsGu: ['આધાર કાર્ડ', 'પાન કાર્ડ', 'બેંક ખાતાની વિગતો', 'પાસપોર્ટ ફોટો'],
    popular: false
  },

  // Insurance Services
  {
    id: 'vehicle-insurance',
    categoryEn: 'Insurance Services',
    categoryGu: 'વીમા સેવાઓ',
    titleEn: 'Vehicle Insurance (Two/Four Wheeler)',
    titleGu: 'વાહન વીમો (ટુ/ફોર વ્હીલર)',
    iconName: 'Car',
    descriptionEn: 'New and renewal of two-wheeler, four-wheeler, and commercial vehicle insurance.',
    descriptionGu: 'નવો અને રીન્યુઅલ વાહન વીમો (ટુ વ્હીલર, ફોર વ્હીલર અને કોમર્શિયલ વાહન).',
    documentsEn: ['RC Book', 'Old Policy (if renewal)'],
    documentsGu: ['આરસી બુક', 'જૂની પોલિસી (જો રીન્યુઅલ હોય તો)'],
    popular: true
  },

  // SBI / Banking Services
  {
    id: 'new-bank-account',
    categoryEn: 'SBI / Banking Services',
    categoryGu: 'SBI / બેન્કિંગ સેવાઓ',
    titleEn: 'New Bank Account Opening',
    titleGu: 'નવું બેંક ખાતું ખોલવા',
    iconName: 'Landmark',
    descriptionEn: 'Assistance in opening zero balance and regular savings bank accounts.',
    descriptionGu: 'ઝીરો બેલેન્સ અને રેગ્યુલર સેવિંગ્સ બેંક એકાઉન્ટ ખોલવામાં સહાય.',
    documentsEn: ['Aadhaar Card', 'PAN Card', '2 Passport Photos', 'Mobile Number'],
    documentsGu: ['આધાર કાર્ડ', 'પાન કાર્ડ', '2 પાસપોર્ટ ફોટા', 'મોબાઈલ નંબર'],
    popular: true
  },

  // Loan Services
  {
    id: 'personal-loan',
    categoryEn: 'Loan Services',
    categoryGu: 'લોન સેવાઓ',
    titleEn: 'Personal & Business Loan',
    titleGu: 'પર્સનલ અને બિઝનેસ લોન',
    iconName: 'Banknote',
    descriptionEn: 'Guidance and application processing for personal and business loans.',
    descriptionGu: 'પર્સનલ અને બિઝનેસ લોન માટે માર્ગદર્શન અને અરજી પ્રક્રિયા.',
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Last 6 Months Bank Statement', 'ITR / Salary Slip'],
    documentsGu: ['આધાર કાર્ડ', 'પાન કાર્ડ', 'છેલ્લા 6 મહિનાનું બેંક સ્ટેટમેન્ટ', 'ITR / સેલરી સ્લિપ'],
    popular: false
  },

  // RTO Services
  {
    id: 'driving-license',
    categoryEn: 'RTO Services',
    categoryGu: 'RTO સેવાઓ',
    titleEn: 'Driving License',
    titleGu: 'ડ્રાઈવિંગ લાયસન્સ',
    iconName: 'CarFront',
    descriptionEn: 'Learner license, driving license renewal, duplicate license.',
    descriptionGu: 'કાચું લાયસન્સ, પાકું લાયસન્સ, રીન્યુઅલ.',
    documentsEn: ['Aadhaar Card', 'Passport Photo', 'Age/Address Proof'],
    documentsGu: ['આધાર કાર્ડ', 'પાસપોર્ટ ફોટો', 'ઉંમર/સરનામાનો પુરાવો'],
    popular: true
  },

  // Tax & Finance
  {
    id: 'msme-udyam',
    categoryEn: 'Tax & Finance',
    categoryGu: 'કર અને નાણાકીય',
    titleEn: 'MSME / Udyam Registration',
    titleGu: 'ઉદ્યોગ આધાર / MSME',
    iconName: 'Building',
    descriptionEn: 'Udyam registration for small and medium enterprises.',
    descriptionGu: 'નાના અને મધ્યમ ઉદ્યોગો માટે ઉદ્યોગ આધાર નોંધણી.',
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Bank Account Details'],
    documentsGu: ['આધાર કાર્ડ', 'પાન કાર્ડ', 'બેંક ખાતાની વિગતો'],
    popular: false
  },
  {
    id: 'income-tax-return',
    categoryEn: 'Tax & Finance',
    categoryGu: 'કર અને નાણાકીય',
    titleEn: 'Income Tax Return (ITR)',
    titleGu: 'ઇન્કમ ટેક્સ રિટર્ન (ITR)',
    iconName: 'FileLineChart',
    descriptionEn: 'Filing of annual Income Tax Returns for individuals and businesses.',
    descriptionGu: 'વ્યક્તિઓ અને ઉદ્યોગો માટે વાર્ષિક ઇન્કમ ટેક્સ રિટર્ન ફાઇલિંગ.',
    documentsEn: ['PAN Card', 'Aadhaar Card', 'Form 16 / Bank Statements', 'Investment Proofs'],
    documentsGu: ['પાન કાર્ડ', 'આધાર કાર્ડ', 'ફોર્મ 16 / બેંક સ્ટેટમેન્ટ', 'રોકાણના પુરાવા'],
    popular: false
  }
];

export const siteConfig = {
  shopName: "Jay Computer",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "contact@digitalsevakendra.com",
  addressEn: "Shop No. 1, Main Market, City Center, Gujarat 380001",
  addressGu: "દુકાન નંબર ૧, મુખ્ય બજાર, સિટી સેન્ટર, ગુજરાત ૩૮૦૦૦૧",
  workingHoursEn: "Monday - Saturday: 9:00 AM to 8:00 PM",
  workingHoursGu: "સોમવાર - શનિવાર: સવારે ૯ થી સાંજે ૮",
  aboutTextEn: "We provide all kinds of online services, government certificate applications, and digital solutions with fast and reliable support.",
  aboutTextGu: "અમે તમામ પ્રકારની ઓનલાઈન સેવાઓ, સરકારી દાખલાની અરજીઓ અને ડિજિટલ સુવિધાઓ ઝડપી અને વિશ્વસનીય સહાય સાથે પ્રદાન કરીએ છીએ."
};
