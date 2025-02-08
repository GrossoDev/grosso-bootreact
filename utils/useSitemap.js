import { useState, useEffect } from 'react';

export const DEFAULT_SITEMAP_URL = "https://raw.githubusercontent.com/GrossoDev/grosso-bootreact/refs/heads/main/sitemap.json";

function useSitemap(url = DEFAULT_SITEMAP_URL) {
  const [map, setMap] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then(async (response) => {
        setMap(await response.json());
        setLoading(false);
      })
      .catch((reason) => {
        if (reason.name === "AbortError") return;

        console.error("Error fetching sitemap.", reason);
        setError(true);
        setLoading(false);
      });

    return () => {
      controller.abort();
    }
  }, [url]);

  return { map, error, loading };
}

export default useSitemap;