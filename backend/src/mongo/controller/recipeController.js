const recipeModel = require ("../model/recipeModel")

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await recipeModel.find();
    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json({ message: "Can't find your recipes" });
  }
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    const recipeById = await recipeModel
      .findById(id)
      .exec();
    res.status(200).json(recipeById);
  } catch (error) {
    res.status(404).json({ error: "Sorry, can't find this recipe" });
  }
};

const getRecipeByName = async (req, res) => {
  const { name } = req.params;
  try {
    const recipeName = await recipeModel
      .findById(name)
      .exec();
    res.status(200).json(recipeName);
  } catch (error) {
    res.status(404).json({ error: "Sorry, can't find this recipe" });
  }
};

const postRecipe = async (req, res) => {
  const { body } = req;
  try {
    const newRecipe = new recipeModel(body);
    await newRecipe.save();
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Sorry, can't post your recipe" });
  }
};

module.exports = {
  getAllRecipes,
  postRecipe,
  getRecipeById,
  getRecipeByName
}