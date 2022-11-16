import { useEffect, useState } from "react";
import useCountriesNames from "../hooks/useCountriesNames";
import CountryCard from "./countryCard";

const CountriesApp = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countriesList = useCountriesNames();

  useEffect(() => {
    if (countriesList.length) {
      setSelectedCountry(countriesList[0]);
    }
  }, [countriesList]);

  const handleCountrySelectorChange = (e) => setSelectedCountry(e.target.value);

  return (
    <div className="countries-app">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 col-12 mx-auto">
            <select
              onInput={handleCountrySelectorChange}
              value={selectedCountry}
              className="form-select"
            >
              {/* <option value="">Please Choose a Country</option> */}
              {countriesList.map((countryName) => (
                <option key={countryName} value={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {selectedCountry ? (
        <CountryCard name={selectedCountry} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountriesApp;
