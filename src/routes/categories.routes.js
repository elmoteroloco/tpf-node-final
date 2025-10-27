import { Router } from "express"
import { CategoryController } from "../controllers/category.controller.js"
import { authRequired } from "../middlewares/auth.middleware.js"
import { adminRequired } from "../middlewares/roles.middleware.js"

const router = Router()

router.get("/", CategoryController.getAllCategories)

router.post("/create", [authRequired, adminRequired], CategoryController.createCategory)
router.delete("/:name", [authRequired, adminRequired], CategoryController.deleteCategory)

export default router
