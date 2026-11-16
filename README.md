# Anastasiia Pyrohova — Portfolio Website

An editable, responsive, bilingual (English / Ukrainian) portfolio site built with plain HTML, CSS and JavaScript. No build tooling is required.

## What's inside

- `index.html` — site content, case studies, services and contact form
- `styles.css` — all design styles, mobile layout and project illustrations
- `app.js` — translations, project filters, responsive menu and links
- `site-config.js` — **put your personal contact information here**
- `thanks.html` — thank-you screen after a successfully submitted inquiry
- `favicon.svg` — site icon
- `og-cover.png` — social sharing preview

## 1. Add your real contact links before publishing (important!)

Open `site-config.js` and replace the empty strings. For example:

```javascript
window.PORTFOLIO_CONFIG = {
  email: "me@example.com",
  upwork: "https://www.upwork.com/freelancers/your-real-profile",
  linkedin: "https://www.linkedin.com/in/your-real-profile/",
  github: "https://github.com/your-real-username"
};
```

**Do not copy these example addresses directly.** The site automatically hides contact links whose values are empty. The main CTA points to the project inquiry form.

## 2. Deploy on Netlify (recommended because the contact form works)

1. Log in to Netlify and create a new site using **Deploy manually** / drag-and-drop.
2. Upload the *contents of this folder* (or drag the whole folder into its deployment area).
3. Netlify detects the HTML form marked `data-netlify="true"` during deployment. On the first deployment, check **Forms** in your Netlify dashboard and enable notifications to your inbox.
4. Submit a real test form after deployment and verify the inquiry appears in the Netlify Forms inbox.
5. Set your custom domain under Netlify's domain settings if you own one.

If you use GitHub Pages or another static host, the contact form will **not** send submissions automatically. Replace it with your form provider, or deploy on Netlify. The email/social links work independently once configured.

## 3. Edit the text and work examples

- Edit `index.html` for English default text, projects, images, and services.
- Edit **both** `en` and `uk` sections in `app.js` for language switching. On load, translation strings replace elements with `data-i18n` keys.
- The project visuals are **illustrative CSS drawings**, not screenshots or claimed final product interfaces.
- No fake client testimonials or invented growth numbers have been added.
- Two commercial WordPress project descriptions intentionally do not reveal confidential clients.
- If you have shareable source links, add real project links after the project descriptions; verify each link works and you are allowed to disclose the project.

## 4. Test locally

Just open `index.html` in a browser. To reproduce a real deployment more closely, use a local web server:

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`. The inquiry form only processes submissions on a deployed Netlify site.

## 5. Make it even stronger for Upwork

- Add a professional photograph if you want to use one.
- Attach 2–3 shareable, real code or live-site links (with permission).
- Add a clear domain (e.g. `anastasiia.dev` if available).
- Add your real Upwork profile URL in `site-config.js` so prospects can hire you there.
- Send proposals that mention the prospect's issue and link to the most relevant case study section, rather than sending the same generic pitch.

**Privacy:** The website contains only public-professional information. The example site includes no personal email address or invented account URL. Before launching, review the content and remove any employment or project detail you do not wish to make public.
