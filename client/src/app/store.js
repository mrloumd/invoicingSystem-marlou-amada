import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";
import invoiceReducer from "../features/invoice/invoiceSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    invoices: invoiceReducer,
    products: productReducer,
  },
});
