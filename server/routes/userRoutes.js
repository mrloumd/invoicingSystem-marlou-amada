import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

// import { protect }  from "../middleware/authMiddleware"

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
// get the users informantion
userRouter.get("/me", protect, getMe);

export default userRouter;
