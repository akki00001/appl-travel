





















import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Astir Passage - Best Travel Packages & Tour Deals',
  description = 'Book amazing travel packages with Astir Passage. Get best deals on international and domestic tour packages including Bali, Singapore, Maldives, Thailand & more.',
  keywords = 'travel packages, tour packages, holiday packages, international tour packages, domestic tour packages',
  image = '/public/images/logo.webp',
  url = 'https://www.astirpassage.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Astir Passage',
  tags = [],
  canonicalUrl
}) => {
  const siteUrl = 'https://www.astirpassage.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Astir Passage" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:url" content={fullUrl} />
      
      {/* Article specific */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime} />
          <meta property="article:author" content={author} />
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? "Article" : "WebPage",
          "headline": title,
          "description": description,
          "image": fullImage,
          "url": fullUrl,
          "publisher": {
            "@type": "Organization",
            "name": "Astir Passage",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/public/images/logo.webp`
            }
          },
          ...(type === 'article' && {
            "datePublished": publishedTime,
            "dateModified": modifiedTime,
            "author": {
              "@type": "Person",
              "name": author
            }
          })
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
