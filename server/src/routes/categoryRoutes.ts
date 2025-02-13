import { Router } from "express";
import { ProductsCategories } from "../models/CategoryModel";

const categoryRoutes = Router()


categoryRoutes.get('/', async (req, res) => {
    // if(!categoris) return res.json()
    try {
        const categoris = await ProductsCategories.find()
        res.json(categoris)
    } catch (error) {
        res.status(500).send(error)
    }
})

categoryRoutes.post("/", async (req, res) => {
    const postCategory = new ProductsCategories(req.body)
    try {
        await postCategory.save()
        res.status(201).send(postCategory)
    } catch (error) {
        res.status(400).send(error)
    }
})


export default categoryRoutes