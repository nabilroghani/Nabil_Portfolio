import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

// src/context/ThemeContext.jsx update logic

// src/context/ThemeContext.jsx

useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  
  // Agar pehle se kuch saved NAHI hai (null hai), toh dark set karo
  if (!savedTheme) {
    setIsDark(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } 
  // Agar "light" saved hai, toh light mode
  else if (savedTheme === 'light') {
    setIsDark(false);
    document.documentElement.classList.remove('dark');
  } 
  // Agar "dark" saved hai, toh dark mode
  else {
    setIsDark(true);
    document.documentElement.classList.add('dark');
  }
}, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);