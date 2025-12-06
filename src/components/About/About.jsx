import React from 'react';
import SectionShell from '../ui/SectionShell.jsx';

function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="Our Story"
      title="A sun-lit tavern with a global spirit."
    >
      <div className="about">
        <div className="about__text">
          <p>
            Sol House Tavern is a modern neighborhood tavern inspired by the warmth of the sun in
            our logo – a place where friends, family, and neighbors gather around good food and
            thoughtful drinks.
          </p>
          <p>
            Our menu blends elevated tavern favorites with bold flavors from around the world:
            Pad Thai with steak and shrimp, Panko Parm Crusted Cod, Mac Crack with five cheeses,
            and shareable starters that light up the table.
          </p>
          <p>
            Whether you&apos;re dropping in for a plate of wings, a date-night steak, or a family
            dinner, Sol House is your spot to unwind, celebrate, and feel at home.
          </p>
        </div>
        <div className="about__highlights">
          <div className="about__highlight-card">
            <h3>Crafted Plates</h3>
            <p>From handhelds to large plates, every dish is built for flavor and comfort.</p>
          </div>
          <div className="about__highlight-card">
            <h3>Neighborhood Energy</h3>
            <p>Casual, welcoming, and perfect for regulars and first-timers alike.</p>
          </div>
          <div className="about__highlight-card">
            <h3>Golden Hour Vibes</h3>
            <p>Design and lighting inspired by the warm glow of the Sol House sun.</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default About;
