import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { servicos } from "@/data/servicos";
import { pageHead, servicoHead, HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo";

const read = (file: string) => readFileSync(resolve(__dirname, "../../public", file), "utf8");
const sitemap = read("sitemap.xml");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

describe("sitemap.xml", () => {
  it("lists exactly the 11 public pages, without duplicates", () => {
    expect(locs).toHaveLength(11);
    expect(new Set(locs).size).toBe(11);
  });

  it("every URL equals the canonical URL of its page", () => {
    const canonicals = [
      pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }).links[0]!.href,
      ...servicos.map((s) => servicoHead(s).links[0]!.href),
    ];
    expect([...locs].sort()).toEqual([...canonicals].sort());
  });

  it("has no invented lastmod dates and no query parameters", () => {
    expect(sitemap).not.toContain("<lastmod>");
    for (const loc of locs) expect(loc).not.toContain("?");
  });
});

describe("robots.txt", () => {
  const robots = read("robots.txt");

  it("allows every crawler and points to the official sitemap", () => {
    expect(robots).toMatch(/User-agent: \*\nAllow: \//);
    expect(robots).toContain("Sitemap: https://studio-lt-landing-page.vercel.app/sitemap.xml");
  });

  it("blocks nothing", () => {
    expect(robots).not.toMatch(/Disallow:\s*\S/);
    expect(robots.toLowerCase()).not.toContain("noindex");
  });
});
