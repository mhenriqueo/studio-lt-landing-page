export const galleryCategories: string[];
export const galleryDirectory: string;
export function collectGalleryManifest(rootDirectory: string): Record<string, string[]>;
export function generateGalleryManifest(rootDirectory: string): Record<string, string[]>;