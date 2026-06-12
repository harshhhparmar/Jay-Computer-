import { SiteConfig, Service } from './types';

export const siteConfig: SiteConfig = {
  shopName: "Jay Computer",
  taglineEn: "All Government, Online Form, Printing & Documentation Services Under One Roof",
  taglineGu: "તમામ સરકારી, ઓનલાઈન ફોર્મ, પ્રિન્ટિંગ અને ડોક્યુમેન્ટેશન સેવાઓ એક જ જગ્યાએ",
  phone: "+91 99256 58113",
  whatsapp: "919925658113",
  email: "jaycomputer.zerox@gmail.com",
  addressEn: "Bus Station Road, Halvad, Morbi - 363330",
  addressGu: "બસ સ્ટેશન રોડ, હળવદ, મોરબી - ૩૬૩૩૩૦",
  mapLink: "https://maps.google.com/?q=23.0225,72.5714",
  workingHoursEn: "Monday - Saturday: 9:00 AM to 7:00 PM | Sunday: Closed",
  workingHoursGu: "સોમવાર - શનિવાર: સવારે ૯:૦૦ થી સાંજે ૭:૦૦ | રવિવાર: રજા",
  aboutTextEn: "Owner: Amit Parmar. Jay Computer provides trusted, quick, and affordable computer services, government documentation, insurance, RTO works, banking, and online application support to the local community. Our goal is to make digital services accessible to everyone with transparency and speed.",
  aboutTextGu: "માલિક: અમિત પરમાર. જય કોમ્પ્યુટર સ્થાનિક લોકોને વિશ્વસનીય, ઝડપી અને સસ્તી કોમ્પ્યુટર સેવાઓ, સરકારી દસ્તાવેજો, વીમો, બેંકિંગ અને ઓનલાઈન એપ્લિકેશન સપોર્ટ પૂરો પાડે છે. અમારો ધ્યેય બધા માટે ડિજિટલ સેવાઓને સરળ અને સુલભ બનાવવાનો છે.",
};

