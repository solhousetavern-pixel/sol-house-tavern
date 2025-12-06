import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1604908176997-1251884b08a3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Shareable starters at Sol House Tavern'
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Burger with fries and toppings'
  },
  {
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pasta dish with sauce and garnish'
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
          <p className="sht-hero__eyebrow">Sol House Tavern · Middletown</p>
          <h1 className="sht-hero__title">
            Golden-hour tavern vibes,
            <span>comfort food with a global twist.</span>
          </h1>
          <p className="sht-hero__subtitle">
            Elevated tavern plates, shareable starters, and cocktails in a warm, sun-lit space on
            Newfield Street.
          </p>

          <div className="sht-hero__cta-row">
            <button
              type="button"
              className="sht-hero__btn sht-hero__btn--primary"
              onClick={() => {}}
            >
              Make a reservation
            </button>
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
