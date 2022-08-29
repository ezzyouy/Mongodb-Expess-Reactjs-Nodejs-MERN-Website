import express from "express";
import data from "../data.js";
import Product from "../models/productModel.js";
import User from "../models/user.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProduct = await Product.insertMany(data.products);
  
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProduct,createdUsers });
});


export default seedRouter;
