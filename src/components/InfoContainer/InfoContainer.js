import React from 'react';
import './infoContainer.css';
import SpeciesItem from '../SpeciesItem/SpeciesItem';
import { species } from '../../data';

export default function InfoContainer() {
  const data = species;
  return (
    <div id="info" className="info-container">
      <div className="info-title">
        <h1 className="info-header">Top Five Endangered Species</h1>
      </div>
      {data.map((item, index) => (
        <SpeciesItem key={index} species={item} number={index + 1} />
      ))}
    </div>
  );
}
