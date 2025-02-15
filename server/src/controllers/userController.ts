import express from "express";
import { deleteUserById, getUser } from "../services/userService";

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUser()
        res.status(200).json(users)

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

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { firstName, lastName, email, role, addressIds } = req.body


    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}