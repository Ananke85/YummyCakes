import { useParams } from "react-router-dom";
import { getRecipes } from "../../utils/apiRecipe";
import styles from "./recipe.module.css";
import { useQuery } from "react-query";

const Recipe = () => {
  const { name } = useParams();
  const { data: recipes } = useQuery(["recipe"], getRecipes);
  const recipe = recipes?.find((reci) => reci.title === name);
  const transformedName = name ? name.replace(/\s+/g, "-") : "";

  console.log("el nombre", name);

  return (
    <>
      <div
        className={`${styles.recipeContainer} ${
          transformedName ? styles[transformedName] : ""
        }`}
      >
        {name && recipe && (
          <div key={recipe._id} className={styles.recipeContent}>
            <h1>{recipe.title}</h1>
            <div className={styles.intro}>
              <img src={recipe.image}></img>
              <div>
                <p>{recipe.introduction}</p>
                <div className={styles.details}>
                  <h4>Preparation time: {recipe.preparation} minutes</h4>
                  <h4>Baking time: {recipe.baking} minutes</h4>
                  <h4>Servings: {recipe.servings} people</h4>
                </div>
              </div>
            </div>

            <h3>Ingredients:</h3>
            <div className={styles.ingredients}>
              {recipe.ingredients.map((ingred) => (
                <li
                  key={ingred._id}
                  className={styles.bullet}
                >
                 <span className={styles.text}>{ingred}</span> 
                </li>
              ))}
            </div>

            <h3>Instructions:</h3>
            {recipe.instructions.map((instruc, index) => (
              <div key={instruc._id}>
                <h4>
                  {index + 1}. {instruc.title}
                </h4>
                {instruc.steps.map((step) => (
                  <li
                    key={step._id}
                    className={styles.bullet}
                  >
                    <span className={styles.text}>{step}</span>
                  </li>
                ))}
              </div>
            ))}
            <div className={styles.conclusion}>
              <p>And that is it!!</p>
              <p>{recipe.conclusion}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Recipe;
