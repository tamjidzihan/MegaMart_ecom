import express from "express";
import { createNewCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from "../controllers/categoryController";
import { isAdmin, isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
    router.get('/category', getAllCategory)
    router.get('/category/:id', getCategoryById)
    router.post('/category', isAuthenticated, isAdmin, createNewCategory)
    router.patch('/category/:id', isAuthenticated, isAdmin, updateCategory)
    router.delete('/category/:id', isAuthenticated, isAdmin, deleteCategory)
}