import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/sol-house-logo.png';
import './Header.css';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'location', label: 'Visit' }
];

function Header() {
  return (
    <header className="sht-header">
      <div className="sht-header__inner">
        <div className="sht-header__brand">
          <img
            src={logo}
            alt="Sol House Tavern logo"
            className="sht-header__logo"
          />
          <div>
            <div className="sht-header__name">Sol House Tavern</div>
            <div className="sht-header__tagline">Middletown, Connecticut</div>
          </div>
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

        <button
          type="button"
          className="sht-header__reserve"
          onClick={() => {}}
        >
          Make a reservation
        </button>
      </div>
    </header>
  );
}

export default Header;
