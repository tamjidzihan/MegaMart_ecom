import express from "express";
import { createProduct, deleteProductById, findProductById, findProductBySlug, getProducts } from "../services/productService";
import { findCategoryById } from "../services/categoryService";

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

export const createNewProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { title, slug, description, categoryId, originalPrice, salePrice, rating, productGallery, countInStock, isFeatured, dateCreated } = req.body

        if (!title || !slug || !description || !categoryId || !salePrice || !productGallery) {
            res.status(400).json({ message: "Please fill out all the required fields" });
        }

        const existingCategory = await findCategoryById(categoryId)
        if (!existingCategory) {
            res.status(400).json({ message: "Invalid Category" });
            return
        }

        const existingProduct = await findProductBySlug(slug)
        if (existingProduct) {
            res.status(400).json({ message: "Product already exists" });
            return
        }

        const product = await createProduct({
            title,
            slug,
            description,
            categoryId,
            originalPrice,
            salePrice,
            rating,
            productGallery,
            countInStock,
            isFeatured,
            dateCreated
        })

        res.status(200).json(product)

    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const updateProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { title, slug, description, categoryId, originalPrice, salePrice, rating, productGallery, countInStock, isFeatured, dateCreated } = req.body

        if (!title || !slug || !description || !categoryId || !salePrice || !productGallery) {
            res.send(400).json({ message: "Please fill out all the required fields" });
        }

        const product = await findProductById(id)

        product.title = title
        product.slug = slug
        product.description = description
        product.originalPrice = originalPrice
        product.salePrice = salePrice
        product.rating = rating
        product.countInStock = countInStock
        product.isFeatured = isFeatured
        product.dateCreated = dateCreated

        if (Array.isArray(productGallery)) {
            product.productGallery = productGallery;
        } else {
            res.status(400).json({ message: "productGallery must be an array" });
            return
        }

        product.save()
        res.status(200).json(product).end()

    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const deleteProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const deletedProduct = await deleteProductById(id)

        res.status(202).json(deletedProduct).end()

    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}