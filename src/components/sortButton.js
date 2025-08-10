import React, { useState } from "react";

const SortButton = ({ handleSort }) => {
    const handleSortClick = () => {
    handleSort()
  }
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
      <button
        onClick={handleSortClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Sort Recipes
      </button>
    </div>
  );
};

export default SortButton;
