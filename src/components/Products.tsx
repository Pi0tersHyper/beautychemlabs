import { useState } from 'react';
import { Droplets, FlaskConical, Leaf, Dna, Atom } from 'lucide-react';
import { products } from '../data/products';
import ProductDetail from './ProductDetail';

const categoryIcons: Record<string, typeof FlaskConical> = {
  acid: FlaskConical,
  humectant: Droplets,
  protein: Dna,
  extract: Leaf,
  other: Atom,
};

const categoryLabels: Record<string, string> = {
  acid: 'Kwas',
  humectant: 'Nawilżacz',
  protein: 'Białko',
  extract: 'Ekstrakt',
  other: 'Aminokwas',
};

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section id="products" className="relative py-16 sm:py-24 lg:py-32 bg-white-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-xs sm:text-sm text-teal-600 tracking-widest uppercase font-medium mb-3 sm:mb-4">
            02 — Produkty
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white-900 leading-tight max-w-xl">
              {"Surowce najwyższej jakości."}
            </h2>
            <p className="text-sm sm:text-base text-white-700 max-w-md">
              {"Oferujemy szeroką gamę surowców kosmetycznych i chemicznych w opakowaniach od kilogramów po pełne kontenery."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => {
              const Icon = categoryIcons[product.category] || FlaskConical;
              const label = categoryLabels[product.category] || 'Surowiec';

              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group relative bg-white-50 border border-white-300 rounded-lg overflow-hidden hover:border-teal-500 transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 text-left"
                >
                  <div className="relative h-32 sm:h-40 bg-gradient-to-br from-white-100 to-white-200 flex items-center justify-center overflow-hidden border-b border-white-300">
                    <Icon size={48} className="text-teal-500/40 group-hover:text-teal-500/60 transition-colors duration-300" />

                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-white-200 text-white-700 text-[10px] sm:text-xs font-mono rounded">
                        {product.packaging}
                      </span>
                    </div>
                    {product.purity && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-teal-100 text-teal-700 text-[10px] sm:text-xs font-bold rounded">
                          {product.purity}
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-white-200 text-white-700 text-[10px] sm:text-xs rounded uppercase tracking-wider font-medium">
                        {label}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-lg font-semibold text-white-900 leading-snug mb-1">
                      {product.name}
                    </h3>
                    <div className="text-[10px] sm:text-xs text-white-600 font-mono mb-2 sm:mb-3">
                      {product.form}
                    </div>
                    <p className="text-xs sm:text-sm text-white-700 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-3 sm:mt-4 inline-block text-[10px] sm:text-xs font-semibold text-teal-600 hover:text-teal-700 tracking-widest uppercase transition-colors">
                      Szczegóły →
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
