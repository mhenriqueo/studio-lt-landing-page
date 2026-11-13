import { describe, expect, it } from "vitest";

import { servicos } from "@/data/servicos";
import { businessJsonLd, HOME_TITLE, pageHead, servicoHead, HOME_DESCRIPTION, websiteJsonLd } from "@/lib/seo";

const meta = (head: ReturnType<typeof pageHead>, key: string) =>
  head.meta.find((m) => ("property" in m && m.property === key) || ("name" in m && m.name === key));

describe("SEO", () => {
  it("home canonical and og:url are the absolute official root URL", () => {
    const head = pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" });
    expect(head.links).toEqual([{ rel: "canonical", href: "https://studio-lt-landing-page.vercel.app/" }]);
    expect(meta(head, "og:url")).toMatchObject({ content: "https://studio-lt-landing-page.vercel.app/" });
  });

  it("home title and og:title are the new official title", () => {
    const head = pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" });
    const expected = "Studio L & T | Estúdio de Fotografia e Ensaios em Osasco";
    expect(head.meta[0]).toEqual({ title: expected });
    expect(meta(head, "og:title")).toMatchObject({ content: expected });
  });

  it("each gallery canonical points to its own route", () => {
    const civil = servicos.find((s) => s.slug === "casamento-civil")!;
    expect(servicoHead(civil).links[0]?.href).toBe(
      "https://studio-lt-landing-page.vercel.app/servicos/casamento-civil",
    );
  });

  it("gallery titles and descriptions are unique and mention Osasco", () => {
    const titles = servicos.map((s) => s.metaTitulo);
    const descs = servicos.map((s) => s.metaDescricao);
    expect(new Set(titles).size).toBe(servicos.length);
    expect(new Set(descs).size).toBe(servicos.length);
    for (const t of titles) expect(t).toContain("Osasco");
  });

  it("gallery og:image is the absolute URL of the category preview photo", () => {
    const newborn = servicos.find((s) => s.slug === "newborn")!;
    expect(meta(servicoHead(newborn), "og:image")).toMatchObject({
      content: `https://studio-lt-landing-page.vercel.app${newborn.previa}`,
    });
  });

  it("no public page is noindex", () => {
    for (const s of servicos) expect(meta(servicoHead(s), "robots")).toMatchObject({ content: "index, follow" });
  });

  it("gallery titles follow the official brand pattern", () => {
    const expected = [
      "Fotografia de Casamento em Osasco | Studio L & T",
      "Fotografia de Casamento Civil em Osasco | Studio L & T",
      "Fotografia de Eventos em Osasco | Studio L & T",
      "Ensaio Gestante em Osasco | Studio L & T",
      "Smash the Cake em Osasco | Studio L & T",
      "Ensaio Kids em Osasco | Studio L & T",
      "Ensaio Newborn em Osasco | Studio L & T",
      "Ensaio de Casal e Família em Osasco | Studio L & T",
      "Ensaios de Datas Comemorativas em Osasco | Studio L & T",
      "Fotografia de Aniversário B-Day em Osasco | Studio L & T",
    ];
    expect(servicos.map((s) => s.metaTitulo)).toEqual(expected);
    for (const s of servicos) {
      expect(s.metaTitulo).not.toContain("- SP");
      const head = servicoHead(s);
      expect(head.meta[0]).toEqual({ title: s.metaTitulo });
      expect(meta(head, "og:title")).toMatchObject({ content: s.metaTitulo });
      expect(meta(head, "twitter:title")).toMatchObject({ content: s.metaTitulo });
    }
  });

  it("home title is unchanged and differs from every gallery title", () => {
    expect(HOME_TITLE).toBe("Studio L & T | Estúdio de Fotografia e Ensaios em Osasco");
    for (const s of servicos) expect(s.metaTitulo).not.toBe(HOME_TITLE);
  });

  it("structured data has no invented street address or opening hours", () => {
    const data = businessJsonLd(servicos);
    expect(data.address).toEqual({
      "@type": "PostalAddress",
      addressLocality: "Osasco",
      addressRegion: "SP",
      addressCountry: "BR",
    });
    expect(data).not.toHaveProperty("openingHours");
    expect(data.hasOfferCatalog.itemListElement).toHaveLength(servicos.length);
  });

  it("brand is written exactly 'Studio L & T' (never all caps) in every page's metadata and structured data", () => {
    const heads = [pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }), ...servicos.map(servicoHead)];
    const all = JSON.stringify([heads, businessJsonLd(servicos), websiteJsonLd()]);
    expect(all).not.toContain("STUDIO");
    expect(HOME_DESCRIPTION).toContain("Studio L & T");
    for (const s of servicos) expect(s.metaDescricao).toContain("Studio L & T");
    expect(businessJsonLd(servicos).name).toBe("Studio L & T");
  });

  it("home WebSite structured data uses the official name and URL", () => {
    expect(websiteJsonLd()).toMatchObject({
      "@type": "WebSite",
      name: "Studio L & T",
      url: "https://studio-lt-landing-page.vercel.app/",
    });
  });
});
