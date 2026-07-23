import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, PhoneCall, GraduationCap, FileText } from 'lucide-react';
import { siteConfig } from '../data';

export const DigitalGujaratScholarshipPage = () => {
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
            Digital Gujarat Scholarship
          </h1>
          <h2 className="text-xl md:text-2xl text-indigo-600 font-bold font-gujarati mb-6">
            ડિજિટલ ગુજરાત સ્કોલરશીપ - 2026-27
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Online scholarship application for school and college students in Gujarat.
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
              The <strong>Digital Gujarat Scholarship</strong> provides financial assistance for students studying in Std 11-12, College, ITI, Diploma, Degree, Medical, Pharmacy, B.Ed, PTC, and External studies. We provide complete guidance and form filling services for this scholarship.
            </p>

            <div className="bg-emerald-50 rounded-2xl p-5 sm:p-6 mb-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-900 mb-3 font-gujarati">લાયકાત ધરાવતા વિદ્યાર્થીઓ (Eligibility)</h3>
              <p className="text-emerald-800 font-gujarati font-medium">
                ધોરણ ૧૧-૧૨, કોલેજ, આઈ.ટી.આઈ., ડીપ્લોમા, ડીગ્રી, મેડીકલ, ફાર્મસી, બી.એડ, પીટીસી, એક્સ તરીકે ભણતા વિદ્યાર્થીઓ તથા અન્ય અભ્યાસ કરતા વિદ્યાર્થીઓ.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-indigo-500" />
              Required Documents (રજીસ્ટ્રેશન માટે જરૂરી ડોક્યુમેન્ટ્સ)
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                { en: "Aadhaar Card", gu: "આધાર કાર્ડ" },
                { en: "Ration Card", gu: "રેશન કાર્ડ" },
                { en: "Std 10, 12 & Last Marksheet", gu: "ધો. ૧૦, ૧૨ અને છેલ્લી માર્કશીટ" },
                { en: "School Leaving Certificate (L.C.)", gu: "એલ.સી." },
                { en: "Caste Certificate", gu: "જાતિનો દાખલો" },
                { en: "Income Certificate", gu: "આવકનો દાખલો" },
                { en: "Bank Passbook", gu: "બેંક પાસબુક" },
                { en: "Passport Size Photo", gu: "ફોટો" },
                { en: "School/College Fee Receipt", gu: "શાળા કે કોલેજની ફી ભર્યાની પાવતી" },
                { en: "Bonafide Certificate", gu: "બોનોફાઇડ", note: "Not mandatory but required if instructed by college/school (ફરજીયાત નથી પણ કોલેજ/શાળામાંથી સુચના હોય તો જરૂરી છે)" }
              ].map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-800">{doc.en}</span>
                    <span className="text-sm font-gujarati text-slate-600 block mt-0.5">{doc.gu}</span>
                    {doc.note && <p className="text-sm text-slate-500 mt-1 font-gujarati">{doc.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
            
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello, I want to apply for Digital Gujarat Scholarship.')}`}
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
