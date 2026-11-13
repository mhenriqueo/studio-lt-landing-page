/**
 * Dados centralizados dos serviços e das galerias.
 *
 * Para trocar uma foto: substitua o arquivo em public/images/servicos/<categoria>/
 * As galerias são descobertas automaticamente durante o desenvolvimento/build. Arquivos "temporaria-NN" são imagens TEMPORÁRIAS
 * (ilustrativas, não são trabalhos reais do estúdio) e devem ser trocadas pelas
 * fotografias definitivas. Arquivos "imagem-NN" são fotografias reais do estúdio.
 */

import galleryManifest from "./gallery-manifest.json";

export type Foto = { src: string; alt: string; temporaria?: boolean };

export type Servico = {
  slug: string;
  nome: string;
  titulo: string;
  descricao: string;
  metaTitulo: string;
  metaDescricao: string;
  previa: string;
  fotos: Foto[];
};

const base = "/images/servicos";

const serviceDetails: Omit<Servico, "fotos">[] = [
  {
    slug: "casamento",
    nome: "Casamento",
    titulo: "Fotografia de Casamento",
    descricao:
      "O dia mais importante da sua vida merece ser eternizado. Cobertura completa e emocionante do seu casamento.",
    metaTitulo: "Fotografia de Casamento em Osasco | Studio L & T",
    metaDescricao:
      "Fotografia de casamento em Osasco/SP com o Studio L & T: cerimônia, festa e cada emoção do grande dia registrados com sensibilidade.",
    previa: `${base}/casamento/temporaria-01.jpg`,
  },
  {
    slug: "casamento-civil",
    nome: "Casamento Civil",
    titulo: "Fotografia de Casamento Civil",
    descricao:
      "O sim que muda tudo, registrado com delicadeza. Cobertura da cerimônia civil, dos detalhes e dos abraços de quem estava lá.",
    metaTitulo: "Fotografia de Casamento Civil em Osasco | Studio L & T",
    metaDescricao:
      "A cerimônia no cartório, as assinaturas, as alianças e a emoção do sim: o Studio L & T registra o seu casamento civil em Osasco com delicadeza.",
    previa: `${base}/casamento-civil/temporaria-01.jpg`,
  },
  {
    slug: "eventos",
    nome: "Eventos",
    titulo: "Fotografia de Eventos",
    descricao:
      "Cada detalhe imortalizado. Cobertura fotográfica completa para casamentos, festas e celebrações.",
    metaTitulo: "Fotografia de Eventos em Osasco | Studio L & T",
    metaDescricao:
      "Cobertura fotográfica de casamentos, festas e celebrações em Osasco/SP. O Studio L & T registra cada detalhe para que nenhum momento se perca.",
    previa: `${base}/eventos/temporaria-01.jpg`,
  },
  {
    slug: "gestante",
    nome: "Gestante",
    titulo: "Fotografia Gestante",
    descricao:
      "A beleza da vida que cresce. Ensaios delicados e afetivos para eternizar a espera do seu bebê.",
    metaTitulo: "Ensaio Gestante em Osasco | Studio L & T",
    metaDescricao:
      "Ensaio gestante no Studio L & T, em Osasco: fotografias delicadas e afetivas para eternizar a espera do seu bebê.",
    previa: `${base}/gestante/imagem-01.jpg`,
  },
  {
    slug: "smash-the-cake",
    nome: "Smash the Cake",
    titulo: "Smash the Cake",
    descricao:
      "Diversão e bagunça memoráveis. Um ensaio leve e divertido para celebrar o primeiro aninho.",
    metaTitulo: "Smash the Cake em Osasco | Studio L & T",
    metaDescricao:
      "Um ensaio leve e divertido para celebrar o primeiro aninho: o Smash the Cake do Studio L & T, em Osasco, com bolo, diversão e bagunça memoráveis.",
    previa: `${base}/smash-the-cake/imagem-01.jpg`,
  },
  {
    slug: "ensaio-kids",
    nome: "Ensaio Kids",
    titulo: "Ensaio Kids",
    descricao:
      "Momentos de pureza e alegria. Retratos espontâneos que guardam a essência de cada fase da infância.",
    metaTitulo: "Ensaio Kids em Osasco | Studio L & T",
    metaDescricao:
      "Retratos infantis espontâneos e cheios de alegria, feitos pelo Studio L & T em Osasco para guardar a essência de cada fase da infância.",
    previa: `${base}/ensaio-kids/imagem-01.jpg`,
  },
  {
    slug: "newborn",
    nome: "Newborn",
    titulo: "Ensaio Newborn",
    descricao:
      "Os primeiros dias, para sempre. Um ensaio sereno e acolhedor que guarda cada detalhe do seu recém-nascido.",
    metaTitulo: "Ensaio Newborn em Osasco | Studio L & T",
    metaDescricao:
      "Ensaio newborn em Osasco com o Studio L & T: fotografias serenas e acolhedoras dos primeiros dias do seu recém-nascido.",
    previa: `${base}/newborn/temporaria-01.jpg`,
  },
  {
    slug: "casal-familiar",
    nome: "Casal / Familiar",
    titulo: "Ensaios de Casal e Familiar",
    descricao:
      "Amor e união em cada clique. Ensaios que celebram a conexão entre quem você mais ama.",
    metaTitulo: "Ensaio de Casal e Família em Osasco | Studio L & T",
    metaDescricao:
      "Ensaios de casal e família no Studio L & T, em Osasco: o amor, a união e a conexão entre quem você mais ama registrados em cada clique.",
    previa: `${base}/casal-familiar/imagem-03.jpeg`,
  },
  {
    slug: "datas-comemorativas",
    nome: "Datas Comemorativas",
    titulo: "Ensaios de Datas Comemorativas",
    descricao:
      "Cada data especial merece um registro único. Ensaios temáticos para Natal, Páscoa, Dia das Mães e outras celebrações.",
    metaTitulo: "Ensaios de Datas Comemorativas em Osasco | Studio L & T",
    metaDescricao:
      "Natal, Páscoa, Dia das Mães e outras datas especiais ganham ensaios temáticos no Studio L & T, estúdio de fotografia em Osasco/SP.",
    previa: `${base}/datas-comemorativas/temporaria-01.jpg`,
  },
  {
    slug: "bday",
    nome: "B-Day",
    titulo: "B-Day",
    descricao:
      "Celebrações que merecem ser lembradas. Registramos a alegria, os detalhes e a emoção de cada aniversário.",
    metaTitulo: "Fotografia de Aniversário B-Day em Osasco | Studio L & T",
    metaDescricao:
      "Fotografia de aniversário B-Day em Osasco: o Studio L & T registra a alegria, os detalhes e a emoção de cada celebração.",
    previa: `${base}/bday/imagem-01.jpg`,
  },
];

