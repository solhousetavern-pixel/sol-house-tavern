import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'location', label: 'Visit' }
];

function Header() {
  return (
    <header className="sht-header">
      <div className="sht-header__inner">
        <div className="sht-header__brand">
          <div className="sht-header__name">Sol House Tavern</div>
          <div className="sht-header__tagline">Middletown, Connecticut</div>
        </div>

        <nav className="sht-header__nav">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              spy
              offset={-80}
              duration={500}
              className="sht-header__nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+18607405947"
          className="sht-header__reserve"
        >
          Make a reservation
        </a>
      </div>
    </header>
  );
}

export default Header;
