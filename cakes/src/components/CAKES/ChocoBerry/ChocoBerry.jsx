import styles from "./chocoBerry.module.css";
import { useQuery } from "react-query";
import { getCakeById } from "../../../utils/apiCakes";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ChocoBerry = ({ cakeDisplayed }) => {
  const id = cakeDisplayed?._id
  const { data: cake } = useQuery(["cakes", id], getCakeById);
  console.log("el pastel", cake);

  return (
    <>
      <div className={styles.chocoberryContainer}>
        {cake && (
          <>
            <div className={styles.cakeDetails}>
              <h1>{cake.title}</h1>
              <p>{cake.description}</p>
              {/* <button>View recipe</button> */}
              <Link to={`/recipes/${cake.title}`}>
                View recipe
              </Link>
            </div>
            <img src={cake.image} alt={cake.title} />
          </>
        )}
      </div>
      {cake && (
        <>
          <img
            src={cake.ingredient1}
            alt={cake.ingredient1}
            className={styles.choco}
          />
          <img
            src={cake.ingredient2}
            alt={cake.ingredient2}
            className={styles.berry}
          />
          <img
            src={cake.ingredient3}
            alt={cake.ingredient3}
            className={styles.berry2}
          />
        </>
      )}
    </>
  );
};

ChocoBerry.propTypes = {
  cakeDisplayed: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChocoBerry;
