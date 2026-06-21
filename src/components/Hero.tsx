import { siteConfig } from '../data';
import { Phone, MessageCircle, ChevronDown, CheckCircle2, ShieldCheck, Users, MapPin, Zap, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-12 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 z-0">
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-600/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-emerald-300 text-[10px] md:text-sm font-bold tracking-wider mb-4 md:mb-8 shadow-sm uppercase"
        >
          <ShieldCheck className="text-emerald-400 w-4 h-4 md:w-5 md:h-5" />
          No.1 Trusted CSC Center in Halvad
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-2 md:mb-6 leading-[1.1] md:leading-tight max-w-5xl mx-auto"
        >
          All <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Government Services</span> Under One Roof
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-sm md:text-xl text-indigo-100 font-medium mb-1.5 md:mb-4 leading-snug md:leading-relaxed"
        >
          Fast service, expert guidance, affordable charges, and trusted local support.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto text-xs md:text-lg text-emerald-300 font-medium font-gujarati mb-5 md:mb-10 leading-snug md:leading-relaxed"
        >
          ઝડપી સેવા, યોગ્ય માર્ગદર્શન, વાજબી દર અને વિશ્વસનીય સ્થાનિક સહાય. તમામ સરકારી અને ઓનલાઈન કામગીરી માટે આજે જ મુલાકાત લો.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:flex sm:flex-row flex-wrap justify-center items-center gap-1.5 md:gap-4 mb-6 md:mb-14"
        >
          <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20${encodeURIComponent(siteConfig.shopName)},%20I%20want%20to%20inquire%20about%20your%20services.`} target="_blank" rel="noopener noreferrer" 
             className="w-full sm:w-auto flex justify-center items-center gap-1.5 md:gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-3 md:px-8 py-3 md:py-4 rounded-xl text-sm sm:text-base md:text-lg font-bold transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1">
            <MessageCircle className="w-4 h-4 md:w-6 md:h-6" /> <span className="truncate">WhatsApp Now</span>
          </a>
          
          <a href={`tel:${siteConfig.phone.replace(/\\D/g,'')}`} 
             className="w-full sm:w-auto flex justify-center items-center gap-1.5 md:gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-3 md:px-8 py-3 md:py-4 rounded-xl text-sm sm:text-base md:text-lg font-bold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:-translate-y-1 border border-indigo-500">
            <Phone className="w-4 h-4 md:w-6 md:h-6" /> <span className="truncate">Call Now / કૉલ</span>
          </a>

          <a href="#about" 
             className="w-full sm:w-auto flex justify-center items-center gap-1.5 md:gap-2 bg-white text-indigo-900 hover:bg-slate-100 px-3 md:px-8 py-3 md:py-4 rounded-xl text-sm sm:text-base md:text-lg font-bold transition-all shadow-lg hover:-translate-y-1">
            <MapPin className="w-4 h-4 md:w-6 md:h-6" /> <span className="truncate">Visit Shop</span>
          </a>

          <a href="#services" 
             className="w-full sm:w-auto flex justify-center items-center gap-1.5 md:gap-2 bg-transparent border-2 border-slate-300/30 hover:bg-white/10 text-white px-3 md:px-8 py-3 md:py-4 rounded-xl text-sm sm:text-base md:text-lg font-bold transition-all hover:-translate-y-1">
             <span className="truncate">View Services</span>
          </a>
        </motion.div>

        {/* Social Proof Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 pt-4 md:pt-8 border-t border-white/10 max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-base md:text-xl font-bold text-white leading-tight">1000+</div>
              <div className="text-[10px] md:text-sm font-medium text-slate-400">Happy Customers</div>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-white/10"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-base md:text-xl font-bold text-white leading-tight">Trusted</div>
              <div className="text-[10px] md:text-sm font-medium text-slate-400">CSC Services</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-base md:text-xl font-bold text-white leading-tight">Quick</div>
              <div className="text-[10px] md:text-sm font-medium text-slate-400">Doc Processing</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
