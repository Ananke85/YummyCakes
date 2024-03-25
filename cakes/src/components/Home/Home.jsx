import { useState } from "react";
import styles from "./home.module.css";
import { useQuery } from "react-query";
import { getCakes } from "../../utils/apiCakes";
import Cake from "../CAKES/Cake";

const Home = () => {
  const { data: cakes } = useQuery(["cakes"], getCakes);
  const cakesLinks = cakes?.map((cake) => cake.title);

  const [currentCakeIndex, setCurrentCakeIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const currentCake = cakes && cakes[currentCakeIndex];

  const handleNavItem = (index) => {
    setCurrentCakeIndex(index);
    setRotation(rotation + 360);
  };

  const handlePrevious = () => {
    if (currentCakeIndex > 0) {
      setCurrentCakeIndex(currentCakeIndex - 1);
      setRotation(rotation + 360);
    }
  };

  const handleNext = () => {
    if (currentCakeIndex < cakes?.length - 1) {
      setCurrentCakeIndex(currentCakeIndex + 1);
      setRotation(rotation + 360);
    }
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.navBar}>
          {cakes &&
            cakesLinks.map((cake, index) => (
              <div
                key={index}
                className={styles.navItem}
                onClick={() => handleNavItem(index)}
              >
                {cake}
              </div>
            ))}
        </div>
        <div className={styles.buttonsContainer}>
          {currentCakeIndex !== 0 && (
            <button onClick={handlePrevious} className={styles.buttonLeft}>
              <span className="icon-arrow-back-outline"></span>
            </button>
          )}
          {currentCakeIndex !== cakes?.length - 1 && (
            <button onClick={handleNext} className={styles.buttonRight}>
              <span className="icon-arrow-forward-outline"></span>
            </button>
          )}
        </div>
        {cakes && <Cake cakeDisplayed={currentCake} rotation={rotation} />}
      </div>
    </>
  );
};

export default Home;
