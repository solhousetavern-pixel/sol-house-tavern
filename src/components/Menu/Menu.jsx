import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuSections, menuData } from '../../data/menuData.js';
import './Menu.css';

function Menu() {
  const [active, setActive] = useState('starters');
  const items = menuData[active] ?? [];

  return (
    <section id="menu" className="sht-menu">
      <div className="sht-menu__inner">
        <header className="sht-menu__header">
          <p className="sht-menu__eyebrow">Menu</p>
          <h2 className="sht-menu__title">Full Sol House Tavern menu.</h2>
          <p className="sht-menu__subtitle">
            Starters, pastas, handhelds, large plates, and more everything in one place without a
            long scroll. Switch categories to explore the full menu.
          </p>
        </header>

        <div className="sht-menu__shell">
          <div className="sht-menu__tabs">
            {menuSections.map(section => (
              <button
                key={section.id}
                type="button"
                className={`sht-menu__tab ${
                  active === section.id ? 'sht-menu__tab--active' : ''
                }`}
                onClick={() => setActive(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="sht-menu__panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="sht-menu__list">
                {items.map(item => (
                  <div key={item.name} className="sht-menu-item">
                    <div className="sht-menu-item__row">
                      <h3 className="sht-menu-item__name">{item.name}</h3>
                      <span className="sht-menu-item__price">
                        {typeof item.price === 'number' ? `$${item.price}` : item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="sht-menu-item__description">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="sht-menu__note">
          Substitute sweet potato fries with handhelds for +$1.50. Menu items &amp; pricing are
          subject to change.
        </p>
      </div>
    </section>
  );
}

export default Menu;
