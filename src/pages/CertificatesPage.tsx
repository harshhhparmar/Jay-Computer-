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
