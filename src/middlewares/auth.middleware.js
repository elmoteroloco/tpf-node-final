import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const authRequired = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No autorizado. Token no provisto o formato incorrecto." });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "No autorizado. Token no encontrado." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Guardamos los datos del usuario (payload) en el request
        next();
    } catch (error) {
        return res.status(403).json({ message: "Token inválido o expirado." });
    }
};
