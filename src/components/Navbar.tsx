import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'O nas' },
    { href: '#products', label: 'Produkty' },
    { href: '#why-us', label: 'Dlaczego my' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-navy-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0 text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)]">
            <span className="text-white">Beauty</span>
            <span className="text-gold-400">Chem</span>
            <span className="text-navy-300 text-[10px] sm:text-sm font-normal ml-1 tracking-widest uppercase">Labs</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-200 hover:text-gold-400 transition-colors tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 lg:ml-4 px-5 lg:px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/25"
            >
              {"Zapytaj o ofert\u0119"}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-md border-t border-navy-800/50">
          <div className="px-5 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-base text-navy-200 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 px-6 py-3 bg-gold-500 text-navy-950 text-sm font-semibold tracking-wider uppercase text-center rounded-sm"
            >
              {"Zapytaj o ofert\u0119"}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
