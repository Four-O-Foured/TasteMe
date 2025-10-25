import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  
    const {id, imgurl, title, instructions, cuisine} = props.recipe;
    
    
  return (
    <Link className="hover:scale-101 hover:shadow-xl p-2 transition-all duration-50 w-[18vw] overflow-hidden mt-10 rounded" to={`/${props.page}/details/${id}`}>
    <img className="h-65 w-full object-cover rounded-2xl" src= {imgurl} alt="" />
    <h1 className="text-3xl text-[#E0C097] mt-3 font-semibold">{title}</h1>
    <p className="text-xl font-bold text-[#B85C38]">{cuisine}</p>
    <p className="text-base mt-2 text-[#E0C097]">{instructions.slice(0, 120)}<small className="text-[#B85C38] hover:text-blue-800 text-sm"> ....Read More</small> </p>
    </Link>
  )
}

export default RecipeCard