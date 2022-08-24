import React, { useState } from "react";

const SortBar = ({ range, setRange, setRadioValue }) => {
  const continents = ["Asia", "America", "Africa", "Europe", "Oceania", "All"];

  const inputRadio = document.querySelectorAll(`input[type="radio"]`);
  console.log(inputRadio);

  return (
    <ul className="sortBar">
      <li key="sortBar-title">
        <h2>Countries</h2>
      </li>
      <li key="sortBar-range">
        <label htmlFor="rangeBar">{range}</label>
        <input
          type="range"
          id="rangeBar"
          min="1"
          max="250"
          defaultValue={range}
          onChange={(e) => setRange(e.target.value)}
        />
      </li>
      {continents.map((continent) => (
        <li key={"sortBar-radio-" + continent}>
          <label htmlFor={continent}>{continent}</label>
          <input
            type="radio"
            name="continent-radio"
            id={continent}
            onChange={(e) => setRadioValue(e.target.id)}
          ></input>
        </li>
      ))}
    </ul>
  );
};

export default SortBar;
