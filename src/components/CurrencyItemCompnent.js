import React from "react";

const CurrencyItem = ({ country, currency, code, rate, flagUrl }) => {
  return (
    <div className="currency-item flex items-center p-4 border-b">
      <img
        src={flagUrl}
        alt={`Flag of ${country}`}
        className="w-8 h-8 mr-4"
      />
      <div className="currency-details flex flex-col">
        <span className="text-xl font-semibold">{country}</span>
        <span className="text-sm text-gray-500">{currency}</span>
        <span className="text-lg font-medium">{rate}</span>
      </div>
    </div>
  );
};

export default CurrencyItem;
