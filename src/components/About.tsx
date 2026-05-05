import { Truck, ShieldCheck, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-white-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm text-teal-600 tracking-widest uppercase font-medium mb-3 sm:mb-4">
          01 — O nas
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white-900 leading-tight">
              {"Surowce, które napędzają"}
              <span className="text-teal-600">{" Twoją produkcję."}</span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-white-700 leading-relaxed">
              {"BeautyChemLabs to Twój zaufany partner w dystrybucji surowców kosmetycznych i chemicznych. Specjalizujemy się w dostawach hurtowych — od kilogramów po pełne kontenery."}
            </p>
            <p className="text-sm sm:text-base text-white-600 leading-relaxed">
              {"Współpracujemy z producentami kosmetyków, firmami farmaceutycznymi oraz przemysłem chemicznym. Zapewniamy najwyższą jakość surowców, terminowe dostawy, konkurencyjne ceny i indywidualne podejście do każdego klienta."}
            </p>

            {/* Certifications Section */}
            <div className="pt-4 border-t border-white-300">
              <p className="text-xs sm:text-sm text-white-600 font-semibold uppercase tracking-wide mb-3">Certyfikacja:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-teal-100 text-teal-700 text-xs sm:text-sm font-semibold rounded-full">✓ REACH</span>
                <span className="px-3 py-1.5 bg-teal-100 text-teal-700 text-xs sm:text-sm font-semibold rounded-full">✓ HACCP</span>
                <span className="px-3 py-1.5 bg-teal-100 text-teal-700 text-xs sm:text-sm font-semibold rounded-full">✓ ISO 9001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-5 sm:p-8 rounded-lg bg-white-100 border border-white-300 hover:border-teal-500 transition-colors group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-teal-200 transition-colors">
              <CheckCircle size={20} className="text-teal-600" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-white-900 mb-2 sm:mb-3">
              {"Najwyższa jakość"}
            </h3>
            <p className="text-sm text-white-700 leading-relaxed">
              {"Wszystkie surowce posiadają certyfikaty jakości, karty charakterystyki i pełną dokumentację."}
            </p>
          </div>

          <div className="p-5 sm:p-8 rounded-lg bg-white-100 border border-white-300 hover:border-teal-500 transition-colors group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-teal-200 transition-colors">
              <Truck size={20} className="text-teal-600" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-white-900 mb-2 sm:mb-3">
              Sprawna logistyka
            </h3>
            <p className="text-sm text-white-700 leading-relaxed">
              {"Szybka realizacja zamówień i elastyczna logistyka pozwalają na terminowe dostawy w całej Europie."}
            </p>
          </div>

          <div className="p-5 sm:p-8 rounded-lg bg-white-100 border border-white-300 hover:border-teal-500 transition-colors group sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-teal-200 transition-colors">
              <ShieldCheck size={20} className="text-teal-600" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-white-900 mb-2 sm:mb-3">
              Zaufany partner
            </h3>
            <p className="text-sm text-white-700 leading-relaxed">
              {"Dedykowany opiekun handlowy, elastyczne warunki współpracy i pełne wsparcie na każdym etapie."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
