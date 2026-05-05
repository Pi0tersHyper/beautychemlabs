import { X, Download, MessageSquare } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6">
      <div className="bg-white-50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white-50 border-b border-white-300 px-6 sm:px-8 py-4 sm:py-6 flex items-start justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white-900">
              {product.name}
            </h2>
            <p className="text-sm text-white-600 mt-1">{product.form}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white-500 hover:text-white-900 hover:bg-white-200 rounded-lg transition-colors shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 py-6 sm:py-8 space-y-8">
          {/* Description */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white-900 mb-3">
              Opis
            </h3>
            <p className="text-white-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white-900 mb-4">
              Specyfikacja
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white-100 p-4 rounded-lg border border-white-300">
                <p className="text-xs text-white-600 uppercase tracking-wide font-medium">Forma</p>
                <p className="text-white-900 font-medium mt-1">{product.form}</p>
              </div>

              {product.purity && (
                <div className="bg-white-100 p-4 rounded-lg border border-white-300">
                  <p className="text-xs text-white-600 uppercase tracking-wide font-medium">Czystość</p>
                  <p className="text-white-900 font-medium mt-1">{product.purity}</p>
                </div>
              )}

              {product.packaging && (
                <div className="bg-white-100 p-4 rounded-lg border border-white-300">
                  <p className="text-xs text-white-600 uppercase tracking-wide font-medium">Opakowanie</p>
                  <p className="text-white-900 font-medium mt-1">{product.packaging}</p>
                </div>
              )}

              {product.availability && (
                <div className="bg-white-100 p-4 rounded-lg border border-white-300">
                  <p className="text-xs text-white-600 uppercase tracking-wide font-medium">Dostępność</p>
                  <p className="text-white-900 font-medium mt-1">
                    {product.availability === 'inStock' ? 'W magazynie' : 'Na zamówienie'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* INCI Names */}
          {product.inci && product.inci.length > 0 && (
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white-900 mb-3">
                Nazwy INCI
              </h3>
              <div className="bg-white-100 p-4 rounded-lg border border-white-300">
                <ul className="space-y-2">
                  {product.inci.map((name, idx) => (
                    <li key={idx} className="text-white-700 text-sm">
                      • {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Certificates */}
          {product.certificates && product.certificates.length > 0 && (
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white-900 mb-3">
                Certyfikaty
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.certificates.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-teal-100 text-teal-700 text-sm font-medium rounded-full"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bulk Pricing */}
          {product.bulkPricing && product.bulkPricing.length > 0 && (
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white-900 mb-4">
                Cennik hurtowy
              </h3>
              <div className="border border-white-300 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white-100 border-b border-white-300">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-white-900 uppercase tracking-wide">
                        Ilość
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-white-900 uppercase tracking-wide">
                        Cena za kg
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.bulkPricing.map((price, idx) => (
                      <tr key={idx} className="border-b border-white-300 last:border-b-0">
                        <td className="px-4 py-3 text-white-700">{price.quantity}</td>
                        <td className="px-4 py-3 text-white-900 font-medium">
                          {price.pricePerKg.toFixed(2)} PLN
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Documents */}
          <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white-900 mb-4">
              Dokumentacja
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white-300 hover:bg-white-100 text-white-700 font-medium rounded-lg transition-colors">
                <Download size={18} />
                Pobierz kartę charakterystyki (SDS)
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white-300 hover:bg-white-100 text-white-700 font-medium rounded-lg transition-colors">
                <Download size={18} />
                Pobierz certyfikaty
              </button>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-white-100 border-t border-white-300 px-6 sm:px-8 py-4 sm:py-6">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white-50 font-semibold rounded-lg transition-colors"
          >
            <MessageSquare size={18} />
            Zapytaj ofertę na ten produkt
          </a>
        </div>
      </div>
    </div>
  );
}
