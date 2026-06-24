import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo" onClick={closeMenu} aria-label="Nexvora Group — Home">
          <span className="logo-top">{siteConfig.companyShortName}</span>
          <span className="logo-bottom">{siteConfig.companyTagline}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `header__nav-link${isActive ? ' active' : ''}`
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          className="btn btn--primary header__cta"
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </button>

        {/* Mobile hamburger */}
        <button
          className={`header__burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`header__mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `header__mobile-link${isActive ? ' active' : ''}`
              }
              end={link.path === '/'}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            className="btn btn--primary"
            style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
            onClick={() => { navigate('/contact'); closeMenu(); }}
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
