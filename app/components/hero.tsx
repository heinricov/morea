"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { templateData } from "@/lib/static/template-data";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

export default function HeroSection({
  badge = "✨ Your Website Builder",
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) {
  // Filter templates with heroBanner: "true"
  const heroTemplates = templateData.filter(
    (template) => template.heroBanner === "true"
  );

  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 10 seconds
  useEffect(() => {
    if (heroTemplates.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heroTemplates.length
      );
    }, 5000); //durasi

    return () => clearInterval(interval);
  }, [heroTemplates.length]);

  // Get current hero image
  const currentHeroImage =
    heroTemplates.length > 0
      ? {
          src: heroTemplates[currentImageIndex].image,
          alt: heroTemplates[currentImageIndex].title,
        }
      : image;
  return (
    <section className="py-5 pb-24 md:py-18">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-md">
            <img
              src={currentHeroImage.src}
              alt={currentHeroImage.alt}
              className="h-full w-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
