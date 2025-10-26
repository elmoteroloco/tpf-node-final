import { Router } from "express";
import { CategoryController } from "../controllers/category.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";
import { adminRequired } from "../middlewares/roles.middleware.js";

const router = Router();

// Ruta pública
router.get("/", CategoryController.getAllCategories);

// Rutas protegidas
router.post("/create", [authRequired, adminRequired], CategoryController.createCategory);
router.delete("/:name", [authRequired, adminRequired], CategoryController.deleteCategory);

export default router;
