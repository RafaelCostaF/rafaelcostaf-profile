# Rafael Costa — Currículo / Portfólio

Site pessoal de currículo, construído com Next.js e publicado como export estático. Reúne experiência profissional, formação, skills e projetos de pesquisa em um único lugar, com foco em performance, SEO e uma versão pronta para impressão/PDF.

🔗 **Site:** _em breve_ <!-- TODO: atualizar com a URL após o deploy -->

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para ícones
- Deploy como site estático no [Cloudflare Pages](https://pages.cloudflare.com/)

## Funcionalidades

- Conteúdo centralizado em [`data/resume.ts`](data/resume.ts) — uma única fonte de verdade para todas as seções do site
- Metadata e Open Graph dinâmicos, imagem de compartilhamento gerada em runtime ([`app/opengraph-image.tsx`](app/opengraph-image.tsx))
- `sitemap.xml` e `robots.txt` gerados automaticamente
- Dados estruturados (JSON-LD, schema.org `Person`) para SEO
- Botão de impressão com estilos dedicados para exportação em PDF

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run build   # build de produção (export estático em out/)
npm run start   # serve o build de produção
npm run lint    # lint com ESLint
```

## Estrutura

```
app/
  components/   # seções da página (Hero, Experience, Skills, Projects, ...)
  layout.tsx     # layout raiz e metadata
  page.tsx       # composição da página
  sitemap.ts     # sitemap.xml
  robots.ts      # robots.txt
  opengraph-image.tsx  # imagem de OG gerada dinamicamente
data/
  resume.ts      # conteúdo do currículo (perfil, experiências, skills, projetos)
public/
  avatar.svg     # foto de perfil
```

## Deploy

O site é exportado como HTML/CSS/JS estático (`output: "export"` em [`next.config.ts`](next.config.ts)) e publicado no Cloudflare Pages a partir da saída de `npm run build`.

## Autor

**Rafael Costa** — [LinkedIn](https://www.linkedin.com/in/rafaelcostaf) · [GitHub](https://github.com/rafaelcostaf)
