import axios from "axios";

// const API_URL = "https://dummyjson.com/recipes";
const API_URL = "http://localhost:8080/api/recipes/search?keyword";
export const fetchRecipes = async (term) => {
  try {
    if (term) {
      const res = await axios.get(`${API_URL}=${term}`);
      console.log("Fetched recipes with keyword:", term, res);
      return res.data || [];
    } else {
      const res = await axios.get(API_URL);
      console.log("Fetched recipes with keyword:", term, res);
      return res.data || [];
    }
    const res = await axios.get(API_URL);
    console.log("Fetched recipes:", res);
    return res.data || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
// export const fetchRecipeById = async (id) => {
//   try {
//     const res = await axios.get(`${API_URL}/${id}`);
//     console.log("Fetched recipe by ID:", id, res);
//     return res.data || {};
//   } catch (error) {
//     console.error("Error fetching recipe by ID:", error);
//     return {};
//   }