import { ProductModel } from "../models/product.model.js";

export class ProductService {
    static async getAllProducts() {
        return await ProductModel.getAll();
    }

    static async getProductById(id) {
        return await ProductModel.getById(id);
    }

    static async createProduct(productData) {
        // Aquí es donde, en el futuro, pondremos la lógica de negocio,
        // como la validación de roles o el modo de simulación.
        // Por ahora, simplemente llamamos al modelo.
        return await ProductModel.create(productData);
    }

    static async deleteProduct(id) {
        return await ProductModel.delete(id);
    }
}
