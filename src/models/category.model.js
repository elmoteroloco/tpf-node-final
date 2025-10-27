import { db } from "../config/firebase.js"

const categoriesCollection = db.collection("categorias")

export class CategoryModel {
    static async getAll() {
        try {
            const snapshot = await categoriesCollection.get()
            if (snapshot.empty) {
                return []
            }
            return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            throw new Error("Error al obtener las categorías desde DB.")
        }
    }

    static async create(categoryData) {
        try {
            const docRef = await categoriesCollection.add(categoryData)
            return { id: docRef.id, ...categoryData }
        } catch (error) {
            throw new Error("Error al crear la categoría en DB.")
        }
    }

    static async deleteByName(categoryName) {
        const snapshot = await categoriesCollection.where("nombre", "==", categoryName).limit(1).get()
        if (snapshot.empty) return null
        const docId = snapshot.docs[0].id
        await categoriesCollection.doc(docId).delete()
        return docId
    }
}
