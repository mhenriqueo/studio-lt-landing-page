import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

import { servicos } from "@/data/servicos";
import { businessJsonLd, HOME_DESCRIPTION, HOME_IMAGE, HOME_TITLE, pageHead, SITE_NAME } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      path: "/",
      image: HOME_IMAGE,
      imageAlt: `${SITE_NAME} - Estúdio de Fotografia em Osasco - SP`,
    });
    return {
      ...head,
      meta: [
        ...head.meta,
        { name: "keywords", content: "fotografia, ensaio fotográfico, ensaio kids, gestantes, smash the cake, aniversários, eventos, estúdio fotográfico" },
      ],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(businessJsonLd(servicos)) }],
    };
  },
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-gold-100">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
