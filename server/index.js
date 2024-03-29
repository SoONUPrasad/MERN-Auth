import app from "./app.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;
dotenv.config({
    path: "./.env"
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})