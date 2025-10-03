import { Badge } from "@/components/ui/badge";
import { templateData } from "@/lib/static/template-data";
import TemplateCard from "../../components/cards/template-card";

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
  posts = templateData
}: Blog7Props) {
  return (
    <section className="px-5 border-b">
      <div className="container max-w-7xl mx-auto flex flex-col gap-10 py-28">
        <div className="text-left">
          <h2 className="mb-3 text-primary text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* card template */}
          {posts.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
