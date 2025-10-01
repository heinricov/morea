import CtaSection from "./components/cta";
import HeroSection from "./components/hero";
import ListBlogSection from "./components/list-blog";
import ListTemplateSection from "./components/list-template";
import PricingSection from "./components/pricing";
import TestimonialSection from "./components/testimonials";

export default function Home() {
  return (
    <section className="">
      <HeroSection />
      <ListTemplateSection
        tagline="Latest Updates"
        heading="Template Website"
        description="Kami menyediakan template website yang mudah di modifikasi dan di deploy seperti magang atau kost website yang juga sudah kami kustomisasi."
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
