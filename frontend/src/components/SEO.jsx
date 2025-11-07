import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SEO = ({ 
  title = "GGeese Studio | Mixed Reality Entertainment",
  description = "GGeese Studio creates next-generation location-based mixed reality entertainment experiences. Featuring ArcadiaX - the ultimate XR drift karting platform.",
  keywords = "mixed reality, VR gaming, drift karting, location-based entertainment, XR platform, ArcadiaX, Meta Quest, virtual reality venues",
  image = "https://customer-assets.emergentagent.com/job_228b3afe-8d02-4e8c-8604-2bc2379db9f3/artifacts/05ax7qxt_Logo.png",
  type = "website",
  structuredData = null
}) => {
  const location = useLocation();
  const url = `https://ggeese.nl${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property, content, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description, true);
    updateMetaTag('keywords', keywords, true);

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Add structured data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // Default organization structured data
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GGeese Studio",
      "description": "GGeese Studio creates next-generation location-based mixed reality entertainment experiences.",
      "url": "https://ggeese.nl",
      "logo": "https://customer-assets.emergentagent.com/job_228b3afe-8d02-4e8c-8604-2bc2379db9f3/artifacts/05ax7qxt_Logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "ggeesestudio@gmail.com",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ggeese-studio",
        "https://www.instagram.com/ggeesestudio",
        "https://www.youtube.com/@ggeesestudio"
      ]
    };

    if (!structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(defaultStructuredData);
    }

  }, [title, description, keywords, image, url, type, structuredData]);

  return null;
};

export default SEO;
