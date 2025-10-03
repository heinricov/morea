"use client";

import PortfolioCard from "../../components/cards/portfolio-card";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
  client: string;
  completedDate: string;
  technologies: string[];
}

interface PortfolioProps {
  /**
   * Judul section portfolio
   */
  heading?: string;
  /**
   * Deskripsi section portfolio
   */
  description?: string;
  /**
   * Data portfolio items
   */
  portfolioItems?: PortfolioItem[];
}

// Data dummy portfolio untuk testing
const defaultPortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Website Corporate PT. Mitra Keluarga",
    description:
      "Website corporate modern dengan fitur booking online dan informasi layanan kesehatan lengkap.",
    category: "Website",
    image: "/public/product/rs-mitra-keluarga/hero.png",
    url: "https://mitrakeluarga.com",
    client: "PT. Mitra Keluarga",
    completedDate: "Des 2023",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"]
  },
  {
    id: 2,
    title: "Undangan Digital Pernikahan Sarah & John",
    description:
      "Undangan digital interaktif dengan fitur RSVP, galeri foto, dan live streaming.",
    category: "Undangan",
    image: "/public/product/marriott/hero.png",
    url: "https://sarah-john-wedding.com",
    client: "Sarah & John",
    completedDate: "Nov 2023",
    technologies: ["React", "Firebase", "Framer Motion", "CSS3"]
  },
  {
    id: 3,
    title: "Website E-commerce Tesla Indonesia",
    description:
      "Platform e-commerce untuk penjualan kendaraan listrik dengan konfigurasi custom.",
    category: "Website",
    image: "/public/product/tesla/hero.png",
    url: "https://tesla.com/id",
    client: "Tesla Indonesia",
    completedDate: "Jan 2024",
    technologies: ["Vue.js", "Nuxt.js", "Stripe", "MongoDB"]
  },
  {
    id: 4,
    title: "Undangan Digital Graduation Party",
    description:
      "Undangan wisuda dengan tema elegant dan fitur countdown timer.",
    category: "Undangan",
    image: "/public/product/harvard/hero.png",
    url: "https://graduation-party.com",
    client: "Harvard University",
    completedDate: "Okt 2023",
    technologies: ["HTML5", "CSS3", "JavaScript", "AOS"]
  },
  {
    id: 5,
    title: "Website Shell Global Indonesia",
    description:
      "Website corporate untuk perusahaan energi dengan fokus pada sustainability.",
    category: "Website",
    image: "/public/product/shell-global/hero.png",
    url: "https://shell.co.id",
    client: "Shell Indonesia",
    completedDate: "Feb 2024",
    technologies: ["Angular", "TypeScript", "SCSS", "Node.js"]
  },
  {
    id: 6,
    title: "Website Eiger Adventure",
    description: "Website e-commerce untuk produk outdoor dan adventure gear.",
    category: "Website",
    image: "/public/product/eiger/hero.png",
    url: "https://eiger.co.id",
    client: "Eiger Adventure",
    completedDate: "Mar 2024",
    technologies: ["React", "Redux", "Tailwind CSS", "Express.js"]
  }
];

/**
 * Komponen Portfolio untuk menampilkan koleksi website dan undangan yang telah dibuat
 * Desain profesional dan sederhana dengan grid layout yang responsive
 */
export default function Portfolio({
  heading = "Portfolio Kami",
  description = "Koleksi website dan undangan digital yang telah kami buat untuk berbagai klien. Setiap project dibuat dengan perhatian detail dan teknologi terkini.",
  portfolioItems = defaultPortfolioItems
}: PortfolioProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left">
          <h2 className="mb-3 text-primary text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((portfolioItem) => (
            <PortfolioCard
              key={portfolioItem.id}
              portfolioItem={portfolioItem}
            />
          ))}
        </div>

        {/* Bottom Stats - Simplified */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {
                  portfolioItems.filter((item) => item.category === "Website")
                    .length
                }
                +
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Website
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {
                  portfolioItems.filter((item) => item.category === "Undangan")
                    .length
                }
                +
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Undangan Digital
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {portfolioItems.length}+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Total Project
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                100%
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Kepuasan Klien
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
