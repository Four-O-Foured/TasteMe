import axios from "axios";
const instance = axios.create({
  baseURL: "https://dummyjson.com/",
});

instance.interceptors.request.use(
  function (config) {

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


instance.interceptors.response.use(
  function (response) {
    const res = response.data.recipes;
    const resp = res.map((elem) =>{ return {id : elem.id.toString(), title : elem.name, imgurl : elem.image, ingredients : elem.ingredients, instructions : elem.instructions, cuisine : elem.tags[1], difficulty : elem.difficulty}})
    
    
    return resp;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;