import { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import './ContactForm.css';

const INITIAL_STATE = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL_STATE);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!fields.name.trim()) errs.name = 'Name is required.';
    if (!fields.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = 'Please enter a valid email address.';
    if (!fields.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('sending');

    // ── Backend integration point ──────────────────────────────────────
    // Replace the placeholder below to connect to a real backend.
    //
    // Option A — Formspree:
    //   const res = await fetch(siteConfig.formEndpoint, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify(fields),
    //   });
    //   if (!res.ok) throw new Error('Submission failed');
    //
    // Option B — Netlify Forms:
    //   Add name="contact" netlify to the <form> element, and encode body as URLSearchParams.
    //
    // Option C — EmailJS:
    //   emailjs.send(serviceId, templateId, fields, publicKey)
    // ──────────────────────────────────────────────────────────────────

    if (siteConfig.formEndpoint) {
      try {
        const res = await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(fields),
        });
        if (!res.ok) throw new Error('Submission failed');
        setStatus('success');
        setFields(INITIAL_STATE);
      } catch {
        setStatus('error');
      }
    } else {
      // Placeholder behavior — no endpoint configured yet
      setTimeout(() => {
        setStatus('success');
        setFields(INITIAL_STATE);
      }, 800);
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form__success" role="alert">
        <div className="contact-form__success-icon" aria-hidden="true">✓</div>
        <h3>Inquiry Received</h3>
        <p>
          Thank you. Your inquiry has been received. We will review your message
          and respond as soon as possible.
        </p>
        <button
          className="btn btn--outline-dark"
          onClick={() => setStatus('idle')}
          style={{ marginTop: '1.5rem' }}
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact inquiry form"
    >
      <div className="contact-form__row">
        {/* Name */}
        <div className="contact-form__field">
          <label htmlFor="cf-name" className="contact-form__label">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            className={`contact-form__input${errors.name ? ' error' : ''}`}
            value={fields.name}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name && <span className="contact-form__error">{errors.name}</span>}
        </div>

        {/* Company */}
        <div className="contact-form__field">
          <label htmlFor="cf-company" className="contact-form__label">
            Company Name
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            className="contact-form__input"
            value={fields.company}
            onChange={handleChange}
            placeholder="Your company"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="contact-form__row">
        {/* Email */}
        <div className="contact-form__field">
          <label htmlFor="cf-email" className="contact-form__label">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            className={`contact-form__input${errors.email ? ' error' : ''}`}
            value={fields.email}
            onChange={handleChange}
            placeholder="your@email.com"
            autoComplete="email"
          />
          {errors.email && <span className="contact-form__error">{errors.email}</span>}
        </div>

        {/* Phone / WhatsApp */}
        <div className="contact-form__field">
          <label htmlFor="cf-phone" className="contact-form__label">
            Phone / WhatsApp
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            className="contact-form__input"
            value={fields.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Message */}
      <div className="contact-form__field">
        <label htmlFor="cf-message" className="contact-form__label">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          className={`contact-form__input contact-form__textarea${errors.message ? ' error' : ''}`}
          value={fields.message}
          onChange={handleChange}
          placeholder="Please describe your wholesale partnership inquiry or product availability questions."
          rows={6}
        />
        {errors.message && <span className="contact-form__error">{errors.message}</span>}
      </div>

      {status === 'error' && (
        <p className="contact-form__error contact-form__submit-error" role="alert">
          Something went wrong. Please try again or contact us directly via email.
        </p>
      )}

      <button
        type="submit"
        className="btn btn--primary btn--lg contact-form__submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
      </button>
    </form>
  );
}
