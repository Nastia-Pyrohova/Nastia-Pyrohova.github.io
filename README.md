# Anastasiia Pyrohova — GitHub Pages portfolio

A static, responsive portfolio with English and Ukrainian language switching. It introduces Anastasiia as a developer, startup founder and product builder, shows services and honest professional milestones, includes a founder/collaborators section, and has **six editable project placeholders**.

**No npm / build / backend needed**: the site is HTML, CSS, JS and local images.

## Publish to your GitHub Pages site

This package is designed for **https://nastia-pyrohova.github.io/**. The profile link in the site is currently `https://github.com/Nastia-Pyrohova`.

1. Open the repository that currently publishes your GitHub Pages site (normally `Nastia-Pyrohova/nastia-pyrohova.github.io`).
2. Replace or upload **all files from the ZIP**, preserving paths, *at the repository root*: `index.html`, `styles.css`, `script.js`, `projects.js`, `site-config.js`, `.nojekyll`, and the `assets/` directory.
3. Commit the change. Check **Settings → Pages**: deploy from `main` and `/(root)` if this is your deployment setup. Do not upload just the ZIP itself.
4. Open your published site. GitHub Pages deployments sometimes take a little time to appear.

This ZIP **does not change your live GitHub repository automatically**. Publishing requires your GitHub login.

## Add project cards — edit only `projects.js`

Each object is one card. All six examples are **unpublished placeholders**, not claims about completed client work. To publish one, change its fields:

```js
{
  id: 'website',
  category: 'web',              // web | commerce | design | automation
  published: true,
  image: 'my-website.webp',     // put file in assets/projects/
  link: 'https://example.com',  // can be '' if confidential
  title: { en: 'My real project', uk: 'Мій реальний проєкт' },
  description: {
    en: 'What I built, my role and the outcome.',
    uk: 'Що я створила, моя роль і результат.'
  },
  tech: ['React', 'TypeScript']
}
```

**Project images:** put your screenshot or image into `assets/projects/`, then set the exact filename in `image`. Recommended: 1200×750px WebP/JPEG; use only images you own or may share. When you are ready to show only completed cases, set `showDraftProjects: false` in `site-config.js`.

## Services and design assets

- Your portrait is saved locally as `assets/anastasiia-portrait.webp`, made from the image you provided.
- All service cards use **local illustrative graphics** under `assets/services/` (no hotlinking). You can swap a service image path in `index.html` for a real photo later.
- The site does **not** display speculative fake client screenshots as completed work.
- Social-sharing cover is `assets/og-cover.png`.

## Contacts

Edit `site-config.js`:

- `linkedin`: your verified public profile
- `github`: your current account
- `upwork`: **already set** to your shared Upwork profile URL
- `email`: optional, remains blank until you enter one

Visitors can message you through LinkedIn by default. When you set an email, a **mailto:** project inquiry form appears; it prepares an email in the visitor's mail app. GitHub Pages cannot itself process form submissions. To receive submissions directly on the page, connect a form provider, e.g. Formspree, and configure it separately.

## Languages and layout

- English is the default; the UA/EN toggle is in `script.js`.
- Translate the **static English** in `index.html` and the **Ukrainian dictionary** in `script.js`.
- Design is in `styles.css`. The site is mobile responsive.
- Achievement descriptions are conservative. Aligna is presented as an early-stage startup, with Anastasiia as its founder and CEO. Collaborators are not represented as employees of a formal agency.

## Test locally

Open `index.html` in your browser. For a local HTTP test, run `python3 -m http.server 8000` in the folder and visit `http://localhost:8000`. No dependencies required.

## Updated sections (November 2026)

- Hero now says **3+ years in web development** (not 3+ years of commercial employment). The second number represents 3+ years in tech education.
- The About timeline shows **Full-Stack Web Developer — Already Media**. Binary Studio Academy and Kharkiv IT Cluster are grouped under **Professional Development** (not presented as additional commercial employers).
- The skills list is grouped into frontend, backend, web/e-commerce, AI/automation, and design/product. Remove any technologies you don't want to offer commercially.
- The Aligna card links to `https://aligna.com.ua/`.
- The fourth achievement is participation in the **Case Challenge 3.0 Semi-Final**, with a local certificate image in `assets/achievements/`.
- Contact offers **Upwork** and **LinkedIn**, and uses only external links compatible with GitHub Pages.
- English/UA translations and editable `projects.js` placeholders are preserved.
