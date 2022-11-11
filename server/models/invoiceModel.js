import mongoose from "mongoose";

const invoiceSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      ref: "User",
    },
    lastName: {
      type: String,
      required: true,
      ref: "User",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    productName: {
      type: String,
      required: [true, "Please add product name"],
    },
    productPrice: {
      type: Number,
      required: [true, "Please add product price"],
    },
    productQuantity: {
      type: Number,
      required: [true, "Please add product Quantity"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Invoice", invoiceSchema);
