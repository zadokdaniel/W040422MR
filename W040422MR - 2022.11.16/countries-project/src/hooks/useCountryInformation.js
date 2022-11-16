import { useState, useEffect } from "react";
import countriesService from "../services/countriesService";

export const useCountryInformation = (countryName) => {
  const [countryInformation, setCountryInformation] = useState(null);

  useEffect(() => {
    const getCountryInformation = async () => {
      setCountryInformation(
        await countriesService.getCountryInformation(countryName)
      );
    };

    if (!countryName) {
      return;
    }
    getCountryInformation();
  }, [countryName]);

  return countryInformation;
};

export default useCountryInformation;
