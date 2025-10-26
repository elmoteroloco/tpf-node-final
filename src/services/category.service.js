import { CategoryModel } from "../models/category.model.js";

export class CategoryService {
    static async getAllCategories() {
        return await CategoryModel.getAll();
    }

    static async createCategory(categoryData) {
        return await CategoryModel.create(categoryData);
    }

    static async deleteCategoryByName(categoryName) {
        return await CategoryModel.deleteByName(categoryName);
    }
}
