import React from 'react';
import './Team.css';
import teamImage from '../../assets/Our-team.webp';

function Team() {
  return (
    <section id="team" className="sht-team">
      <div className="sht-team__inner">
        <div className="sht-team__card">
          <img
            src={teamImage}
            alt="Meet the Staff at Sol House Tavern"
            className="sht-team__image"
            loading="lazy"
          />

          <div className="sht-team__label">
            <span className="sht-team__label-accent" />
            <h2 className="sht-team__title">Meet the Staff</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
