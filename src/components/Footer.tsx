export default function Footer() {
  return (
    <footer className="border-t border-white-300 py-8 sm:py-10 bg-white-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-[family-name:var(--font-heading)] text-lg font-bold">
            <span className="text-white-900">Beauty</span>
            <span className="text-teal-600">Chem</span>
            <span className="text-white-600 text-xs font-normal ml-1 tracking-widest uppercase">Labs</span>
          </div>

          <p className="text-xs sm:text-sm text-white-600 text-center">
            {"© " + new Date().getFullYear() + " BeautyChemLabs. Wszelkie prawa zastrzeżone."}
          </p>
        </div>
      </div>
    </footer>
  );
}
