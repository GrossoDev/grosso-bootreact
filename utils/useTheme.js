import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    switch (theme) {
      case 'light': {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        break;
      }
      case 'dark': {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        break;
      }
      default: {
        const actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', actualTheme);
        break;
      }
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;
