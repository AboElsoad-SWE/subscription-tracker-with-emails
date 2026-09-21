import router from "express";

const userRouter = router();
userRouter.get("/", (req, res) => res.send({message: "All users retrieved successfully!"}));

userRouter.post("/", (req, res) => res.send({message: "User created successfully!"}));

userRouter.get("/:id", (req, res) => res.send({message: "User retrieved successfully!"}));

userRouter.put("/:id", (req, res) => res.send({message: "User updated successfully!"}));

userRouter.delete("/:id", (req, res) => res.send({message: "User deleted successfully!"}));

export default userRouter;
