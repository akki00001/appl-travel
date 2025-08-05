// SEO utilities equivalent to RankMath features for React applications

export const generateSitemap = () => {
  const baseUrl = 'https://www.astirpassage.com';
  
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog', priority: 0.9, changefreq: 'weekly' },
    { url: '/faq', priority: 0.7, changefreq: 'monthly' },
    { url: '/destinations/bali', priority: 0.9, changefreq: 'weekly' },
    { url: '/destinations/singapore', priority: 0.9, changefreq: 'weekly' },
    { url: '/destinations/maldives', priority: 0.9, changefreq: 'weekly' },
    { url: '/destinations/thailand', priority: 0.9, changefreq: 'weekly' },
    { url: '/destinations/dubai', priority: 0.9, changefreq: 'weekly' },
    { url: '/destinations/europe', priority: 0.8, changefreq: 'weekly' },
    { url: '/destinations/switzerland', priority: 0.8, changefreq: 'weekly' },
    { url: '/destinations/kerala', priority: 0.8, changefreq: 'weekly' },
    { url: '/destinations/kashmir', priority: 0.8, changefreq: 'weekly' },
    { url: '/destinations/ladakh', priority: 0.8, changefreq: 'weekly' }
  ];

  return pages.map(page => ({
    ...page,
    lastmod: new Date().toISOString()
  }));
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Sitemap
Sitemap: https://www.astirpassage.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# User-agents
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;
};

export const generateSchemaMarkup = (type: string, data: any): any => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type
  };

  switch (type) {
    case 'TravelAgency':
      return {
        ...baseSchema,
        "@type": "TravelAgency",
        "name": "Astir Passage",
        "url": "https://www.astirpassage.com",
        "logo": "https://www.astirpassage.com/logo.webp",
        "description": "Leading travel agency offering best tour packages for international and domestic destinations",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.facebook.com/astirpassage",
          "https://www.instagram.com/astirpassage",
          "https://twitter.com/astirpassage"
        ]
      };

    case 'BreadcrumbList':
      return {
        ...baseSchema,
        "@type": "BreadcrumbList",
        "itemListElement": data.items.map((item: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };

    case 'FAQPage':
      return {
        ...baseSchema,
        "@type": "FAQPage",
        "mainEntity": data.faqs.map((faq: any) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

    case 'Product':
      return {
        ...baseSchema,
        "@type": "Product",
        "name": data.name,
        "description": data.description,
        "image": data.image,
        "offers": {
          "@type": "Offer",
          "price": data.price,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": data.rating,
          "reviewCount": data.reviewCount
        }
      };

    default:
      return baseSchema;
  }
};

export const generateMetaTags = (page: string, data?: any): Record<string, string> => {
  const commonTags = {
    viewport: 'width=device-width, initial-scale=1',
    charset: 'UTF-8',
    'X-UA-Compatible': 'IE=edge',
    robots: 'index, follow',
    'googlebot': 'index, follow',
    'bingbot': 'index, follow'
  };

  const pageSpecificTags = {
    home: {
      'article:publisher': 'https://www.facebook.com/astirpassage',
      'article:modified_time': new Date().toISOString(),
      'og:locale': 'en_US',
      'og:type': 'website',
      'og:site_name': 'Astir Passage'
    },
    destination: {
      'og:locale': 'en_US',
      'og:type': 'website',
      'og:site_name': 'Astir Passage',
      'article:published_time': data?.publishedTime || new Date().toISOString(),
      'article:modified_time': data?.modifiedTime || new Date().toISOString()
    }
  };

  return {
    ...commonTags,
    ...(page === 'home' ? pageSpecificTags.home : pageSpecificTags.destination)
  };
};

export const getSEOScore = (pageData: any): { score: number; checks: any; recommendations: string[] } => {
  let score = 0;
  const checks = {
    titleLength: pageData.title?.length >= 50 && pageData.title?.length <= 60,
    descriptionLength: pageData.description?.length >= 150 && pageData.description?.length <= 160,
    hasKeywords: pageData.keywords && pageData.keywords.length > 0,
    hasOpenGraph: pageData.ogTitle && pageData.ogDescription,
    hasTwitterCard: pageData.twitterTitle && pageData.twitterDescription,
    hasCanonical: pageData.canonicalUrl,
    hasSchema: pageData.schemaMarkup,
    hasAltTags: pageData.images?.every((img: any) => img.alt),
    hasInternalLinks: pageData.internalLinks && pageData.internalLinks.length > 0
  };

  Object.values(checks).forEach(passed => {
    if (passed) score += 11.11; // 100 / 9 checks
  });

  return {
    score: Math.round(score),
    checks,
    recommendations: Object.entries(checks)
      .filter(([_, passed]) => !passed)
      .map(([check]) => check)
  };
};

export const generateBreadcrumbSchema = (items: Array<{name: string; url: string}>): any => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.astirpassage.com${item.url}`
    }))
  };
};

export const generateLocalBusinessSchema = (): any => {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Astir Passage",
    "image": "https://www.astirpassage.com/logo.webp",
    "@id": "https://www.astirpassage.com",
    "url": "https://www.astirpassage.com",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Travel Street",
      "addressLocality": "New Delhi",
      "addressRegion": "DL",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6139,
      "longitude": 77.2090
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }],
    "sameAs": [
      "https://www.facebook.com/astirpassage",
      "https://www.instagram.com/astirpassage",
      "https://twitter.com/astirpassage"
    ]
  };
};
