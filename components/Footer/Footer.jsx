import React from 'react';
import Logo from '../Logo';
import useSitemap from '../../utils/useSitemap';

function Footeritem({ title, url }) {
  return (
    <div className="col-sm-2 my-3 my-sm-0 d-flex flex-column d-sm-block align-items-center">
      <p className="fw-bold m-0">
        <a className="text-reset text-decoration-none" href={url}>{title}</a>
      </p>
    </div>
  );
}

function Footerlist({ title, subItems, english }) {
  return (
    <div className="col-sm my-3 my-sm-0 d-flex flex-column d-sm-block align-items-center">
      <p className="fw-bold">{title}</p>
      {
        subItems.map((subItem) => (
          <p className="my-1" key={subItem.id}>
            <a className="text-reset text-decoration-none fw-light" href={subItem.url}>{english ? subItem.titleEn : subItem.titleEs}</a>
          </p>
        ))
      }
    </div>
  );
}

function Footer() {
  const { map, error, loading } = useSitemap();

  const sitemapLoaded = !(error || loading);
  const items = sitemapLoaded ? map.filter((item) => item.onFooter) : [];

  const english = document.documentElement.lang === "en";

  return (
    <div className="d-flex border-top">
      <div className="container my-4 my-lg-5">
        <div className="row">
          <div className="col-sm-2 my-3 my-sm-0">
            <a className="text-reset text-decoration-none" href="/">
              <div className="mb-2 d-flex d-sm-block justify-content-center"><Logo /></div>
              <span className="text-muted d-flex d-sm-block justify-content-center">Giuliano Rosso</span>
            </a>
          </div>

          {
            items.map((item) => {
              if (item.url) {
                return (
                  <Footeritem title={english ? item.titleEn : item.titleEs} url={item.url} key={item.id} />
                );
              }

              if (item.items?.length > 0) {
                return (
                  <Footerlist title={english ? item.titleEn : item.titleEs} subItems={item.items} key={item.id} english={english} />
                );
              }

              return null;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Footer;
