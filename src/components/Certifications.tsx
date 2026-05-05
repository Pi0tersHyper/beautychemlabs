import { Badge, Shield, Zap } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      icon: Badge,
      name: 'REACH',
      description: 'Regulacja unijnych substancji chemicznych',
    },
    {
      icon: Shield,
      name: 'GMP+',
      description: 'System zarządzania jakością dla branży paszowej',
    },
    {
      icon: Zap,
      name: 'ISO 9001',
      description: 'Międzynarodowy standard zarządzania jakością',
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-teal-50 border-y border-teal-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm text-teal-700 tracking-widest uppercase font-semibold mb-2 sm:mb-3">
            Certyfikacja Jakości
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl lg:text-3xl font-bold text-white-900">
            {"Surowce potwierdzone certyfikatami"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {certs.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 sm:p-8 bg-white-50 border border-white-300 rounded-lg hover:border-teal-500 hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <Icon size={28} className="text-teal-600" />
                </div>
                <h4 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-white-900 mb-2">
                  ✓ {cert.name}
                </h4>
                <p className="text-sm text-white-700 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
