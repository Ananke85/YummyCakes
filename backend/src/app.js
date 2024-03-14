const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // Import CloudinaryStorage

const cakeRouter = require("./mongo/router/cakeRouter");
const recipeRouter = require("./mongo/router/recipeRouter")
const { connectDB } = require("./mongo/connection");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Use CloudinaryStorage with Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "cakes", // Change this to your desired folder
    format: async (req, file) => "png", // You can change the format if needed
    public_id: (req, file) => file.fieldname + "-" + Date.now(),
  },
});

const upload = multer({ storage: storage });
const app = express();
app.use(cors());
app.use(express.json());
app.use("/cakes", cakeRouter);
app.use("/cakes/:id", cakeRouter)
app.use("/recipes/:name", recipeRouter)

app.use("/recipes", recipeRouter)


if (process.env.MONGO_URL) {
  connectDB().then(() => console.log("Connected to database"));
}

module.exports = app;