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
          ? 'bg-white-50/95 backdrop-blur-md border-b border-white-300 shadow-sm'
          : 'bg-white-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)]">
            <img
              src="/logo-mark.svg"
              alt="BeautyChemLabs"
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0"
            />
            <span className="flex items-baseline gap-0">
              <span className="text-white-900">Beauty</span>
              <span className="text-teal-600">Chem</span>
              <span className="text-white-600 text-[10px] sm:text-sm font-normal ml-1 tracking-widest uppercase">Labs</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white-700 hover:text-teal-600 transition-colors tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 lg:ml-4 px-5 lg:px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white-50 text-sm font-semibold tracking-wider uppercase rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-600/25"
            >
              {"Zapytaj o ofert\u0119"}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white-900 p-2"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white-50/98 backdrop-blur-md border-t border-white-300">
          <div className="px-5 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-base text-white-700 hover:text-teal-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 px-6 py-3 bg-teal-600 text-white-50 text-sm font-semibold tracking-wider uppercase text-center rounded-lg"
            >
              {"Zapytaj o ofert\u0119"}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
