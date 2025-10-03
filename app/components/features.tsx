import { Globe, Palette, Gift, Server } from "lucide-react";
import { FeatureCard } from "../../components/cards/feature-card";

const items = [
  {
    id: "layanan-website",
    icon: Globe,
    title: "Pembuatan Website",
    desc: "Layanan end-to-end: strategi, desain, development, dan peluncuran. Fokus pada performa, aksesibilitas, dan SEO.",
    badge: "Profesional"
  },
  {
    id: "template",
    icon: Palette,
    title: "Template Website",
    desc: "Koleksi template gratis dan berbayar yang modern, responsif, dan mudah dikustomisasi untuk berbagai kebutuhan.",
    badge: "Gratis & Pro"
  },
  {
    id: "undangan",
    icon: Gift,
    title: "Undangan Digital",
    desc: "Buat undangan digital yang elegan dan mudah dibagikan. Dukungan RSVP, galeri foto, dan peta lokasi.",
    badge: "Elegan"
  },
  {
    id: "api",
    icon: Server,
    title: "API Publik",
    desc: "Akses data template dan fitur undangan melalui endpoint publik untuk integrasi di proyek Anda.",
    badge: "Terbuka"
  }
];

export function Features() {
  return (
    <section id="layanan" className="border-b">
      <div className="mx-auto container max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="mb-3 text-primary text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Layanan Kami
          </h2>
          <p className="text-muted-foreground">
            Layanan yang kami sediakan untuk membantu Anda hadir online secara
            maksimal.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              badge={item.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
