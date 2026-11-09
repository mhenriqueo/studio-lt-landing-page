import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { collectGalleryManifest, galleryCategories, galleryDirectory } from '../../scripts/generate-gallery-manifest.mjs';

const roots: string[] = [];
function fixture() {
  const root = mkdtempSync(resolve(tmpdir(), 'studio-gallery-'));
  roots.push(root);
  for (const category of galleryCategories) mkdirSync(resolve(root, galleryDirectory, category), { recursive: true });
  return root;
}
function add(root: string, category: string, name: string) {
  writeFileSync(resolve(root, galleryDirectory, category, name), 'test fixture');
}
afterEach(() => { for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });

describe('Folder-based galleries', () => {
  it('discovers additions and removals in all eight isolated categories with variable counts', () => {
    const root = fixture();
    galleryCategories.forEach((category, index) => {
      for (let n = 1; n <= index + 4; n++) add(root, category, `imagem-${n}.jpg`);
    });
    let manifest = collectGalleryManifest(root);
    expect(Object.keys(manifest)).toHaveLength(8);
    galleryCategories.forEach((category, index) => {
      expect(manifest[category]).toHaveLength(index + 4);
      expect(manifest[category]?.every((src) => src.startsWith(`/images/servicos/${category}/`))).toBe(true);
      add(root, category, 'imagem-99.jpg');
      rmSync(resolve(root, galleryDirectory, category, 'imagem-1.jpg'));
    });
    manifest = collectGalleryManifest(root);
    galleryCategories.forEach((category, index) => {
      expect(manifest[category]).toHaveLength(index + 4);
      expect(manifest[category]).toContain(`/images/servicos/${category}/imagem-99.jpg`);
      expect(manifest[category]).not.toContain(`/images/servicos/${category}/imagem-1.jpg`);
    });
  });

  it('sorts 02, 05, 06 and 10 naturally without requiring continuous numbering', () => {
    const root = fixture();
    for (const name of ['imagem-10.jpg', 'imagem-06.jpg', 'imagem-02.jpg', 'imagem-05.jpg']) add(root, 'casamento', name);
    expect(collectGalleryManifest(root)['casamento']).toEqual(['02', '05', '06', '10'].map((n) => `/images/servicos/casamento/imagem-${n}.jpg`));
  });

  it('supports JPG, JPEG, PNG, WebP, AVIF and GIF, excluding non-images and nested directories', () => {
    const root = fixture();
    const images = ['imagem-01.JPG', 'imagem-02.jpeg', 'imagem-03.png', 'imagem-04.webp', 'imagem-05.avif', 'imagem-06.gif'];
    for (const name of [...images, 'notes.txt', 'image.svg', '.hidden.jpg']) add(root, 'casamento', name);
    mkdirSync(resolve(root, galleryDirectory, 'casamento', 'nested.jpg'));
    expect(collectGalleryManifest(root)['casamento']).toEqual(images.map((name) => `/images/servicos/casamento/${name}`));
  });
});