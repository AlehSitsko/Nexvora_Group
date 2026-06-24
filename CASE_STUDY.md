# Nexvora Group — Website Case Study

**Developer:** Aleh Sitsko
**Project Type:** Freelance / Portfolio Client Project
**Estimated Market Value:** $1,500–$2,500
**Arrangement:** Built as a portfolio project in exchange for client feedback, testimonial, and portfolio usage permission

---

## Client

**Nexvora Group**
Pennsylvania-based e-commerce retail company focused on wholesale purchasing and long-term supplier relationships.

---

## Problem

Nexvora Group was preparing to reach out to brands, manufacturers, and authorized distributors to establish wholesale purchasing relationships. They had no web presence to support this outreach.

Without a website, the company could not be verified as a legitimate B2B retail partner. Supplier representatives reviewing an account request would have no way to confirm the company's professionalism, approach to MAP compliance, or brand protection standards.

The key challenge was positioning: the website had to look and feel like a serious B2B business — not a consumer e-commerce store, not an Amazon seller site, and not a startup landing page.

---

## Goal

Design and build a professional B2B business website that:

- Presents Nexvora Group as a reliable, long-term wholesale retail partner
- Communicates MAP compliance and brand protection standards clearly
- Provides a professional contact point for supplier inquiries
- Avoids all consumer e-commerce language and visuals
- Can be deployed under the company's custom domain

---

## My Role

- Requirements gathering and business positioning review
- Content structure and page hierarchy
- Frontend development (React + Vite)
- Responsive UI implementation
- Contact form UI with validation
- SVG icon system
- SEO metadata per page
- Open Graph metadata
- Configuration architecture (single `siteConfig.js` for all editable content)
- Deployment preparation (Vercel + Netlify)
- DNS/domain handoff documentation
- README and case study documentation

---

## Solution

Built a responsive multi-page React/Vite website with four pages: Home, About, MAP Policy, and Contact.

The site uses a corporate visual style: dark navy hero section with a city skyline background, clean white content sections, professional typography, green accent color, and SVG line icons throughout. No emoji, no product cards, no consumer-facing visuals.

A dedicated MAP Policy page addresses a specific concern for supplier relations — demonstrating that the company understands and respects pricing policies and authorized distribution requirements.

The contact form is fully built on the frontend with validation and preview behavior, ready for integration with Formspree, Netlify Forms, or EmailJS when the client is ready.

All configuration is centralized in a single `siteConfig.js` file: company name, email, WhatsApp number, Google Analytics ID, form endpoint, SEO, and navigation. The client or developer can update any of these without touching component code.

---

## Key Design Decisions

**No consumer e-commerce elements.**
Every visual and copy decision was made with a supplier audience in mind, not an end consumer. This meant removing anything that felt like a product listing, shopping cart, or marketplace page.

**Dedicated MAP Policy page.**
Suppliers and brands often check whether a retail partner understands MAP compliance before approving an account. Having a clear, dedicated page on this topic is a meaningful differentiator.

**WhatsApp and GA as zero-config placeholders.**
Rather than leaving broken UI or exposing internal placeholder text, both features activate automatically when the client provides a number or analytics ID — and show professional fallback text in the meantime.

**Single config source of truth.**
All contact details, SEO, and navigation live in one file. The client or any developer can maintain the site without touching JSX.

---

## Technical Stack

| Technology | Use |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| React Router DOM | Client-side routing |
| CSS with CSS Variables | Styling — no heavy UI library |
| Vercel | Planned production hosting |
| Squarespace DNS | Domain management only |

---

## Results

- Complete 4-page B2B website ready for client preview
- Contact form UI with full validation
- Deployment-ready for Vercel with one-click GitHub integration
- Custom domain plan documented for Squarespace DNS handoff
- Codebase ready for future form integration, analytics, and WhatsApp activation

---

## Current Status

**Preview-ready.** The contact form uses frontend-only preview behavior and is prepared for future backend integration. WhatsApp number and production analytics are placeholders pending client confirmation. Production deployment to Vercel and custom domain connection are the next planned steps.

---

## Future Improvements

- Connect contact form to real email service (Formspree or EmailJS)
- Add real WhatsApp number
- Set up Google Analytics 4
- Deploy to Vercel under `nexvoragroup-pa.com`
- Replace Unsplash image URLs with locally optimized images
- Add client testimonial after approval

---

## Portfolio Summary

> Responsive B2B business website for a Pennsylvania-based wholesale purchasing and e-commerce retail company, focused on supplier partnerships, MAP compliance, brand protection, contact conversion, and custom domain deployment preparation.

Built with React, Vite, and plain CSS. Deployed to Vercel. Domain managed through Squarespace DNS.
