import router from "express";
const authRouter = router();

authRouter.post("/signup", (req, res) => res.send({message: "User signed up successfully!"}));
authRouter.post("/signin", (req, res) => res.send({message: "User logged in successfully!"}));
authRouter.post("/signout", (req, res) => res.send({message: "User logged out successfully!"}));
export default authRouter;
