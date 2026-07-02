import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, PhoneCall, Shield } from 'lucide-react';
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
            <Shield className="w-12 h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4 leading-tight">
            Authorized LIC Premium Collection & Support Center in Halvad
          </h1>
          <h2 className="text-xl md:text-2xl text-yellow-600 font-bold font-gujarati mb-6">
            LIC પ્રીમિયમ અને પોલિસી સેવાઓ - હળવદ
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Pay your premiums instantly and keep your family protected.
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
              Forget traveling far to pay your LIC premiums. Visit Jay Computer on Bus Station Road for instant premium payment, policy status checks, and new policy guidance. We provide official receipts and ensure your policy never lapses.
            </p>
            
            <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-yellow-500" />
              Services Offered:
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Instant Premium Payment with Receipt",
                "Policy Maturity/Claim Guidance",
                "New Policy Consultation",
                "Loan against Policy Information"
              ].map((service, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{service}</span>
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
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello, I want to check my LIC policy status or pay a premium.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center gap-2 text-lg"
          >
            Check My Policy Status
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
