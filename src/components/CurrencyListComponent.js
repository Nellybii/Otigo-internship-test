import React from "react";

const CurrencyList = ({ currencies, onCurrencyClick }) => {
  return (
    <div className="currency-list">
      <table className="table-auto w-full text-left border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Country Flag</th>
            <th className="border px-4 py-2">Currency Code</th>
            <th className="border px-4 py-2">Country</th>
            <th className="border px-4 py-2">Buying Rate</th>
            <th className="border px-4 py-2">Selling Rate</th>
            <th className="border px-4 py-2">Middle Rate</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2 text-center">
                <img
                  src={currency.flag}
                  alt={`${currency.country} flag`}
                  className="inline-block w-6 h-4"
                />
              </td>
              <td className="border px-4 py-2">{currency.currency}</td>
              <td className="border px-4 py-2">{currency.country}</td>
              <td className="border px-4 py-2">{currency.buy || "N/A"}</td>
              <td className="border px-4 py-2">{currency.sell || "N/A"}</td>
              <td className="border px-4 py-2">{currency.rate || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyList;
