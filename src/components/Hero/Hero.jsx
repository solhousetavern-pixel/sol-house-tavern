import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiPhoneCall } from 'react-icons/fi';
import './Hero.css';

import slide1 from '../../assets/Menu-slideshow-1.webp';
import slide2 from '../../assets/Menu-slideshow-2.webp';
import slide3 from '../../assets/Menu-slideshow-3.webp';
import logo from '../../assets/sol-house-logo.png';


const heroImages = [
  {
    src: slide1,
    alt: 'Sol House Tavern signature dishes'
  },
  {
    src: slide2,
    alt: 'Freshly prepared comfort food at Sol House Tavern'
  },
  {
    src: slide3,
    alt: 'Modern American fusion plates at Sol House Tavern'
  }
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(id);
  }, []);

  const current = heroImages[index];

  return (
    <section id="hero" className="sht-hero">
      <div className="sht-hero__overlay" />

      <div className="sht-hero__inner">
        <motion.div
          className="sht-hero__content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={logo}
            alt="Sol House Tavern logo"
            className="sht-hero__logo"
            loading="lazy"
          />
          <p className="sht-hero__eyebrow">Sol House Tavern · Middletown</p>
          <h1 className="sht-hero__title">
            {/* Golden-hour tavern vibes, */}
            <span>Classic comfort dishes with a modern twist and globally inspired flavors</span>
          </h1>
          <p className="sht-hero__subtitle">
            Elevated tavern plates, shareable starters, and cocktails in a warm, cozy space on
            Newfield Street.
          </p>

          <div className="sht-hero__cta-row">
            <a
              href="tel:+18607405947"
              className="sht-hero__btn sht-hero__btn--primary"
            >
            <FiPhoneCall className="sht-hero__btn-icon" />
              Make a reservation
            </a>
            <Link to="menu" smooth spy offset={-80} duration={500}>
              <button
                type="button"
                className="sht-hero__btn sht-hero__btn--ghost"
              >
                View full menu
              </button>
            </Link>
          </div>

          <p className="sht-hero__meta">670 Newfield Street · Middletown, CT 06457</p>
        </motion.div>

        <div className="sht-hero__carousel">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              loading="lazy"
              className="sht-hero__image"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          </AnimatePresence>

          <div className="sht-hero__dots">
            {heroImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={`sht-hero__dot ${i === index ? 'sht-hero__dot--active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
