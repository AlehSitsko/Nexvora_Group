// ============================================================
// SITE CONFIGURATION — Edit all company details here
// ============================================================

export const siteConfig = {
  // Company
  companyName: "Nexvora Group",
  companyShortName: "NEXVORA",
  companyTagline: "GROUP",
  domain: "nexvoragroup-pa.com",

  // Contact
  email: "store@nexvoragroup-pa.com",
  location: "Pennsylvania, USA",

  // WhatsApp — replace with full international number, e.g. "+12155550100"
  // Leave empty string to hide the WhatsApp button
  whatsappNumber: "",

  // Google Analytics — replace with your Measurement ID, e.g. "G-XXXXXXXXXX"
  // Leave empty string to disable analytics
  googleAnalyticsId: "",

  // SEO
  seo: {
    home: {
      title: "Nexvora Group | Wholesale & E-Commerce Retail Partner",
      description:
        "Nexvora Group is a Pennsylvania-based e-commerce retail company focused on wholesale purchasing, brand protection, MAP compliance, and long-term supplier partnerships.",
    },
    about: {
      title: "About Nexvora Group | Professional Wholesale Retail Partner",
      description:
        "Learn about Nexvora Group — a Pennsylvania-based e-commerce retail company committed to responsible wholesale purchasing, brand respect, and long-term supplier relationships.",
    },
    mapPolicy: {
      title: "MAP & Brand Protection Policy | Nexvora Group",
      description:
        "Nexvora Group respects Minimum Advertised Price policies, brand standards, and authorized distribution requirements to protect supplier value and pricing consistency.",
    },
    contact: {
      title: "Contact Nexvora Group | Wholesale Partnership Inquiries",
      description:
        "Contact Nexvora Group to discuss wholesale account opportunities, purchasing terms, and authorized supplier partnerships.",
    },
  },

  // Navigation
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "MAP Policy", path: "/map-policy" },
    { label: "Contact", path: "/contact" },
  ],

  // Contact form — replace action with Formspree / Netlify / EmailJS endpoint
  // Example Formspree: "https://formspree.io/f/YOUR_FORM_ID"
  formEndpoint: "",
};
