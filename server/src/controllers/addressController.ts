import express from "express";
import { createAddress, findAddressById, getAddress } from "../services/addressService";
import { get } from "lodash";
import { getUserById } from "../services/userService";


export const getAllAddress = async (req: express.Request, res: express.Response) => {
    try {
        const addresses = await getAddress()
        res.status(200).json(addresses)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const getAddressById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        console.log("Address ID: " + id)

        const address = await findAddressById(id)
        res.status(200).json(address)

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

        const currentUserId = get(req, 'identity._id') as string
        const user = await getUserById(currentUserId)
        user.addressIds.push(newAddress._id)
        user.save()

        res.status(200).json(newAddress)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const updateAddress = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { addressType, street, apartment, city, zip, country, phone } = req.body
        if (!addressType || !street || !apartment || !city || !zip || !country || !phone) {
            res.status(400).json({ message: "Please fill out all the required fields" });
            return
        }

        if (!["Home", "Office"].includes(addressType)) {
            res.status(400).json({ message: "Invalid address type. Only 'Home' or 'Office' are allowed." });
            return
        }

        const address = await findAddressById(id)

        address.addressType = addressType
        address.street = street
        address.apartment = apartment
        address.city = city
        address.zip = zip
        address.country = country
        address.phone = phone

        address.save()
        res.status(200).json(address)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }


}