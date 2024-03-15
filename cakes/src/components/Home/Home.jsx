import { useState } from "react";
import styles from "./home.module.css";
import { useQuery } from "react-query";
import { getCakes } from "../../utils/apiCakes";
import Cake from "../CAKES/Cake";

const Home = () => {
  const { data: cakes } = useQuery(["cakes"], getCakes);
  const cakesLinks = cakes?.map((cake) => cake.title);

  const [currentCakeIndex, setCurrentCakeIndex] = useState(0);
  const currentCake = cakes && cakes[currentCakeIndex];

  const handlePrevious = () => {
    if (currentCakeIndex > 0) {
      setCurrentCakeIndex(currentCakeIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentCakeIndex < cakes?.length - 1) {
      setCurrentCakeIndex(currentCakeIndex + 1);
    }
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.navBar}>
          {cakes &&
            cakesLinks.map((cake) => (
              <div key={cake._id} className={styles.navItem}>
                {cake}
              </div>
            ))}
        </div>
        <div className={styles.buttonsContainer}>

          {currentCakeIndex !==0 && (
          <button onClick={handlePrevious} className={styles.buttonLeft}>previous</button>

          )}
          <div></div>
          {currentCakeIndex !== cakes.length -1 && (
          <button onClick={handleNext}>next</button>

          )}
        </div>
        {cakes && <Cake cakeDisplayed={currentCake} />}
      </div>
    </>
  );
};

export default Home;
