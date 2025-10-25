import { useEffect, useState } from "react";
import axios from "../utils/axios";
import RecipeCard from "../components/RecipeCard";


const Home = () => {
  const [recipes, setRecipes] = useState(null);
  const fetchRecipes = async () => {
    try {
      // Check sessionStorage first
      const stored = sessionStorage.getItem("nigga");

      if (stored) {        
        setRecipes(JSON.parse(stored));
        return; // Skip API call
      }

      // Fetch from API only if not in storage
      const res = await axios.get("/recipes");
      
      setRecipes(res);
      sessionStorage.setItem("nigga", JSON.stringify(res));
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  if (!recipes) return <p className="text-6xl text-rose-600">Loading...</p>;

  const renderedRecipes = recipes.map((item) => <RecipeCard key={item.id} recipe={item} page="home" />);


  return (
    <div>
      <h1 className="text-7xl text-[#E0C097] font-semibold">Recipes</h1>
      <div className="flex flex-wrap w-full gap-5">{renderedRecipes}</div>
    </div>
  );
};

export default Home;
