import { verifyToken } from "../Utils/auth.js";

export const authMiddleware = (req, res, next) => {
    const tokenId = req.cookies.token;
    // console.log(req.cookies);
    try {
        const payload = verifyToken(tokenId);
        if (!payload) return res.status(401).json({ message: "Unauthorized" });
        // console.log(payload);
        req.user = payload;
        next();
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

export default authMiddleware;