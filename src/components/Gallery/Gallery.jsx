import React from 'react';
import './Gallery.css';

import food1 from '../../assets/Food.webp';
import food2 from '../../assets/Food-2.webp';
import food3 from '../../assets/Food-3.webp';
import food4 from '../../assets/Food-4.webp';
import food5 from '../../assets/Food-5.webp';
import food6 from '../../assets/Food-6.webp';
import food7 from '../../assets/Food-7.webp';
import food8 from '../../assets/Food-8.webp';
import food9 from '../../assets/Food-9.webp';
import food10 from '../../assets/Food-10.webp';
import food11 from '../../assets/Food-11.webp';
import food12 from '../../assets/Food-12.webp';

const images = [
  { src: food1, alt: 'Sol House Tavern dish 1' },
  { src: food2, alt: 'Sol House Tavern dish 2' },
  { src: food3, alt: 'Sol House Tavern dish 3' },
  { src: food4, alt: 'Sol House Tavern dish 4' },
  { src: food5, alt: 'Sol House Tavern dish 5' },
  { src: food6, alt: 'Sol House Tavern dish 6' },
  { src: food7, alt: 'Sol House Tavern dish 7' },
  { src: food8, alt: 'Sol House Tavern dish 8' },
  { src: food9, alt: 'Sol House Tavern dish 9' },
  { src: food10, alt: 'Sol House Tavern dish 10' },
  { src: food11, alt: 'Sol House Tavern dish 11' },
  { src: food12, alt: 'Sol House Tavern dish 12' }
];

function Gallery() {
  // Duplicate for seamless loop
  const loopA = [...images, ...images];
  const loopB = [...images.slice().reverse(), ...images.slice().reverse()];

  return (
    <section id="gallery" className="sht-gallery">
      <div className="sht-gallery__inner">
        <div className="sht-gallery__header">
          <p className="sht-gallery__eyebrow">Gallery</p>
          <h2 className="sht-gallery__title">A taste of Sol House Tavern.</h2>
        </div>

        <div className="sht-gallery__marquee">
          <div className="sht-gallery__track sht-gallery__track--a">
            {loopA.map((img, idx) => (
              <div className="sht-gallery__tile" key={`${img.src}-a-${idx}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="sht-gallery__img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="sht-gallery__marquee sht-gallery__marquee--b">
          <div className="sht-gallery__track sht-gallery__track--b">
            {loopB.map((img, idx) => (
              <div className="sht-gallery__tile" key={`${img.src}-b-${idx}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="sht-gallery__img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="sht-gallery__note">
          Images shown are visuals provided by the Owner.
        </p>
      </div>
    </section>
  );
}

export default Gallery;
