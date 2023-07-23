import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import "./style.css"

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships()
      .then(data => setStarships(data.results))
      .catch(error => console.error('Error fetching starships:', error));
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      {console.log(starships)}
      {starships.map(starship => (
        <div key={starship.name} className="starship-card">
          <p>Name: {starship.name}</p>
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Starship Class: {starship.starship_class}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
