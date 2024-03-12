import { useState } from "react";
import styles from "./home.module.css";
import ChocoBerry from "../CAKES/ChocoBerry/ChocoBerry";

const Home = () => {
  const cakes = ["chocoberry", "lemonpie", "nutcake"];
  console.log("cakes", cakes);

  const [currentCakeIndex, setCurrentCakeIndex] = useState(0);

  const handlePrevious = () => {
    if (currentCakeIndex > 0) {
      setCurrentCakeIndex(currentCakeIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentCakeIndex < cakes.length - 1) {
      setCurrentCakeIndex(currentCakeIndex + 1);
    }
  };

  const renderCake = () => {
    switch (cakes[currentCakeIndex]) {
      case "chocoberry":
        return <ChocoBerry />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.navBar}>
          {cakes.map((cake, index) => (
            <div key={index}>{cake}</div>
          ))}
        </div>
        <div>{renderCake()}</div>
        <div className={styles.buttonsContainer}>
          <button onClick={handlePrevious}>previous</button>
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </>
  );
};

export default Home;