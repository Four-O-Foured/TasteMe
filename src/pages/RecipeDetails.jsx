import { useContext, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../contexts/RecipesContext";
import { toast } from "react-toastify";

const RecipeDetails = () => {
  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const navigate = useNavigate();
  const params = useParams();
  const { data, setData } = useContext(recipecontext);
  const recipe = data.find((item) => item.id == params.id);

  if (!data.length) {
    // data not loaded yet from localStorage
    return <div className="p-8 text-2xl text-[#E0C097]">Loading recipe...</div>;
  }

  if (!recipe) {
    // data loaded but no match found
    return <div className="p-8 text-2xl text-[#E0C097]">Recipe not found.</div>;
  }
  const { imgurl, title, cuisine, difficulty, chef } = recipe;

  let { instructions, ingredients } = recipe;

  ingredients = ingredients.split(",");
  instructions = instructions.split(",");

  const ing = ingredients.map(
    (item, index) => (
      (item = item.trim()),
      (
        <li key={index} className="text-2xl font-thin mt-2  text-[#E0C097]">
          {item}
        </li>
      )
    )
  );

  const ins = instructions.map(
    (item, index) => (
      (item = item.trim()),
      (
        <li key={index + 1} className="text-2xl font-thin mt-2 text-[#E0C097]">
          {item}
        </li>
      )
    )
  );

  const deleteHandler = () => {
    const filtered = data.filter((item) => item.id != params.id);
    localStorage.setItem("recipes", JSON.stringify(filtered));
    setData(filtered);
    unfavHandler();
    navigate("/recipes");
    toast.success("Recipe Deleted", { autoClose: 1000 });
  };


  const favHandler = () => {
    const updated = [...favourite, recipe.id];
    setFavourite(updated);
    localStorage.setItem("fav", JSON.stringify(updated));
  };

  const unfavHandler = () => {
    const updated = favourite.filter((item) => item != params.id);
    setFavourite(updated);
    localStorage.setItem("fav", JSON.stringify(updated));
  };

  return (
    <>
      <div className="w-full flex ">
        <div className="left w-1/2 relative">
          {favourite.includes(params.id) ? (
            <i
              onClick={unfavHandler}
              className="ri-heart-3-fill active:scale-90 text-rose-400 text-6xl absolute top-0 right-50"
            ></i>
          ) : (
            <i
              onClick={favHandler}
              className="ri-heart-3-line active:scale-90 text-rose-400 text-6xl absolute top-0 right-50"
            ></i>
          )}

          <h1 className="text-7xl text-[#BCA88D] font-semibold mb-10">
            {title}
          </h1>
          <img
            className="h-130 w-2/3 object-cover rounded-2xl"
            src={imgurl}
            alt=""
          />
          <h1 className="text-5xl text-[#B85C38] font-semibold mt-7">
            <span className="text-[#E0C097] text-4xl">Chef: </span>
            {chef}
          </h1>
          <h1 className="text-5xl inline-block text-[#B85C38] font-semibold my-7">
            <span className="text-[#E0C097] text-4xl">Cuisine: </span>
            {cuisine}
          </h1>
          <h1 className="text-5xl text-[#B85C38] font-semibold ">
            <span className="text-[#E0C097] text-4xl">Difficulty: </span>
            {difficulty}
          </h1>
        </div>
        <div className="right w-1/2">
          <h1 className="text-5xl text-[#BCA88D] text-center font-thin mb-5">
            Ingredients
          </h1>

          <ul className="list-disc">{ing}</ul>

          <h1 className="text-5xl  text-[#BCA88D] text-center font-thin my-5">
            Instructions
          </h1>

          <ol className="list-decimal mb-5">{ins}</ol>

          <div className="w-full flex justify-center gap-50">
            <button
              onClick={() =>
                navigate("/recipes/details/" + params.id + "/update")
              }
              className="text-2xl text-[#BCA88D] p-2 border-1 font-semibold mt-20 rounded-xl hover:scale-105 active:scale-95 hover:border-[#38b858] hover:text-[#38b858]"
            >
              To Update
            </button>
            <button
              onClick={deleteHandler}
              className="text-2xl text-[#BCA88D] p-2 border-1 font-semibold mt-20 rounded-xl active:scale-95 hover:scale-105 hover:border-rose-700 hover:text-rose-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default RecipeDetails;
