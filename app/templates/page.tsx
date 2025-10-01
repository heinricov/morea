import { Metadata } from "next";
import { generateMetadata, generateStructuredData } from "@/lib/seo";
import ListTemplateSection from "../components/list-template";

export const metadata: Metadata = generateMetadata({
  title: "Template Website Profesional - Koleksi Template Modern & Responsive",
  description:
    "Jelajahi koleksi template website profesional dari Morea. Template modern, responsive, dan SEO-friendly untuk company profile, toko online, sekolah, rumah sakit, dan berbagai kebutuhan bisnis.",
  keywords: [
    "template website",
    "template company profile",
    "template toko online",
    "template website sekolah",
    "template rumah sakit",
    "template responsive",
    "template modern",
    "website template indonesia",
  ],
  url: "/templates",
  type: "website",
});

export default function TemplatesPage() {
  const structuredData = generateStructuredData({
    type: "WebPage",
    title:
      "Template Website Profesional - Koleksi Template Modern & Responsive",
    description:
      "Jelajahi koleksi template website profesional dari Morea. Template modern, responsive, dan SEO-friendly untuk berbagai kebutuhan bisnis.",
    url: "/templates",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Template Website Profesional
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pilih dari koleksi template website modern dan responsive kami.
              Semua template telah dioptimalkan untuk SEO dan siap digunakan
              untuk berbagai kebutuhan bisnis.
            </p>
          </div>

          <ListTemplateSection
            tagline="Koleksi Template"
            heading="Template Website Terbaru"
            description="Template website profesional dengan desain modern, responsive, dan SEO-friendly. Cocok untuk berbagai jenis bisnis dan kebutuhan website."
          />
        </div>
      </section>
    </>
  );
}
