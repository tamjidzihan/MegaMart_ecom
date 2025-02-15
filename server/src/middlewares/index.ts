import express from "express";
import { merge, get } from "lodash"
import dotenv from "dotenv"
import { getUserById, getUserBySessionTocken } from "../services/userService";

dotenv.config()

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME

        const sessionToken = req.cookies[SESSION_COOKIE_NAME];
        if (!sessionToken) {
            res.sendStatus(403)
            return
        }

        const existingUser = await getUserBySessionTocken(sessionToken)

        if (!existingUser) {
            res.sendStatus(403)
            return
        }
        merge(req, { identity: existingUser });

        next()
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}


export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { id } = req.params
        const currentUserId = get(req, 'identity._id') as string

        if (!currentUserId) {
            res.sendStatus(403)
            return
        }

        if (currentUserId.toString() !== id) {
            res.sendStatus(403)
            return
        }

        next()

    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}