export const services: Service[] = [
  // 1. LIC Services
  {
    id: 'lic-services',
    categoryEn: 'LIC Services',
    categoryGu: 'LIC સેવાઓ',
    titleEn: 'LIC Services & Premium',
    titleGu: 'LIC સેવાઓ અને પ્રીમિયમ',
    iconName: 'ShieldCheck',
    descriptionEn: 'LIC premium collection, new policy support, and policy checking.',
    descriptionGu: 'LIC પ્રીમિયમ ભરવા, નવી પોલિસી માટે સહાય, અને પોલિસી ચેકિંગ.',
    documentsEn: ['Aadhaar Card', 'Previous Policy Documents (If any)'],
    documentsGu: ['આધાર કાર્ડ', 'જૂની પોલિસીની નકલ (જો હોય તો)'],
    popular: true
  },
  
  // 2. Insurance Services
  {
    id: 'vehicle-insurance',
    categoryEn: 'Insurance Services',
    categoryGu: 'વીમા સેવાઓ',
    titleEn: 'Vehicle & Online General Insurance',
    titleGu: 'વાહન અને સામાન્ય વીમો',
    iconName: 'CarFront',
    descriptionEn: 'SBI General Insurance, Bike insurance, two-wheeler, four-wheeler, and commercial vehicle insurance.',
    descriptionGu: 'SBI જનરલ વીમો, બાઇકનો વીમો, ટુ-વ્હીલર, ફોર-વ્હીલરનો વીમો.',
    documentsEn: ['RC Book', 'Previous Policy Copy', 'Aadhaar Card'],
    documentsGu: ['RC બુક', 'જૂની પોલિસીની નકલ', 'આધાર કાર્ડ']
  },

  // 3. Government Schemes & Cards
  {
    id: 'vhali-dikri',
    categoryEn: 'Government Schemes & Cards',
    categoryGu: 'સરકારી યોજનાઓ અને કાર્ડ',
    titleEn: 'Vhali Dikri Yojana',
    titleGu: 'વ્હાલી દીકરી યોજના',
    iconName: 'Heart',
    descriptionEn: 'Online application for Vhali Dikri Yojana. Note: Customer must bring all original and Xerox documents.',
    descriptionGu: 'વ્હાલી દીકરી યોજના માટે ઓનલાઈન ફોર્મ. નોંધ - તમામ ઓરીજનલ અને ઝેરોક્ષ ડોક્યુમેન્ટ સાથે લાવવા.',
    documentsEn: [
      'Marriage Certificate',
      'School Leaving Certificate (Husband & Wife)',
      'Daughter\'s Birth Certificate',
      'Ration Card',
      'Income Certificate (Mamlatdar/Talati with photo)',
      'Daughter\'s Passport Size Photo',
      'Aadhaar Card (Mother, Father, Daughter, and all family members in Ration Card)'
    ],
    documentsGu: [
      'મેરેજ સર્ટિફિકેટ',
      'L.C (શાળા છોડ્યા નું પ્રમાણપત્ર પતિ અને પત્ની બંને નું)',
      'દીકરી નો જન્મ તારીખ નો દાખલો',
      'રેશનકાર્ડ',
      'આવક નો દાખલો મામલતદાર અથવા તલાટી મંત્રી ફોટો વાળો',
      'પાસપોર્ટ ફોટો (દીકરી)',
      'આધારકાર્ડ (માતા-પિતા, દીકરી, અને રેશનકાર્ડમાં નામ હોય તે બધાના)'
    ],
    popular: true
  },
  {
    id: 'ayushman-card',
    categoryEn: 'Government Schemes & Cards',
    categoryGu: 'સરકારી યોજનાઓ અને કાર્ડ',
    titleEn: 'Ayushman & ABHA Card',
    titleGu: 'આયુષ્માન અને ABHA કાર્ડ',
    iconName: 'HeartPulse',
    descriptionEn: 'Ayushman Health cards and ABHA Health ID generation.',
    descriptionGu: 'આયુષ્માન હેલ્થ કાર્ડ કઢાવવા અને ABHA હેલ્થ ID બનાવવાનું કામ.',
    documentsEn: ['Aadhaar Card', 'Ration Card with Name inside', 'Mobile Number'],
    documentsGu: ['આધાર કાર્ડ', 'રેશન કાર્ડ (જેમાં નામ હોય)', 'મોબાઈલ નંબર'],
    popular: true
  },
  {
    id: 'pm-schemes',
    categoryEn: 'Government Schemes & Cards',
    categoryGu: 'સરકારી યોજનાઓ અને કાર્ડ',
    titleEn: 'PM Awas, Surya Ghar & Vishwakarma Yojana',
    titleGu: 'PM આવાસ, સૂર્યઘર અને વિશ્વકર્મા યોજના',
    iconName: 'Sun',
    descriptionEn: 'Forms for Pradhan Mantri Awas Yojana (1.0 & 2.0), PM Surya Ghar, and PM Vishwakarma Yojana.',
    descriptionGu: 'PM આવાસ યોજના (1.0 અને 2.0), PM સૂર્યઘર અને PM વિશ્વકર્મા યોજનાના ફોર્મ.',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Land/House Proof', 'Passport Photo', 'Income Cert'],
    documentsGu: ['આધાર કાર્ડ', 'બેંક પાસબુક', 'જમીન/મકાનનો પુરાવો', 'પાસપોર્ટ ફોટો', 'આવકનો દાખલો']
  },
  {
    id: 'pmsym-pmkmy',
    categoryEn: 'Government Schemes & Cards',
    categoryGu: 'સરકારી યોજનાઓ અને કાર્ડ',
    titleEn: 'PMSYM & PMKMY Card',
    titleGu: 'PMSYM અને PMKMY કાર્ડ',
    iconName: 'Users',
    descriptionEn: 'Pradhan Mantri Shram Yogi Maandhan Yojana & Kisan Maandhan Yojana Cards.',
    descriptionGu: 'પ્રધાન મંત્રી શ્રમ યોગી માનધન યોજના અને કિસાન માનધન યોજના કાર્ડ.',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Mobile Number linked with Aadhaar'],
    documentsGu: ['આધાર કાર્ડ', 'બેંક પાસબુક', 'આધાર સાથે લિંક મોબાઈલ નંબર']
  },
  {
    id: 'udyam-cert',
    categoryEn: 'Government Schemes & Cards',
    categoryGu: 'સરકારી યોજનાઓ અને કાર્ડ',
    titleEn: 'Udyam Certificate',
    titleGu: 'ઉદ્યોગ આધાર (Udyam)',
    iconName: 'Briefcase',
    descriptionEn: 'Udyam registration for MSME businesses.',
    descriptionGu: 'MSME રજીસ્ટ્રેશન અને ઉદ્યોગ આધાર સર્ટિફિકેટ કાઢવાનું કામ.',
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Bank Account Details'],
    documentsGu: ['આધાર કાર્ડ', 'પાન કાર્ડ', 'બેંક ખાતાની વિગતો']
  },
  {
    id: 'state-welfare',
    categoryEn: 'Government Schemes & Cards',
    categoryGu: 'સરકારી યોજનાઓ અને કાર્ડ',
    titleEn: 'State Welfare Schemes',
    titleGu: 'રાજ્ય કલ્યાણ અને સહાય યોજનાઓ',
    iconName: 'Heart',
    descriptionEn: 'Manav Garima, Manav Kalyan, e-Kutir, Kunvarbai Nu Mameru, Ganga Swarup, Niradhar Vrudh, Vidhva Sahay, BPL Sahay, Ma Annapurna.',
    descriptionGu: 'માનવ ગરિમા, માનવ કલ્યાણ, ઈ-કુટીર, કુંવરબાઈનું મામેરુ, ગંગા સ્વરૂપ, નિરાધાર વૃદ્ધ, વિધવા સહાય, અને મા અન્નપૂર્ણા યોજના.',
    documentsEn: ['Aadhaar Card', 'Ration Card', 'Bank Passbook', 'Relevant Proofs (Income, Death, etc.)'],
    documentsGu: ['આધાર કાર્ડ', 'રેશન કાર્ડ', 'બેંક પાસબુક', 'જરૂરી પુરાવા (આવક, મરણ, ઉંમર વગેરે)']
  },

  // 3. Student / Labour / Scholarship Services
  {
    id: 'scholarships',
    categoryEn: 'Student / Labour / Scholarship',
    categoryGu: 'વિદ્યાર્થી / શ્રમિક કાડૅ / સ્કોલરશીપ',
    titleEn: 'Digital Gujarat & e-Nirman Scholarship',
    titleGu: 'ડિજિટલ ગુજરાત અને ઈ-નિર્માણ સ્કોલરશીપ',
    iconName: 'GraduationCap',
    descriptionEn: 'Assistance in filling Digital Gujarat Scholarship and e-Nirman Card Scholarship forms.',
    descriptionGu: 'ડિજિટલ ગુજરાત અને ઈ-નિર્માણ કાર્ડ સ્કોલરશીપના ફોર્મ ભરવા.',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Fees Receipt', 'Income Certificate', 'Last Marksheet'],
    documentsGu: ['આધાર કાર્ડ', 'બેંક પાસબુક', 'ફીની પહોંચ', 'આવકનો દાખલો', 'છેલ્લી માર્કશીટ'],
    popular: true
  },
  {
    id: 'labour-cards',
    categoryEn: 'Student / Labour / Scholarship',
    categoryGu: 'વિદ્યાર્થી / શ્રમિક કાડૅ / સ્કોલરશીપ',
    titleEn: 'Shram Card & e-Nirman Card',
    titleGu: 'શ્રમ કાર્ડ અને ઈ-નિર્માણ કાર્ડ',
    iconName: 'HardHat',
    descriptionEn: 'New registration and updates for Shram Cards and e-Nirman Cards for labourers.',
    descriptionGu: 'શ્રમિકો માટે નવું શ્રમ કાર્ડ અને ઈ-નિર્માણ કાર્ડ કઢાવવા માટેનું કામ.',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Ration Card'],
    documentsGu: ['આધાર કાર્ડ', 'બેંક પાસબુક', 'રેશન કાર્ડ']
  },

  // 4. Mamlatdar Office Related Services
  {
    id: 'mamlatdar-certificates',
    categoryEn: 'Mamlatdar Office Services',
    categoryGu: 'મામલતદાર કચેરીના દાખલા',
    titleEn: 'Income, Caste, EWS & Domicile',
    titleGu: 'આવક, જાતિ, EWS અને રહેઠાણનો દાખલો',
    iconName: 'Award',
    descriptionEn: 'Income Certificate, Caste Cert., Non-Creamy Layer, EWS, Religious Minority, and Domicile Certificates.',
    descriptionGu: 'આવકનો દાખલો, જાતિ, બિન ઉન્નત વર્ગ (NCL), EWS (બિન અનામત), ધાર્મિક લઘુમતી અને રહેઠાણના દાખલા.',
    documentsEn: ['Aadhaar Card', 'Ration Card', 'Talati Signature (if required)', 'Light Bill', 'LC/Birth Proof'],
    documentsGu: ['આધાર કાર્ડ', 'રેશન કાર્ડ', 'તલાટીની સહી', 'લાઈટ બિલ', 'LC/જન્મનો દાખલો'],
    popular: true
  },
  {
    id: 'ration-card',
    categoryEn: 'Mamlatdar Office Services',
    categoryGu: 'મામલતદાર કચેરીના દાખલા',
    titleEn: 'Ration Card Support',
    titleGu: 'રેશન કાર્ડ સંબંધિત કામગીરી',
    iconName: 'FileText',
    descriptionEn: 'Apply for new ration card, name addition/removal, and ration card correction.',
    descriptionGu: 'નવું રેશન કાર્ડ કઢાવવા, નામ ઉમેરવા/કમી કરવા, અને જરૂરી સુધારા કરવા.',
    documentsEn: ['Old Ration Card (if any)', 'Aadhaar Cards of all members', 'Bank Passbook', 'Light Bill'],
    documentsGu: ['જૂનું રેશન કાર્ડ', 'બધા સભ્યોના આધાર કાર્ડ', 'બેંક પાસબુક', 'લાઈટ બિલ'],
    popular: true
  },

  // 5. Registration & Certificate Services
  {
    id: 'birth-death-marriage',
    categoryEn: 'Registration & Certificates',
    categoryGu: 'રજીસ્ટ્રેશન અને પ્રમાણપત્રો',
    titleEn: 'Birth, Death & Marriage Registration',
    titleGu: 'જન્મ, મરણ અને લગ્ન નોંધણી',
    iconName: 'FileSignature',
    descriptionEn: 'Marriage registration cert., Birth/Death registration, Birth certificate correction, and Talati income cert.',
    descriptionGu: 'લગ્ન નોંધણી, જન્મ/મરણ નોંધણી, જન્મ તારીખના દાખલામાં સુધારો, અને તલાટીનો આવકનો દાખલો.',
    documentsEn: ['Hospital/Crematorium Proof', 'Aadhaar Cards', 'Wedding Card/Photos (for marriage)'],
    documentsGu: ['હોસ્પિટલ/સ્મશાનનો પુરાવો', 'આધાર કાર્ડ', 'લગ્નની પત્રિકા/ફોટા (લગ્ન માટે)']
  },

  // 6. SBI / Banking Services
  {
    id: 'sbi-services',
    categoryEn: 'SBI / Banking Services',
    categoryGu: 'બેંકિંગ સેવાઓ',
    titleEn: 'SBI Account & Banking Services',
    titleGu: 'SBI એકાઉન્ટ અને બેંકિંગ સેવાઓ',
    iconName: 'Landmark',
    descriptionEn: 'SBI account opening, PMSBY (Accident Ins), PMJJBY (Life Ins), Atal Pension Yojana, ATM & passbook work.',
    descriptionGu: 'SBI નવું ખાતું ખોલવા, અકસ્માત અને જીવન વીમો (PMSBY, PMJJBY), અટલ પેન્શન યોજના, અને પાસબુક સંબંધિત કામગીરી.',
    documentsEn: ['Aadhaar Card', 'PAN Card', '2 Passport Size Photos'],
    documentsGu: ['આધાર કાર્ડ', 'પાન કાર્ડ', '૨ પાસપોર્ટ સાઈઝ ફોટો'],
    popular: true
  },
  // 7. Loan Services
  {
    id: 'loan-services',
    categoryEn: 'Loan Services',
    categoryGu: 'લોન સેવાઓ',
    titleEn: 'Home & Car Loan',
    titleGu: 'હોમ લોન અને કાર લોન',
    iconName: 'PiggyBank',
    descriptionEn: 'Home loan and Car loan assistance.',
    descriptionGu: 'હોમ લોન અને કાર લોન માટે સહાય.',
    documentsEn: ['Aadhaar Card', 'PAN Card', 'ITR/Salary Slips', 'Bank Statement'],
    documentsGu: ['આધાર કાર્ડ', 'પાન કાર્ડ', 'ITR/પગારની સ્લિપ', 'બેંક સ્ટેટમેન્ટ']
  },

  // 8. RTO Services
  {
    id: 'rto-services',
    categoryEn: 'RTO Services',
    categoryGu: 'RTO સેવાઓ',
    titleEn: 'Driving License & RTO Work',
    titleGu: 'ડ્રાઇવિંગ લાયસન્સ અને RTO લેખિત કામ',
    iconName: 'Car',
    descriptionEn: 'New driving license, Learner license, Renewal, Bike passing, and vehicle related RTO work.',
    descriptionGu: 'નવું ડ્રાઇવિંગ લાયસન્સ, લર્નિંગ, રિન્યુઅલ, બાઇક પાસિંગ, અને વાહન સંબંધિત RTO કામગીરી.',
    documentsEn: ['Aadhaar Card', 'Medical Certificate (for age above 40)', 'Passport Photo'],
    documentsGu: ['આધાર કાર્ડ', 'મેડિકલ સર્ટિફિકેટ (40 વર્ષથી વધુ ઉંમર માટે)', 'પાસપોર્ટ ફોટો'],
    popular: true
  },

  // 8. Tax & Finance Services
  {
    id: 'tax-finance',
    categoryEn: 'Tax & Finance',
    categoryGu: 'ટેક્સ અને ફાઇનાન્સ',
    titleEn: 'Income Tax Return (ITR)',
    titleGu: 'ઇન્કમ ટેક્સ રિટર્ન (ITR)',
    iconName: 'Calculator',
    descriptionEn: 'Filing Income Tax Returns (ITR) and financial documentation support.',
    descriptionGu: 'ઇન્કમ ટેક્સ રિટર્ન (ITR) ભરવું અને ફાઇનાન્સિયલ રિપોર્ટ સપોર્ટ.',
    documentsEn: ['PAN Card', 'Aadhaar Card', 'Form 16/Bank Statements'],
    documentsGu: ['પાન કાર્ડ', 'આધાર કાર્ડ', 'ફોર્મ ૧૬ / બેંક સ્ટેટમેન્ટ']
  },

  // 9. Existing Shop Services
  {
    id: 'pan-card',
    categoryEn: 'Identity & Shop Services',
    categoryGu: 'ઓળખ કાર્ડ અને ઝેરોક્ષ',
    titleEn: 'PAN Card Services',
    titleGu: 'પાન કાર્ડ સેવાઓ',
    iconName: 'CreditCard',
    descriptionEn: 'New PAN card application, corrections, and Aadhaar-PAN linking services.',
    descriptionGu: 'નવું પાન કાર્ડ મેળવવા, જૂના પાનમાં સુધારા કરવા અને આધાર-પાન લિંક કરવા.',
    documentsEn: ['Aadhaar Card', '2 Passport Size Photos', 'Birth Proof (For minors)'],
    documentsGu: ['આધાર કાર્ડ', '૨ પાસપોર્ટ સાઈઝ ફોટો', 'જન્મનો દાખલો (સગીર માટે)'],
    popular: true
  },
  {
    id: 'aadhaar-election',
    categoryEn: 'Identity & Shop Services',
    categoryGu: 'ઓળખ કાર્ડ અને ઝેરોક્ષ',
    titleEn: 'Aadhaar & Election Card Print',
    titleGu: 'આધાર અને ચૂંટણી કાર્ડ પ્રિન્ટ',
    iconName: 'Fingerprint',
    descriptionEn: 'Aadhaar printouts, PVC card orders, Voter ID/Election card print.',
    descriptionGu: 'આધાર કાર્ડની પ્રિન્ટ, PVC કાર્ડ ઓર્ડર, અને ચૂંટણી કાર્ડ પ્રિન્ટ.',
    documentsEn: ['Aadhaar Number / Enrolment ID', 'Registered Mobile Number'],
    documentsGu: ['આધાર નંબર / નોંધણી નંબર', 'રજીસ્ટર્ડ મોબાઈલ નંબર']
  },
  {
    id: 'printing-xerox-form',
    categoryEn: 'Identity & Shop Services',
    categoryGu: 'ઓળખ કાર્ડ અને ઝેરોક્ષ',
    titleEn: 'Online Forms, Print & Xerox',
    titleGu: 'ઓનલાઈન ફોર્મ, પ્રિન્ટ અને ઝેરોક્ષ',
    iconName: 'Printer',
    descriptionEn: 'Online form filling, Color/B&W Xerox, Passport photo, Lamination, Scanning, and Document upload.',
    descriptionGu: 'ઓનલાઈન ફોર્મ ભરવા, કલર/સામાન્ય ઝેરોક્ષ, પાસપોર્ટ સાઈઝ ફોટો, લેમિનેશન અને સ્કેનિંગ.',
    documentsEn: ['Bring original documents or send via WhatsApp/Email'],
    documentsGu: ['ઓરિજિનલ ડોક્યુમેન્ટ સાથે લાવો અથવા WhatsApp/ઈમેલ દ્વારા મોકલો']
  }
];
