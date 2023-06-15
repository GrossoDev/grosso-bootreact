import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    let displayTheme = theme;

    if (theme !== 'dark' && theme !== 'light') {
      displayTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-bs-theme', displayTheme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;
