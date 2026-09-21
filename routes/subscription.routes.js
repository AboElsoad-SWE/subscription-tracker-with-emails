import router from "express";

const subscriptionRouter = router();
subscriptionRouter.get("/", (req, res) => res.send({message: "All subscriptions retrieved successfully!"}));

subscriptionRouter.post("/:id", (req, res) => res.send({message: "Subscription created successfully!"}));

subscriptionRouter.get("/user/:id", (req, res) => res.send({message: "Subscription retrieved successfully!"}));

subscriptionRouter.put("/:id", (req, res) => res.send({message: "Subscription updated successfully!"}));

subscriptionRouter.delete("/:id", (req, res) => res.send({message: "Subscription deleted successfully!"}));

subscriptionRouter.get("/upcoming-renewals ", (req, res) => res.send({message: "All upcoming subscriptions retrieved successfully!"}));

export default subscriptionRouter;
