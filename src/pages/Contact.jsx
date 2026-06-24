import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { siteConfig } from '../data/siteConfig';
import './Contact.css';

const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

export default function Contact() {
  const { seo, email, location, whatsappNumber } = siteConfig;

  return (
    <>
      <SEO title={seo.contact.title} description={seo.contact.description} />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__content">
          <p className="section-label">Get In Touch</p>
          <h1 className="page-hero__title">Contact Nexvora Group</h1>
          <p className="page-hero__sub">
            We welcome inquiries from brands, manufacturers, and authorized
            distributors interested in wholesale partnerships.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="section">
        <div className="container contact-layout">
          {/* Sidebar */}
          <aside className="contact-info">
            <p className="section-label">Contact Information</p>
            <div className="divider" />
            <h2 className="section-title contact-info__title">
              Let's Discuss a Partnership
            </h2>
            <p className="contact-info__desc">
              Please contact us to discuss wholesale account opportunities,
              product availability, purchasing terms, or supplier requirements.
            </p>

            <div className="contact-info__list">
              <div className="contact-info__item">
                <div className="contact-info__item-icon"><IconEmail /></div>
                <div>
                  <p className="contact-info__item-label">Email</p>
                  <a href={`mailto:${email}`} className="contact-info__item-value contact-info__item-link">
                    {email}
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__item-icon"><IconPin /></div>
                <div>
                  <p className="contact-info__item-label">Location</p>
                  <p className="contact-info__item-value">{location}</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__item-icon"><IconChat /></div>
                <div>
                  <p className="contact-info__item-label">WhatsApp</p>
                  {whatsappNumber ? (
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                      className="contact-info__item-value contact-info__item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {whatsappNumber}
                    </a>
                  ) : (
                    // When whatsappNumber is empty, show neutral text — not a raw placeholder
                    <p className="contact-info__item-value contact-info__item-muted">
                      Available upon request
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* WhatsApp button — shown only when number is configured */}
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                className="btn btn--primary contact-info__wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
            )}

            <div className="contact-info__note">
              <p>
                We typically respond to business inquiries within one business day.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h2 className="contact-form-card__title">Partnership Contact Form</h2>
              <p className="contact-form-card__desc">
                Fill out the form below and we will review your message and
                respond as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
