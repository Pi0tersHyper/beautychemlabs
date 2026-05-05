import { Package, Award, Zap, Globe, Users } from 'lucide-react';

const features = [
  {
    num: '01',
    title: 'Dostawy hurtowe',
    description: 'Realizujemy zamówienia od kilogramów po pełne kontenery. Elastyczne ilości dostosowane do potrzeb Twojej produkcji.',
    icon: Package,
  },
  {
    num: '02',
    title: 'Certyfikowane surowce',
    description: 'Wszystkie surowce posiadają certyfikaty jakości, karty charakterystyki (SDS) i pełną dokumentację techniczną.',
    icon: Award,
  },
  {
    num: '03',
    title: 'Szybka realizacja',
    description: 'Sprawna logistyka i rozbudowana sieć dostawców pozwalają na ekspresową realizację zamówień.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Zasięg europejski',
    description: 'Obsługujemy klientów w całej Polsce i eksportujemy do krajów Unii Europejskiej.',
    icon: Globe,
  },
  {
    num: '05',
    title: 'Indywidualne podejście',
    description: 'Dedykowany opiekun handlowy, elastyczne warunki współpracy i możliwość zamówienia próbek.',
    icon: Users,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-16 sm:py-24 lg:py-32 bg-white-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm text-teal-600 tracking-widest uppercase font-medium mb-3 sm:mb-4">
          {"03 — Dlaczego my"}
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white-900 leading-tight max-w-xl mb-10 sm:mb-16">
          {"Precyzja w każdym detalu."}
        </h2>

        <div className="space-y-0">
          {features.map((feature) => (
            <div
              key={feature.num}
              className="group flex items-start gap-4 sm:gap-6 lg:gap-10 py-5 sm:py-8 border-b border-white-300 hover:border-teal-500 transition-colors"
            >
              <span className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl lg:text-6xl font-bold text-white-200 group-hover:text-teal-500/30 transition-colors shrink-0 w-14 sm:w-20 lg:w-28">
                {feature.num}
              </span>

              <div className="flex-1 pt-1 sm:pt-2">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <feature.icon size={18} className="text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-xl lg:text-2xl font-semibold text-white-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-white-700 leading-relaxed max-w-xl">
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
