import { UserModel } from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                return res.status(400).json({ message: "Email y contraseña son obligatorios." })
            }

            const user = await UserModel.findByEmail(email)

            if (!user) {
                return res.status(401).json({ message: "Credenciales inválidas." })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(401).json({ message: "Credenciales inválidas." })
            }

            const payload = {
                id: user.id,
                email: user.email,
                admin: user.admin || false,
                superAdmin: user.superAdmin || false,
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "1h",
            })

            res.status(200).json({ token })
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor durante el login." })
        }
    }
}
