import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HomeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(
    JSON.parse(sessionStorage.getItem("nigga"))
  );

  const filteredRecipes = recipe.filter((item) => item.id == id);
  
  

  const { imgurl, title, cuisine, difficulty, chef, instructions, ingredients } = filteredRecipes[0];
  

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

  return (
    <div className="w-full flex ">
      <div className="left w-1/2 relative">
        {/* {favourite.includes(params.id) ? (
          <i
            onClick={unfavHandler}
            className="ri-heart-3-fill active:scale-90 text-rose-400 text-6xl absolute top-0 right-50"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className="ri-heart-3-line active:scale-90 text-rose-400 text-6xl absolute top-0 right-50"
          ></i>
        )} */}

        <h1 className="text-7xl text-[#BCA88D] font-semibold mb-10">{title}</h1>
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

         <button
              onClick={() =>
                navigate(-1)
              }
              className="text-2xl text-[#BCA88D] p-2 border-1 font-semibold mt-10 mb-5 rounded-xl hover:scale-105 active:scale-95 hover:border-[#38b858] hover:text-[#38b858]"
            >
              Go Back
            </button>

      </div>
    </div>
  );
};

export default HomeDetails;
