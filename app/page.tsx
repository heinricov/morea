import CtaSection from "./components/cta";
import HeroSection from "./components/hero";
import ListBlogSection from "./components/list-blog";
import ListTemplateSection from "./components/list-template";
import PricingSection from "./components/pricing";
import TestimonialSection from "./components/testimonials";

export default function Home() {
  return (
    <section className="">
      <HeroSection
        heading="Morea"
        description="Morea is a template website built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project."
        image={{
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          alt: "Hero section demo image showing interface components",
        }}
      />
      <ListTemplateSection
        tagline="Latest Updates"
        heading="Template Website"
        description="Morea is a template website built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project."
      />
      <PricingSection />
      <TestimonialSection />
      <ListBlogSection
        tagline="Latest Updates"
        heading="Blog Posts"
        description="Morea is a template website built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project."
        buttonText="View all articles"
        buttonUrl="#"
      />
      <CtaSection />
    </section>
  );
}
