const { model } = require("mongoose");

const recipeSchema = require("../schema/recipeSchema");
const recipeModel = model("recipe", recipeSchema);

module.exports = recipeModel;