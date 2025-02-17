import express from "express";
import { createNewProduct, deleteProduct, getAllProducts, getProductsById, updateProduct } from "../controllers/ProductController";
import { isAdmin, isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
    router.get('/products', getAllProducts)
    router.get('/products/:id', getProductsById)
    router.post('/products', isAuthenticated, isAdmin, createNewProduct)
    router.delete('/products/:id', isAuthenticated, isAdmin, deleteProduct)
    router.patch('/products/:id', isAuthenticated, updateProduct)
}