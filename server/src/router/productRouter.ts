import express from "express";
import { getAllProducts } from "../controllers/ProductController";

export default (router: express.Router) => {
    router.get('/products', getAllProducts)
}