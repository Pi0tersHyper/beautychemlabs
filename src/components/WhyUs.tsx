import { Package, Award, Zap, Globe, Users } from 'lucide-react';

const features = [
  {
    num: '01',
    title: 'Dostawy hurtowe',
    description: 'Realizujemy zam\u00F3wienia od kilogram\u00F3w po pe\u0142ne kontenery. Elastyczne ilo\u015Bci dostosowane do potrzeb Twojej produkcji.',
    icon: Package,
  },
  {
    num: '02',
    title: 'Certyfikowane surowce',
    description: 'Wszystkie surowce posiadaj\u0105 certyfikaty jako\u015Bci, karty charakterystyki (SDS) i pe\u0142n\u0105 dokumentacj\u0119 techniczn\u0105.',
    icon: Award,
  },
  {
    num: '03',
    title: 'Szybka realizacja',
    description: 'Sprawna logistyka i rozbudowana sie\u0107 dostawc\u00F3w pozwalaj\u0105 na ekspresow\u0105 realizacj\u0119 zam\u00F3wie\u0144.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Zasi\u0119g europejski',
    description: 'Obs\u0142ugujemy klient\u00F3w w ca\u0142ej Polsce i eksportujemy do kraj\u00F3w Unii Europejskiej.',
    icon: Globe,
  },
  {
    num: '05',
    title: 'Indywidualne podej\u015Bcie',
    description: 'Dedykowany opiekun handlowy, elastyczne warunki wsp\u00F3\u0142pracy i mo\u017Cliwo\u015B\u0107 zam\u00F3wienia pr\u00F3bek.',
    icon: Users,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm text-gold-500 tracking-widest uppercase font-medium mb-3 sm:mb-4">
          {"03 \u2014 Dlaczego my"}
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xl mb-10 sm:mb-16">
          {"Precyzja w ka\u017Cdym detalu."}
        </h2>

        <div className="space-y-0">
          {features.map((feature) => (
            <div
              key={feature.num}
              className="group flex items-start gap-4 sm:gap-6 lg:gap-10 py-5 sm:py-8 border-b border-navy-800/50 hover:border-gold-500/20 transition-colors"
            >
              <span className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-800 group-hover:text-gold-500/30 transition-colors shrink-0 w-14 sm:w-20 lg:w-28">
                {feature.num}
              </span>

              <div className="flex-1 pt-1 sm:pt-2">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <feature.icon size={18} className="text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-xl lg:text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-navy-400 leading-relaxed max-w-xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
