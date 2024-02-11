import Jwt from "jsonwebtoken";

const JWT_SECRET = process.env.SECRET_KEY;

const generateToken = (user) => {
    // console.log(user)
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email
    }
    const token = Jwt.sign(payload, JWT_SECRET,{
        expiresIn: "1h"
    });
    return token
}

const verifyToken = (token) => {
    const payload = Jwt.verify(token, JWT_SECRET);
    return payload
}

export { generateToken, verifyToken };