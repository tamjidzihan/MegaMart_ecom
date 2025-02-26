import express from "express"
import { createFlashSales, deteleFlashSalesById, findFlashSalesById, getFlashSales } from "../services/flashSalesService"
import { findProductById } from "../services/productService"

export const getAllFlashSales = async (req: express.Request, res: express.Response) => {
    try {
        const flashSales = await getFlashSales()
        res.status(200).json(flashSales)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
        return
    }
}

export const getFlashSalesById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const flashSale = await findFlashSalesById(id)
        res.status(200).json(flashSale)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
        return
    }
}


export const createNewFlashSales = async (req: express.Request, res: express.Response) => {
    try {
        const { productIds, discountPercentage, startDate, endDate, isActive } = req.body
        if (!productIds || !discountPercentage || !startDate || !endDate || !isActive) {
            res.status(400).json({ message: "Please fill out all the required fields" });
            return
        }
        const existingProduct = await findProductById(productIds)
        if (!existingProduct) {
            res.status(400).json({ message: "Product does Not exists" });
            return
        }
        const flashSales = await createFlashSales({
            productIds,
            discountPercentage,
            startDate,
            endDate,
            isActive
        })
        res.status(200).json(flashSales)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
        return
    }
}


export const deleteFlashSales = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        console.log("Flash Sale ID:", id);
        const deletedFlashSales = await deteleFlashSalesById(id)
        res.status(202).json(deletedFlashSales)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
        return
    }
}