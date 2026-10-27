import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRoute, canonicalFor } from '../data/routes';

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

// The first load gets its <head> from the prerendered HTML.
// This keeps the head correct during client-side navigation.
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = getRoute(pathname);
    const canonical = canonicalFor(route);
    document.title = route.title;
    setMeta('meta[name="description"]', 'content', route.description);
    setMeta('meta[property="og:title"]', 'content', route.title);
    setMeta('meta[property="og:description"]', 'content', route.description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', route.title);
    setMeta('meta[name="twitter:description"]', 'content', route.description);
    setMeta('link[rel="canonical"]', 'href', canonical);
    setMeta('meta[name="robots"]', 'content', route.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');

    document.head.querySelectorAll('script[data-page-ld]').forEach((s) => s.remove());
    route.jsonLd.forEach((data) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.dataset.pageLd = '';
      s.textContent = JSON.stringify(data);
      document.head.appendChild(s);
    });
  }, [pathname]);

  return null;
}
