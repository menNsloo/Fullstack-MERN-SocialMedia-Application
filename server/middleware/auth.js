import jwt from 'jsonwebtoken';
import { error } from 'npmlog';

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Autherization");

        if (!token) {
            return res.status(403).json('Access denied');
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();

    } catch {
        res.status(500).json({ err: err.message });
    }
}
