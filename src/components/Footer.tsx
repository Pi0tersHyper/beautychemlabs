export default function Footer() {
  return (
    <footer className="border-t border-navy-800/50 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-[family-name:var(--font-heading)] text-lg font-bold">
            <span className="text-white">Beauty</span>
            <span className="text-gold-400">Chem</span>
            <span className="text-navy-400 text-xs font-normal ml-1 tracking-widest uppercase">Labs</span>
          </div>

          <p className="text-xs sm:text-sm text-navy-500 text-center">
            {"\u00A9 " + new Date().getFullYear() + " BeautyChemLabs. Wszelkie prawa zastrze\u017Cone."}
          </p>
        </div>
      </div>
    </footer>
  );
}
