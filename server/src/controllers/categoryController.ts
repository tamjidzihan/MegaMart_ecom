import express from "express"
import { getCategory, findCategoryById, findCategoryBySlug, createCategory, deleteCategoryById } from "../services/categoryService"

export const getAllCategory = async (req: express.Request, res: express.Response) => {
    try {
        const categories = await getCategory()
        res.status(200).json(categories)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const getCategoryById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const category = await findCategoryById(id)
        res.status(200).json(category)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const createNewCategory = async (req: express.Request, res: express.Response) => {
    try {
        const { title, slug, icon } = req.body
        if (!title || !slug || !icon) {
            res.status(400).json({ message: "Please fill out all the required fields" });
            return
        }

        const existingCategory = await findCategoryBySlug(slug)
        if (existingCategory) {
            res.status(400).json({ message: "Category already exists" });
            return
        }

        const category = await createCategory({
            title,
            slug,
            icon
        })

        res.status(200).json(category).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const updateCategory = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { title, slug, icon } = req.body
        if (!title || !slug || !icon) {
            res.status(400).json({ message: "Please fill out all the required fields" });
            return
        }

        const category = await findCategoryById(id)

        category.title = title
        category.slug = slug
        category.icon = icon

        category.save()
        res.status(200).json(category).end()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const deleteCategory = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const deletedCategory = await deleteCategoryById(id)
        res.status(202).json(deletedCategory)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}