import { useEffect, useState } from "react";
import { getCountriesNames } from "../services/countriesService";

export const useCountriesNames = () => {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const getCountriesList = async () => {
      const countriesNames = await getCountriesNames();

      setCountriesList(countriesNames);
    };

    getCountriesList();
  }, []);

  return countriesList;
};

export default useCountriesNames;
