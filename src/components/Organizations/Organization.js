import React from 'react';
import { organizationData } from '../../data';
import './organization.css';

export default function Organization() {
  return (
    <div className="organizations">
      <div className="help-text">
        <h1>
          <span className="line"></span>
          <span>Organizations Helping Them</span>
        </h1>
      </div>
      <div className="organization-container">
        {organizationData.map((org, index) => (
          <CardContainer org={org} key={index} />
        ))}
      </div>
    </div>
  );
}

function CardContainer({ org }) {
  return (
    <div className="card-container">
      <img
        src={`${process.env.PUBLIC_URL + org.imgUrl}`}
        alt=""
        className="card-image"
      />
      <div className="organization-name">
        <p>{org.name}</p>
      </div>
    </div>
  );
}
