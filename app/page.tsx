import CtaSection from "./components/cta";
import { Features } from "./components/features";
import HeroSection from "./components/hero";
import InvitationSection from "./components/invitation";
import Portfolio from "./components/portfolio";
import ListTemplateSection from "./components/templates";
import TestimonialSection from "./components/testimonials";

export default function Home() {
  return (
    <section className="">
      <HeroSection />
      <Features />
      <ListTemplateSection
        tagline="Latest Updates"
        heading="Template Website"
        description="Kami menyediakan template website yang mudah di modifikasi dan di deploy seperti magang atau kost website yang juga sudah kami kustomisasi."
      />
      <Portfolio />
      <InvitationSection />
      <TestimonialSection />
      <CtaSection
        heading="Call to Action"
        description="Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time."
      />
    </section>
  );
}
