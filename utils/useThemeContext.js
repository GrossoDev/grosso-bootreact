import { useState, useEffect } from 'react';

function useThemeContext() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [actualTheme, setActualTheme] = useState("dark");

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    const calcAndSetActualTheme = () => {
      let displayTheme = theme;

      if (theme !== 'dark' && theme !== 'light') {
        displayTheme = matchMedia.matches ? 'dark' : 'light';
      }
  
      document.documentElement.setAttribute('data-bs-theme', displayTheme);
      localStorage.setItem('theme', theme);
      setActualTheme(displayTheme);
    }

    calcAndSetActualTheme();

    matchMedia.addEventListener("change", calcAndSetActualTheme);

    return () => matchMedia.removeEventListener("change", calcAndSetActualTheme);
  }, [theme]);

  return { actualTheme, theme, setTheme };
}

export default useThemeContext;
