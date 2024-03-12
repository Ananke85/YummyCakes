const { Schema } = require("mongoose");

const recipeSchema = new Schema({
  title: { type: String },
  image: { type: String },
  introduction: { type: String },
  servings: { type: String },
  preparation: { type: Number },
  baking: { type: Number },
  ingredients: [{ type: String }],
  instructions: [{
    title: { type: String },
    steps: [{ type: String }],
  }],
  serve: { type: String },
  conclusion: { type: String },
});

module.exports = recipeSchema;
