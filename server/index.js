import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import invoiceRouter from "./routes/invoiceRoutes.js";
import connectDB from "./config/db.js";

//access variable in dotenv file
dotenv.config();
const port = process.env.PORT || 5000;

//db run fucntion
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/invoices", invoiceRouter);

// error Handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
