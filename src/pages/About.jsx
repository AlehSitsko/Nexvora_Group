import SEO from '../components/SEO';
import { siteConfig } from '../data/siteConfig';
import './About.css';

// SVG line icons — no emoji
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconRefresh = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
    <polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
);
const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const PRINCIPLES = [
  {
    Icon: IconBriefcase,
    title: 'Professionalism',
    description: 'We maintain a serious and structured approach to supplier relationships.',
  },
  {
    Icon: IconShield,
    title: 'Compliance',
    description: 'We respect supplier requirements, MAP policies, and brand guidelines.',
  },
  {
    Icon: IconRefresh,
    title: 'Consistency',
    description: 'We focus on long-term cooperation rather than short-term opportunities.',
  },
  {
    Icon: IconEye,
    title: 'Transparency',
    description: 'We communicate clearly with suppliers and respond promptly to business inquiries.',
  },
  {
    Icon: IconStar,
    title: 'Brand Respect',
    description: 'We understand that every brand has its own positioning, standards, and distribution strategy.',
  },
];

export default function About() {
  const { seo } = siteConfig;

  return (
    <>
      <SEO title={seo.about.title} description={seo.about.description} />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__content">
          <p className="section-label">Who We Are</p>
          <h1 className="page-hero__title">About Nexvora Group</h1>
          <p className="page-hero__sub">
            A Pennsylvania-based e-commerce retail company built for
            long-term wholesale partnerships.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="section">
        <div className="container about-content">
          <div className="about-content__text">
            <p className="section-label">Our Story</p>
            <div className="divider" />
            <h2 className="section-title">
              A Company Built on Long-Term Thinking
            </h2>
            <div className="about-content__body">
              <p>
                Nexvora Group is a Pennsylvania-based e-commerce retail company
                focused on wholesale purchasing and professional online retail
                operations.
              </p>
              <p>
                We work with brands, manufacturers, and authorized distributors
                that are looking for reliable retail partners.
              </p>
              <p>
                Our company was built with a focus on responsible growth,
                long-term supplier relationships, and respect for brand
                standards.
              </p>
              <p>
                We understand that suppliers need partners who can follow
                pricing policies, communicate clearly, and protect the value of
                their products.
              </p>
              <p>
                At Nexvora Group, we aim to be that kind of partner.
              </p>
            </div>
          </div>
          <div className="about-content__image">
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&q=80"
              alt="Modern office environment representing professional business operations"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section section--gray">
        <div className="container">
          <div className="principles-header">
            <p className="section-label">How We Operate</p>
            <div className="divider" />
            <h2 className="section-title">Our Business Principles</h2>
            <p className="section-subtitle">
              These five principles define how we approach every supplier
              relationship and business decision.
            </p>
          </div>
          <ol className="principles-list">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="principles-list__item">
                <span className="principles-list__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="principles-list__icon" aria-hidden="true">
                  <p.Icon />
                </div>
                <div className="principles-list__body">
                  <h3 className="principles-list__title">{p.title}</h3>
                  <p className="principles-list__desc">{p.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
