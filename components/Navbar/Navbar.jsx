import React from 'react';
import Logo from '../Logo';
import ThemeSelector from './ThemeSelect';
import useSitemap from '../../utils/useSitemap';
import './Navbar.css';

function Navlink({ title, url }) {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href={url}>{title}</a>
    </li>
  );
}

function Navdropdown({ title, subItems, english }) {
  return (
    <li className="nav-item dropdown">
      <span className="nav-link d-flex" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="flex-grow-1">{title}</span>
        <i className="bi bi-caret-down-fill ms-2 d-none d-lg-inline" />
        <i className="bi bi-caret-down-fill me-4 flex-shrink-1 d-inline d-lg-none" />
      </span>

      <ul className="dropdown-menu me-4 me-lg-0">
        {
          subItems.map((subItem) => (
            <li key={subItem.id}>
              <a className="dropdown-item" href={subItem.url}>{english ? subItem.titleEn : subItem.titleEs}</a>
            </li>
          ))
        }
      </ul>
    </li>
  );
}

function Navbar({ showThemeSelector }) {
  const { map, error, loading } = useSitemap();

  const sitemapLoaded = !(error || loading);
  const items = sitemapLoaded ? map.filter((item) => item.onHeader) : [];

  const english = document.documentElement.lang === "en";

  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container py-0 py-lg-3">
        <a className="navbar-brand" href="/" aria-label={english ? "Go to Homepage" : "Ir al inicio"}>
          <Logo />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label={english ? "Toggle navigation" : "Abrir menú de navegación"}>
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-4 flex-grow-1">
            {
              items.map((item) => {
                if (item.url) {
                  return <Navlink title={english ? item.titleEn : item.titleEs} url={item.url} key={item.id} />;
                }

                if (item.items?.length > 0) {
                  return <Navdropdown title={english ? item.titleEn : item.titleEs} subItems={item.items} key={item.id} english={english} />;
                }

                return null;
              })
            }
          </ul>

          <div className="flex-shrink-1 m-3 m-lg-0">
            { showThemeSelector ? <ThemeSelector english={english} /> : null }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
