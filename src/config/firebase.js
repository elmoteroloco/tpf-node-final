import admin from "firebase-admin"
import dotenv from "dotenv"

dotenv.config()

const firebaseCredentials = process.env.FIREBASE_CREDENTIALS

if (!firebaseCredentials) {
    console.error("La variable de entorno FIREBASE_CREDENTIALS no está definida.")
    console.error("Asegurate de tener el archivo .env con las credenciales de tu cuenta de servicio de Firebase.")
    process.exit(1)
}

const serviceAccount = JSON.parse(firebaseCredentials)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

console.log("Firebase conectado correctamente.")

export const db = admin.firestore()
