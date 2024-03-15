import styles from "./cake.module.css";
import { useQuery } from "react-query";
import { getCakeById } from "../../utils/apiCakes";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Cake = ({ cakeDisplayed }) => {
  const id = cakeDisplayed?._id;
  const { data: cake } = useQuery(["cakes", id], getCakeById);

  return (
    <>
      <div className={styles.chocoberryContainer}>
        {cake && (
          <div className={styles.cakeDetails}>
            <h1>{cake.title}</h1>
            <p>{cake.description}</p>
            <Link to={`/recipes/${cake.title}`}>View recipe</Link>
            <img src={cake.image} alt={cake.title} />
          </div>
        )}
      </div>
      {cake && (
        <div>
          <img
            src={cake.ingredient1}
            alt={cake.ingredient1}
            className={styles.ingr1}
          />
          <img
            src={cake.ingredient2}
            alt={cake.ingredient2}
            className={styles.ingr2}
          />
          <img
            src={cake.ingredient3}
            alt={cake.ingredient3}
            className={styles.ingr3}
          />
        </div>
      )}
    </>
  );
};

Cake.propTypes = {
  cakeDisplayed: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cake;
