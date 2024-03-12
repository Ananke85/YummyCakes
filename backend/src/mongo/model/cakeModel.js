const { model } = require("mongoose");

const cakeSchema = require("../schema/cakeSchema");
const cakeModel = model("cake", cakeSchema);

module.exports = cakeModel;
