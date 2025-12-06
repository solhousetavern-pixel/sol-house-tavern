import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="sht-footer">
      <div className="sht-footer__inner">
        <p className="sht-footer__name">Sol House Tavern</p>
        <p className="sht-footer__meta">670 Newfield Street, Middletown, CT 06457</p>
        <p className="sht-footer__meta">
          © {new Date().getFullYear()} Sol House Tavern. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
