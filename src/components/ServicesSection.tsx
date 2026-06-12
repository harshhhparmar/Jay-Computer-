import { useState, useMemo, useEffect } from 'react';
import { services, siteConfig } from '../data';
import { getIcon } from './Icons';
import { Search } from 'lucide-react';

export const ServicesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

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

  // Get unique categories
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

  const renderServiceCard = (service: typeof services[0]) => (
    <div 
      key={service.id} 
      className="group relative bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Icon Box */}
      <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
        {getIcon(service.iconName, "w-7 h-7")}
      </div>
      
      {/* Content */}
      <div className="flex-grow">
        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full mb-3">
          {service.categoryEn}
        </span>
        <h4 className="text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-indigo-700 transition-colors">
          {service.titleEn}
        </h4>
        <h5 className="text-md font-semibold text-emerald-600 mb-3 font-gujarati">
          {service.titleGu}
        </h5>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          {service.descriptionEn}
        </p>
      </div>
      
      {/* Action Links */}
      <div className="pt-5 mt-auto border-t border-slate-100 flex flex-col gap-3">
        <a 
          href={getWhatsAppLink(service.titleEn)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackServiceClick(service.id)}
          className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white py-2.5 px-4 rounded-xl font-bold transition-colors text-sm"
        >
          {getIcon("MessageCircle", "w-4 h-4 mr-2")}
          WhatsApp Now
        </a>
        <div className="flex gap-2">
          <a 
            href="#enquiry" 
            onClick={() => {
              trackServiceClick(service.id);
              window.dispatchEvent(new CustomEvent('selectService', { detail: service.id }));
            }}
            className="flex-1 inline-flex items-center justify-center text-xs font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 py-2.5 px-3 rounded-xl transition-colors"
          >
            Enquire <span className="hidden sm:inline font-gujarati ml-1">(પૂછપરછ)</span>
          </a>
          <a 
            href="#documents" 
            onClick={() => trackServiceClick(service.id)}
            className="flex-1 inline-flex items-center justify-center text-xs font-bold bg-slate-50 text-slate-700 hover:bg-slate-100 py-2.5 px-3 rounded-xl transition-colors"
          >
            View Docs
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Our Offerings</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4">Our Services</h3>
          <p className="text-lg text-slate-600 font-medium font-gujarati">અમારી સેવાઓ - બધી જ સેવાઓ ઉત્તમ અને સચોટ માર્ગદર્શન સાથે.</p>
        </div>

        {/* Main Content Wrapper for order control */}
        <div className="flex flex-col">
          
          {/* Search Bar */}
          <div className="order-2 md:order-1 max-w-2xl w-full mx-auto mb-6 md:mb-10 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search for a service eg. 'Ration Card', 'LIC', 'RTO', 'Ayushman'..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all font-medium shadow-sm"
            />
          </div>

          {/* Categories Filter */}
          <div className="order-3 md:order-2 flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                selectedCategory === null 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Services
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Popular Services Section (Only show if no search term and no category selected) */}
          <div className="order-1 md:order-3 w-full">
            {!searchTerm && !selectedCategory && popularServices.length > 0 && (
              <div className="mb-10 md:mb-16">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <h4 className="text-xl md:text-2xl font-extrabold text-slate-900">Popular Services</h4>
                  <div className="h-px bg-slate-200 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {popularServices.map(renderServiceCard)}
                </div>
              </div>
            )}
          </div>

          {/* Services Grid */}
          <div className="order-4 w-full">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <h4 className="text-xl md:text-2xl font-extrabold text-slate-900">
                {selectedCategory ? selectedCategory : (searchTerm ? 'Search Results' : 'All Services')}
              </h4>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map(renderServiceCard)}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-700 mb-2">No services found</h4>
                <p className="text-slate-500 max-w-md mx-auto">We couldn't find any services matching your search for "{searchTerm}".</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }} 
                  className="mt-6 px-6 py-3 bg-indigo-50 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
