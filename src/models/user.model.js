import { db } from "../config/firebase.js";

export class UserModel {
    static async findByEmail(email) {
        try {
            const usersRef = db.collection("usuarios");
            const snapshot = await usersRef.where("email", "==", email).limit(1).get();

            if (snapshot.empty) {
                return null;
            }

            const userDoc = snapshot.docs[0];
            return { id: userDoc.id, ...userDoc.data() };
        } catch (error) {
            console.error(`Error en UserModel.findByEmail(${email}):`, error);
            throw new Error("No se pudo buscar el usuario por email.");
        }
    }
}
