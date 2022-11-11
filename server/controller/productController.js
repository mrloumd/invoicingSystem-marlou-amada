import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProduct = asyncHandler(async (req, res) => {
  //get all Product
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

export { getProduct };
