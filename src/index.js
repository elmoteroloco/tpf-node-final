import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./config/firebase.js";
import productRouter from "./routes/products.routes.js";

// Variables de entorno
dotenv.config();

// Express
const app = express();

// Puerto dual (tomando el valor de .env o usando 3000 por defecto)
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Configuración de CORS
const allowedOrigins = [
    /^http:\/\/localhost:\d{4}$/, // Permite cualquier localhost con cualquier puerto de 4 dígitos
    /^https:\/\/.*\.netlify\.app$/,
    /^https:\/\/.*\.vercel\.app$/,
    // TODO: agregar la URL de Render
];

const corsOptions = {
    origin: (origin, callback) => {
        // Permite peticiones sin origen (de Postman o móviles)
        if (!origin || allowedOrigins.some((regex) => regex.test(origin))) {
            callback(null, true);
        } else {
            callback(new Error(`No permitido por CORS. Origen: ${origin}`));
        }
    },
    credentials: true,
};

app.use(cors(corsOptions));

// Ruta de prueba para verificar que el servidor está funcionando
app.get("/", (req, res) => {
    res.send("API del TPF de Node.js está en línea.");
});

// Rutas de la API
app.use("/api/products", productRouter);

// Middleware para rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada." });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
