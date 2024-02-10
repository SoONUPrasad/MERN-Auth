import {createUser, loginUser} from "../controllers/user.controllers.js";
import express from "express";

const route = express.Router();

route.post("/signup", createUser);
route.post("/signin", loginUser);

export default route;