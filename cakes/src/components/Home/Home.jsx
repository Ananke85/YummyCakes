import { useState } from "react";
import styles from "./home.module.css";
import ChocoBerry from "../CAKES/ChocoBerry/ChocoBerry";
import { useQuery } from "react-query";
import { getCakes } from "../../utils/apiCakes";

const Home = () => {
  const { data: cakes } = useQuery(["cakes"], getCakes);
  const cakesLinks = cakes?.map((cake) => cake.title);

  console.log("los pastelitos", cakes);
  const [currentCakeIndex, setCurrentCakeIndex] = useState(0);
  const currentCake = cakes && cakes[currentCakeIndex]


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

  // const renderCake = () => {
  //   const currentCake = cakesLinks && cakesLinks[currentCakeIndex];
  //   if (currentCake) {
  //     switch (currentCake) {

  //       case "Chocolate and Raspberry Cake":
  //         return <ChocoBerry />;
  //       // Add cases for other cakes as needed
  //       default:
  //         return null;
  //     }
  //   }
  //   return null;
  // };

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.navBar}>
          {cakes && cakesLinks.map((cake) => <div key={cake._id}>{cake.title}</div>)}
          {cakes && (
            <ChocoBerry
              cakeDisplayed={currentCake}
            />
          )}
        </div>
        {/* <div>{renderCake()}</div> */}
        <div className={styles.buttonsContainer}>
          <button onClick={handlePrevious}>previous</button>
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </>
  );
};

export default Home;
