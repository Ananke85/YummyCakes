import { Link, useParams } from "react-router-dom";
import { getRecipes } from "../../utils/apiRecipe";
import styles from "./recipe.module.css";
import { useQuery } from "react-query";
import logo from "../../assets/YummyCakes_logo.png";
import { useEffect, useState } from "react";

const Recipe = () => {
  const { name } = useParams();
  const { data: recipes } = useQuery(["recipe"], getRecipes);
  const recipe = recipes?.find((reci) => reci.title === name);
  const transformedName = name ? name.replace(/\s+/g, "-") : "";

  const restOfRecipes = recipes?.filter((reci) => reci.title !== name);
  const getBackgroundColor = (name) => {
    switch (name) {
      case "Chocolate-and-Fig-Cake":
        return "var(--lilac)";
      case "Chocolate-and-Raspberry-Cake":
        return "var(--blue)";
      case "Classic-Peach-Pie":
        return "var(--orange)";
      case "Lemon-Meringue-Pie":
        return "var(--green)";
      case "Puff-Pastry-Strawberry-Cake":
        return "var(--pink)";
      case "Strawberry-Cake":
        return "var(--fucsia)";
      default:
        return "black";
    }
  };

  const [mobileScreen, setMobileScreen] = useState(false);
  const mobDimension = 376;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      setMobileScreen(window.innerWidth < mobDimension);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.recipeContainer} ${
          transformedName ? styles[transformedName] : ""
        }`}
      >
        <div className={styles.navBar}>
          <Link to="/">
            <img src={logo}></img>{" "}
          </Link>
        </div>
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
              {recipe.ingredients.map((ingred, index) => (
                <li key={index} className={styles.bullet}>
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
                {instruc.steps.map((step, index) => (
                  <li key={index} className={styles.bullet}>
                    <span className={styles.text}>{step}</span>
                  </li>
                ))}
              </div>
            ))}
            <div className={styles.conclusion}>
              <p className={styles.title}>And that is it!!</p>
              <p>{recipe.conclusion}</p>
            </div>
          </div>
        )}
      </div>
      <div
        className={styles.otherRecipes}
        style={{ backgroundColor: getBackgroundColor(transformedName) }}
      >
        <h3>Other recipes:</h3>
        <div className={styles.recipes}>
          {recipes &&
            restOfRecipes.map((recipe, index) => (
              <div key={index}>
                {" "}
                <Link to={`/recipes/${recipe.title}`}>{recipe.title}</Link>
              </div>
            ))}
        </div>

      {mobileScreen &&  <button onClick={scrollToTop}>Back to Top</button> }  
      </div>
    </>
  );
};

export default Recipe;
