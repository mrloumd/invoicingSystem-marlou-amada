import asyncHandler from "express-async-handler";
import Invoice from "../models/invoiceModel.js";

// @desc    Get Invoice

const getInvoice = asyncHandler(async (req, res) => {
  //   get invoice of login user
  const invoices = await Invoice.find({ user: req.user.id });

  //get all users
  //   const invoices = await Invoice.find();
  //   res.status(200).json(invoices);
});

// @desc    Set invoice
const setInvoice = asyncHandler(async (req, res) => {
  if (
    !req.body.productName &&
    !req.body.productPrice &&
    !req.body.productQuantity
  ) {
    // error handler
    res.status(400);
    throw new Error("Please add all fields");
  }

  const invoice = await Invoice.create({
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    user: req.user.id,
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    productQuantity: req.body.productQuantity,
  });

  res.status(200).json(invoice);
});

// @desc    Delete invoice
const deleteInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(400);
    throw new Error("Invoice not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (invoice.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await invoice.remove();

  res.status(200).json({ id: req.params.id });
});

// @desc    Update invoice

const updateInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(400);
    throw new Error("Invoice not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the user's invoice
  if (invoice.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedInvoice = await Invoice.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedInvoice);
});

export { getInvoice, setInvoice, deleteInvoice, updateInvoice };
