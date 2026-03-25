import { FlaskConical, Truck, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm text-gold-500 tracking-widest uppercase font-medium mb-3 sm:mb-4">
          01 — O nas
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {"Surowce, kt\u00F3re nap\u0119dzaj\u0105"}
              <span className="text-gold-400">{" Twoj\u0105 produkcj\u0119."}</span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-navy-300 leading-relaxed">
              {"BeautyChemLabs to Tw\u00F3j zaufany partner w dystrybucji surowc\u00F3w kosmetycznych i chemicznych. Specjalizujemy si\u0119 w dostawach hurtowych \u2014 od kilogram\u00F3w po pe\u0142ne kontenery."}
            </p>
            <p className="text-sm sm:text-base text-navy-400 leading-relaxed">
              {"Wsp\u00F3\u0142pracujemy z producentami kosmetyk\u00F3w, firmami farmaceutycznymi oraz przemys\u0142em chemicznym. Zapewniamy najwy\u017Csz\u0105 jako\u015B\u0107 surowc\u00F3w, terminowe dostawy, konkurencyjne ceny i indywidualne podej\u015Bcie do ka\u017Cdego klienta."}
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-5 sm:p-8 rounded-lg bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/20 transition-colors group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold-500/20 transition-colors">
              <FlaskConical size={20} className="text-gold-400" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
              {"Najwy\u017Csza jako\u015B\u0107"}
            </h3>
            <p className="text-sm text-navy-400 leading-relaxed">
              {"Wszystkie surowce posiadaj\u0105 certyfikaty jako\u015Bci, karty charakterystyki i pe\u0142n\u0105 dokumentacj\u0119."}
            </p>
          </div>

          <div className="p-5 sm:p-8 rounded-lg bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/20 transition-colors group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold-500/20 transition-colors">
              <Truck size={20} className="text-gold-400" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
              Sprawna logistyka
            </h3>
            <p className="text-sm text-navy-400 leading-relaxed">
              {"Szybka realizacja zam\u00F3wie\u0144 i elastyczna logistyka pozwalaj\u0105 na terminowe dostawy w ca\u0142ej Europie."}
            </p>
          </div>

          <div className="p-5 sm:p-8 rounded-lg bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/20 transition-colors group sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold-500/20 transition-colors">
              <ShieldCheck size={20} className="text-gold-400" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
              Zaufany partner
            </h3>
            <p className="text-sm text-navy-400 leading-relaxed">
              {"Dedykowany opiekun handlowy, elastyczne warunki wsp\u00F3\u0142pracy i pe\u0142ne wsparcie na ka\u017Cdym etapie."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
