# Nexvora Group Website — Case Study

**Developer:** Aleh Sitsko
**Project Type:** Freelance-style client preview / portfolio project
**Estimated Market Value:** $1,500–$2,500
**Arrangement:** Built as a free project in exchange for client feedback, testimonial, and portfolio usage permission

---

## Client

**Nexvora Group**
Pennsylvania-based e-commerce retail company focused on wholesale purchasing and long-term supplier relationships.

---

## Project Status

Client preview demo deployed on Vercel.
Production domain not connected yet.

---

## Problem

Nexvora Group was preparing to reach out to brands, manufacturers, and authorized distributors to establish wholesale purchasing relationships. They had no web presence to support this outreach.

Without a website, the company could not be verified as a legitimate B2B retail partner. Supplier representatives reviewing an account request would have no way to confirm the company's professionalism, approach to MAP compliance, or brand protection standards.

The key challenge was positioning: the website had to look and feel like a serious B2B business — not a consumer e-commerce store, not a marketplace seller site, and not a startup landing page.

---

## Goal

Design and build a professional B2B business website that:

- Presents Nexvora Group as a reliable, long-term wholesale retail partner
- Communicates MAP compliance and brand protection standards clearly
- Provides a professional contact point for supplier inquiries
- Avoids all consumer e-commerce language and visuals
- Can be deployed under the company's custom domain when ready

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
- Demo deployment preparation (Vercel)
- README and case study documentation

---

## Solution

Built a responsive multi-page React/Vite website with four pages: Home, About, MAP Policy, and Contact.

The site uses a corporate visual style: dark navy hero section with a city skyline background, clean white content sections, professional typography, green accent color, and SVG line icons throughout. No emoji, no product cards, no consumer-facing visuals.

A dedicated MAP Policy page addresses a specific concern for supplier relations — demonstrating that the company understands and respects pricing policies and authorized distribution requirements.

The contact form is fully built on the frontend with validation and preview-only behavior, ready for integration with Formspree, Netlify Forms, or EmailJS when the client is ready.

All configuration is centralized in a single `siteConfig.js` file: company name, email, WhatsApp number, Google Analytics ID, form endpoint, SEO, and navigation. The client or developer can update any of these without touching component code.

---

## Key Features

- Responsive corporate layout
- Supplier-focused B2B messaging
- MAP & Brand Protection dedicated page
- Contact form UI with full client-side validation
- Frontend-only preview submit behavior
- WhatsApp-ready configuration
- Google Analytics-ready configuration
- SEO metadata per page
- Open Graph metadata
- Reusable React components
- Vercel demo deployment
- README and case study documentation

---

## Technical Stack

| Technology | Use |
|---|---|
| React 19 | UI framework |
| Vite | Build tool |
| React Router DOM | Client-side routing |
| CSS with CSS Variables | Styling — no heavy UI library |
| Vercel | Demo deployment |

---

## Design Direction

- Serious corporate B2B style
- Dark navy hero section with professional city/office visual
- Clean white content sections below the hero
- Green accent color for buttons and highlights
- Professional typography — no decorative fonts
- No consumer e-commerce elements
- No product cards, no ratings, no prices, no discounts
- No marketplace language

---

## Current Demo Status

The project is currently deployed as a Vercel demo preview.

**Live Demo:** [https://nexvora-group.vercel.app/](https://nexvora-group.vercel.app/)

This demo is intended for client review and developer portfolio presentation. It is not the final production domain.

---

## Limitations

- The contact form does not send real emails yet
- WhatsApp number is not finalized — shows "Available upon request"
- Google Analytics ID is not connected yet
- Final production domain is not connected yet
- Some business details may be updated after client review

---

## Future Improvements

- Connect contact form to real email service (Formspree, Netlify Forms, or EmailJS)
- Add final WhatsApp number
- Add Google Analytics Measurement ID
- Add final client-approved business details
- Add optimized local images
- Add screenshots to README
- Add client testimonial after approval
- Prepare final production deployment if requested by client

---

## Portfolio Summary

Responsive B2B business website demo for a Pennsylvania-based wholesale purchasing and e-commerce retail company, focused on supplier partnerships, MAP compliance, brand protection, contact conversion, and demo deployment preparation.

Built with React 19, Vite, and plain CSS. Demo deployed to Vercel. Production domain not connected yet.
