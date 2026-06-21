import { useState, useMemo, useEffect } from 'react';
import { services, siteConfig } from '../data';
import { getIcon } from './Icons';
import { Search, MapPin, ChevronDown, ChevronUp, FileText, ShieldCheck, Shield, IdCard, GraduationCap, FileSignature, Landmark, Banknote, CarFront, Calculator, Users, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';

const categoryIcons: Record<string, any> = {
  'LIC Services': ShieldCheck,
  'Insurance Services': Shield,
  'Government Schemes & Cards': IdCard,
  'Student / Labour / Scholarship': GraduationCap,
  'Government Documents': FileSignature,
  'SBI / Banking Services': Landmark,
  'Loan Services': Banknote,
  'RTO Services': CarFront,
  'Tax & Finance': Calculator,
  'CSC Services': Users
};

const ServiceSkeleton = () => (
  <div className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-full animate-pulse">
    <div className="flex items-start gap-4 mb-3 md:mb-4">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-200 rounded-2xl shrink-0"></div>
      <div className="pt-1 flex-1">
        <div className="h-5 bg-slate-200 rounded-full w-3/4 mb-2.5"></div>
        <div className="h-3.5 bg-slate-100 rounded-full w-1/2"></div>
      </div>
    </div>
    
    <div className="space-y-2 mb-6 flex-grow mt-2">
      <div className="h-3 bg-slate-100 rounded-full w-full"></div>
      <div className="h-3 bg-slate-100 rounded-full w-5/6"></div>
      <div className="h-3 bg-slate-100 rounded-full w-4/6"></div>
    </div>
    
    <div className="pt-4 border-t border-slate-100 flex gap-2 sm:gap-3 mt-auto">
      <div className="h-10 md:h-11 bg-slate-100 rounded-xl flex-1"></div>
      <div className="h-10 md:h-11 bg-slate-100 rounded-xl flex-1"></div>
    </div>
  </div>
);

export const ServicesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  useEffect(() => {

    try {
      const stored = localStorage.getItem('jayComputerServiceClicks');
      if (stored) {
        setClickCounts(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading click stats', e);
    }
  }, []);

  const trackServiceClick = (serviceId: string) => {
    setClickCounts((prev) => {
      const newCounts = { ...prev, [serviceId]: (prev[serviceId] || 0) + 1 };
      localStorage.setItem('jayComputerServiceClicks', JSON.stringify(newCounts));
      return newCounts;
    });
  };

  const categories = useMemo(() => {
    const cats = new Set(services.map(s => s.categoryEn));
    return Array.from(cats);
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesSearch = 
      service.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.titleGu.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.descriptionEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.categoryEn.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? service.categoryEn === selectedCategory : true;

    return matchesSearch && matchesCategory;
  });

  const popularServices = useMemo(() => {
    return [...services]
      .map(service => {
        const baseScore = service.popular ? 5 : 0;
        const clicks = clickCounts[service.id] || 0;
        return {
          ...service,
          popularityScore: baseScore + clicks
        };
      })
      .sort((a, b) => b.popularityScore - a.popularityScore)
      .slice(0, 8);
  }, [clickCounts]);

  const getWhatsAppLink = (serviceName: string) => {
    const message = `Hello Jay Computer, I want help regarding ${serviceName}. Please share details.`;
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  };

const ServiceCard = ({ 
  service, 
  trackServiceClick, 
  getWhatsAppLink 
}: { 
  service: typeof services[0];
  trackServiceClick: (id: string) => void;
  getWhatsAppLink: (name: string) => string;
}) => {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div 
      className="group bg-white rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-start gap-4 mb-3 md:mb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
          {getIcon(service.iconName, "w-6 h-6 md:w-7 md:h-7")}
        </div>
        <div className="pt-1">
          <h4 className="text-base md:text-lg font-bold text-slate-800 leading-tight mb-1 group-hover:text-indigo-700 transition-colors">
            {service.titleEn}
          </h4>
          <h5 className="text-xs md:text-sm font-semibold text-emerald-600 font-gujarati">
            {service.titleGu}
          </h5>
        </div>
      </div>
      
      <p className="text-xs md:text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed flex-grow font-medium">
        {service.descriptionEn}
      </p>

      {/* Docs Dropdown */}
      {service.documentsEn && service.documentsEn.length > 0 && (
        <div className="mb-5">
          <button 
            onClick={(e) => { e.preventDefault(); setShowDocs(!showDocs); }}
            className="w-full flex items-center justify-between bg-slate-50 hover:bg-indigo-50 px-3 py-2.5 rounded-xl transition-colors border border-slate-100/60"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />
              <span className="text-xs md:text-sm font-semibold text-slate-700">Required Documents</span>
            </div>
            {showDocs ? <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-slate-500" /> : <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-slate-500" />}
          </button>
          
          {showDocs && (
            <div className="mt-2 bg-slate-50/80 rounded-xl p-3 border border-slate-100 animate-in slide-in-from-top-2 duration-300">
              <ul className="space-y-2.5">
                {service.documentsEn.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800 leading-snug">{doc}</p>
                      <p className="text-[10px] text-slate-500 font-gujarati mt-0.5">{service.documentsGu?.[idx]}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      
      <div className="pt-4 border-t border-slate-100 flex gap-2 sm:gap-3 mt-auto">
        <a 
          href={getWhatsAppLink(service.titleEn)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackServiceClick(service.id)}
          className="flex-1 inline-flex items-center justify-center bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white py-3 md:py-2.5 px-2 rounded-xl transition-all duration-300 text-xs md:text-sm font-bold shadow-sm"
        >
          WhatsApp
        </a>
        <a 
          href="#enquiry" 
          onClick={() => {
            trackServiceClick(service.id);
            window.dispatchEvent(new CustomEvent('selectService', { detail: service.id }));
          }}
          className="flex-1 inline-flex items-center justify-center bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white py-3 md:py-2.5 px-2 rounded-xl transition-all duration-300 text-xs md:text-sm font-bold shadow-sm"
        >
          Enquire
        </a>
      </div>
    </div>
  );
};

  return (
    <section id="services" className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Our Offerings</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4">Our Services</h3>
          <p className="text-lg text-slate-600 font-gujarati font-medium">અમારી સેવાઓ - બધી જ સેવાઓ ઉત્તમ અને સચોટ માર્ગદર્શન સાથે અહીંથી મળી રહેશે.</p>
        </div>

        <div className="flex flex-col">
          
          {/* Search Bar */}
          <div className="order-2 md:order-1 max-w-xl w-full mx-auto mb-10 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search services..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl bg-white text-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm"
            />
          </div>

          {/* Categories Filter */}
          <div className="order-3 md:order-2 flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
                selectedCategory === null 
                  ? 'bg-indigo-600 text-white shadow-indigo-600/20 scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:text-indigo-600'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              All Services
            </button>
            {categories.map(cat => {
              const Icon = categoryIcons[cat] || LayoutGrid;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
                    selectedCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-indigo-600/20 scale-105' 
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:text-indigo-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="order-1 md:order-3 w-full">
            {!searchTerm && !selectedCategory && popularServices.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px bg-slate-200 flex-grow max-w-[100px]"></div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-800 text-center">🏆 Frequently Used Services</h4>
                  <div className="h-px bg-slate-200 flex-grow max-w-[100px]"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {isLoading ? (
                    Array.from({ length: 4 }).map((_, i) => <ServiceSkeleton key={i} />)
                  ) : (
                    popularServices.map(service => (
                      <ServiceCard 
                        key={service.id}
                        service={service}
                        trackServiceClick={trackServiceClick}
                        getWhatsAppLink={getWhatsAppLink}
                      />
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="order-4 w-full">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-slate-200 flex-grow max-w-[100px]"></div>
              <h4 className="text-xl md:text-2xl font-bold text-slate-800 text-center">
                {selectedCategory ? `${selectedCategory} category` : (searchTerm ? 'Search Results' : 'Explore All Services')}
              </h4>
              <div className="h-px bg-slate-200 flex-grow max-w-[100px]"></div>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {Array.from({ length: 8 }).map((_, i) => <ServiceSkeleton key={i} />)}
              </div>
            ) : filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {filteredServices.map(service => (
                  <ServiceCard 
                    key={service.id}
                    service={service}
                    trackServiceClick={trackServiceClick}
                    getWhatsAppLink={getWhatsAppLink}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 max-w-2xl mx-auto shadow-sm">
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-10 w-10 text-slate-400" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">No specific services found</h4>
                <p className="text-slate-500 mb-6 font-medium">We couldn't find a direct match for "{searchTerm}".</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }} 
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-600/20"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
