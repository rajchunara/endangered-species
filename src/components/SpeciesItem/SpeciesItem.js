import React from 'react';
import './speciesItem.css';

export default function SpeciesItem({ species, number }) {
  const { name, url, secUrl, info } = species;
  return (
    <div className="species-item">
      <div className="item-container">
        <div className="image-container">
          <img
            className="image-1"
            src={`${process.env.PUBLIC_URL + url}`}
            alt=""
          />
          <img
            className="image-2"
            src={`${process.env.PUBLIC_URL + secUrl}`}
            alt=""
          />
        </div>
        <div className="species-info-container">
          <h1 className="species-title"> {`0${number + 1} ${name}`}</h1>

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
