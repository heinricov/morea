import { Badge } from "@/components/ui/badge";

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

interface PortfolioCardProps {
  /**
   * Data portfolio item yang akan ditampilkan dalam card
   */
  portfolioItem: PortfolioItem;
}

/**
 * Komponen card untuk menampilkan portfolio item individual
 * Desain mirip dengan template-card dengan overlay dan layout yang sama
 */
export default function PortfolioCard({ portfolioItem }: PortfolioCardProps) {
  return (
    <div
      key={portfolioItem.id}
      className="relative aspect-16/9 w-full rounded-xl overflow-hidden group"
    >
      <a
        href={portfolioItem.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        <img
          src={portfolioItem.image}
          alt={portfolioItem.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Status Badge - Top Right */}
        <div className="absolute top-4 right-4">
          <Badge
            variant="default"
            className="text-xs bg-green-600 hover:bg-green-700"
          >
            Completed
          </Badge>
        </div>

        {/* Content - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <Badge variant="secondary" className="mb-2 text-xs">
            {portfolioItem.category}
          </Badge>
          <h3 className="text-lg font-semibold line-clamp-2 mb-1">
            {portfolioItem.title}
          </h3>
          <p className="text-sm text-white/80 line-clamp-1">
            {portfolioItem.client}
          </p>
        </div>
      </a>
    </div>
  );
}