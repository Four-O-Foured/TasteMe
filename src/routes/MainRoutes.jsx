import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import CreateRecipes from "../pages/CreateRecipes";
import RecipeDetails from "../pages/RecipeDetails";
import RecipesUpdate from "../pages/RecipesUpdate";
import Favorites from "../pages/Favorites";
import HomeDetails from "../pages/HomeDetails";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/details/:id" element={<HomeDetails />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<RecipeDetails />}>
        <Route path="/recipes/details/:id/update" element={<RecipesUpdate />} />
      </Route>
      <Route path="/createrecipes" element={<CreateRecipes />} />
      <Route path="/fav" element={<Favorites />} />
    </Routes>
  );
};

export default MainRoutes;
