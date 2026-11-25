import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routesRegistry } from '../data/routesRegistry';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to top on navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });

    // 2. Dynamic SEO Metadata Update
    const normalizedPath = pathname === '/' ? '/' : (pathname.endsWith('/') ? pathname : `${pathname}/`);
    const matchedRoute = routesRegistry.find(
      r => r.canonicalPath === normalizedPath || r.canonicalPath === pathname
    );

    if (matchedRoute) {
      document.title = matchedRoute.seoTitle;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', matchedRoute.metaDescription);

      // Update canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `https://drmazharrafique.com${matchedRoute.canonicalPath}`);
    } else {
      document.title = 'Page Not Found | Dr. Mazhar Rafique';
    }
  }, [pathname]);

  return null;
};
