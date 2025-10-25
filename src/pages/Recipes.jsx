import { useContext } from "react";
import { recipecontext } from "../contexts/RecipesContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderedRecipes = data.map((item) => <RecipeCard key={item.id} recipe={item} page="recipes" />);

  return renderedRecipes[0] ? <div className="flex flex-wrap w-full gap-5">{renderedRecipes}</div>  : <div className="text-4xl text-[#E0C097]">No Recipes Found.</div>;
  
};

export default Recipes;
