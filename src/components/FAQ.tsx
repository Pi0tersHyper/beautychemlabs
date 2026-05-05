import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Language = 'pl' | 'en';

interface FAQItem {
  id: string;
  question: { pl: string; en: string };
  answer: { pl: string; en: string };
}

const faqItems: FAQItem[] = [
  {
    id: 'minimum-order',
    question: {
      pl: 'Jakie są minimalne zamówienia?',
      en: 'What are the minimum order quantities?',
    },
    answer: {
      pl: 'Nie mamy minimalnych zamówień. Przyjmujemy zlecenia od 1 kg lub mniejszych opakowań, w zależności od dostępności produktu. Skontaktuj się z nami w celu omówienia szczegółów.',
      en: 'We have no minimum order quantities. We accept orders from 1 kg or smaller packages, depending on product availability. Contact us to discuss the details.',
    },
  },
  {
    id: 'delivery-time',
    question: {
      pl: 'Jak długo trwa dostawa?',
      en: 'How long does delivery take?',
    },
    answer: {
      pl: 'Realizujemy zamówienia na terenie Polski i Unii Europejskiej. Czas dostawy zależy od lokalizacji i dostępności produktu — zazwyczaj na zamówienie. Szczegóły omówimy z Tobą indywidualnie.',
      en: 'We deliver throughout Poland and the European Union. Delivery time depends on location and product availability — usually made-to-order. We will discuss the details with you individually.',
    },
  },
  {
    id: 'samples',
    question: {
      pl: 'Czy oferujecie próbki?',
      en: 'Do you offer samples?',
    },
    answer: {
      pl: 'Tak, oferujemy próbki wielu produktów. Napisz do nas na contact@beautychemlabs.com lub zadzwoń, aby omówić możliwości i koszty wysyłki próbek.',
      en: 'Yes, we offer samples of many products. Email us at contact@beautychemlabs.com or call to discuss options and shipping costs for samples.',
    },
  },
  {
    id: 'certifications',
    question: {
      pl: 'Jakie posiadamy certyfikaty?',
      en: 'What certifications do you have?',
    },
    answer: {
      pl: 'Wszystkie nasze surowce posiadają certyfikaty REACH, HACCP i ISO 9001. Każdy produkt ma dostępną pełną dokumentację techniczną, karty charakterystyki (SDS) oraz certyfikaty jakości.',
      en: 'All our raw materials are certified with REACH, HACCP, and ISO 9001. Each product has complete technical documentation, safety data sheets (SDS), and quality certificates available.',
    },
  },
  {
    id: 'payments',
    question: {
      pl: 'Jakie są warunki płatności?',
      en: 'What are your payment terms?',
    },
    answer: {
      pl: 'Oferujemy elastyczne warunki płatności dostosowane do Twoich potrzeb — od przedpłaty po netto 30. Szczegóły omówimy indywidualnie dla każdego klienta.',
      en: 'We offer flexible payment terms adapted to your needs — from prepayment to net 30. We will discuss the details individually for each client.',
    },
  },
  {
    id: 'formulation-support',
    question: {
      pl: 'Czy oferujecie wsparcie w formulacji produktów?',
      en: 'Do you offer formulation support?',
    },
    answer: {
      pl: 'Tak! Nasz zespół handlowy i techniczny jest dostępny do konsultacji na temat wyboru surowców, dozowania i kompatybilności składników. Zapraszamy do bezpłatnych rozmów.',
      en: 'Yes! Our sales and technical team is available for consultation on raw material selection, dosage, and ingredient compatibility. We invite you to free consultations.',
    },
  },
];

export default function FAQ() {
  const [lang, setLang] = useState<Language>('pl');
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white-100">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="text-xs sm:text-sm text-teal-600 tracking-widest uppercase font-semibold mb-3 sm:mb-4">
            FAQ
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white-900 leading-tight mb-6">
            Często zadawane pytania
          </h2>

          {/* Language Toggle */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => setLang('pl')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                lang === 'pl'
                  ? 'bg-teal-600 text-white-50'
                  : 'bg-white-200 text-white-700 hover:bg-white-300'
              }`}
            >
              Polski
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                lang === 'en'
                  ? 'bg-teal-600 text-white-50'
                  : 'bg-white-200 text-white-700 hover:bg-white-300'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-white-300 rounded-lg overflow-hidden hover:border-teal-500 transition-colors"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 flex items-start justify-between gap-4 bg-white-50 hover:bg-white-100 transition-colors text-left"
                >
                  <span className="font-[family-name:var(--font-heading)] text-base sm:text-lg font-semibold text-white-900 leading-snug">
                    {item.question[lang]}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-teal-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white-100 border-t border-white-300">
                    <p className="text-white-700 leading-relaxed">
                      {item.answer[lang]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-teal-50 border border-teal-200 rounded-lg text-center">
          <p className="text-white-900 mb-4">
            {lang === 'pl'
              ? 'Nie znalazłeś odpowiedzi na swoje pytanie?'
              : "Didn't find the answer to your question?"}
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white-50 font-semibold rounded-lg transition-colors"
          >
            {lang === 'pl' ? 'Skontaktuj się z nami' : 'Get in touch'}
          </a>
        </div>
      </div>
    </section>
  );
}
