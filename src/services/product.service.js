import { ProductModel } from "../models/product.model.js";

export class ProductService {
    static async getAllProducts() {
        return await ProductModel.getAll();
    }

    static async getProductById(id) {
        return await ProductModel.getById(id);
    }

    static async createProduct(productData) {
        return await ProductModel.create(productData);
    }

    static async deleteProduct(id) {
        return await ProductModel.delete(id);
    }

    static async updateProduct(id, productData) {
        return await ProductModel.update(id, productData);
    }
}
