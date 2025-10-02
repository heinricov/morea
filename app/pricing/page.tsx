import { Metadata } from "next";
import { generateMetadata, generateStructuredData } from "@/lib/seo";
import PricingSection from "../components/pricing";

export const metadata: Metadata = generateMetadata({
  title: "Harga Template Website - Paket Terjangkau untuk Semua Kebutuhan",
  description:
    "Lihat paket harga template website Morea yang terjangkau. Mulai dari template gratis hingga paket premium dengan fitur lengkap. Pilih paket yang sesuai dengan kebutuhan bisnis Anda.",
  keywords: [
    "harga template website",
    "paket template website",
    "template website murah",
    "template website gratis",
    "harga website template",
    "paket website template"
  ],
  url: "/pricing",
  type: "website"
});

export default function PricingPage() {
  const structuredData = generateStructuredData({
    type: "WebPage",
    title: "Harga Template Website - Paket Terjangkau untuk Semua Kebutuhan",
    description:
      "Lihat paket harga template website Morea yang terjangkau. Mulai dari template gratis hingga paket premium dengan fitur lengkap.",
    url: "/pricing"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Harga Template Website
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pilih paket template website yang sesuai dengan kebutuhan dan
              budget Anda. Semua paket sudah termasuk template responsive,
              SEO-friendly, dan dukungan teknis.
            </p>
          </div>
          <PricingSection />
        </div>
      </section>
    </>
  );
}
