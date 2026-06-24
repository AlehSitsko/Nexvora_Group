import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { siteConfig } from '../data/siteConfig';
import './Contact.css';

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
              Let's Discuss a<br /> Partnership
            </h2>
            <p className="contact-info__desc">
              Please contact us to discuss wholesale account opportunities,
              product availability, purchasing terms, or supplier requirements.
            </p>

            <div className="contact-info__list">
              <div className="contact-info__item">
                <div className="contact-info__item-icon" aria-hidden="true">✉</div>
                <div>
                  <p className="contact-info__item-label">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="contact-info__item-value"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__item-icon" aria-hidden="true">📍</div>
                <div>
                  <p className="contact-info__item-label">Location</p>
                  <p className="contact-info__item-value">{location}</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__item-icon" aria-hidden="true">💬</div>
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
                    <p className="contact-info__item-value contact-info__placeholder">
                      [Add WhatsApp Number Here]
                    </p>
                  )}
                </div>
              </div>
            </div>

            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                className="btn btn--primary contact-info__wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">💬</span>
                Message on WhatsApp
              </a>
            )}

            <div className="contact-info__note">
              <p>
                We typically respond to business inquiries within one business
                day.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h2 className="contact-form-card__title">Send an Inquiry</h2>
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
