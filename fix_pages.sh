cat << 'INNER_EOF' > src/pages/ENirmanScholarshipPage.tsx
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, PhoneCall, GraduationCap, FileText, Download } from 'lucide-react';
import { siteConfig } from '../data';

export const ENirmanScholarshipPage = () => {
  return (
    <div className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 bg-indigo-100 text-indigo-600 rounded-full mb-6">
            <GraduationCap className="w-12 h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4 leading-tight">
            E-Nirman Scholarship
          </h1>
          <h2 className="text-xl md:text-2xl text-indigo-600 font-bold font-gujarati mb-6">
            ઈ-નિર્માણ શિક્ષણ સહાય યોજના (સ્કોલરશીપ)
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Education assistance for children of E-Nirman (Shramyogi) Card holders.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 mb-12"
        >
          <div className="prose prose-lg prose-indigo max-w-none text-slate-700">
            <p className="lead text-xl mb-6">
              The <strong>E-Nirman Scholarship</strong> (Shikshan Sahay Yojana) provides financial assistance for the education of the children of registered construction workers holding an E-Nirman Card in Gujarat. We can help you successfully apply for this scholarship!
            </p>

            <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-indigo-500" />
              Required Documents (Checklist):
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "E-Nirman Card (શ્રમયોગી કાર્ડ)",
                "Original Bonafide Certificate of Student (શાળા/કોલેજ/સંસ્થાનું ઓરિજનલ બોનોફાઈડ સર્ટીફિકેટ)",
                "Father's Aadhaar Card (પિતાનું આધારકાર્ડ)",
                "Student's Aadhaar Card (વિદ્યાર્થીનું આધારકાર્ડ)",
                "Bank Passbook (બેંકની પાસબુક)",
                "Previous Year Marksheet (ગતવર્ષની માર્કશીટ)",
                "Ration Card (રેશનકાર્ડ)",
                "Hostel/Institute Certificate - If living in hostel (હોસ્ટેલમાં રહેતા હોય તો)",
                "Passport size photos of student and parent (વિદ્યાર્થી અને વાલીના પાસપોર્ટ સાઈઝ ફોટા)",
                "Affidavit / Sogandnamu (સોગંદનામું)"
              ].map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 bg-blue-50 rounded-2xl p-5 sm:p-6 md:p-8 border border-blue-100">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-500 shrink-0" />
                Sample Bonafide Certificate
              </h3>
              <p className="text-blue-800 mb-6 text-sm sm:text-base">
                You must bring an original Bonafide Certificate printed on the school/college letterhead. Below is the exact Gujarati format required by the government:
              </p>
              
              <div className="bg-white p-5 sm:p-8 md:p-10 rounded-xl border border-slate-200 shadow-sm font-gujarati text-slate-800 leading-[2.5] md:leading-loose relative overflow-hidden text-sm sm:text-base">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                <h4 className="text-center font-bold text-base sm:text-lg mb-6 underline underline-offset-4">બોનોફાઇડ પ્રમાણપત્ર (સંસ્થાના લેટરપેડ ઉપર)</h4>
                
                <p className="text-justify indent-4 sm:indent-8 mb-6">
                  આથી પ્રમાણિત કરવામાં આવે છે કે શ્રી/શ્રીમતિ <span className="inline-block w-24 sm:w-32 md:w-48 border-b border-slate-500"></span> ના પુત્ર/પુત્રી. કુ. / શ્રીમતિ <span className="inline-block w-24 sm:w-32 md:w-48 border-b border-slate-500"></span> શાળા/યુનિવર્સિટી અંતર્ગતની <span className="inline-block w-24 sm:w-32 md:w-48 border-b border-slate-500"></span> સંસ્થામાં <span className="inline-block w-20 sm:w-28 md:w-32 border-b border-slate-500"></span> કોર્ષનો અભ્યાસ કરે છે. સદર સંપૂર્ણ કોર્ષ કુલ <span className="inline-block w-12 sm:w-16 border-b border-slate-500"></span> વર્ષનો છે, જે પૈકી વિદ્યાર્થી વર્ષ ૨૦૨૬/૨૭ માં <span className="inline-block w-16 sm:w-24 border-b border-slate-500"></span> વર્ષમાં અભ્યાસ કરે છે તેઓનું વાર્ષિક સત્ર શરુ થયા તારીખ <span className="inline-block w-16 sm:w-24 border-b border-slate-500"></span> ૨૦૨૬ છે. સદરહુ વિદ્યાર્થી/વિદ્યાર્થીની અગાઉના વર્ષ/ધોરણમાં નાપાસ થયેલ નથી. અત્રેની સંસ્થાને સરકારશ્રીના તારીખ <span className="inline-block w-24 sm:w-32 border-b border-slate-500"></span> ના હુકમ નંબર <span className="inline-block w-24 sm:w-32 border-b border-slate-500"></span> થી માન્યતા પ્રાપ્ત છે. વિદ્યાર્થી/વિદ્યાર્થીની દ્વારા અન્ય કોઈ સરકારી વિભાગની સમાન પ્રકારની સહાય લીધેલ નથી.
                </p>
                <p className="mb-12">
                  વિદ્યાર્થી દ્વારા કરવામાં આવતા <span className="inline-block w-24 sm:w-40 md:w-48 border-b border-slate-500"></span> કોર્સની વાર્ષિક ફી રૂ. <span className="inline-block w-20 sm:w-28 md:w-32 border-b border-slate-500"></span> છે.
                </p>
                
                <div className="text-right mt-12 pt-8">
                  <p className="border-b border-dashed border-slate-500 inline-block min-w-[200px] sm:min-w-[250px] mb-2"></p>
                  <p className="font-bold text-xs sm:text-sm">(આચાર્ય/ડીન/સંસ્થાના વડાની સહી અને સિક્કો)</p>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello, I want to apply for E-Nirman Scholarship.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-indigo-600/30 flex items-center justify-center gap-2 text-lg"
          >
            Apply via WhatsApp
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-indigo-900 font-bold rounded-full transition-all shadow-md border border-slate-200 flex items-center justify-center gap-2 text-lg"
          >
            <PhoneCall className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>

      </div>
    </div>
  );
};
INNER_EOF

