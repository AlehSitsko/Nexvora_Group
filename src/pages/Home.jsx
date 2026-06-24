import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ValueCard from '../components/ValueCard';
import { siteConfig } from '../data/siteConfig';
import './Home.css';

const VALUES = [
  {
    icon: '🤝',
    title: 'Long-Term Relationships',
    description:
      'We build strong supplier relationships through consistency, trust, and professional communication.',
  },
  {
    icon: '⚖️',
    title: 'MAP Compliance',
    description:
      'We respect brand pricing policies and help maintain pricing consistency across authorized channels.',
  },
  {
    icon: '🛡️',
    title: 'Brand Protection',
    description:
      "We take brand reputation seriously and represent every partner's products in a responsible way.",
  },
  {
    icon: '✅',
    title: 'Authorized Channels',
    description:
      'We work within approved retail channels and respect supplier requirements and brand guidelines.',
  },
];

const PARTNERSHIP_CHECKLIST = [
  'Regular wholesale purchasing',
  'Respect for brand policies',
  'Clear and reliable communication',
  'Long-term cooperation',
  'MAP and pricing policy compliance',
  'No unauthorized distribution',
];

export default function Home() {
  const navigate = useNavigate();
  const { seo, email, location, whatsappNumber } = siteConfig;

  return (
    <>
      <SEO title={seo.home.title} description={seo.home.description} />

      {/* ── HERO ── */}
      <section className="hero" aria-label="Introduction">
        <div className="hero__overlay" />
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__content">
          <p className="section-label">Pennsylvania, USA</p>
          <h1 className="hero__headline">
            Professional Wholesale &<br />
            E-Commerce Retail Partner
          </h1>
          <p className="hero__sub">
            Nexvora Group partners with brands, manufacturers, and authorized
            distributors to build long-term wholesale relationships based on
            trust, consistency, and brand protection.
          </p>
          <div className="hero__actions">
            <button
              className="btn btn--primary btn--lg"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
            <button
              className="btn btn--outline btn--lg"
              onClick={() => navigate('/about')}
            >
              Learn Our Approach
            </button>
          </div>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section who-we-are">
        <div className="container">
          <div className="who-we-are__inner">
            <div className="who-we-are__text">
              <p className="section-label">Who We Are</p>
              <div className="divider" />
              <h2 className="section-title">
                A Reliable B2B Retail Partner
              </h2>
              <p className="section-subtitle">
                Nexvora Group is a Pennsylvania-based e-commerce retail company
                focused on wholesale purchasing and professional online retail
                operations. We value long-term partnerships, clear
                communication, and respect for each brand's policies and
                standards.
              </p>
              <button
                className="btn btn--outline-dark"
                style={{ marginTop: '2rem' }}
                onClick={() => navigate('/about')}
              >
                About Our Company
              </button>
            </div>
            <div className="who-we-are__image" aria-hidden="true">
              <div className="who-we-are__image-inner">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80"
                  alt="Professional conference room representing a trusted business environment"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE VALUE ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="values-header">
            <p className="section-label">Our Principles</p>
            <div className="divider" />
            <h2 className="section-title">What We Value</h2>
            <p className="section-subtitle">
              Our approach to wholesale partnerships is built on four core
              principles that guide every business relationship we form.
            </p>
          </div>
          <div className="grid-4 values-grid">
            {VALUES.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHOLESALE PARTNERSHIPS (dark) ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="partnership__inner">
            <div className="partnership__left">
              <p className="section-label">Work With Us</p>
              <div className="divider" style={{ background: '#4db88d' }} />
              <h2 className="section-title">Wholesale Partnerships</h2>
              <p className="section-subtitle">
                We are interested in establishing wholesale purchasing
                relationships with brands, manufacturers, and authorized
                distributors.
              </p>
              <button
                className="btn btn--primary btn--lg"
                style={{ marginTop: '2rem' }}
                onClick={() => navigate('/contact')}
              >
                Start a Partnership
              </button>
            </div>
            <div className="partnership__right">
              <ul className="check-list check-list--light">
                {PARTNERSHIP_CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── LET'S BUILD (CTA) ── */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <p className="section-label">Get In Touch</p>
            <div className="divider" />
            <h2 className="section-title cta-section__title">
              Let's Build a Strong Partnership
            </h2>
            <p className="section-subtitle cta-section__sub">
              We welcome the opportunity to discuss how we can work together to
              support your brand's success.
            </p>
            <div className="cta-section__contact">
              <div className="cta-section__contact-item">
                <span className="cta-section__contact-label">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="cta-section__contact-value"
                >
                  {email}
                </a>
              </div>
              <div className="cta-section__contact-item">
                <span className="cta-section__contact-label">Location</span>
                <span className="cta-section__contact-value">{location}</span>
              </div>
              <div className="cta-section__contact-item">
                <span className="cta-section__contact-label">WhatsApp</span>
                {whatsappNumber ? (
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                    className="cta-section__contact-value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {whatsappNumber}
                  </a>
                ) : (
                  <span className="cta-section__contact-value cta-section__placeholder">
                    [Add WhatsApp Number Here]
                  </span>
                )}
              </div>
            </div>
            <button
              className="btn btn--primary btn--lg"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
