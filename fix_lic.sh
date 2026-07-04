cat << 'INNER_EOF' > src/pages/LICServicesPage.tsx
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, PhoneCall, CheckCircle2, TrendingUp } from 'lucide-react';
import { siteConfig } from '../data';

export const LICServicesPage = () => {
  return (
    <div className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 bg-yellow-100 text-yellow-600 rounded-full mb-6">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4 leading-tight">
            LIC Premium Payment & Services
          </h1>
          <h2 className="text-xl md:text-2xl text-yellow-600 font-bold font-gujarati mb-6">
            LIC પ્રીમિયમ ચુકવણી અને સેવાઓ - હળવદ
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Authorized LIC Premium Collection Point at Jay Computer. / જય કોમ્પ્યુટર ખાતે અધિકૃત LIC પ્રીમિયમ કલેક્શન પોઇન્ટ.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 mb-12"
        >
          <div className="prose prose-lg prose-indigo max-w-none text-slate-700">
            <p className="lead text-xl mb-8">
              Pay your LIC premiums safely and instantly. Avoid standing in long queues and get instant computerized receipts for all your life insurance policies. / તમારા LIC પ્રીમિયમ સુરક્ષિત અને તરત જ ચૂકવો. લાંબી લાઈનોમાં ઉભા રહેવાનું ટાળો અને તમારી તમામ જીવન વીમા પોલિસી માટે તાત્કાલિક કોમ્પ્યુટરાઈઝ્ડ રસીદ મેળવો.
            </p>
            
            <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-yellow-500" />
              Services Offered / ઉપલબ્ધ સેવાઓ:
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                { en: "Instant Premium Payment with Receipt", gu: "રસીદ સાથે તાત્કાલિક પ્રીમિયમ ચુકવણી" },
                { en: "Policy Status Checking", gu: "પોલિસીનું સ્ટેટસ ચેક કરવું" },
                { en: "Revival of Lapsed Policies (Late Fee Calculation)", gu: "બંધ પોલિસી ચાલુ કરવી (લેટ ફી ગણતરી)" },
                { en: "New LIC Policy Consultation", gu: "નવી LIC પોલિસી માટે માર્ગદર્શન" }
              ].map((service, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-800">{service.en}</span>
                    <span className="text-sm font-gujarati text-slate-600 block mt-0.5">{service.gu}</span>
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
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello, I want to pay my LIC Premium / Check Policy Status.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center gap-2 text-lg"
          >
            Check Status on WhatsApp
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
