const express = require("express");

const {
  getAllCakes,
  postCake,
  getCakeById
} = require("../controller/cakeController");

const cakeRouter = express.Router();

cakeRouter.get("/", getAllCakes);
cakeRouter.get("/:id", getCakeById);
cakeRouter.post("/", postCake);

module.exports = cakeRouter;