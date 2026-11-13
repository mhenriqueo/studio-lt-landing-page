/**
 * Configuração central de SEO (títulos, canônicas, Open Graph e dados estruturados).
 * Todas as URLs são absolutas e apontam para o endereço oficial do site.
 */
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/data/contato";
import type { Servico } from "@/data/servicos";

export const SITE_URL = "https://studio-lt-landing-page.vercel.app";
export const SITE_NAME = "Studio L & T";

export const HOME_TITLE = "Studio L & T | Estúdio de Fotografia e Ensaios em Osasco";
export const HOME_DESCRIPTION =
  "O Studio L & T é um estúdio de fotografia em Osasco/SP especializado em casamentos, eventos e ensaios de gestante, newborn, infantil, família e datas especiais.";
export const HOME_IMAGE = "/images/hero/imagem-principal.jpeg";

/** Converte um caminho do site ("/servicos/casamento") em URL absoluta oficial. */
export const absoluteUrl = (path: string) =>
  `${SITE_URL}${encodeURI(path.startsWith("/") ? path : `/${path}`)}`;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Opcional: título diferente só para o X/Twitter (padrão: o mesmo title). */
  twitterTitle?: string | undefined;
  image?: string | undefined;
  imageAlt?: string | undefined;
};

/** Metadados completos de uma página pública: title, description, canônica, Open Graph e Twitter. */
export function pageHead({ title, description, path, twitterTitle, image, imageAlt }: PageSeo) {
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : undefined;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      ...(imageUrl
        ? [
            { property: "og:image", content: imageUrl },
            { property: "og:image:alt", content: imageAlt ?? title },
          ]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: twitterTitle ?? title },
      { name: "twitter:description", content: description },
      ...(imageUrl ? [{ name: "twitter:image", content: imageUrl }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const servicoPath = (slug: string) => `/servicos/${slug}`;

export function servicoHead(servico: Servico) {
  return pageHead({
    title: servico.metaTitulo,
    description: servico.metaDescricao,
    path: servicoPath(servico.slug),
    image: servico.previa || undefined,
    imageAlt: `${servico.titulo} - ${SITE_NAME}`,
  });
}

/** Dados estruturados (Schema.org) somente com informações reais já existentes no projeto. */
export function businessJsonLd(servicos: Servico[]) {
  const phone = WHATSAPP_URL.match(/wa\.me\/(\d+)/)?.[1];
  const instagram = (INSTAGRAM_URL.split("?")[0] ?? INSTAGRAM_URL).replace(/\/?$/, "/");
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#studio`,
    name: SITE_NAME,
    description: HOME_DESCRIPTION,
    url: `${SITE_URL}/`,
    image: absoluteUrl(HOME_IMAGE),
    logo: absoluteUrl("/web-app-manifest-512x512.png"),
    ...(phone ? { telephone: `+${phone}` } : {}),
    sameAs: [instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Osasco",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: "Osasco" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de fotografia",
      itemListElement: servicos.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.titulo,
          description: s.descricao,
          url: absoluteUrl(servicoPath(s.slug)),
        },
      })),
    },
  };
}

/** Dados estruturados WebSite da página inicial: informa ao Google o nome oficial do site. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#studio` },
  };
}
