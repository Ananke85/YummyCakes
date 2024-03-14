import { api } from "./api";


export const getRecipeByName = ({ name }) => {
  return api
    .get(`/recipes/${name}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export const getRecipes = () => {
  return api
    .get("/recipes")
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
};

