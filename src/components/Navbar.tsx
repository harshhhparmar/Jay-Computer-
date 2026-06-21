import { useState, useEffect } from 'react';
import { siteConfig } from '../data';
import { Phone, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', gu: 'હોમ', href: '#home' },
    { name: 'Services', gu: 'સેવાઓ', href: '#services' },
    { name: 'Brochures', gu: 'બ્રોશર', href: '#brochures' },
    { name: 'About Us', gu: 'અમારા વિશે', href: '#about' },
    { name: 'Contact', gu: 'સંપર્ક', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-indigo-700 py-4 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo/Brand */}
            <a href="#home" className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-indigo-700' : 'text-emerald-400'}`}>
              {siteConfig.shopName}
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-semibold hover:text-emerald-300 transition-colors ${isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white'}`}
              >
                {link.name} <span className="opacity-70 text-xs ml-1 font-normal hidden lg:inline">({link.gu})</span>
              </a>
            ))}
            <a 
              href={`tel:${siteConfig.phone.replace(/\\D/g,'')}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-transform hover:scale-105 ${isScrolled ? 'bg-indigo-600 text-white' : 'bg-emerald-500 text-white'}`}
            >
              <Phone size={16} />
               Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-indigo-700' : 'text-white'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-indigo-600 border-b border-slate-100"
              >
                {link.name} <span className="text-slate-500 font-normal">| {link.gu}</span>
              </a>
            ))}
            <a 
              href={`tel:${siteConfig.phone.replace(/\\D/g,'')}`}
              className="mt-4 flex justify-center items-center gap-2 w-full mx-auto max-w-[200px] px-6 py-3 rounded-full bg-indigo-600 text-white font-bold"
            >
              <Phone size={18} />
               Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
