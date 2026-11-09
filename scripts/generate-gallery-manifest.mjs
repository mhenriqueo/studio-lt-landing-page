import { readdirSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const galleryCategories = ['casamento', 'eventos', 'gestante', 'smash-the-cake', 'ensaio-kids', 'casal-familiar', 'datas-comemorativas', 'bday'];
export const galleryDirectory = 'public/images/servicos';
const supportedImage = /\.(jpe?g|png|webp|avif|gif)$/i;
const naturalOrder = new Intl.Collator('pt-BR', { numeric: true, sensitivity: 'base' });

export function collectGalleryManifest(rootDirectory) {
  return Object.fromEntries(galleryCategories.map((category) => {
    const directory = resolve(rootDirectory, galleryDirectory, category);
    const files = readdirSync(directory, { withFileTypes: true })
      .filter((entry) => entry.isFile() && !entry.name.startsWith('.') && supportedImage.test(entry.name))
      .map((entry) => entry.name)
      .sort((a, b) => naturalOrder.compare(a, b) || (a < b ? -1 : a > b ? 1 : 0));
    return [category, files.map((file) => `/images/servicos/${category}/${encodeURIComponent(file)}`)];
  }));
}

export function generateGalleryManifest(rootDirectory) {
  const manifest = collectGalleryManifest(rootDirectory);
  const target = resolve(rootDirectory, 'src/data/gallery-manifest.json');
  const content = `${JSON.stringify(manifest, null, 2)}\n`;
  mkdirSync(dirname(target), { recursive: true });
  let previous;
  try { previous = readFileSync(target, 'utf8'); } catch { /* First generation. */ }
  if (previous !== content) writeFileSync(target, content);
  return manifest;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  generateGalleryManifest(process.cwd());
  console.log('Manifesto das oito galerias atualizado.');
}