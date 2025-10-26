import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";
import { adminRequired } from "../middlewares/roles.middleware.js";

const router = Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);

router.post("/create", [authRequired, adminRequired], ProductController.createProduct);
router.put("/:id", [authRequired, adminRequired], ProductController.updateProduct);
router.delete("/:id", [authRequired, adminRequired], ProductController.deleteProduct);

export default router;
