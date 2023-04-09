import React from "react";

const Population = (props) => {
  const {
    officialName,
    commonName,
    currency,
    population,
    languages,
    capital,
    region,
    subregion,
    independent,
    unMember,
    flag,
    flagAlt,
    countryCode,
    coatOfArms,
  } = props;

  if (!population) {
    return (
      <div className="is-flex-direction column">
        <p>Type in the name of any country within Searchbar above</p>
        <p>Information about the country will be displayed here</p>
      </div>
    );
  }

  const languagesArray = Object.values(languages);
  const currencyArray = Object.values(currency);
  const flagStyle = {
    border: "1px solid black",
    height: "60%",
    width: "60%",
  };

  var currencyString =
    currencyArray[0].name + "(" + currencyArray[0].symbol + ")";

  var languageString = "The main languages spoken there are ";
  if (languagesArray.length === 1) {
    languageString =
      "The main language spoken there is " + languagesArray[0] + ". ";
  } else if (languagesArray.length > 1) {
    for (let i = 0; i < languagesArray.length; i++) {
      if (i < languagesArray.length - 1) {
        languageString += languagesArray[i] + ", ";
      } else {
        languageString += "and " + languagesArray[i] + ". ";
      }
    }
  }

  return (
    <div>
      <div className="media-center is-half">
        <div className="media-content media-center is-flex is-flex-direction-column">
          <p className="title is-4"> Commonly known as: {commonName}</p>
          <p className="subtitle is-4">Official Name : {officialName}</p>
          <br />

          <div className="is-flex-direction-column">
            <p className="subtitle is-4">Official Coat Of Arms</p>
            <figure className="image is-64x64 is-inline-block">
              <img src={coatOfArms} alt="Countries coat of arm" />
            </figure>
            <br></br>
            <p className="subtitle is-6">
              {" "}
              <em>International country code :</em> {countryCode}
            </p>
          </div>

          <img
            className="is-centered is-half is-align-self-center"
            style={flagStyle}
            src={flag}
            alt={flagAlt}
          />
        </div>
      </div>
      <div>
        <p>
          The {officialName} is a country located in the {region} region,
          specifically in the {subregion} subregion with an estimated population
          of {population.toLocaleString()} people. {languageString}
          The country's capital is {capital[0]} and the currency that is utilised
          is the {currencyString}.
        </p>
        {independent && unMember ? (
          <p>
            As of writing The {officialName} is independent and is currently a
            member of the United Nations
          </p>
        ) : independent && !unMember ? (
          <p>
            As of writing The {officialName} is independent and is not currently
            a member of the United Nations
          </p>
        ) : !independent && unMember ? (
          <p>
            As of writing The {officialName} is not independent and is currently
            a member of the United Nations
          </p>
        ) : (
          <p>
            As of writing The {officialName} is not independent and is not
            currently a member of the United Nations
          </p>
        )}
      </div>
    </div>
  );
};

export default Population;
