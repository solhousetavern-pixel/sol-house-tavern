import React from 'react';
import './Story.css';
import storyImage from '../../assets/Our-story.webp'; // make sure file name matches exactly

function Story() {
  return (
    <section id="story" className="sht-story">
      <div className="sht-story__inner">
        <div className="sht-story__image-wrap">
          <img
            src={storyImage}
            alt="Sachin Kapoor and Monique Volpicelli at Sol House Tavern"
            className="sht-story__image"
          />
        </div>

        <div className="sht-story__content">
          <p className="sht-story__eyebrow">Our Story</p>
          <h2 className="sht-story__title">
            A partnership rooted in passion, creativity, and great food.
          </h2>

          <p className="sht-story__body">
            Sol House Tavern was created by Sachin Kapoor and Monique Volpicelli, whose story began
            right where they felt most at home in the restaurant industry. What started as two
            people working side by side quickly grew into a partnership rooted in passion,
            creativity, and a shared love for great food.
          </p>

          <p className="sht-story__body">
            In less than a year, Sachin and Monique brought their vision to life, building something
            truly special for the community: an American-style fusion tavern that blends comfort,
            bold flavors, and a fresh, modern atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
