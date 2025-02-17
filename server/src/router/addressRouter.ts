import express from "express";
import { createNewAddress, getAllAddress } from "../controllers/addressController";

export default (router: express.Router) => {
    router.get('/address', getAllAddress)
    router.post('/address', createNewAddress)
}