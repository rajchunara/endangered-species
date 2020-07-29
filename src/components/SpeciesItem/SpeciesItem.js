import React from 'react';
import './speciesItem.css';

export default function SpeciesItem({ species, number }) {
  const { name, url, secUrl, info } = species;

  let speciesItemViewForDesktop = number % 2 === 0 ? 'even' : 'odd';
  return (
    <div className={`species-item species-${speciesItemViewForDesktop}`}>
      <div className={`item-container ${speciesItemViewForDesktop}`}>
        <div className="image-container">
          <img
            className={`image-1 img-1-${speciesItemViewForDesktop}`}
            src={`${process.env.PUBLIC_URL + url}`}
            alt=""
          />
          <img
            className={`image-2 img-2-${speciesItemViewForDesktop}`}
            src={`${process.env.PUBLIC_URL + secUrl}`}
            alt=""
          />
        </div>
        <div className="species-info-container">
          <h1 className="species-title"> {`0${number} ${name}`}</h1>

          <p className="species-info">
            {info.para_1}
            <br />
            <br />
            {info.para_2}
          </p>
        </div>
      </div>
    </div>
  );
}
