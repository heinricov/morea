import { Badge } from "@/components/ui/badge";

interface Template {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  url: string;
  heroBanner: string;
  price: string;
}

interface TemplateCardProps {
  /**
   * Data template yang akan ditampilkan dalam card
   */
  template: Template;
}

/**
 * Komponen card untuk menampilkan template individual
 * Menampilkan gambar, kategori, judul, dan badge harga
 */
export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div
      key={template.id}
      className="relative aspect-16/9 w-full rounded-xl overflow-hidden group"
    >
      <a
        href={template.url}
        target="_blank"
        className="block h-full w-full"
      >
        <img
          src={template.image}
          alt={template.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 right-4">
          <Badge
            variant={
              template.price === "free"
                ? "default"
                : template.price === "pro"
                ? "secondary"
                : "destructive"
            }
            className="text-xs"
          >
            {template.price === "free"
              ? "Free"
              : template.price === "pro"
              ? "Pro"
              : "Exclusive"}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <Badge variant="secondary" className="mb-2 text-xs">
            {template.category}
          </Badge>
          <h3 className="text-lg font-semibold line-clamp-2">
            {template.title}
          </h3>
        </div>
      </a>
    </div>
  );
}