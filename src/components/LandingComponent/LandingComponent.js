import React from 'react';
import vanillaSmoothie from 'vanilla-smoothie';
import './landingComponent.css';

export default function LandingComponent() {
  return (
    <div className="landing-component">
      <div className="image-wrapper">
        <img
          className="background-image"
          src={`${
            process.env.PUBLIC_URL + '/assets/Images/Black Rhinos/rhino-2.jpg'
          }`}
          alt=""
        />
      </div>

      <div className="title-container">
        <div className="title-wrapper">
          <h1>Endangered</h1>
          <h1>Species</h1>
          <p>Save them before it is late</p>
          <div
            className="read-more-btn"
            onClick={() => vanillaSmoothie.scrollTo('#info')}
          >
            <a href="#info">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
