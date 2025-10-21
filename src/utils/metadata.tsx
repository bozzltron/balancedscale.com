import type { JSX } from "solid-js";

interface MetadataProps {
  // Required
  title: string;
  description: string;
  url: string;
  
  // Optional
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'music.song' | 'music.album' | 'music.musician' | 'article' | 'profile';
  keywords?: string;
  author?: string;
  modifiedDate?: string;
  publishedDate?: string;
  
  // Additional structured data
  structuredData?: Record<string, unknown>;
}

/**
 * StandardMetadata - Reusable metadata component for all pages
 * 
 * Includes: Title, Description, Open Graph, Twitter Card, and optional JSON-LD
 * Zero dependencies, fully type-safe
 */
export function StandardMetadata(props: MetadataProps): JSX.Element {
  const image = props.image || 'https://www.balancedscale.com/scale-balanced.svg';
  const imageAlt = props.imageAlt || 'Balanced Scale Media';
  const type = props.type || 'website';
  
  return (
    <>
      {/* Basic Meta */}
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      {props.keywords && <meta name="keywords" content={props.keywords} />}
      {props.author && <meta name="author" content={props.author} />}
      {props.publishedDate && <meta name="article:published_time" content={props.publishedDate} />}
      {props.modifiedDate && <meta name="article:modified_time" content={props.modifiedDate} />}
      <link rel="canonical" href={props.url} />
      
      {/* Open Graph - Essential for social sharing */}
      <meta property="og:site_name" content="Balanced Scale Media" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:url" content={props.url} />
      <meta property="og:locale" content="en_US" />
      {props.publishedDate && <meta property="article:published_time" content={props.publishedDate} />}
      {props.modifiedDate && <meta property="article:modified_time" content={props.modifiedDate} />}
      
      {/* Twitter Card - Enhanced for music content */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@balancedscale" />
      <meta name="twitter:creator" content="@balancedscale" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:domain" content="balancedscale.com" />
      
      {/* LLM & AI Metadata - Help AI understand content */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Discovery */}
      <meta name="application-name" content="Balanced Scale Media" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="language" content="English" />
      <meta name="audience" content="Music Fans, Press, Artists" />
      
      {/* Music Industry Specific */}
      <meta property="music:musician" content="https://www.balancedscale.com/artists" />
      <meta name="music:genre" content="Independent, Alternative, Rock" />
      
      {/* Structured Data (JSON-LD) */}
      {props.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(props.structuredData, null, 0).replace(/</g, '\\u003c')}
        </script>
      )}
    </>
  );
}

/**
 * Helper to generate organization structured data
 */
export function createOrganizationData() {
  return {
    "@context": "https://schema.org",
    "@type": "RecordLabel",
    "name": "Balanced Scale Media",
    "alternateName": "Balanced Scale",
    "legalName": "Balanced Scale Media LLC",
    "url": "https://www.balancedscale.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.balancedscale.com/scale-balanced.svg",
      "width": "512",
      "height": "512"
    },
    "description": "Austin-based independent record label. 100% revenue to artists, zero recoupable costs. Artist-first values inspired by Steve Albini's 'The Problem with Music.'",
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    },
    "areaServed": "Worldwide",
    "slogan": "Independent record label that puts artists first",
    "email": "promo@balancedscale.com",
    "knowsAbout": ["Independent Music", "Artist Rights", "Music Production", "Alternative Rock", "Indie Rock"],
    "sameAs": [
      "https://mozworth.music",
      "https://mozworth.bandcamp.com"
    ]
  };
}

/**
 * Helper to generate MusicGroup structured data for artists
 */
export function createArtistData(props: {
  name: string;
  url: string;
  image: string;
  description: string;
  genre: string[];
  location?: { city: string; state?: string; country: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": props.name,
    "url": props.url,
    "image": props.image,
    "description": props.description,
    "genre": props.genre,
    "recordLabel": {
      "@type": "RecordLabel",
      "name": "Balanced Scale Media"
    },
    ...(props.location && {
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": props.location.city,
          ...(props.location.state && { "addressRegion": props.location.state }),
          "addressCountry": props.location.country
        }
      }
    })
  };
}

/**
 * Helper to generate NewsArticle structured data for press releases
 */
export function createPressReleaseData(props: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": props.headline,
    "description": props.description,
    "datePublished": props.datePublished,
    "dateModified": props.dateModified || props.datePublished,
    "author": {
      "@type": "Organization",
      "name": "Balanced Scale Media"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Balanced Scale Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.balancedscale.com/scale-balanced.svg"
      }
    },
    ...(props.image && { "image": props.image }),
    "url": props.url
  };
}

