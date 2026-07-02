import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, FileSignature } from 'lucide-react';
import { siteConfig } from '../data';

export const CertificatesPage = () => {
  return (
    <div className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 text-blue-600 rounded-full mb-6">
            <FileSignature className="w-12 h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4 leading-tight">
            Income, Caste & EWS Certificate Assistance in Halvad
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-bold font-gujarati mb-6">
            આવક, જાતિ અને EWS ના દાખલા મેળવો - હળવદ
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Essential for Scholarships, Admissions, and Government Jobs.
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
              At Jay Computer, we specialize in helping students and professionals get their government certificates quickly. Whether you need an Income Certificate for a scholarship or a Caste/EWS certificate for job applications, we provide expert guidance on documentation to ensure 100% approval.
            </p>
            
            <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <FileSignature className="w-6 h-6 text-blue-500" />
              Required Documents (Checklist):
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Aadhaar Card & Ration Card",
                "School Leaving Certificate (LC)",
                "Property Tax Receipt / Light Bill",
                "Talati's Report (for Income Certificate)"
              ].map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{doc}</span>
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
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello, I need information about getting Income/Caste/EWS certificates.')}`}
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
