# Nexvora Group Website

A responsive B2B business website demo for a Pennsylvania-based wholesale purchasing and e-commerce retail company focused on supplier partnerships, MAP compliance, brand protection, and professional contact conversion.

---

## Live Demo

**[https://nexvora-group.vercel.app/](https://nexvora-group.vercel.app/)**

**Status:** Client preview / portfolio-ready frontend demo

Screenshots will be added after the client preview is finalized — see `docs/screenshots/`.

---
## Developer / Portfolio

Built by **Aleh Sitsko** as a client-style business website demo and portfolio project.

* Portfolio: [alehsitsko.dev](https://alehsitsko.dev)
* GitHub: [github.com/AlehSitsko](https://github.com/AlehSitsko)
* LinkedIn: [linkedin.com/in/alehsitsko](https://www.linkedin.com/in/alehsitsko/)
---
## Project Status

The project is currently prepared as a client preview and portfolio-ready frontend demo. It is deployed on Vercel for review purposes only. The final production domain has not been connected yet.

- Contact form uses **frontend-only preview behavior** — does not send real emails yet
- WhatsApp number is configuration-ready — will activate when the client provides a number
- Google Analytics ID is configuration-ready — will activate when the client provides a GA4 ID
- Domain `nexvoragroup-pa.com` is registered. Production deployment and domain connection are planned as a future step

---

## Overview

Nexvora Group needed a professional B2B website to support outreach to brands, manufacturers, and authorized distributors. The site presents the company as a reliable, long-term wholesale retail partner — not a consumer e-commerce store.

The site avoids all consumer e-commerce language and visuals. No product cards, no prices, no ratings, no marketplace references.

---

## Developer Role

**Developer:** Aleh Sitsko

**Role:** Requirements gathering, business positioning review, content structure, frontend development, responsive UI implementation, contact form UI, SEO setup, configuration architecture, demo deployment preparation, and project documentation.

**Project type:** Freelance-style client preview project — built for client review and portfolio permission.

---

## Features

- Multi-page responsive layout — Home, About, MAP Policy, Contact
- Dark corporate hero section with professional city background
- Supplier-focused B2B messaging throughout
- MAP & Brand Protection dedicated page
- Contact form UI with full validation
- Frontend-only preview submit behavior
- WhatsApp-ready configuration (activates when number is provided)
- Google Analytics-ready configuration (activates when GA4 ID is provided)
- SEO meta titles and descriptions per page
- Open Graph metadata
- Reusable React components
- Single config file for all editable content
- Vercel demo deployment

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool and dev server |
| React Router DOM | Client-side routing |
| Plain CSS with CSS Variables | Styling — no heavy UI framework |
| Vercel | Demo deployment |

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, Who We Are, Values, Wholesale Partnerships, CTA |
| About | `/about` | Company story and business principles |
| MAP Policy | `/map-policy` | MAP compliance and brand protection policy |
| Contact | `/contact` | Contact information sidebar and partnership inquiry form |

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
  screenshots/       — Screenshots to be added after client review
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
- On submit, it simulates a short delay and displays a success message
- It does **not** send any real emails
- It does **not** make any network requests when `formEndpoint` is empty

This is intentional for the client preview stage. The form is prepared for future integration.

Future integration options:
- **Formspree** — set `formEndpoint` in `siteConfig.js` to your Formspree URL
- **Netlify Forms** — add `data-netlify="true"` to the form element
- **EmailJS** — add SDK call inside `handleSubmit` in `ContactForm.jsx`
- **Custom backend** — replace the fetch call with your own endpoint

---

## Configuration

All editable site content lives in [`src/data/siteConfig.js`](src/data/siteConfig.js).

| Field | Description |
|---|---|
| `companyName` | Company display name |
| `email` | Contact email address |
| `location` | Company location |
| `whatsappNumber` | WhatsApp number — leave `""` to show "Available upon request" |
| `googleAnalyticsId` | GA4 Measurement ID — leave `""` to disable analytics |
| `formEndpoint` | Form backend URL — leave `""` for preview-only behavior |
| `navLinks` | Navigation menu items |
| `seo` | Per-page title and meta description |

**WhatsApp:** If `whatsappNumber` is empty, the site displays "Available upon request" — no broken links or raw placeholders.

**Analytics:** Analytics loads only when a valid `googleAnalyticsId` is provided.

**Form:** If `formEndpoint` is empty, the form uses preview-only behavior and does not send real emails.

---

## Demo Deployment Notes

This project is deployed as a Vercel demo preview.

**Live Demo:** [https://nexvora-group.vercel.app/](https://nexvora-group.vercel.app/)

This demo URL is used for client review and portfolio presentation. It is not the final production domain.

---

## Future Improvements

- [ ] Connect contact form to real email service (Formspree, Netlify Forms, or EmailJS)
- [ ] Add final WhatsApp number
- [ ] Add Google Analytics Measurement ID
- [ ] Add optimized local brand images
- [ ] Add final client-approved company details
- [ ] Add screenshots to `docs/screenshots/`
- [ ] Add client testimonial after approval
- [ ] Prepare final production deployment if requested by client

---

## Portfolio Summary

Responsive B2B business website demo for a Pennsylvania-based wholesale purchasing and e-commerce retail company, focused on supplier partnerships, MAP compliance, brand protection, contact conversion, and demo deployment preparation.

---

*© 2026 Nexvora Group. All rights reserved.*