const categoryCaptions: Record<string, string> = {
  gestante: "Ensaio Gestante",
  newborn: "Ensaio Newborn",
  "casal-familiar": "Ensaio Casal / Familiar",
};
const existingCaptions: Record<string, string> = {
  [`${base}/casal-familiar/imagem-01.jpg`]: "Mãe e Filho",
  [`${base}/casal-familiar/imagem-02.jpg`]: "Mãe e Filho",
  [`${base}/bday/imagem-01.jpg`]: "Ensaio B-Day Kids",
};

export const servicos: Servico[] = serviceDetails.map((service) => {
  const paths = galleryManifest[service.slug as keyof typeof galleryManifest] ?? [];
  const fotos: Foto[] = paths.map((src) => {
    const filename = decodeURIComponent(src.split("/").at(-1) ?? "");
    const temporaria = /^temporaria-/i.test(filename);
    const caption = temporaria && service.slug === "casal-familiar"
      ? "Ensaio Familiar"
      : existingCaptions[src] ?? categoryCaptions[service.slug] ?? service.nome;
    return {
      src,
      alt: temporaria ? `${caption} (imagem temporária)` : caption,
      ...(temporaria ? { temporaria: true } : {}),
    };
  });
  return {
    ...service,
    previa: paths.includes(service.previa) ? service.previa : paths[0] ?? "",
    fotos,
  };
});

export const getServico = (slug: string) => servicos.find((s) => s.slug === slug);
