import { Router } from "express";
const authRouter = Router();
import { signup, signin, signout } from "../controllers/auth.controller.js";


authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/signout", signout);


export default authRouter;
