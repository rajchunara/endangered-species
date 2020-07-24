import React from 'react';
import './infoContainer.css';
import SpeciesItem from '../SpeciesItem/SpeciesItem';
import { species } from '../../data';

export default function InfoContainer() {
  const data = species;
  return (
    <div id="info" className="info-container">
      {data.map((item, index) => (
        <SpeciesItem key={index} species={item} number={index} />
      ))}
    </div>
  );
}
