import { siteConfig } from '../data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t-4 border-indigo-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
              {siteConfig.shopName}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Your trusted partner for all government documents, certificates, and digital services in the community. Quick, transparent, and reliable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#brochures" className="text-slate-400 hover:text-emerald-400 transition-colors">Brochures</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact Information</a></li>
            </ul>
          </div>

          {/* Top Services */}
          <div className="md:col-span-4">
             <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4">Popular Services</h3>
             <ul className="space-y-3">
              <li className="text-slate-400">PAN Card & Aadhaar Updates</li>
              <li className="text-slate-400">Ration Card & Election Card</li>
              <li className="text-slate-400">Income & Caste Certificates</li>
              <li className="text-slate-400">Ayushman Card</li>
              <li className="text-slate-400">Printing & Lamination</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {currentYear} {siteConfig.shopName}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 font-medium mt-2 md:mt-0">
             Designed for Local Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};
