import React, { useState } from "react";

const SearchArea = ({searchText}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
       e.preventDefault()
       searchText(searchTerm)
  }

  return (
    <div className="search-box">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search Here :"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchArea;
