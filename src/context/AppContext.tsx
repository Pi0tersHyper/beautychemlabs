import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'pl' | 'en';

interface AppContextType {
  isDark: boolean;
  toggleDark: () => void;
  lang: Language;
  setLang: (l: Language) => void;
}

const AppContext = createContext<AppContextType>({
  isDark: false,
  toggleDark: () => {},
  lang: 'pl',
  setLang: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'pl';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleDark = () => setIsDark((v) => !v);

  return (
    <AppContext.Provider value={{ isDark, toggleDark, lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
