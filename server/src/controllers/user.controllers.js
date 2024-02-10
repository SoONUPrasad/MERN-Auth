import User from "../Models/user.models.js";

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
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
        res.cookie("token", token, {
            path: "/",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
            httpOnly: true,
            sameSite: "lax", 
        }).json({ token });
    } catch (error) {
        res.status(500).json({ message: `from login ${error}` });
    }
}

export { createUser, loginUser };