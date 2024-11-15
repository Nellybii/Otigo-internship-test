import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
    window.location.hash = term;
  };

  useEffect(() => {
    const hashTerm = window.location.hash.slice(1);
    if (hashTerm) {
      setSearchTerm(hashTerm);
      onSearch(hashTerm);
    }
  }, [onSearch]);

  return (
    <div className="sticky top-0 bg-white z-10 shadow-md">
      <div className="p-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by country or code..."
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default SearchBar;
