import { Router } from "express";
import { Product } from "../models/ProductModel";

const productRoutes = Router();


productRoutes.get('/', async (req, res) => {
    try {
        const document = await Product.find()
        res.json(document)
    } catch (error) {
        res.status(500).send(error);
    }
})

productRoutes.delete('/:id', async (req, res) => {
    try {
        const document = await Product.findById(parseInt(req.params.id))
        res.json(document)
    } catch (error) {
        res.status(500).send(error)
    }
})


productRoutes.post("/", async (req, res) => {
    const postProduct = new Product(req.body)
    try {
        await postProduct.save();
        res.status(201).send(postProduct)
    } catch (error) {
        res.status(400).send(error);
    }
})




export default productRoutes;
