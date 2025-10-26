import { ProductService } from "../services/product.service.js";

export class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor al obtener productos." });
        }
    }

    static async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductService.getProductById(id);

            if (!product) {
                return res.status(404).json({ message: "Producto no encontrado." });
            }

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor al obtener el producto." });
        }
    }

    static async createProduct(req, res) {
        try {
            const productData = req.body;

            if (
                !productData.nombre ||
                !productData.precio ||
                !productData.categoria ||
                !productData.descripcion ||
                !productData.imagen ||
                isNaN(Number(productData.precio)) ||
                Number(productData.precio) <= 0
            ) {
                return res.status(400).json({
                    message: "Faltan datos obligatorios o el precio es inválido. Asegurate de enviar nombre, precio, categoría, descripción e imagen.",
                });
            }

            // Lógica de Dry Run
            if (req.user && req.user.admin && !req.user.superAdmin) {
                return res.status(201).json({
                    simulated: true,
                    message: "Modo simulación: El producto se habría creado con éxito.",
                });
            }

            const newProduct = await ProductService.createProduct(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor al crear el producto." });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;

            // Lógica de Dry Run
            if (req.user && req.user.admin && !req.user.superAdmin) {
                return res.status(200).json({
                    simulated: true,
                    message: `Modo simulación: El producto con ID ${id} se habría eliminado.`,
                });
            }
            const result = await ProductService.deleteProduct(id);

            if (!result) {
                return res.status(404).json({ message: "Producto no encontrado para eliminar." });
            }

            res.status(200).json({ message: `Producto con ID ${id} eliminado.` });
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor al eliminar el producto." });
        }
    }
}
