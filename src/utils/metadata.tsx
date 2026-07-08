import type { JSX } from "solid-js";

interface MetadataProps {
  // Required
  title: string;
  description: string;
  url: string;

  // Optional
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
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
  const image =
    props.image || "https://www.balancedscale.com/scale-balanced.svg";
  const imageAlt = props.imageAlt || "Balanced Scale Media";
  const type = props.type || "website";

  return (
    <>
      {/* Basic Meta */}
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      {props.keywords && <meta name="keywords" content={props.keywords} />}
      {props.author && <meta name="author" content={props.author} />}
      {props.publishedDate && (
        <meta name="article:published_time" content={props.publishedDate} />
      )}
      {props.modifiedDate && (
        <meta name="article:modified_time" content={props.modifiedDate} />
      )}
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
      {props.publishedDate && (
        <meta property="article:published_time" content={props.publishedDate} />
      )}
      {props.modifiedDate && (
        <meta property="article:modified_time" content={props.modifiedDate} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@balancedscale" />
      <meta name="twitter:creator" content="@balancedscale" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:domain" content="balancedscale.com" />

      {/* LLM & AI Metadata - Help AI understand content */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* Enhanced Discovery */}
      <meta name="application-name" content="Balanced Scale Media" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="language" content="English" />
      <meta name="audience" content="General" />

      {/* Structured Data (JSON-LD) */}
      {props.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(props.structuredData, null, 0).replace(/</g, "\\u003c")}
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
    "@type": "Organization",
    name: "Balanced Scale Media",
    alternateName: "Balanced Scale",
    legalName: "Balanced Scale Media LLC",
    url: "https://www.balancedscale.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.balancedscale.com/scale-balanced.svg",
      width: "512",
      height: "512",
    },
    description:
      "Balanced Scale Media is a digital media company building web applications and providing technical consultation to businesses all over the globe.",
    foundingDate: "2024",
    areaServed: "Worldwide",
    slogan: "Digital media company",
    email: "boz@balancedscale.com",
    knowsAbout: [
      "Web Applications",
      "Software Development",
      "Technical Consulting",
      "Digital Media",
    ],
  };
}
