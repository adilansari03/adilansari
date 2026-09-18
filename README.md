This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Editing portfolio content

Update `app/data.ts` to change the site's content:

- `siteData`: page title and SEO description.
- `heroData`: name, headline lines, description, and image paths.
- `aboutData`: heading, biography paragraphs, and highlight cards.
- `skillsData`: heading, description, and skill groups.
- `featuredWorkData`: heading, description, card action label, and project entries. Each project has a unique `id`, `title`, `description`, `category`, `thumbnail`, and `tags`. Add an object to `projects` to display another card.
- `footerData`: footer text.

The page and section components import this file directly. Store images in `public/images` and use paths such as `/images/portrait.png`. Layout and animation styles remain in the components.

Each project's `projectDetails` supplies its popup content: `role`, `responsibilities`, `tools`, `gallery`, and `links` (`live`, `figma`, `github`). Use empty arrays for unused lists and empty strings for unused links. Web links should start with `https://` or `http://`. Missing project images show a preview placeholder. The popup closes with its Close button, Escape, or a click outside it.

## Getting Started

### Social sharing preview

`app/opengraph-image.tsx` generates a 1200 × 630 portfolio cover from `heroData` and supplies the `og:image` metadata automatically. The favicon uses `public/images/favicon.png`.

Set `NEXT_PUBLIC_SITE_URL` to your public website origin (including `https://`) in `.env.local` or your hosting environment before building. See `.env.example`. Vercel's production URL is used when available; local development defaults to `http://localhost:3000`.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
