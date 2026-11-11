<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Gallery architecture
- Generate the gallery inventory from each known `public/images/servicos/<slug>/` folder with the build-time Vite plugin; SSR and browser must only read the resulting JSON, because deployed servers and browsers cannot enumerate public folders.
- Keep service text, previews and existing photo captions separate from the generated inventory; new files inherit category captions, preserving editorial content without requiring manual image registration.

## SEO
- Build every public route's head through the shared SEO helper so canonical, og:url and og:image stay absolute on the official domain and the JSON-LD only uses data already present in the project.
- Serve the sitemap as static `public/sitemap.xml` listing every canonical public URL; `src/test/sitemap-robots.test.ts` compares it with the services list, so adding a category must add its URL there.
