import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/providers/layout-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Morea - Template Website Profesional & Modern",
    template: "%s | Morea",
  },
  description:
    "Morea menyediakan template website profesional dan modern untuk berbagai kebutuhan bisnis. Template siap pakai dengan desain responsive, mudah dikustomisasi, dan SEO-friendly. Mulai dari company profile, toko online, hingga website sekolah dan rumah sakit.",
  keywords: [
    "template website",
    "website template",
    "template company profile",
    "template toko online",
    "template website sekolah",
    "template rumah sakit",
    "website builder",
    "desain website",
    "template responsive",
    "template modern",
  ],
  authors: [{ name: "Morea Team" }],
  creator: "Morea",
  publisher: "Morea",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://morea.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://morea.com",
    title: "Morea - Template Website Profesional & Modern",
    description:
      "Morea menyediakan template website profesional dan modern untuk berbagai kebutuhan bisnis. Template siap pakai dengan desain responsive, mudah dikustomisasi, dan SEO-friendly.",
    siteName: "Morea",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Morea - Template Website Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morea - Template Website Profesional & Modern",
    description:
      "Template website profesional dan modern untuk berbagai kebutuhan bisnis. Siap pakai, responsive, dan SEO-friendly.",
    images: ["/og-image.jpg"],
    creator: "@morea",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Morea",
    description:
      "Morea menyediakan template website profesional dan modern untuk berbagai kebutuhan bisnis",
    url: "https://morea.com",
    logo: "https://morea.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Indonesian",
    },
    sameAs: [
      "https://twitter.com/morea",
      "https://facebook.com/morea",
      "https://instagram.com/morea",
    ],
    offers: {
      "@type": "Offer",
      description: "Template website profesional dan modern",
      price: "0",
      priceCurrency: "IDR",
    },
  };

  return (
    <html lang="id-ID" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
