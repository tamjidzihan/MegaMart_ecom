import express from "express";
import { deleteUserById, getUser, getUserById } from "../services/userService";

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUser()
        res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { firstName, lastName, role, addressIds } = req.body
        if (!firstName || !lastName || !role) {
            res.status(400).json({ message: "Please fill out all the required fields" });
            return
        }

        const user = await getUserById(id)

        user.firstName = firstName
        user.lastName = lastName
        user.role = role
        user.addressIds = addressIds

        user.save()
        res.status(200).json(user).end()

    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const deletedUser = await deleteUserById(id)
        res.status(202).json(deletedUser)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}