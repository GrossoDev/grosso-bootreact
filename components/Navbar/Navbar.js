/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../Logo';
import ThemeSelect from './ThemeSelect';
import Sitemap from '../../sitemap.json';
import './Navbar.css';

function Navlink({ title, url }) {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href={url}>{title}</a>
    </li>
  );
}

function Navdropdown({ title, subItems }) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="flex-grow-1">{title}</span>
        <i className="bi bi-caret-down-fill ms-2 d-none d-lg-inline" />
        <i className="bi bi-caret-down-fill me-4 flex-shrink-1 d-inline d-lg-none" />
      </a>

      <ul className="dropdown-menu">
        {
          subItems.map((subItem) => (
            <li>
              <a className="dropdown-item" href={subItem.url}>{subItem.title}</a>
            </li>
          ))
        }
      </ul>
    </li>
  );
}

function Navbar({ themeSelect }) {
  const items = Sitemap.filter((item) => item.onHeader);

  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container py-0 py-lg-3">
        <a className="navbar-brand" href="#">
          <Logo />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-4 flex-grow-1">
            {
              items.map((item) => {
                if (item.url) {
                  return <Navlink title={item.title} url={item.url} />;
                }

                if (item.items?.length > 0) {
                  return <Navdropdown title={item.title} subItems={item.items} />;
                }

                return null;
              })
            }
          </ul>

          <div className="flex-shrink-1 m-3 m-sm-0">
            {
              themeSelect && <ThemeSelect />
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
