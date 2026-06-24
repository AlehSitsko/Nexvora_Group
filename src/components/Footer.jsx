import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-top">{siteConfig.companyShortName}</span>
              <span className="footer__logo-bottom">{siteConfig.companyTagline}</span>
            </div>
            <p className="footer__tagline">
              A Pennsylvania-based e-commerce retail company focused on wholesale purchasing and long-term supplier partnerships.
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <p className="footer__nav-title">Navigation</p>
            <ul>
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <p className="footer__nav-title">Contact</p>
            <ul>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="footer__nav-link">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="footer__nav-link footer__location">{siteConfig.location}</span>
              </li>
              {siteConfig.whatsappNumber && (
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}`}
                    className="footer__nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {year} Nexvora Group. All rights reserved.</p>
          <p className="footer__sub">{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
