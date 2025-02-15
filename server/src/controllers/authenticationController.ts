import express from "express";
import { createUser, getUserByEmail } from "./userController";
import { authentication, random } from "../helpers";

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { firstName, lastName, email, password, role } = req.body
        if (!firstName || !lastName || !email || !password || !role) {
            return res.sendStatus(400)
        }
        const existingUser = await getUserByEmail(email)

        if (existingUser) {
            return res.sendStatus(400).send("Email Alrady Exist")
        }

        const salt = random();
        const user = await createUser({
            firstName,
            lastName,
            email,
            authentication: {
                salt,
                password: authentication(salt, password)
            }
        });

        return res.status(200).json(user).end()

    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}