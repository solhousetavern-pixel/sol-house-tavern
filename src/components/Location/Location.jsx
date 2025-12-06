import React from 'react';
import './Location.css';

function Location() {
  return (
    <section id="location" className="sht-location">
      <div className="sht-location__inner">
        <div className="sht-location__info">
          <p className="sht-location__eyebrow">Visit Us</p>
          <h2 className="sht-location__title">Your spot on Newfield Street.</h2>
          <p className="sht-location__text">
            Find Sol House Tavern in Middletown, Connecticut. Join us for dinner, drinks, and
            golden-hour tavern vibes on Newfield Street.
          </p>

          <div className="sht-location__grid">
            <div>
              <h3>Address</h3>
              <p>
                670 Newfield Street
                <br />
                Middletown, CT 06457
              </p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>
                Phone: <a href="tel:8600000000">(860) 000-0000</a>
                <br />
                Email:{' '}
                <a href="mailto:info@solhousetavern.com">
                  info@solhousetavern.com
                </a>
              </p>
            </div>
            <div>
              <h3>Hours*</h3>
              <p>
                Mon–Thu · 4:00 pm – 10:00 pm
                <br />
                Fri–Sat · 4:00 pm – 11:00 pm
                <br />
                Sun · 3:00 pm – 9:00 pm
              </p>
              <p className="sht-location__note">*Update with your exact hours.</p>
            </div>
          </div>
        </div>

        <div className="sht-location__map-card">
          <iframe
            title="Sol House Tavern location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.612774080783!2d-72.686491!3d41.571709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7dba1a7fca63b%3A0x0000000000000000!2s670%20Newfield%20St%2C%20Middletown%2C%20CT%2006457!5e0!3m2!1sen!2sus!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="sht-location__map"
          />
        </div>
      </div>
    </section>
  );
}

export default Location;
