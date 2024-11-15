import React, { useEffect, useState } from "react";
import { useFilteredCurrencies } from "./hooks/FilteredCurrency";
import CurrencyList from "./components/CurrencyListComponent";
import { useNavigate } from "react-router-dom";
import Header from "./components/HeaderComponent";
import SearchBar from "./components/SearchBar.js";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("/fx.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (Array.isArray(data.fx)) {
          const formattedData = data.fx.map((item) => {
            const exchangeRate = item.exchangeRate || {};
            const flagCode = item.currency ? item.currency.slice(0, 2).toLowerCase() : "";
            const countryName = item.nameI18N;
            const flagUrl = `/flags/flags/${flagCode}.png`;

            return {
              country: countryName,
              currency: item.currency,
              code: item.currency,
              buy: exchangeRate.buy || "N/A",
              sell: exchangeRate.sell || "N/A",
              rate: exchangeRate.middle || "N/A",
              flag: flagUrl,
            };
          });
          
          setCurrencies(formattedData);
        } else {
          console.error("Data.fx is not an array:", data.fx);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const filteredCurrencies = useFilteredCurrencies(currencies, searchTerm);

  const handleClick = (currencyCode) => {
    navigate(`/currency/${currencyCode}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 m-20">
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <div className="pt-24">
        <CurrencyList currencies={filteredCurrencies} onCurrencyClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
