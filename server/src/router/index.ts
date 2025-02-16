import express from "express";
import authenticationRouter from "./authenticationRouter";
import userRouter from "./userRouter";
import categoryRouter from "./categoryRouter";
import productRouter from "./productRouter";

const router = express.Router()
export default (): express.Router => {
    authenticationRouter(router)
    userRouter(router)
    categoryRouter(router)
    productRouter(router)
    return router
}