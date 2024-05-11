import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [actualTheme, setActualTheme] = useState("dark");

  useEffect(() => {
    let displayTheme = theme;

    if (theme !== 'dark' && theme !== 'light') {
      displayTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-bs-theme', displayTheme);
    localStorage.setItem('theme', theme);
    setActualTheme(displayTheme);
  }, [theme]);

  return {actualTheme, theme, setTheme};
}

export default useTheme;
