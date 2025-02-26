import express from "express"
import { createNewFlashSales, deleteFlashSales, getAllFlashSales, getFlashSalesById } from "../controllers/flashSalesController"

export default (router: express.Router) => {
    router.get('/flashsales', getAllFlashSales)
    router.get('/flashsales/:id', getFlashSalesById)
    router.post('/flashsales', createNewFlashSales)
    router.delete('/flashsales/:id', deleteFlashSales)
}