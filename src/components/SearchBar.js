import React from "react";
import { useState } from "react";
import { getCountry } from "../services/api/ApiService.js";
import Population from "./Population.js";

function SearchBar() {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState({});

  // const [mapSrc, setMapSrc] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      getCountry(query)
        .then((response) => {
          setResults({
            name: response[0].name.common,
            officialName: response[0].name.official,
            independent: response[0].independent,
            currency: response[0].currencies,
            unMember: response[0].unMember,
            cioc: response[0].cioc,
            flag: response[0].flags.svg,
            capital: response[0].capital,
            region: response[0].region,
            languages: response[0].languages,
            subregion: response[0].subregion,
            population: response[0].population,
            area: response[0].area,
            timezones: response[0].timezones[0],
            maps: response[0].maps,
            flagAlt: response[0].flags.alt,
            coatOfArms: response[0].coatOfArms.png,
          });
        })
        .then(() => {
        })
        .catch(() => {
          alert(query + " is not a country");
        });
    }
  };

  return (
    <div className="card is-flex-direction-column">
      <div className="card-content">
        <div className="content">
          <h1 className="title is-4">Country Search</h1>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleSearch}
            />
            <span className="icon is-medium is-left">
              <i className="fa fa-search"></i>
            </span>
            <span className="icon is-medium is-right">
              <i className="fa fa-empire"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="content is-centered is-flex ">
            <Population
              commonName={results?.name}
              officialName={results?.officialName}
              currency={results?.currency}
              population={results?.population}
              capital={results?.capital}
              region={results?.region}
              languages={results?.languages}
              subregion={results?.subregion}
              flag={results?.flag}
              flagAlt={results?.flagAlt}
              independent={results?.independent}
              unMember={results?.unMember}
              countryCode={results?.cioc}
              coatOfArms={results?.coatOfArms}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
