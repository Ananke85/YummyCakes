import { getRecipes } from "../../utils/apiRecipe";
import styles from "./recipe.module.css";
import { useQuery } from "react-query";

const Recipe = () => {
  const { data: recipes } = useQuery(["recipe"], getRecipes);
  // const { data: recipes } = useQuery(["recipe", name], () => getRecipeByName(name));

  console.log("recetas", recipes);

  return (
    <>
      <div className={styles.recipeContainer}>
        {recipes &&
          recipes.map((recipe) => (
            <div key={recipe._id}>
              <h1>{recipe.title}</h1>
              <img src={recipe.image}></img>
              <h3>{recipe.introduction}</h3>
              <h4>Preparation time: {recipe.preparation} minutes</h4>
              <h4>Baking time: {recipe.baking} minutes</h4>
              <h4>Servings: {recipe.servings} people</h4>

              <h3>Ingredients:</h3>
              {recipe.ingredients.map((ingred) => (
                <li key={ingred._id}>{ingred}</li>
              ))}

              <h3>Instructions:</h3>
              {recipe.instructions.map((instruc, index) => (
                <div key={instruc._id}>
                  <h4>
                    {index + 1}. {instruc.title}
                  </h4>
                  {instruc.steps.map((step) => (
                    <li key={step._id}>{step}</li>
                  ))}
                </div>
              ))}
              
              <p>And that is it!!</p>
              <p>{recipe.conclusion}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Recipe;
