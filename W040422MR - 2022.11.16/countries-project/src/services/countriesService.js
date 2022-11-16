export const getCountriesNames = async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name"
  );
  const countriesList = await response.json();

  return countriesList.map((country) => country.name.official).sort();
};

export const getCountryInformation = async (countryName) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const countryInformation = await response.json();
  return countryInformation[0];
};

const countriesService = {
  getCountriesNames,
  getCountryInformation,
};

export default countriesService;
