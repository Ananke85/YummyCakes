import styles from "./chocoBerry.module.css";
import chocoberry from "../../../assets/tarta_chocoberry.png";
import choco from "../../../assets/ingred_choco.png";
import berry from "../../../assets/ingred_raspberry.png";
import berry2 from "../../../assets/ingred_raspberry2.png";

const ChocoBerry = () => {
  return (
    <>
      <div className={styles.chocoberryContainer}>
        <div className={styles.cakeDetails}>
        <h1>choco berry cake</h1>
        <p>Description</p>
        <button>View recipe</button>
        </div>
        
        <img src={chocoberry} alt="chocolate and berry cake"></img>
      </div>
      <img src={choco} alt="chocolate" className={styles.choco}></img>
      <img src={berry} alt="raspberries" className={styles.berry}></img>
      <img src={berry2} alt="raspberries" className={styles.berry2}></img>
    </>
  );
};

export default ChocoBerry;