import {createUser, loginUser} from "../controllers/user.controllers.js";
import express from "express";

const route = express.Router();

route.post("/register", createUser);
route.post("/login", loginUser);

export default route;