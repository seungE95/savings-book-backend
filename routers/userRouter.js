import express from "express";
import { login, signup, nickname, userdata, home } from "../controllers/userController.js";
import { auth } from "../authMiddleware.js";

const userRouter = express.Router();

userRouter.get("/", home);
userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.patch("/nickname", auth, nickname);
userRouter.post("/userdata", auth, userdata);

export default userRouter;