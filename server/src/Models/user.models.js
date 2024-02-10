import mongoose from "mongoose";
import { createHmac, randomBytes } from "node:crypto";
import { generateToken } from "../Utils/auth.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
    const salt = randomBytes(16).toString("hex");
    const hashPassword = createHmac("sha256", salt).update(user.password).digest("hex");
    user.salt = salt;
    user.password = hashPassword;
    next();
})

userSchema.static("userMatch", async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("User not found");
    const hashPassword = createHmac("sha256", user.salt).update(password).digest("hex");
    if (hashPassword !== user.password) throw new Error("Incorrect password");
    const token = generateToken(user);
    return token
})

const User = mongoose.model("User", userSchema);

export default User