import React from "react";

function Search({ searchTerm, onChangeSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
