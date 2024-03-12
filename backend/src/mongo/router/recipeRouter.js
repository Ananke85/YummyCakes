const express = require("express");

const {
  getAllRecipes,
  postRecipe,
  getRecipeById
} = require("../controller/recipeController");

const recipeRouter = express.Router();

recipeRouter.get("/", getAllRecipes);
recipeRouter.get("/:id", getRecipeById);
recipeRouter.post("/", postRecipe);

module.exports = recipeRouter;