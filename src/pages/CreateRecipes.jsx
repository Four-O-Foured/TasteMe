import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../contexts/RecipesContext";
import { toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CreateRecipes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, setData } = useContext(recipecontext);

  const navigate = useNavigate();

  const submitHandler = (newRecipe) => {
    newRecipe.ingredients = newRecipe.ingredients.trim();
    newRecipe.instructions = newRecipe.instructions.trim();

    newRecipe.id = nanoid();

    const temp = [...data];
    temp.push(newRecipe);

    setData(temp);

    localStorage.setItem("recipes", JSON.stringify(temp));

    toast.success("Task Completed", {
      position: "top-center",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });

    reset();

    navigate("/recipes");
  };

  return (
    <div className="px-8">
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("imgurl", { required: "Image URL is required" })}
          type="url"
          placeholder="Enter Image Url"
          className="text-xl text-[#e0c097] mt-5 opacity-80 outline-none border-b-2 border-[#836e6e] p-1 focus:border-[#B85C38]"
        />

        <p className="text-red-400 my-1">{errors.imgurl?.message}</p>

        <input
          {...register("title", { required: "Title is required" })}
          type="text"
          placeholder="Recipe Title"
          className="text-3xl text-[#e0c097] outline-none border-b-2 border-[#836e6e] p-1 focus:border-[#B85C38] mt-5"
        />

        <p className="text-red-400 my-1">{errors.title?.message}</p>

        <textarea
          type="textarea"
          {...register("ingredients", { required: "Ingredients are required" })}
          placeholder="Write ingredients separated by commas"
          className="text-2xl text-[#e0c097] h-35 w-[35%] mt-5 outline-none border-b-2 border-[#836e6e] p-1 focus:border-[#B85C38] resize-none"
        ></textarea>

        <p className="text-red-400 my-1">{errors.ingredients?.message}</p>

        <textarea
          type="textarea"
          {...register("instructions", { required: "Instruction is required" })}
          placeholder="Write instructions separated by commas"
          className="text-2xl text-[#e0c097] h-35 w-[35%] mt-5 outline-none border-b-2 border-[#836e6e] p-1 focus:border-[#B85C38] resize-none"
        ></textarea>

        <p className="text-red-400 my-1">{errors.instructions?.message}</p>

        <input
          {...register("cuisine", { required: "Type of cusine is required" })}
          type="text"
          placeholder="Type of Cuisine"
          className="text-3xl text-[#e0c097] outline-none border-b-2 border-[#836e6e] p-1 focus:border-[#B85C38] mt-5"
        />
        <p className="text-red-400 my-1">{errors.cuisine?.message}</p>

        <input
          {...register("chef", { required: "Chef Name is required" })}
          type="text"
          placeholder="Chef Name"
          className="text-3xl text-[#e0c097] outline-none border-b-2 border-[#836e6e] p-1 focus:border-[#B85C38] mt-5"
        />
        <p className="text-red-400 my-1">{errors.chef?.message}</p>

        <p className="text-2xl mt-5 text-[#e0c097]">Difficulty : </p>

        <select
          {...register("difficulty", { required: "This is required" })}
          name="difficulty"
          className="text-xl text-[#e0c097] outline-none border-b-2 border-[#836e6e] p-1 focus:border-[#B85C38] mt-2"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <p className="text-red-400 my-1">{errors.difficulty?.message}</p>

        <button className="text-2xl p-2 px-5 bg-[#B85C38] rounded text-[#2D2424] font-semibold my-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;

