import  { useState } from "react";
import "./PopularDestinations.css"
import { popularCities } from "../data/data";

const PopularDestinations = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <section className="popular-destinations">
      <h2>Destinos mais procurados</h2>
      <div className="city-buttons">
        {popularCities.map((city) => (
          <button key={city.name} onClick={() => handleClick(city)}
          className={selectedCity?.name === city.name ? 'active' : ''}>
            {city.name}
          </button>
        ))}
      </div>
      {selectedCity && (
        <div className="city-info">
          <img src={selectedCity.image} alt={selectedCity.name} />
          <p>{selectedCity.description}</p>
        </div>
      )}
    </section>
  );
};

export default PopularDestinations;
