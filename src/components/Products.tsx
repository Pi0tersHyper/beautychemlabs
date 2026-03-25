import { Droplets, FlaskConical, Leaf, Dna, Atom } from 'lucide-react';
import { products } from '../data/products';

const categoryIcons: Record<string, typeof FlaskConical> = {
  acid: FlaskConical,
  humectant: Droplets,
  protein: Dna,
  extract: Leaf,
  other: Atom,
};

const categoryLabels: Record<string, string> = {
  acid: 'Kwas',
  humectant: 'Nawil\u017Cacz',
  protein: 'Bia\u0142ko',
  extract: 'Ekstrakt',
  other: 'Aminokwas',
};

export default function Products() {
  return (
    <section id="products" className="relative py-16 sm:py-24 lg:py-32 bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm text-gold-500 tracking-widest uppercase font-medium mb-3 sm:mb-4">
          02 — Produkty
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xl">
            {"Surowce najwy\u017Cszej jako\u015Bci."}
          </h2>
          <p className="text-sm sm:text-base text-navy-400 max-w-md">
            {"Oferujemy szerok\u0105 gam\u0119 surowc\u00F3w kosmetycznych i chemicznych w opakowaniach od kilogram\u00F3w po pe\u0142ne kontenery."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => {
            const Icon = categoryIcons[product.category] || FlaskConical;
            const label = categoryLabels[product.category] || 'Surowiec';

            return (
              <div
                key={product.id}
                className="group relative bg-navy-900/60 border border-navy-800/50 rounded-lg overflow-hidden hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-950/50"
              >
                <div className={`relative h-36 sm:h-44 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/3" />
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/2" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />

                  <Icon size={40} className="text-white/30 group-hover:text-white/50 transition-colors duration-300 relative z-10" />

                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-navy-950/60 backdrop-blur-sm text-navy-200 text-[10px] sm:text-xs font-mono rounded">
                      {product.packaging}
                    </span>
                  </div>
                  {product.purity && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-gold-500/20 backdrop-blur-sm text-gold-400 text-[10px] sm:text-xs font-bold rounded">
                        {product.purity}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4">
                    <span className="px-2 py-1 bg-navy-950/40 backdrop-blur-sm text-navy-300 text-[10px] sm:text-xs rounded uppercase tracking-wider">
                      {label}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-lg font-semibold text-white leading-snug mb-1">
                    {product.name}
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gold-400/70 font-mono mb-2 sm:mb-3">
                    {product.form}
                  </div>
                  <p className="text-xs sm:text-sm text-navy-400 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-3 sm:mt-4 inline-block text-[10px] sm:text-xs font-semibold text-gold-400 hover:text-gold-300 tracking-widest uppercase transition-colors"
                  >
                    {"Zapytaj o cen\u0119 \u2192"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
