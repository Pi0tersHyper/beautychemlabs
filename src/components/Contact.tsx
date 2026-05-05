import { useState, type FormEvent } from 'react';
import { Mail, Phone, User, Send, Loader2, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@beautychemlabs.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Nie podano',
          message: formData.message,
          _subject: `Nowe zapytanie od ${formData.name} — BeautyChemLabs`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-white-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs sm:text-sm text-teal-600 tracking-widest uppercase font-medium mb-3 sm:mb-4">
          {"04 — Kontakt"}
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white-900 leading-tight max-w-xl mb-10 sm:mb-16">
          {"Zapytaj o ofertę hurtową."}
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          <div>
            <p className="text-base sm:text-lg text-white-700 leading-relaxed mb-8 sm:mb-10">
              {"Skontaktuj się z nami, aby omówić szczegóły zamówienia. Nasz zespół handlowy przygotuje indywidualną ofertę dostosowaną do Twoich potrzeb."}
            </p>

            <div className="space-y-5 sm:space-y-6">
              <a
                href="mailto:contact@beautychemlabs.com"
                className="flex items-center gap-3 sm:gap-4 text-white-700 hover:text-teal-600 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors shrink-0">
                  <Mail size={18} className="text-teal-600" />
                </div>
                <span className="font-mono text-xs sm:text-sm break-all">contact@beautychemlabs.com</span>
              </a>

              <a
                href="tel:+48517479748"
                className="flex items-center gap-3 sm:gap-4 text-white-700 hover:text-teal-600 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors shrink-0">
                  <Phone size={18} className="text-teal-600" />
                </div>
                <span className="font-mono text-xs sm:text-sm">+48 517 479 748</span>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 text-white-700">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                  <User size={18} className="text-teal-600" />
                </div>
                <div>
                  <div className="text-white-900 font-medium text-sm sm:text-base">{"Bartłomiej Marcinczyk"}</div>
                  <div className="text-xs sm:text-sm text-white-600">{"Dział handlowy"}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white-300">
                <div className="flex items-start gap-3 sm:gap-4 text-white-700">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={18} className="text-teal-600" />
                  </div>
                  <div>
                    <div className="text-white-900 font-medium text-sm sm:text-base">Godziny obsługi</div>
                    <div className="text-xs sm:text-sm text-white-600">{"Pon–Pt: 8:00–17:00 CET"}</div>
                    <div className="text-xs sm:text-sm text-white-600">{"Odpowiadamy w ciągu 24h w godzinach roboczych"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder={"Imię i nazwisko"}
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-white-300 text-white-900 text-sm sm:text-base placeholder:text-white-500 focus:border-teal-600 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-white-300 text-white-900 text-sm sm:text-base placeholder:text-white-500 focus:border-teal-600 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Telefon"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-white-300 text-white-900 text-sm sm:text-base placeholder:text-white-500 focus:border-teal-600 focus:outline-none transition-colors"
              />
              <textarea
                placeholder={"Wiadomość — opisz zapotrzebowanie, ilości, surowce..."}
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-white-300 text-white-900 text-sm sm:text-base placeholder:text-white-500 focus:border-teal-600 focus:outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-600/50 disabled:cursor-not-allowed text-white-50 font-semibold tracking-wider uppercase text-xs sm:text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-600/25 mt-2 sm:mt-4"
              >
                {status === 'sending' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {status === 'sending' ? 'Wysyłanie...' : 'Wyślij zapytanie'}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-teal-700 text-sm mt-4 bg-teal-50 p-3 rounded-lg border border-teal-200">
                  <CheckCircle size={16} />
                  <p>{"Dziękujemy! Twoje zapytanie zostało wysłane. Odezwiemy się w ciągu 24 godzin."}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-700 text-sm mt-4 bg-red-50 p-3 rounded-lg border border-red-200">
                  <AlertCircle size={16} />
                  <p>{"Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio na contact@beautychemlabs.com"}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
