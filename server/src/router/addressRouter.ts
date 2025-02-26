import express from "express";
import { createNewAddress, getAddressById, getAllAddress, updateAddress } from "../controllers/addressController";
import { isAdmin, isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
    router.get('/address', isAuthenticated, isAdmin, getAllAddress)
    router.get('/address/:id', isAuthenticated, getAddressById)
    router.post('/address', isAuthenticated, createNewAddress)
    router.patch('/address/:id', isAuthenticated, updateAddress)
}