# Nexvora Group Website

A responsive B2B business website for a Pennsylvania-based wholesale purchasing and e-commerce retail company focused on supplier partnerships, MAP compliance, brand protection, and contact conversion.

## Overview

Nexvora Group is a Pennsylvania-based e-commerce retail company focused on wholesale purchasing and professional online retail operations. This website presents the company to brands, manufacturers, and authorized distributors as a serious, long-term B2B retail partner.

The site is built as a custom frontend project (React + Vite) and is intended to be deployed on **Vercel** (or Netlify as an alternative) with the custom domain **nexvoragroup-pa.com** managed through Squarespace DNS.

---

## Features

- Multi-page React application (Home, About, MAP Policy, Contact)
- Dark corporate hero section with overlay
- Responsive layout — mobile, tablet, desktop
- Contact inquiry form (frontend-ready; easy to connect to Formspree / Netlify Forms / EmailJS)
- WhatsApp CTA button (configured via a single variable)
- Google Analytics placeholder (enabled by adding a Measurement ID)
- SEO meta titles and descriptions per page
- No marketplace, no product listings, no consumer e-commerce elements

---

## Tech Stack

- React 18
- Vite
- React Router DOM
- Plain CSS with CSS Variables (no heavy UI frameworks)

---

## Project Structure

```
src/
  assets/           # Static assets
  components/       # Reusable UI components
    Header.jsx / Header.css
    Footer.jsx / Footer.css
    ValueCard.jsx / ValueCard.css
    ContactForm.jsx / ContactForm.css
    SEO.jsx
  pages/            # Page components
    Home.jsx / Home.css
    About.jsx / About.css
    MapPolicy.jsx / MapPolicy.css
    Contact.jsx / Contact.css
  data/
    siteConfig.js   # All editable content and configuration
  styles/
    global.css      # Global CSS variables and base styles
  App.jsx
  main.jsx
public/
  favicon.svg
index.html
vercel.json         # SPA routing for Vercel
netlify.toml        # SPA routing for Netlify
```

---

## How to Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How to Build

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment to Vercel (Recommended)

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and create a new project.
3. Import the GitHub repository.
4. Vercel will auto-detect Vite. Use these settings if needed:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.
6. After deployment, go to **Settings → Domains** and add `nexvoragroup-pa.com`.
7. Vercel will provide DNS records to add to your domain registrar (Squarespace).

The `vercel.json` file is already included to handle SPA client-side routing.

---

## Deployment to Netlify (Alternative)

1. Push the project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) and create a new site from Git.
3. Connect the repository and use these settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Deploy site**.
5. After deployment, go to **Domain settings** and add `nexvoragroup-pa.com`.
6. Netlify will provide DNS records.

The `netlify.toml` file is already included to handle SPA client-side routing.

---

## Custom Domain Setup with Squarespace DNS

The domain `nexvoragroup-pa.com` is registered and managed in **Squarespace**. The website itself is hosted on **Vercel** (or Netlify). You only need to point the DNS to the hosting provider.

### Steps:

1. Deploy the site to Vercel or Netlify as described above.
2. Add `nexvoragroup-pa.com` as a custom domain in Vercel/Netlify.
3. The hosting platform will display required DNS records (A record, CNAME, or TXT for verification).
4. Log in to **Squarespace → Domains → nexvoragroup-pa.com → DNS Settings**.
5. Add or update the DNS records provided by Vercel/Netlify:
   - **A record** — typically points `@` (root domain) to a Vercel/Netlify IP address
   - **CNAME record** — typically points `www` to a Vercel/Netlify hostname
   - **TXT record** — for domain ownership verification (if required)
6. Save changes and wait for DNS propagation (usually 10–60 minutes, up to 48 hours).
7. Verify that both URLs work:
   - `https://nexvoragroup-pa.com`
   - `https://www.nexvoragroup-pa.com`

> **Note:** Do not hardcode the exact DNS values here — always copy the values shown in your Vercel or Netlify dashboard for your specific deployment.

---

## How to Update Site Content

All editable content is centralized in **`src/data/siteConfig.js`**:

- Company name, email, location
- WhatsApp number
- Google Analytics Measurement ID
- Navigation links
- Contact form endpoint
- SEO titles and meta descriptions per page

Page text content lives in the individual page files:
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/MapPolicy.jsx`
- `src/pages/Contact.jsx`

---

## How to Replace WhatsApp Number

1. Open `src/data/siteConfig.js`.
2. Find the `whatsappNumber` field.
3. Replace the empty string with the full international number:

```js
whatsappNumber: "+12155550100",
```

Use the format `+` followed by country code and number, no spaces or dashes.

The WhatsApp button and link will appear automatically once a number is set.

---

## How to Add Google Analytics

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com).
2. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`).
3. Open `src/data/siteConfig.js`.
4. Find the `googleAnalyticsId` field and insert your ID:

```js
googleAnalyticsId: "G-XXXXXXXXXX",
```

Analytics will load automatically on the next deployment. No other changes are needed.

---

## How to Connect the Contact Form

The form is ready for integration. Open `src/components/ContactForm.jsx` and follow the integration comments inside the `handleSubmit` function.

**Option A — Formspree:**
1. Create a form at [formspree.io](https://formspree.io).
2. Copy your form endpoint URL.
3. Open `src/data/siteConfig.js` and set:
```js
formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
```

**Option B — Netlify Forms:**
Add `name="contact" data-netlify="true"` to the `<form>` element in `ContactForm.jsx`.

**Option C — EmailJS:**
Follow the EmailJS SDK setup and call `emailjs.send(...)` inside the `handleSubmit` function where the placeholder comment is.

---

## Future Improvements

- Add a real company logo to replace the text logo
- Connect the contact form to a backend service
- Add WhatsApp number once confirmed
- Set up Google Analytics once GA4 property is created
- Add a cookie/privacy notice if required for compliance
- Consider adding an SSL certificate notice page or redirect rules

---

## License

Private project. All rights reserved. © 2026 Nexvora Group.
