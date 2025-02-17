import express from "express";
import { createAddress, getAddress } from "../services/addressService";


export const getAllAddress = async (req: express.Request, res: express.Response) => {
    try {
        const addresses = await getAddress()
        res.status(200).json(addresses)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const createNewAddress = async (req: express.Request, res: express.Response) => {
    try {
        const { addressType, street, apartment, city, zip, country, phone } = req.body
        if (!addressType || !street || !apartment || !city || !zip || !country || !phone) {
            res.status(400).json({ message: "Please fill out all the required fields" });
            return
        }

        if (!["Home", "Office"].includes(addressType)) {
            res.status(400).json({ message: "Invalid address type. Only 'Home' or 'Office' are allowed." });
            return
        }

        const newAddress = await createAddress({
            addressType,
            street,
            apartment,
            city,
            zip,
            country,
            phone
        })
        res.status(200).json(newAddress)


    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }

}