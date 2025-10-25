import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-13 flex justify-center items-center mb-10">
      <div className="flex gap-8 justify-center text-4xl font-semibold text-[#B85C38] w-4xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#e0c097] underline" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#E0C097] underline" : ""
          }
          to="/recipes"
        >
          Recipes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#E0C097] underline" : ""
          }
          to="/createrecipes"
        >
          Create Recipes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#E0C097] underline" : ""
          }
          to="/fav"
        >
          Favorite
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
