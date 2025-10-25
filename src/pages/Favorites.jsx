import { useContext } from "react";
import { recipecontext } from "../contexts/RecipesContext";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { data } = useContext(recipecontext);

  if (!data.length)
    return <div className="p-8 text-4xl text-[#E0C097]">Loading recipe...</div>;

  const fav = JSON.parse(localStorage.getItem("fav")) || [];

  if (!fav.length)
    return (
      <div className="p-8 text-4xl text-[#E0C097]">No Favorites Found.</div>
    );

  const renderedfav = data
    .filter((item) => fav.includes(item.id))
    .map((item) => <RecipeCard key={item.id} recipe={item} />);

  return renderedfav[0] ? (
    <div className="flex flex-wrap w-full gap-5">{renderedfav}</div>
  ) : (
    <div className="p-8 text-4xl text-[#E0C097]">No Favorites Found.</div>
  );
};

export default Favorites;
