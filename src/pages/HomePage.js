
import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../services/api";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import RecipeList from "../components/RecipeList";
import SortButton from "../components/sortButton";
import IntroductionPage from "../components/Introduction";
import "../App.css";

function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loadScreen, setLoadScreen] = useState(true);
    // const [categories, setCategories] = useState([]);
    useEffect(() => {
        let filtered = recipes;
        if (selectedCategory) {
            if (selectedCategory === "All Cuisines") {
                filtered = recipes; // Reset to all recipes if "All Cuisines" is selected
            } else {
                filtered = filtered.filter((r) => r.cuisine === selectedCategory);
                if (filtered.length === 0) {
                    alert("No recipes found for the selected category.");
                    filtered = recipes; // Reset to all recipes if no match found
                }
            }
        }

        setFilteredRecipes(filtered);
    }, [selectedCategory, recipes]);

    const handleSearch = async (term) => {
        setSearchTerm(term);
        const data = await fetchRecipes(term);
        if (data.length === 0) {
            alert("No recipes found for the given search term.");
        } else if (data.length > 0) {
            setLoadScreen(false);
        }
        setRecipes(data);
        setFilteredRecipes(data);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Recipe Counter</h1>
            {/* Flex container for Search and Filter */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                <SearchBar onSearch={handleSearch} />
                <CategoryFilter
                    // categories={categories}
                    selectedCategory={selectedCategory}
                    onSelect={setSelectedCategory}
                />
                <SortButton
                    handleSort={() =>
                        setFilteredRecipes(
                            [...filteredRecipes].sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes)
                        )
                    }
                />
            </div>
            {loadScreen && <div><IntroductionPage /> </div>}
            <RecipeList recipes={filteredRecipes} />
        </div>
    );
}

export default HomePage;
