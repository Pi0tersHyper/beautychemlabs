import { ArrowRight, FlaskConical } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white-50">
      <div className="absolute inset-0 bg-gradient-to-br from-white-50 via-white-100 to-white-50" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-teal-500/2 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-32">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white-300 bg-white-100 mb-6 sm:mb-8">
          <FlaskConical size={14} className="text-teal-600 shrink-0" />
          <span className="text-xs sm:text-sm text-white-700 tracking-wide">
            {"Dystrybucja surowc\u00F3w kosmetycznych \u00B7 Skala przemys\u0142owa"}
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
          <span className="text-white-900">{"Tw\u00F3j Zaufany Partner w "}</span>
          <span className="text-teal-600">{"Dystrybucji Surowc\u00F3w"}</span>
          <span className="text-white-900">{" Kosmetycznych"}</span>
          <span className="text-teal-500">.</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white-700 max-w-2xl leading-relaxed">
          {"Dostarczamy surowce kosmetyczne i chemiczne najwy\u017Cszej jako\u015Bci \u2014 od kilogram\u00F3w po pe\u0142ne kontenery. Obs\u0142ugujemy producent\u00F3w kosmetyk\u00F3w, laboratoria i zak\u0142ady przemys\u0142owe w ca\u0142ej Polsce i Europie."}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white-50 font-semibold tracking-wider uppercase text-xs sm:text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-600/25"
          >
            {"Skontaktuj si\u0119 z nami"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white-300 hover:border-teal-500 text-white-700 hover:text-teal-600 font-medium tracking-wider uppercase text-xs sm:text-sm rounded-lg transition-all duration-200"
          >
            Zobacz produkty
          </a>
        </div>

        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-white-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-600">13+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white-600 tracking-wide">{"Surowc\u00F3w w ofercie"}</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-600">100+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white-600 tracking-wide">{"Klient\u00F3w B2B"}</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-600">PL + EU</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white-600 tracking-wide">{"Zasi\u0119g europejski"}</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-600">3 cert.</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white-600 tracking-wide">Certyfikacja</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
