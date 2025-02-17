import express from "express";
import { createNewAddress, getAddressById, getAllAddress, updateAddress } from "../controllers/addressController";
import { isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
    router.get('/address', getAllAddress)
    router.get('/address/:id', getAddressById)
    router.post('/address', isAuthenticated, createNewAddress)
    router.patch('/address/:id', updateAddress)
}