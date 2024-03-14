import { useParams } from "react-router-dom";

const Recipe = () => {

  const {name} = useParams()

  console.log("EL NOMBRE DEL CAKE", name)
  return (
    <>
      <h1>la pagina de la receta</h1>
      <h1>{name}</h1>
    </>
  );
};

export default Recipe;
