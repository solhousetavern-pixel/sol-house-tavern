import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  menuSections,
  menuData,
  // brunchSections,
  // brunchData,
} from '../../data/menuData.js';
import './Menu.css';

// ─── Sub-component: a single menu item row ────────────────────────────────────
function MenuItemCard({ item }) {
  return (
    <div className="sht-menu-item">
      <div className="sht-menu-item__row">
        <h3 className="sht-menu-item__name">{item.name}</h3>
        <span className="sht-menu-item__price">
          {typeof item.price === 'number' ? `$${item.price}` : item.price}
        </span>
      </div>

      {item.description &&
        (Array.isArray(item.description) ? (
          <div className="sht-menu-item__description">
            {item.description.map((line, i) => (
              <p key={i} className="sht-menu-item__description-line">{line}</p>
            ))}
          </div>
        ) : (
          <p className="sht-menu-item__description">{item.description}</p>
        ))}

      {/* inline note (e.g. "GF bun +$2") */}
      {item.note && <p className="sht-menu-item__note">{item.note}</p>}

      {/* toppings grid — used by the omelette item */}
      {item.toppings && (
        <div className="sht-menu-item__toppings">
          {item.toppings.map(t => (
            <span key={t} className="sht-menu-item__topping-tag">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Sub-component: the shared tab + panel shell ──────────────────────────────
function MenuShell({ sections, data, accentClass }) {
  const [active, setActive] = useState(sections[0].id);
  const items = data[active] ?? [];

  return (
    <div className={`sht-menu__shell ${accentClass}`}>
      <div className="sht-menu__tabs">
        {sections.map(section => (
          <button
            key={section.id}
            type="button"
            className={`sht-menu__tab ${active === section.id ? 'sht-menu__tab--active' : ''}`}
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
              <MenuItemCard key={item.name} item={item} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Main exported component ──────────────────────────────────────────────────
function Menu() {
  const [mode, setMode] = useState('main'); // 'main' | 'brunch'
  const isBrunch = mode === 'brunch';

  return (
    <section id="menu" className="sht-menu">
      <div className="sht-menu__inner">

        {/* ── Header ── */}
        <header className="sht-menu__header">
          <p className="sht-menu__eyebrow">Menu</p>
          <h2 className="sht-menu__title">Sol House Tavern Menu</h2>
          <p className="sht-menu__subtitle">
            Switch between our full dinner menu and the Sunday Brunch
            menu — everything in one place.
          </p>
        </header>

        {/* ── Mode toggle ── */}
        <div className="sht-menu__mode-toggle-wrap">
          <div className="sht-menu__mode-toggle">
            <button
              type="button"
              className={`sht-menu__mode-btn ${!isBrunch ? 'sht-menu__mode-btn--active' : ''}`}
              onClick={() => setMode('main')}
            >
              Main Menu
            </button>
            {/* <button
              type="button"
              className={`sht-menu__mode-btn sht-menu__mode-btn--brunch ${isBrunch ? 'sht-menu__mode-btn--active sht-menu__mode-btn--brunch-active' : ''}`}
              onClick={() => setMode('brunch')}
            >
              <span className="sht-menu__sun-icon">☀</span>
              Sunday Brunch
              <span className="sht-menu__badge">Sundays Only</span>
            </button> */}
          </div>
        </div>

        {/* ── Menu shell (animated swap between modes) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {isBrunch ? (
              <MenuShell
                sections={brunchSections}
                data={brunchData}
                accentClass="sht-menu__shell--brunch"
              />
            ) : (
              <MenuShell
                sections={menuSections}
                data={menuData}
                accentClass=""
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Footer note ── */}
        <p className="sht-menu__note">
          {isBrunch
            ? 'Sunday Brunch served weekly. Menu items & pricing subject to change. Please inform your server of any allergies.'
            : 'Substitute sweet potato fries with handhelds for +$1.50. \u2756\u00a0Cooked to order. Menu items & pricing subject to change. Please inform your server of any allergies.'}
        </p>

      </div>
    </section>
  );
}

export default Menu;