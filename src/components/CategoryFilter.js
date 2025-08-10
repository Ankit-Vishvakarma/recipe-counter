import React from "react";
// get categories from data.js
import { categories } from "../data/data";
const CategoryFilter = ({selectedCategory, onSelect }) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onSelect(e.target.value)}
      style={{
        padding: "10px",
        margin: "10px",
        fontSize: "16px"
      }}
    >
      <option value="">All Cuisines</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