cat << 'INNER_EOF' > src/pages/CertificatesPage.tsx
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, FileSignature, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data';

export const CertificatesPage = () => {
  const certificates = [
    {
      id: 'income',
      titleEn: 'Income Certificate',
      titleGu: 'આવકનો દાખલો',
      color: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-500',
      badge: 'bg-blue-100 text-blue-700',
      docs: [
        { en: "Form and Photo", gu: "ફોર્મ અને ફોટો" },
        { en: "Ration Card Copy", gu: "રેશન કાર્ડની નકલ" },
        { en: "School Leaving Certificate", gu: "સ્કુલ લીવીંગ સર્ટી" },
        { en: "Talati's Income Certificate", gu: "તલાટીનો આવકનો દાખલો" },
        { en: "Last Light Bill", gu: "છેલ્લું લાઈટ બિલ" },
        { en: "Aadhaar Card", gu: "આધારકાર્ડ" }
      ]
    },
    {
      id: 'caste',
      titleEn: 'Caste Certificate',
      titleGu: 'જાતિનો દાખલો',
      color: 'bg-emerald-50 border-emerald-100',
      iconColor: 'text-emerald-500',
      badge: 'bg-emerald-100 text-emerald-700',
      docs: [
        { en: "Form and Photo", gu: "ફોર્મ અને ફોટો" },
        { en: "Ration Card Copy", gu: "રેશન કાર્ડની નકલ" },
        { en: "School Leaving Certificate", gu: "સ્કુલ લીવીંગ સર્ટી" },
        { en: "Father/Brother/Sister's School Leaving", gu: "પિતા / ભાઈ / બહેનનું સ્કુલ લીવીંગ" },
        { en: "Last Light Bill", gu: "છેલ્લું લાઈટ બિલ" },
        { en: "Talati's Caste Certificate", gu: "તલાટીનો જાતિનો દાખલો" },
        { en: "Aadhaar Card", gu: "આધારકાર્ડ" }
      ]
    },
    {
      id: 'domicile',
      titleEn: 'Domicile Certificate',
      titleGu: 'ડોમિસાઈલ સર્ટી',
      color: 'bg-purple-50 border-purple-100',
      iconColor: 'text-purple-500',
      badge: 'bg-purple-100 text-purple-700',
      docs: [
        { en: "Form and Photo", gu: "ફોર્મ અને ફોટો" },
        { en: "Ration Card Copy", gu: "રેશન કાર્ડની નકલ" },
        { en: "School Leaving Certificate", gu: "સ્કુલ લીવીંગ સર્ટી" },
        { en: "Talati's 10-year Residence Certificate", gu: "તલાટીનો ૧૦ વર્ષનો રહેઠાણનો દાખલો" },
        { en: "Residence Affidavit (Sogandnamu)", gu: "રહેઠાણનું સોગંદનામું" },
        { en: "Last Light Bill", gu: "છેલ્લું લાઈટ બિલ" },
        { en: "Birth Certificate", gu: "જન્મનો દાખલો" },
        { en: "Police Station Certificate", gu: "પોલીસ સ્ટેનો દાખલો" },
        { en: "Aadhaar Card", gu: "આધારકાર્ડ" }
      ]
    },
    {
      id: 'ews',
      titleEn: 'EWS / Non-Creamy Layer',
      titleGu: 'EWS / નોન-ક્રીમી લેયર દાખલો',
      color: 'bg-orange-50 border-orange-100',
      iconColor: 'text-orange-500',
      badge: 'bg-orange-100 text-orange-700',
      docs: [
        { en: "Form and Photo", gu: "ફોર્મ અને ફોટો" },
        { en: "Ration Card Copy", gu: "રેશન કાર્ડની નકલ" },
        { en: "School Leaving Certificate", gu: "સ્કુલ લીવીંગ સર્ટી" },
        { en: "Income Certificate (Last 3 years for NCL)", gu: "આવકનો દાખલો (NCL માટે છેલ્લા ૩ વર્ષનો)" },
        { en: "Talati's Caste/EWS Certificate", gu: "તલાટીનો દાખલો" },
        { en: "Last Light Bill", gu: "છેલ્લું લાઈટ બિલ" },
        { en: "Aadhaar Card", gu: "આધારકાર્ડ" }
      ]
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-4 bg-indigo-100 text-indigo-600 rounded-full mb-6">
            <FileSignature className="w-12 h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4 leading-tight">
            Income, Caste, Domicile & EWS Certificates
          </h1>
          <h2 className="text-xl md:text-2xl text-indigo-600 font-bold font-gujarati mb-6">
            આવક, જાતિ, ડોમિસાઈલ અને EWS ના દાખલા - હળવદ
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Essential for Scholarships, Admissions, and Government Jobs. / સ્કોલરશિપ, એડમિશન અને સરકારી નોકરીઓ માટે જરૂરી.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-6 sm:p-8 shadow-lg border ${cert.color} bg-white flex flex-col h-full hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{cert.titleEn}</h3>
                  <h4 className="text-lg font-bold font-gujarati text-slate-700">{cert.titleGu}</h4>
                </div>
                <div className={`px-4 py-1.5 rounded-full text-sm font-bold w-fit ${cert.badge}`}>
                  Checklist
                </div>
              </div>
              
              <ul className="space-y-3 flex-grow mb-6">
                {cert.docs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-white/50">
                    <CheckCircle2 className={`w-5 h-5 ${cert.iconColor} shrink-0 mt-0.5`} />
                    <div>
                      <span className="font-medium text-slate-800 text-sm sm:text-base">{idx + 1}. {doc.en}</span>
                      <span className="text-xs sm:text-sm font-gujarati text-slate-600 block mt-0.5">{doc.gu}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-red-50 border border-red-200 rounded-2xl p-6 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h4 className="font-bold text-red-800 text-lg">Important Note / નોંધ</h4>
          </div>
          <p className="text-red-700 font-medium">
            Please bring all original documents along with their Xerox copies. / તમામ ઓરીજીનલ તથા ઝેરોક્સ ડોક્યુમેન્ટ સાથે લાવશો.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello, I need information about getting Income/Caste/Domicile/EWS certificates.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-indigo-600/30 flex items-center justify-center gap-2 text-lg"
          >
            Inquire About Documents
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/#contact";
            }}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-indigo-900 font-bold rounded-full transition-all shadow-md border border-slate-200 flex items-center justify-center gap-2 text-lg"
          >
            <MapPin className="w-5 h-5" />
            Visit Shop
          </a>
        </motion.div>

      </div>
    </div>
  );
};
INNER_EOF
