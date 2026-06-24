# Nexvora Group Website

A responsive B2B business website for a Pennsylvania-based wholesale purchasing and e-commerce retail company, focused on supplier partnerships, MAP compliance, brand protection, and professional contact conversion.

---

## Live Preview

> Preview deployment coming soon via Vercel.
> Screenshots will be added after preview deployment — see `docs/screenshots/`.

---

## Project Status

**Preview-ready.** The site is complete as a client-facing preview and portfolio project.

- Contact form uses **frontend-only preview behavior** (no real emails sent yet)
- WhatsApp number is a placeholder — will be activated when the client provides a number
- Google Analytics ID is a placeholder — ready to activate when the client provides a GA4 ID
- Domain `nexvoragroup-pa.com` is registered. Production deployment to Vercel is planned as the next step

---

## Overview

Nexvora Group needed a professional B2B website to support outreach to brands, manufacturers, and authorized distributors. The site presents the company as a reliable, long-term wholesale retail partner — not a consumer e-commerce store.

The site avoids all consumer e-commerce language and visuals. No product cards, no prices, no ratings, no marketplace references.

---

## Features

- Multi-page responsive layout — Home, About, MAP Policy, Contact
- Dark corporate hero section with professional city background
- Supplier-focused B2B messaging throughout
- MAP & Brand Protection dedicated page
- Contact inquiry form (UI complete, ready for backend integration)
- WhatsApp CTA — activates automatically when number is added to config
- Google Analytics — activates automatically when GA4 ID is added to config
- SEO meta titles and descriptions per page
- Open Graph metadata
- Reusable React components
- Single config file for all editable content
- Vercel and Netlify deployment-ready

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool and dev server |
| React Router DOM | Client-side routing |
| Plain CSS with CSS Variables | Styling — no heavy UI framework |

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, Who We Are, Values, Wholesale Partnerships, CTA |
| About | `/about` | Company story and business principles |
| MAP Policy | `/map-policy` | MAP compliance and brand protection policy |
| Contact | `/contact` | Contact info sidebar and inquiry form |

---

## Project Structure

```
src/
  components/
    Header.jsx / Header.css       — Fixed navigation with mobile menu
    Footer.jsx / Footer.css       — Site footer with nav and contact
    ValueCard.jsx / ValueCard.css — Reusable value/feature card
    ContactForm.jsx / ContactForm.css — Validated contact form
    SEO.jsx                       — Per-page title and meta description
  pages/
    Home.jsx / Home.css
    About.jsx / About.css
    MapPolicy.jsx / MapPolicy.css
    Contact.jsx / Contact.css
  data/
    siteConfig.js    — All editable content and configuration
  styles/
    global.css       — CSS variables, reset, base styles
  App.jsx            — Router, analytics init, scroll-to-top
  main.jsx
public/
  favicon.svg
docs/
  screenshots/       — Screenshots added after deployment
index.html           — OG tags and base meta
vercel.json          — SPA routing for Vercel
netlify.toml         — SPA routing for Netlify
```

---

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/AlehSitsko/Nexvora_Group.git
cd Nexvora_Group

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How to Build

```bash
npm run build
```

Output goes to the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

---

## Preview Form Behavior

The contact form currently uses **frontend-only preview behavior**.

- It validates all required fields on the client side
- On submit, it simulates a short delay and shows a success message
- It does **not** send any real emails
- It does **not** make any network requests when `formEndpoint` is empty

This is intentional for the client preview stage. The form is prepared for future integration.

Future integration options:
- **Formspree** — set `formEndpoint` in `siteConfig.js` to your Formspree URL
- **Netlify Forms** — add `data-netlify="true"` to the form element
- **EmailJS** — add SDK call inside the `handleSubmit` function in `ContactForm.jsx`
- **Custom backend** — replace the fetch call with your own endpoint

---

## Configuration

All editable site content lives in [`src/data/siteConfig.js`](src/data/siteConfig.js).

| Field | Description |
|---|---|
| `companyName` | Company display name |
| `email` | Contact email address |
| `location` | Company location |
| `whatsappNumber` | WhatsApp number — leave `""` to hide button |
| `googleAnalyticsId` | GA4 Measurement ID — leave `""` to disable |
| `formEndpoint` | Form backend URL — leave `""` for preview behavior |
| `navLinks` | Navigation menu items |
| `seo` | Per-page title and meta description |

---

## How to Replace WhatsApp Number

1. Open `src/data/siteConfig.js`
2. Set `whatsappNumber` to the full international number:

```js
whatsappNumber: "+12155550100",
```

The WhatsApp button and link will appear automatically across the site.

If left empty (`""`), the site shows **"WhatsApp available upon request"** — no broken links or raw placeholders.

---

## How to Add Google Analytics

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `src/data/siteConfig.js` and set:

```js
googleAnalyticsId: "G-XXXXXXXXXX",
```

Analytics loads automatically. No other changes needed.

---

## Deployment Notes

### Vercel (Recommended)

1. Import the GitHub repository at [vercel.com/new](https://vercel.com/new)
2. Vercel auto-detects Vite. Settings if needed:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Deploy

The `vercel.json` file handles SPA client-side routing.

### Netlify (Alternative)

1. Connect the repository at [app.netlify.com](https://app.netlify.com)
2. Settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

The `netlify.toml` file handles SPA client-side routing.

---

## Future Production Deployment

The final domain is `nexvoragroup-pa.com`, registered and managed through **Squarespace**.

The custom React/Vite site is **not hosted through Squarespace**. Squarespace is used only for domain/DNS management.

### Steps to go live:

1. Deploy to Vercel (see above)
2. In Vercel → Settings → Domains → add `nexvoragroup-pa.com` and `www.nexvoragroup-pa.com`
3. Vercel will display the required DNS records
4. In Squarespace → Domains → DNS Settings → update records:
   - **A record** `@` → Vercel IP
   - **CNAME** `www` → `cname.vercel-dns.com`
5. Wait for DNS propagation (10 min – 24 hrs)
6. Verify `https://nexvoragroup-pa.com` and `https://www.nexvoragroup-pa.com`

> Always copy the exact DNS values from your Vercel dashboard — do not use hardcoded values.

---

## Future Improvements

- [ ] Connect contact form to Formspree or EmailJS
- [ ] Add real WhatsApp number
- [ ] Set up Google Analytics 4
- [ ] Deploy to Vercel
- [ ] Connect custom domain via Squarespace DNS
- [ ] Replace Unsplash image URLs with locally optimized images
- [ ] Add screenshots to `docs/screenshots/`
- [ ] Add client testimonial after approval
- [ ] Add real company logo when available

---

## Developer Role

**Developer:** Aleh Sitsko

**Role:** Requirements gathering, business positioning review, content structure, frontend development, responsive UI implementation, contact form UI, SEO setup, configuration architecture, deployment preparation, and project documentation.

**Project type:** Freelance client project

---

*© 2026 Nexvora Group. All rights reserved.*
