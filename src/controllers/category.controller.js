import { CategoryService } from "../services/category.service.js"

export class CategoryController {
    static async getAllCategories(req, res) {
        try {
            const categories = await CategoryService.getAllCategories()
            res.status(200).json(categories)
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor al obtener las categorías." })
        }
    }

    static async createCategory(req, res) {
        try {
            const { nombre } = req.body

            if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
                return res.status(400).json({ message: "El campo 'nombre' es obligatorio y debe ser un texto." })
            }

            // Lógica de Dry Run
            if (req.user && req.user.admin && !req.user.superAdmin) {
                return res.status(201).json({
                    simulated: true,
                    message: "Modo simulación: La categoría se habría creado con éxito.",
                })
            }

            const newCategory = await CategoryService.createCategory({ nombre })
            res.status(201).json(newCategory)
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor al crear la categoría." })
        }
    }

    static async deleteCategory(req, res) {
        try {
            const { name } = req.params

            // Lógica de Dry Run
            if (req.user && req.user.admin && !req.user.superAdmin) {
                return res.status(200).json({
                    simulated: true,
                    message: `Modo simulación: La categoría '${name}' se habría eliminado.`,
                })
            }

            const result = await CategoryService.deleteCategoryByName(name)

            if (!result) {
                return res.status(404).json({ message: "Categoría no encontrada para eliminar." })
            }

            res.status(200).json({ message: `Categoría '${name}' eliminada.` })
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor al eliminar la categoría." })
        }
    }
}
