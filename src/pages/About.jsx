import SEO from '../components/SEO';
import { siteConfig } from '../data/siteConfig';
import './About.css';

const PRINCIPLES = [
  {
    icon: '💼',
    title: 'Professionalism',
    description:
      'We maintain a serious and structured approach to supplier relationships.',
  },
  {
    icon: '⚖️',
    title: 'Compliance',
    description:
      'We respect supplier requirements, MAP policies, and brand guidelines.',
  },
  {
    icon: '🔄',
    title: 'Consistency',
    description:
      'We focus on long-term cooperation rather than short-term opportunities.',
  },
  {
    icon: '💬',
    title: 'Transparency',
    description:
      'We communicate clearly with suppliers and respond promptly to business inquiries.',
  },
  {
    icon: '🛡️',
    title: 'Brand Respect',
    description:
      'We understand that every brand has its own positioning, standards, and distribution strategy.',
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
          <div className="about-content__image" aria-hidden="true">
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
          <div className="principles-grid">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="principle-card">
                <div className="principle-card__icon" aria-hidden="true">
                  {p.icon}
                </div>
                <div>
                  <h3 className="principle-card__title">{p.title}</h3>
                  <p className="principle-card__desc">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
