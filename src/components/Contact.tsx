import { useState, type FormEvent } from 'react';
import { Mail, Phone, User, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm text-gold-500 tracking-widest uppercase font-medium mb-3 sm:mb-4">
          {"04 \u2014 Kontakt"}
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xl mb-10 sm:mb-16">
          {"Zapytaj o ofert\u0119 hurtow\u0105."}
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          <div>
            <p className="text-base sm:text-lg text-navy-300 leading-relaxed mb-8 sm:mb-10">
              {"Skontaktuj si\u0119 z nami, aby om\u00F3wi\u0107 szczeg\u00F3\u0142y zam\u00F3wienia. Nasz zesp\u00F3\u0142 handlowy przygotuje indywidualn\u0105 ofert\u0119 dopasowan\u0105 do Twoich potrzeb."}
            </p>

            <div className="space-y-5 sm:space-y-6">
              <a
                href="mailto:kontakt@beautychemlabs.com"
                className="flex items-center gap-3 sm:gap-4 text-navy-300 hover:text-gold-400 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-navy-800/50 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors shrink-0">
                  <Mail size={18} className="text-gold-400" />
                </div>
                <span className="font-mono text-xs sm:text-sm break-all">kontakt@beautychemlabs.com</span>
              </a>

              <a
                href="tel:+48517479748"
                className="flex items-center gap-3 sm:gap-4 text-navy-300 hover:text-gold-400 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-navy-800/50 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors shrink-0">
                  <Phone size={18} className="text-gold-400" />
                </div>
                <span className="font-mono text-xs sm:text-sm">+48 517 479 748</span>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 text-navy-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-navy-800/50 flex items-center justify-center shrink-0">
                  <User size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm sm:text-base">{"Bart\u0142omiej Marci\u0144czyk"}</div>
                  <div className="text-xs sm:text-sm text-navy-400">{"Dzia\u0142 handlowy"}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder={"Imi\u0119 i nazwisko"}
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-navy-700 text-white text-sm sm:text-base placeholder:text-navy-500 focus:border-gold-500 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-navy-700 text-white text-sm sm:text-base placeholder:text-navy-500 focus:border-gold-500 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Telefon"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-navy-700 text-white text-sm sm:text-base placeholder:text-navy-500 focus:border-gold-500 focus:outline-none transition-colors"
              />
              <textarea
                placeholder={"Wiadomo\u015B\u0107 \u2014 opisz zapotrzebowanie, ilo\u015Bci, surowce..."}
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-navy-700 text-white text-sm sm:text-base placeholder:text-navy-500 focus:border-gold-500 focus:outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold tracking-wider uppercase text-xs sm:text-sm rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/25 mt-2 sm:mt-4"
              >
                <Send size={16} />
                {"Wy\u015Blij zapytanie"}
              </button>

              {submitted && (
                <p className="text-green-400 text-sm mt-4">
                  {"Dzi\u0119kujemy! Twoje zapytanie zosta\u0142o wys\u0142ane. Odezwiemy si\u0119 w ci\u0105gu 24 godzin."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
