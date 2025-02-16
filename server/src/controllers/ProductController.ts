import express from "express";
import { findProductById, getProducts } from "../services/productService";

export const getAllProducts = async (req: express.Request, res: express.Response) => {
    try {
        const products = await getProducts()
        res.status(200).json(products).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const getProductsById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const product = await findProductById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}