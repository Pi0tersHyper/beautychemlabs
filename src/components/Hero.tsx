import { ArrowRight, FlaskConical } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-32">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-navy-700/50 bg-navy-900/50 mb-6 sm:mb-8">
          <FlaskConical size={14} className="text-gold-400 shrink-0" />
          <span className="text-xs sm:text-sm text-navy-300 tracking-wide">
            {"Dystrybucja surowc\u00F3w kosmetycznych \u00B7 Skala przemys\u0142owa"}
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
          <span className="text-white">{"Tw\u00F3j Zaufany Partner w "}</span>
          <span className="text-gold-400">{"Dystrybucji Surowc\u00F3w"}</span>
          <span className="text-white">{" Kosmetycznych"}</span>
          <span className="text-gold-500">.</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-navy-300 max-w-2xl leading-relaxed">
          {"Dostarczamy surowce kosmetyczne i chemiczne najwy\u017Cszej jako\u015Bci \u2014 od kilogram\u00F3w po pe\u0142ne kontenery. Obs\u0142ugujemy producent\u00F3w kosmetyk\u00F3w, laboratoria i zak\u0142ady przemys\u0142owe w ca\u0142ej Polsce i Europie."}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold tracking-wider uppercase text-xs sm:text-sm rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/25"
          >
            {"Skontaktuj si\u0119 z nami"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-navy-600 hover:border-gold-500/50 text-navy-200 hover:text-gold-400 font-medium tracking-wider uppercase text-xs sm:text-sm rounded-sm transition-all duration-200"
          >
            Zobacz produkty
          </a>
        </div>

        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-navy-800/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400">20+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-navy-400 tracking-wide">{"Surowc\u00F3w w ofercie"}</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400">100+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-navy-400 tracking-wide">{"Klient\u00F3w B2B"}</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400">EU</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-navy-400 tracking-wide">{"Zasi\u0119g europejski"}</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400">24h</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-navy-400 tracking-wide">Czas odpowiedzi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
