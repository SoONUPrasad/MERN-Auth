import User from "../Models/user.models.js";

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        const user = await User.create({ name, email, password });
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await User.userMatch(email, password);
        if (!token) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        // console.log(token);
        res.status(200).cookie("token", token, {
            path: "/",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
            httpOnly: true,
            sameSite: "lax", 
        }).json({"message": "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: `${error.message}` });
    }
}

export { createUser, loginUser };