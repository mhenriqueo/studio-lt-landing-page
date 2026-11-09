import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const TITLE = "Studio L & T Fotografia - Registrando momentos, criando memórias";
const DESC =
  "Ensaios fotográficos profissionais para eternizar momentos únicos. Ensaio Kids, Gestantes, Smash the Cake, Aniversários e Eventos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "fotografia, ensaio fotográfico, ensaio kids, gestantes, smash the cake, aniversários, eventos, estúdio fotográfico" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: "Ensaios fotográficos profissionais para eternizar momentos únicos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
