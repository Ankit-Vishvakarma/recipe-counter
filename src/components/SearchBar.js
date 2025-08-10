import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [localTerm, setLocalTerm] = useState("");

  const handleSearchClick = () => {
    if (localTerm.trim().length >= 3) {
      onSearch(localTerm);
    } else {
      alert("Please enter at least 3 characters to search.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={localTerm}
        onChange={(e) => setLocalTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px",
          marginRight: "10px"
        }}
      />
      <button
        onClick={handleSearchClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
