import express from "express";
import {createUser, loginUser} from "../controllers/user.controllers.js";
import authMiddleware from "../middlewares/auth.middleware.js"

const route = express.Router();

route.post("/signup", createUser);
route.post("/signin", loginUser);
route.get("/verify", authMiddleware, (req, res) => {
    res.send("Everything is fine");
})

export default route;