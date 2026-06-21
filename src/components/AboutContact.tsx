import { siteConfig } from '../data';
import { Phone, Mail, MapPin, Clock, Info } from 'lucide-react';

export const AboutContact = () => {
  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          {/* About Us Content */}
          <div id="about">
            <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4">Trusted local partner for all services.</h3>
            
            <div className="mb-6 space-y-1">
              <h1 className="text-lg font-bold text-slate-800">CSC Services in Halvad</h1>
              <h2 className="text-base font-semibold text-slate-700">Government Document Services</h2>
              <h2 className="text-sm font-medium text-slate-600">RTO, LIC, PAN Card, Ration Card and Online Form Services</h2>
            </div>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              {siteConfig.aboutTextEn}
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed font-gujarati bg-white p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm mb-8">
              {siteConfig.aboutTextGu}
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-col sm:flex-row gap-4">
               <a href={`tel:${siteConfig.phone.replace(/\\D/g,'')}`} className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                 <Phone size={18} /> Call us today
               </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Contact Details</h3>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-full text-indigo-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Number</h4>
                  <p className="font-bold text-lg text-slate-900">{siteConfig.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-full text-indigo-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</h4>
                  <p className="font-bold text-lg text-slate-900">{siteConfig.email}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-full text-indigo-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="font-bold text-slate-900 leading-tight mb-1">{siteConfig.addressEn}</p>
                  <p className="text-sm text-slate-600 font-gujarati">{siteConfig.addressGu}</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-amber-50 p-3 rounded-full text-amber-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Working Hours</h4>
                  <p className="font-bold text-slate-900 leading-tight mb-1">{siteConfig.workingHoursEn}</p>
                  <p className="text-sm text-slate-600 font-gujarati">{siteConfig.workingHoursGu}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
