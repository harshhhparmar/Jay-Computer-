import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data';

export const WhatsAppButton = () => {
  const greeting = `Hello ${siteConfig.shopName}, I need help with some services.`;
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(greeting)}`;

  return (
    <a 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20b858] text-white p-4 rounded-full shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Need help? Chat with us!
        {/* Little triangle pointer */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-slate-900"></span>
      </span>
    </a>
  );
};
