import React from 'react';
import Logo from '../Logo';
import Sitemap from '../../sitemap.json';

function Footeritem({ title, url }) {
  return (
    <div className="col-sm-2 my-3 my-sm-0 d-flex flex-column d-sm-block align-items-center">
      <p className="fw-bold m-0">
        <a className="text-reset text-decoration-none" href={url}>{title}</a>
      </p>
    </div>
  );
}

function Footerlist({ title, subItems }) {
  return (
    <div className="col-sm my-3 my-sm-0 d-flex flex-column d-sm-block align-items-center">
      <p className="fw-bold">{title}</p>
      {
        subItems.map((subItem) => (
          <p className="my-1" key={subItem.id}>
            <a className="text-reset text-decoration-none fw-light" href={subItem.url}>{subItem.title}</a>
          </p>
        ))
      }
    </div>
  );
}

function Footer() {
  const items = Sitemap.filter((item) => item.onFooter);

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
                  <Footeritem title={item.title} url={item.url} key={item.id} />
                );
              }

              if (item.items?.length > 0) {
                return (
                  <Footerlist title={item.title} subItems={item.items} key={item.id} />
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
