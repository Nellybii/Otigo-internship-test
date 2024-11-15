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
    fetch("/fx.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.fx)) {
          const formattedData = data.fx.map((item) => {
            const exchangeRate = item.exchangeRate || {};
            const flagCode = item.currency ? item.currency.slice(0,2).toLowerCase() : "";
            const countryName = item.nameI18N;
            const flagUrl = `/flags/flags/${flagCode}.png`;

            return {
              country: countryName,
              currency: item.currency,
              code: item.currency,
              buy: exchangeRate.buy,
              sell: exchangeRate.sell,
              rate: exchangeRate.middle,
              flag: flagUrl,
            };
          });
          console.log(formattedData)

          setCurrencies(formattedData);
        } else {
          console.error("Data.fx is not an array:", data.fx);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const filteredCurrencies = useFilteredCurrencies(currencies, searchTerm);

  const handleClick = (currencyCode) => {
    navigate(`/currency/${currencyCode}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header component */}
      <Header />

      {/* Sticky Search Bar */}
      <SearchBar onSearch={setSearchTerm} />

      {/* Content section with padding-top to avoid overlap with sticky search bar */}
      <div className="pt-24"> {/* Adjust pt-24 for proper spacing */}
        <CurrencyList currencies={filteredCurrencies} onCurrencyClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
