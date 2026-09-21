import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => res.send({ message: "All subscriptions retrieved successfully!" }));

subscriptionRouter.post("/", (req, res) => res.send({ message: "Subscription created successfully!" }));

subscriptionRouter.get("/upcoming-renewals", (req, res) => res.send({ message: "All upcoming subscriptions retrieved successfully!" }));

subscriptionRouter.get("/user/:id", (req, res) => res.send({ message: "User subscriptions retrieved successfully!" }));

subscriptionRouter.get("/:id", (req, res) => res.send({ message: "Subscription retrieved successfully!" }));

subscriptionRouter.put("/:id", (req, res) => res.send({ message: "Subscription updated successfully!" }));

subscriptionRouter.delete("/:id", (req, res) => res.send({ message: "Subscription deleted successfully!" }));

export default subscriptionRouter;
