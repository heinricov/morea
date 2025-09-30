import { Badge } from "@/components/ui/badge";
import { templateData } from "@/lib/static/template-data";

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

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  posts?: Template[];
}

export default function ListTemplateSection({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  posts = templateData,
}: Blog7Props) {
  return (
    <section className="px-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="text-left">
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* card template */}
          {posts.map((template) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
