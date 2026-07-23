import { useState, useEffect } from 'react';
import { siteConfig } from '../data';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', gu: 'હોમ', href: '/#home' },
    { name: 'All Services', gu: 'બધી સેવાઓ', href: '/#services' },
    { name: 'Brochures', gu: 'બ્રોશર', href: '/#brochures' },
    { name: 'About Us', gu: 'અમારા વિશે', href: '/#about' },
    { name: 'Contact', gu: 'સંપર્ક', href: '/#contact' },
  ];

  const highlightedServices = [
    { name: 'E-Nirman Scholarship', path: '/services/e-nirman-scholarship' },
    { name: 'Manav Kalyan Yojana', path: '/services/e-kutir' },
    { name: 'Ayushman & ABHA Card', path: '/services/ayushman-abha-card' },
    { name: 'Digital Gujarat Scholarship', path: '/services/digital-gujarat-scholarship' },
    { name: 'LIC Premium Support', path: '/services/lic-premium' }
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-3' : 'bg-indigo-700 py-4 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo/Brand */}
            <Link to="/" onClick={() => handleLinkClick('/#home')} className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled || location.pathname !== '/' ? 'text-indigo-700' : 'text-emerald-400'}`}>
              {siteConfig.shopName}
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-semibold hover:text-emerald-300 transition-colors ${isScrolled || location.pathname !== '/' ? 'text-slate-700 hover:text-indigo-600' : 'text-white'}`}
              >
                Top Services <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full -left-4 w-64 pt-4 pb-2">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                    {highlightedServices.map(service => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 border-b border-slate-50 last:border-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm font-semibold hover:text-emerald-300 transition-colors ${isScrolled || location.pathname !== '/' ? 'text-slate-700 hover:text-indigo-600' : 'text-white'}`}
              >
                {link.name} <span className="opacity-70 text-xs ml-1 font-normal hidden lg:inline">({link.gu})</span>
              </Link>
            ))}
            <a 
              href={`tel:${siteConfig.phone.replace(/\D/g,'')}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-transform hover:scale-105 ${isScrolled || location.pathname !== '/' ? 'bg-indigo-600 text-white' : 'bg-emerald-500 text-white'}`}
            >
              <Phone size={16} />
               Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled || location.pathname !== '/' ? 'text-indigo-700' : 'text-white'}
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
            
            <div className="px-3 py-2 text-sm font-bold text-emerald-600 uppercase tracking-wider text-left border-b border-slate-100">
              Top Services
            </div>
            {highlightedServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-indigo-600 border-b border-slate-100 bg-indigo-50/30"
              >
                {service.name}
              </Link>
            ))}

            <div className="px-3 py-2 mt-2 text-sm font-bold text-emerald-600 uppercase tracking-wider text-left border-b border-slate-100">
              Menu
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="block px-3 py-3 text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-indigo-600 border-b border-slate-100"
              >
                {link.name} <span className="text-slate-500 font-normal">| {link.gu}</span>
              </Link>
            ))}
            <a 
              href={`tel:${siteConfig.phone.replace(/\D/g,'')}`}
              className="mt-6 flex justify-center items-center gap-2 w-full mx-auto max-w-[200px] px-6 py-3 rounded-full bg-indigo-600 text-white font-bold"
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
