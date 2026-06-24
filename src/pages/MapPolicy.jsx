import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { siteConfig } from '../data/siteConfig';
import './MapPolicy.css';

const COMMITMENTS = [
  'Respecting MAP and MSRP policies where applicable',
  'Avoiding price dumping and aggressive price competition',
  'Following supplier and brand guidelines',
  'Using approved sales and distribution channels',
  'Maintaining professional product representation',
  'Responding promptly to supplier concerns',
  'Avoiding unauthorized distribution to third parties',
];

export default function MapPolicy() {
  const navigate = useNavigate();
  const { seo } = siteConfig;

  return (
    <>
      <SEO title={seo.mapPolicy.title} description={seo.mapPolicy.description} />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__content">
          <p className="section-label">Brand & Pricing Standards</p>
          <h1 className="page-hero__title">MAP & Brand Protection Policy</h1>
          <p className="page-hero__sub">
            Our commitment to responsible retail operations, pricing integrity,
            and long-term brand relationships.
          </p>
        </div>
      </section>

      {/* Intro text */}
      <section className="section">
        <div className="container map-intro">
          <div className="map-intro__lead">
            <p className="section-label">Our Position</p>
            <div className="divider" />
            <h2 className="section-title">Our Approach to Pricing Integrity</h2>
            <div className="map-intro__body">
              <p>
                Nexvora Group respects the importance of Minimum Advertised
                Price policies, brand standards, and authorized distribution
                requirements.
              </p>
              <p>
                We understand that pricing consistency helps protect brand
                value, maintain healthy retail relationships, and prevent
                unnecessary price competition.
              </p>
              <p>
                Our company is committed to operating in a responsible and
                professional manner when working with brands, manufacturers,
                and authorized distributors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments (dark block) */}
      <section className="section section--dark">
        <div className="container">
          <div className="map-commitments">
            <div className="map-commitments__header">
              <p className="section-label">What We Follow</p>
              <div className="divider" style={{ background: '#4db88d' }} />
              <h2 className="section-title">
                Our MAP & Brand Protection Approach Includes:
              </h2>
            </div>
            <ul className="check-list check-list--light map-commitments__list">
              {COMMITMENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final statement */}
      <section className="section section--gray">
        <div className="container map-final">
          <div className="map-final__card">
            <div className="map-final__icon" aria-hidden="true">🛡️</div>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Long-Term Cooperation. Responsible Retail.
            </h2>
            <p>
              Nexvora Group is focused on long-term cooperation and responsible
              retail operations.
            </p>
            <p style={{ marginTop: '1rem' }}>
              If a supplier or brand representative has a concern regarding
              pricing, product representation, or policy compliance, we
              encourage direct communication so the matter can be reviewed
              and addressed promptly.
            </p>
            <button
              className="btn btn--primary btn--lg"
              style={{ marginTop: '2rem' }}
              onClick={() => navigate('/contact')}
            >
              Contact Us Directly
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
