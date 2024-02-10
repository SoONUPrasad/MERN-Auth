import express from "express";
import route from "./src/routes/user.routes.js";
import staticRouter from "./src/routes/static.routes.js";
import ConnectDB from "./src/db/connection.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
ConnectDB();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", staticRouter);
app.use("/api", route);

export default app;