'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
// New key so a "dark" value saved under the old 'theme' key no longer
// overrides the light default; a visitor's own toggle is still remembered.
const THEME_STORAGE_KEY = 'theme-preference';
const LEGACY_THEME_KEY = 'theme';

export const ThemeProvider = ({ children }) => {
  // Default to light theme
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    localStorage.removeItem(LEGACY_THEME_KEY);
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved) {
      const dark = saved === 'dark';
      setIsDark(dark);
      document.documentElement.classList.toggle('dark', dark);
    } else {
      // Default: light mode (remove dark class)
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
