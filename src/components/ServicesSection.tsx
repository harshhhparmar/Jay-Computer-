import { useState } from 'react';
import { services } from '../data';
import { getIcon } from './Icons';
import { Search } from 'lucide-react';

export const ServicesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter((service) => 
    service.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.titleGu.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.descriptionEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.categoryEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Our Offerings</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4">Our Services</h3>
          <p className="text-lg text-slate-600 font-medium">અમારી સેવાઓ - Everything you need under one roof.</p>
        </div>

        {/* Search/Filter Bar */}
        <div className="max-w-lg mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search for a service / સેવા શોધો..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors shadow-sm"
          />
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {getIcon(service.iconName, "w-7 h-7")}
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-indigo-700 transition-colors">
                    {service.titleEn}
                  </h4>
                  <h5 className="text-md font-semibold text-emerald-600 mb-3 font-gujarati">
                    {service.titleGu}
                  </h5>
                  <p className="text-sm text-slate-600 mb-2">
                    {service.descriptionEn}
                  </p>
                </div>
                
                {/* Action Link -> Goes to enquiry form */}
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <a 
                    href="#enquiry" 
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('selectService', { detail: service.id }));
                    }}
                    className="inline-flex items-center text-sm font-bold text-indigo-600 group-hover:text-emerald-600 transition-colors"
                  >
                    Enquire Now <span className="ml-1 opacity-60 text-xs">(પૂછપરછ)</span>
                    {getIcon("ChevronRight", "w-4 h-4 ml-1")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <h4 className="text-xl font-bold text-slate-700 mb-2">No services found</h4>
            <p className="text-slate-500">Try adjusting your search terms.</p>
            <button 
              onClick={() => setSearchTerm('')} 
              className="mt-4 text-indigo-600 font-bold hover:underline"
            >
              View all services
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
