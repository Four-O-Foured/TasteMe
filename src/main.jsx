import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RecipesContext from "./contexts/RecipesContext.jsx";
import { ToastContainer} from "react-toastify";

createRoot(document.getElementById("root")).render(
  <RecipesContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipesContext>
);
