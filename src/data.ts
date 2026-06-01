import { SiteConfig, Service } from './types';

export const siteConfig: SiteConfig = {
  shopName: "Jay Computer – CSC Center",
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
  aboutTextEn: "Jay Computer provides trusted, quick, and affordable computer services, CSC services, government documentation, and online application support to the local community. Our goal is to make digital services accessible to everyone with transparency and speed.",
  aboutTextGu: "જય કોમ્પ્યુટર સ્થાનિક લોકોને વિશ્વસનીય, ઝડપી અને સસ્તી કોમ્પ્યુટર સેવાઓ, CSC સેવાઓ, સરકારી દસ્તાવેજો અને ઓનલાઈન એપ્લિકેશન સપોર્ટ પૂરો પાડે છે. અમારો ધ્યેય બધા માટે ડિજિટલ સેવાઓને સરળ અને સુલભ બનાવવાનો છે.",
};

export const services: Service[] = [
  {
    id: 'pan-card',
    categoryEn: 'Identity Cards',
    categoryGu: 'ઓળખ કાર્ડ',
    titleEn: 'PAN Card Services',
    titleGu: 'પાન કાર્ડ સેવાઓ',
    iconName: 'CreditCard',
    descriptionEn: 'New PAN card application, corrections in existing PAN, and Aadhaar-PAN linking services.',
    descriptionGu: 'નવું પાન કાર્ડ મેળવવા, જૂના પાનમાં સુધારા કરવા અને આધાર-પાન લિંક કરવા.',
    documentsEn: ['Aadhaar Card', '2 Passport Size Photos', 'Birth Proof (For minors)'],
    documentsGu: ['આધાર કાર્ડ', '૨ પાસપોર્ટ સાઈઝ ફોટો', 'જન્મનો દાખલો (સગીર માટે)']
  },
  {
    id: 'ration-card',
    categoryEn: 'Government Documents',
    categoryGu: 'સરકારી દસ્તાવેજી સેવાઓ',
    titleEn: 'Ration Card Support',
    titleGu: 'રેશન કાર્ડ સંબંધિત કામગીરી',
    iconName: 'FileText',
    descriptionEn: 'Apply for a new ration card, add/remove names, and correct existing details.',
    descriptionGu: 'નવું રેશન કાર્ડ કઢાવવા, નામ ઉમેરવા/કમી કરવા, અને જરૂરી સુધારા કરવા.',
    documentsEn: ['Old Ration Card (if any)', 'Aadhaar Cards of all members', 'Bank Passbook', 'Light Bill'],
    documentsGu: ['જૂનું રેશન કાર્ડ', 'બધા સભ્યોના આધાર કાર્ડ', 'બેંક પાસબુક', 'લાઈટ બિલ']
  },
  {
    id: 'aadhaar-services',
    categoryEn: 'Identity Cards',
    categoryGu: 'ઓળખ કાર્ડ',
    titleEn: 'Aadhaar Card Services',
    titleGu: 'આધાર કાર્ડ સેવાઓ',
    iconName: 'Fingerprint',
    descriptionEn: 'Aadhaar printouts, PVC card orders, and appointment scheduling for updates.',
    descriptionGu: 'આધાર કાર્ડની પ્રિન્ટ, PVC કાર્ડ ઓર્ડર, અને સુધારા માટે એપોઇન્ટમેન્ટ બુકિંગ.',
    documentsEn: ['Aadhaar Number / Enrolment ID', 'Registered Mobile Number'],
    documentsGu: ['આધાર નંબર / નોંધણી નંબર', 'રજીસ્ટર્ડ મોબાઈલ નંબર']
  },
  {
    id: 'election-card',
    categoryEn: 'Identity Cards',
    categoryGu: 'ઓળખ કાર્ડ',
    titleEn: 'Election Card (Voter ID)',
    titleGu: 'ચૂંટણી કાર્ડ',
    iconName: 'IdCard',
    descriptionEn: 'Voter ID card application, shifting address, and printing lost cards.',
    descriptionGu: 'નવું ચૂંટણી કાર્ડ, સરનામું બદલવા, અને ખોવાયેલ ચૂંટણી કાર્ડ પ્રિન્ટ કરવા.',
    documentsEn: ['Aadhaar Card', 'Passport Size Photo', 'Age declaration (if required)'],
    documentsGu: ['આધાર કાર્ડ', 'પાસપોર્ટ સાઈઝ ફોટો', 'ઉંમરનો પુરાવો']
  },
  {
    id: 'certificates',
    categoryEn: 'Certificates',
    categoryGu: 'પ્રમાણપત્રો',
    titleEn: 'Income, Caste & Residence Certificates',
    titleGu: 'આવક, જાતિ અને રહેઠાણના દાખલા',
    iconName: 'Award',
    descriptionEn: 'Get officially recognized income certificates, caste certificates, and domicile documents.',
    descriptionGu: 'આવકના દાખલા, જાતિના દાખલા અને રહેઠાણના દાખલા (ડોમિસાઈલ) કઢાવી આપવા.',
    documentsEn: ['Aadhaar Card', 'Ration Card', 'Talati Signature (if required)', 'Light Bill'],
    documentsGu: ['આધાર કાર્ડ', 'રેશન કાર્ડ', 'તલાટીની સહી (જો જરૂરી હોય)', 'લાઈટ બિલ']
  },
  {
    id: 'ayushman-card',
    categoryEn: 'Health & Welfare',
    categoryGu: 'આરોગ્ય અને કલ્યાણ',
    titleEn: 'Ayushman Bharat Card',
    titleGu: 'આયુષ્માન ભારત કાર્ડ (PMJAY)',
    iconName: 'HeartPulse',
    descriptionEn: 'Apply and print Ayushman Health cards for eligibility towards free medical treatments.',
    descriptionGu: 'મફત તબીબી સારવાર માટે આયુષ્માન હેલ્થ કાર્ડ કઢાવવા અને પ્રિન્ટ કરવા.',
    documentsEn: ['Aadhaar Card', 'Ration Card with Name inside', 'Mobile Number'],
    documentsGu: ['આધાર કાર્ડ', 'રેશન કાર્ડ (જેમાં નામ હોય)', 'મોબાઈલ નંબર']
  },
  {
    id: 'scholarship',
    categoryEn: 'Online Applications',
    categoryGu: 'ઓનલાઈન અરજીઓ',
    titleEn: 'Scholarship Forms',
    titleGu: 'સ્કોલરશીપ ફોર્મ',
    iconName: 'GraduationCap',
    descriptionEn: 'Assistance in filling Digital Gujarat, NMMS, and central portal scholarship forms.',
    descriptionGu: 'ડિજિટલ ગુજરાત, NMMS, અને કેન્દ્રીય પોર્ટલના સ્કોલરશીપ ફોર્મ ભરવા.',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Fees Receipt', 'Income Certificate', 'Last Marksheet'],
    documentsGu: ['આધાર કાર્ડ', 'બેંક પાસબુક', 'ફીની પહોંચ', 'આવકનો દાખલો', 'છેલ્લી માર્કશીટ']
  },
  {
    id: 'insurance-lic',
    categoryEn: 'Finance & Insurance',
    categoryGu: 'નાણાં અને વીમો',
    titleEn: 'LIC & Vehicle Insurance',
    titleGu: 'LIC અને વાહનનો વીમો',
    iconName: 'ShieldCheck',
    descriptionEn: 'Two-wheeler, four-wheeler insurance, LIC premium collection, and new policy support.',
    descriptionGu: 'ટુ-વ્હીલર, ફોર-વ્હીલરનો વીમો, LIC પ્રીમિયમ ભરવા, અને નવી પોલિસી માટે સહાય.',
    documentsEn: ['RC Book (For vehicles)', 'Previous Policy Copy', 'Aadhaar Card'],
    documentsGu: ['RC બુક (વાહન માટે)', 'જૂની પોલિસીની નકલ', 'આધાર કાર્ડ']
  },
  {
    id: 'rto-services',
    categoryEn: 'RTO Services',
    categoryGu: 'RTO સેવાઓ',
    titleEn: 'RTO Online Appointments',
    titleGu: 'RTO લાયસન્સ અને ઓનલાઈન એપોઇન્ટમેન્ટ',
    iconName: 'Car',
    descriptionEn: 'Driving license application, learning license mock tests, and RC related forms.',
    descriptionGu: 'ડ્રાઇવિંગ લાયસન્સ માટેની અરજી, લર્નિંગ લાયસન્સ મોક ટેસ્ટ અને RC સંબંધિત ફોર્મ.',
    documentsEn: ['Aadhaar Card', 'Medical Certificate (for age above 40)', 'Passport Photo'],
    documentsGu: ['આધાર કાર્ડ', 'મેડિકલ સર્ટિફિકેટ (40 વર્ષથી વધુ ઉંમર માટે)', 'પાસપોર્ટ ફોટો']
  },
  {
    id: 'printing-xerox',
    categoryEn: 'Printing & Xerox',
    categoryGu: 'પ્રિન્ટિંગ અને ઝેરોક્ષ',
    titleEn: 'Printing, Xerox & Lamination',
    titleGu: 'પ્રિન્ટિંગ, ઝેરોક્ષ અને લેમિનેશન',
    iconName: 'Printer',
    descriptionEn: 'High quality color/B&W printing, photocopying, document scanning, and lamination.',
    descriptionGu: 'ઉચ્ચ ગુણવત્તાનું કલર/બ્લેક એન્ડ વ્હાઇટ પ્રિન્ટિંગ, ઝેરોક્ષ, સ્કેનિંગ અને લેમિનેશન.',
    documentsEn: ['Bring original documents or send via WhatsApp/Email'],
    documentsGu: ['ઓરિજિનલ ડોક્યુમેન્ટ સાથે લાવો અથવા WhatsApp/ઈમેલ દ્વારા મોકલો']
  },
  {
    id: 'welfare-schemes',
    categoryEn: 'Health & Welfare',
    categoryGu: 'આરોગ્ય અને કલ્યાણ',
    titleEn: 'Farmer, Widow & Senior Citizen Schemes',
    titleGu: 'ખેડૂત, વિધવા અને સિનિયર સિટીઝન સહાય',
    iconName: 'Users',
    descriptionEn: 'PM Kisan Samman Nidhi, Widow Pension Scheme, and Senior Citizen certificates.',
    descriptionGu: 'પીએમ કિસાન સન્માન નિધિ, વિધવા સહાય યોજના અને સિનિયર સિટીઝનના દાખલા.',
    documentsEn: ['Aadhaar Card', 'Ration Card', 'Bank Passbook', 'Relevant Proof (Death cert/Age proof)'],
    documentsGu: ['આધાર કાર્ડ', 'રેશન કાર્ડ', 'બેંક પાસબુક', 'જરૂરી પુરાવા (મરણનો દાખલો/ઉંમરનો પુરાવો)']
  }
];
