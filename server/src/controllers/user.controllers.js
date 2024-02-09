import User from "../Models/user.models.js";

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password
    })
    
    res.status(200).json({ message: "User created successfully" });
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && user.password === password) {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
}

export { createUser, loginUser };