import { Metadata } from "next";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  url,
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
}: SEOProps): Metadata {
  const baseUrl = "https://morea.com";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      type,
      title,
      description,
      url: fullUrl,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
      section,
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateStructuredData({
  type,
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author,
  price,
  availability,
  brand,
}: {
  type: "Article" | "Product" | "WebPage" | "Organization";
  title: string;
  description: string;
  url?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  price?: string;
  availability?: string;
  brand?: string;
}) {
  const baseUrl = "https://morea.com";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImageUrl = image
    ? image.startsWith("http")
      ? image
      : `${baseUrl}${image}`
    : undefined;

  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: fullUrl,
    ...(fullImageUrl && { image: fullImageUrl }),
  };

  if (type === "Article") {
    return {
      ...baseData,
      ...(author && { author: { "@type": "Person", name: author } }),
      ...(publishedTime && { datePublished: publishedTime }),
      ...(modifiedTime && { dateModified: modifiedTime }),
      publisher: {
        "@type": "Organization",
        name: "Morea",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
    };
  }

  if (type === "Product") {
    const productData: any = {
      ...baseData,
      ...(brand && { brand: { "@type": "Brand", name: brand } }),
    };

    if (price || availability) {
      productData.offers = {
        "@type": "Offer",
        ...(price && { price, priceCurrency: "IDR" }),
        ...(availability && { availability }),
      };
    }

    return productData;
  }

  return baseData;
}
