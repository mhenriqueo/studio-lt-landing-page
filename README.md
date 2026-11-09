# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Fotografias das galerias

As pastas reais são `public/images/servicos/<categoria>/` (não `services`). As oito categorias são `casamento`, `eventos`, `gestante`, `smash-the-cake`, `ensaio-kids`, `casal-familiar`, `datas-comemorativas` e `bday`.

Adicione ou remova arquivos diretamente na pasta correspondente. Não é necessário editar componentes, páginas ou cadastrar cada foto. O plugin do Vite gera `src/data/gallery-manifest.json` ao iniciar `npm run dev` e em cada `npm run build` (incluindo o build da Vercel). Durante o desenvolvimento, adições e remoções também atualizam o manifesto. Não edite esse JSON manualmente.

Extensões aceitas: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` e `.gif`, com letras maiúsculas ou minúsculas. Apenas arquivos diretamente dentro da categoria entram; subpastas, arquivos ocultos e outros formatos são ignorados. Prefira nomes sem espaços ou acentos: `imagem-01.jpg`, `imagem-02.jpg`, etc. A numeração não precisa ser contínua: `imagem-05.jpg`, `imagem-06.jpg`, `imagem-10.jpg` aparecem nessa ordem natural. Arquivos `temporaria-*` continuam identificados como temporários nos dados e textos alternativos.

Exemplo: se casamento contém `imagem-01.jpg` até `imagem-08.jpg`, adicione `imagem-09.jpg` e `imagem-10.jpg` em `public/images/servicos/casamento/`. No próximo build, ambas entram automaticamente após a foto 08. Publique a nova versão para atualizar o site público: colocar fotos no projeto não altera uma versão já publicada.

Os títulos, descrições e prévias escolhidas continuam em `src/data/servicos.ts`. As legendas das fotos existentes são preservadas; novas fotos recebem o nome da categoria. Se a prévia escolhida for removida, o card usa a primeira foto restante da própria categoria. Não há limite de quantidade imposto pelo código. Uma pasta sem fotos produz uma galeria vazia; mantenha pelo menos uma foto por categoria.

O carregamento usa dados estáticos compartilhados pelo SSR e pela navegação do TanStack Start, sem listagem de pastas pelo navegador nem leitura de arquivos em tempo de execução. As rotas existentes permanecem inalteradas; não foi adicionado fallback de SPA. A publicação efetiva na Vercel deve ser verificada no ambiente hospedado.
