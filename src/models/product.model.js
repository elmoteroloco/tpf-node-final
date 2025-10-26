import { db } from "../config/firebase.js";

export class ProductModel {
    static async getAll() {
        try {
            const snapshot = await db.collection("productos").get();
            const products = [];
            snapshot.forEach((doc) => {
                products.push({ id: doc.id, ...doc.data() });
            });
            return products;
        } catch (error) {
            console.error("Error en ProductModel.getAll:", error);
            throw new Error("No se pudieron obtener los productos.");
        }
    }

    static async getById(id) {
        try {
            const doc = await db.collection("productos").doc(id).get();
            if (!doc.exists) {
                return null;
            }
            return { id: doc.id, ...doc.data() };
        } catch (error) {
            console.error(`Error en ProductModel.getById(${id}):`, error);
            throw new Error("No se pudo obtener el producto.");
        }
    }

    static async create(productData) {
        try {
            const docRef = await db.collection("productos").add(productData);
            return { id: docRef.id, ...productData };
        } catch (error) {
            console.error("Error en ProductModel.create:", error);
            throw new Error("No se pudo crear el producto.");
        }
    }

    static async delete(id) {
        try {
            const docRef = db.collection("productos").doc(id);
            const doc = await docRef.get();
            if (!doc.exists) {
                return null;
            }
            await docRef.delete();
            return { id };
        } catch (error) {
            console.error(`Error en ProductModel.delete(${id}):`, error);
            throw new Error("No se pudo eliminar el producto.");
        }
    }

    static async update(id, productData) {
        try {
            const productRef = db.collection("productos").doc(id);
            const doc = await productRef.get();
            if (!doc.exists) {
                return null;
            }
            await productRef.update(productData);
            const updatedDoc = await productRef.get();
            return { id: updatedDoc.id, ...updatedDoc.data() };
        } catch (error) {
            console.error(`Error en ProductModel.update(${id}):`, error);
            throw new Error("No se pudo actualizar el producto.");
        }
    }
}
