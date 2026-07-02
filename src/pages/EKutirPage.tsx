import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, PhoneCall, Briefcase, Wrench } from 'lucide-react';
import { siteConfig } from '../data';

export const EKutirPage = () => {
  return (
    <div className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 bg-orange-100 text-orange-600 rounded-full mb-6">
            <Briefcase className="w-12 h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4 leading-tight">
            E-Kutir / Manav Garima Yojana Tool-Kits
          </h1>
          <h2 className="text-xl md:text-2xl text-orange-600 font-bold font-gujarati mb-6">
            માનવ ગરિમા યોજના (E-Kutir) - સ્વરોજગાર ટૂલકિટ સહાય
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Start your own business with free government tool-kits for 10+ traditional trades.
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
              <strong>Manav Garima Yojana</strong> (E-Kutir) is a Government of Gujarat initiative to help marginalized individuals become self-employed by providing free business tool-kits for various small trades. We at Jay Computer will help you apply seamlessly!
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-xl">
              <p className="text-red-700 font-bold m-0 flex items-center gap-2">
                <span className="animate-pulse">⚠️</span>
                Last Date to Apply: <span className="underline decoration-2 underline-offset-4">31st July 2026</span>
              </p>
            </div>

            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Eligibility Criteria:</h3>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li><strong>Residency:</strong> Must be a native of Gujarat.</li>
              <li><strong>Age Limit:</strong> Must be between 18 and 60 years old.</li>
              <li><strong>Category:</strong> SC, Economically Backward Classes (EBC), and Minority communities.</li>
              <li><strong>Income Limits:</strong> Up to ₹6,00,000 annually (No limit for Most Backward SC).</li>
              <li><strong>Condition:</strong> Family must not have received benefits under this scheme previously.</li>
            </ul>

            <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <Wrench className="w-6 h-6 text-orange-500" />
              Supported Trades & Tool-Kits:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Carpentry and Blacksmithing",
                "Masonry and Centering work",
                "Tailoring and Embroidery",
                "Plumbing and Beauty Parlor",
                "Vehicle Servicing & Repairing",
                "Flour Mill & Masala Mill",
                "Mobile & Appliance Repair",
                "Pottery & Street Vending",
                "Food preparation (Pickles, Snacks)"
              ].map((trade, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="font-medium text-sm">{trade}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-orange-500" />
              Required Documents (Checklist):
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                { title: "Aadhar Card and Ration Card" },
                { title: "Residence Proof (Electricity Bill, Rent Agreement, or Voter ID)" },
                { title: "Caste Certificate and Annual Income Certificate" },
                { title: "Bank Passbook & Passport Size Photo" },
                { title: "Vocational/Trade Training Certificate (If any)" },
                { 
                  title: "E-Shram Card",
                  note: "To make an E-Shram Card, you need: Aadhar card, Mobile Number Linked with Aadhar, Bank Account."
                },
                { title: "Self-declaration" }
              ].map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{doc.title}</span>
                    {doc.note && <p className="text-sm text-slate-500 mt-1">{doc.note}</p>}
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
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello, I want to apply for E-Kutir / Manav Garima Yojana Tool-kit.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 text-lg"
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
