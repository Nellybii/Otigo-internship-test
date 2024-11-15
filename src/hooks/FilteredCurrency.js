import { useEffect, useState } from "react";

export const useFilteredCurrencies = (data, searchTerm) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    setFilteredData(
      data.filter((item) => {
        const countryMatch = item.country
          ? item.country.toLowerCase().includes(lowerCaseTerm)
          : false;
        const codeMatch = item.code
          ? item.code.toLowerCase().includes(lowerCaseTerm)
          : false;

        return countryMatch || codeMatch;
      })
    );
  }, [searchTerm, data]);

  return filteredData;
};
