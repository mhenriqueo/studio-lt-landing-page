// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { resolve } from "node:path";
import { existsSync, readFileSync, watch } from "node:fs";
import { galleryCategories, galleryDirectory, generateGalleryManifest } from "./scripts/generate-gallery-manifest.mjs";

export default defineConfig({
  vite: {
    plugins: [{
      name: "studio-gallery-manifest",
      configResolved(config) {
        // Build-time only: SSR and browser consume the same static JSON.
        generateGalleryManifest(config.root);
      },
      configureServer(server) {
        let inventory = generateGalleryManifest(server.config.root);
        // Serve newly added gallery files even when Vite caches public assets.
        // This middleware exists only in npm run dev; production uses public assets.
        const mime: Record<string, string> = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", avif: "image/avif", gif: "image/gif" };
        server.middlewares.use((request, response, next) => {
          const url = request.url?.split("?")[0];
          if (!url || !Object.values(inventory).some((files) => files.includes(url))) return next();
          try {
            const content = readFileSync(resolve(server.config.root, `public${decodeURIComponent(url)}`));
            const extension = url.split(".").at(-1)?.toLowerCase() ?? "";
            response.setHeader("Content-Type", mime[extension] ?? "application/octet-stream");
            response.end(content);
          } catch { next(); }
        });
        // Vite may exclude public/ from its own watcher. These watchers run
        // only in the local development process, never in deployed SSR.
        const update = () => {
          inventory = generateGalleryManifest(server.config.root);
          const manifestPath = resolve(server.config.root, "src/data/gallery-manifest.json");
          for (const environment of Object.values(server.environments)) {
            const modules = environment.moduleGraph.getModulesByFile(manifestPath);
            modules?.forEach((module) => environment.moduleGraph.invalidateModule(module));
            environment.hot.send({ type: "full-reload" });
          }
        };
        const watchers = galleryCategories
          .map((category) => resolve(server.config.root, galleryDirectory, category))
          .filter((directory) => existsSync(directory))
          .map((directory) => watch(directory, update));
        server.httpServer?.once("close", () => {
          watchers.forEach((watcher) => watcher.close());
        });
      },
    }],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
