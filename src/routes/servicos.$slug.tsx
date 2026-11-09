import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import GaleriaFotos from "@/components/GaleriaFotos";
import { getServico } from "@/data/servicos";
import { WHATSAPP_URL } from "@/data/contato";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const servico = getServico(params.slug);
    if (!servico) throw notFound();
    return { servico };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.servico;
    if (!s) return { meta: [{ title: "Página não encontrada | Studio L & T" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: s.metaTitulo },
        { name: "description", content: s.metaDescricao },
        { property: "og:title", content: s.metaTitulo },
        { property: "og:description", content: s.metaDescricao },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicoPage,
});

function ServicoPage() {
  const { servico } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-gold-100">
      <Navbar />

      <main className="section-padding pt-32 sm:pt-36 fabric-texture">
        <div className="max-w-7xl 2xl:max-w-[1440px] min-[120rem]:max-w-[1760px] mx-auto">
          <Link
            to="/"
            hash="servicos"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-700 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </Link>

          <div className="mt-8 animate-fade-in-up">
            <h1 className="section-title">{servico.titulo}</h1>
            <p className="mt-4 text-center text-gold-700/80 max-w-2xl mx-auto leading-relaxed">
              {servico.descricao}
            </p>
            <div className="divider-ornament" />
          </div>

          <div className="mt-10">
            <GaleriaFotos fotos={servico.fotos} />
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-gold-800">Gostou do nosso trabalho?</h2>
            <p className="mt-3 text-gold-600/80 max-w-xl mx-auto">
              Entre em contato e vamos registrar seu momento especial.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
