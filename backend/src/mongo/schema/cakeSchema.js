const { Schema } = require("mongoose");

const cakeSchema = new Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  ingredient1: { type: String },
  ingredient2: { type: String },
  ingredient3: { type: String },
});

module.exports = cakeSchema;
