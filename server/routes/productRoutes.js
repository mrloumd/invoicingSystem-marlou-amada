import express from "express";
import { getProduct } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.route("/").get(getProduct);

export default productRouter;
