const cakeModel = require ("../model/cakeModel")

const getAllCakes = async (req, res) => {
  try {
    const allCakes = await portfolioModel.find();
    res.status(200).json(allCakes);
  } catch (error) {
    res.status(500).json({ message: "Can't find your cakes" });
  }
};

const getCakeById = async (req, res) => {
  const { id } = req.params;
  try {
    const cakeById = await cakeModel
      .findById(id)
      .exec();
    res.status(200).json(cakeById);
  } catch (error) {
    res.status(404).json({ error: "Sorry, can't find this cake" });
  }
};

const postCake = async (req, res) => {
  const { body } = req;

  try {

    // Update 'images' URLs directly
    body.image = body.image(imgUrl => imgUrl);
    body.ingredient1 = body.ingredient1(imgUrl => imgUrl);
    body.ingredient2 = body.ingredient2(imgUrl => imgUrl);
    body.ingredient3 = body.ingredient3(imgUrl => imgUrl);

    const newCake = new cakeModel(body);
    await newCake.save();
    res.status(200).json(newCake);
  } catch (error) {
    console.error("Error posting cake:", error);
    res.status(500).json({ message: "Sorry, can't post your cake" });
  }
};

module.exports = {
  getAllCakes,
  postCake,
  getCakeById
}