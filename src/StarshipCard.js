// src/StarshipCard.js
import React from 'react';

function StarshipCard({ name }) {
  return (
    <div className="starship-card">
      <h3>{name}</h3>
    </div>
  );
}

export default StarshipCard;
