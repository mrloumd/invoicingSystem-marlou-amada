import express from "express";
import {
  getInvoice,
  setInvoice,
  deleteInvoice,
  updateInvoice,
} from "../controller/invoiceController.js";
import { protect } from "../middleware/authMiddleware.js";

const invoiceRouter = express.Router();

invoiceRouter.route("/").get(protect, getInvoice).post(protect, setInvoice);
invoiceRouter
  .route("/:id")
  .delete(protect, deleteInvoice)
  .put(protect, updateInvoice);

export default invoiceRouter;
