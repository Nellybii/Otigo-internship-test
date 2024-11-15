import React from "react";

const CurrencyList = ({ currencies, onCurrencyClick }) => {
  return (
    <div className="currency-list">
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Flag & Currency</th>
            <th className="px-4 py-2">Country</th>
            <th className="px-4 py-2">Buying Rate</th>
            <th className="px-4 py-2">Selling Rate</th>
            <th className="px-4 py-2">Middle Rate</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency, index) => (
            <tr key={index}>
              <td className="px-4 py-2">
                <img
                  src={currency.flag}
                  alt={currency.currency}
                  className="inline-block w-6 h-4"
                />
                <span>{currency.currency}</span>
              </td>
              <td className="px-4 py-2">{currency.country}</td>
              <td className="px-4 py-2">{currency.buy || "N/A"}</td>
              <td className="px-4 py-2">{currency.sell || "N/A"}</td>
              <td className="px-4 py-2">{currency.rate || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyList;
