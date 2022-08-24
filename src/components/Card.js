import React from "react";

const Card = ({ country }) => {
  return (
    <li className="countries_flag">
      <img
        src={country.flags.svg}
        alt={"Drapeau de " + country.translations.fra.common}
      />
      <div className="countries_flag--hover">
        <h3>{country.translations.fra.common}</h3>
        <p>Capitale : {country.capital}</p>
        <p>Population : {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
