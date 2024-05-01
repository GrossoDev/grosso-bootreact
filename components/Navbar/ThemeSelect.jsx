import React from 'react';
import useTheme from '../../utils/useTheme';

function ThemeIcon({ theme }) {
  switch (theme) {
    case 'light':
      return <i className="bi bi-brightness-high-fill" />;
    case 'dark':
      return <i className="bi bi-moon-stars-fill" />;
    default:
      return <i className="bi bi-circle-half" />;
  }
}

function ThemeSelect() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="dropdown">
      <button type="button" className="btn rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
        <ThemeIcon theme={theme} />
        <span className="visually-hidden">Cambiar tema</span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <button type="button" className="dropdown-item" onClick={() => setTheme('light')}>
            <i className="bi bi-brightness-high-fill me-2" />
            Claro
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item" onClick={() => setTheme('dark')}>
            <i className="bi bi-moon-stars-fill me-2" />
            Oscuro
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item" onClick={() => setTheme('auto')}>
            <i className="bi bi-circle-half me-2" />
            Auto
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ThemeSelect;
