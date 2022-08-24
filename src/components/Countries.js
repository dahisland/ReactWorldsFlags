import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import SortBar from "./SortBar";

const Countries = () => {
  const [data, setData] = useState([]);
  const [range, setRange] = useState(15);
  const [radioValue, setRadioValue] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <main>
      <SortBar
        range={range}
        setRange={setRange}
        setRadioValue={setRadioValue}
      />
      <ul className="countries">
        {data
          .filter((country) =>
            radioValue !== "All"
              ? country.continents[0].includes(radioValue)
              : country
          )
          .sort((a, b) =>
            a.translations.fra.common.localeCompare(b.translations.fra.common)
          )
          .slice(0, range)
          .map((country, index) => (
            <Card
              country={country}
              key={country.translations.fra.common + "-" + index}
            />
          ))}
      </ul>
    </main>
  );
};

export default Countries;
