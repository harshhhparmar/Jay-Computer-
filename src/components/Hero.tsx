import { siteConfig } from '../data';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-indigo-900 overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-emerald-500 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-800/60 text-emerald-300 text-sm font-bold tracking-wider mb-6 border border-indigo-500/30 shadow-sm animate-fade-in-up">
          ✓ FAST & TRUSTED SERVICE
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {siteConfig.shopName}
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-indigo-100 font-medium mb-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {siteConfig.taglineEn}
        </p>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-emerald-400 font-semibold mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {siteConfig.taglineGu}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <a fill="true" href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="w-full sm:w-auto flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            <Phone size={22} fill="currentColor" /> Call Now / કૉલ કરો
          </a>
          
          <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20${encodeURIComponent(siteConfig.shopName)},%20I%20want%20to%20know%20more%20about%20your%20services.`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            <MessageCircle size={22} fill="currentColor" /> WhatsApp
          </a>

          <a href="#services" className="w-full sm:w-auto flex justify-center items-center gap-2 bg-transparent border-2 border-indigo-400 hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
             View Services
          </a>
        </div>
      </div>
      
      {/* Scroll Down chevron */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-indigo-300">
        <a href="#services" aria-label="Scroll to services">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};
