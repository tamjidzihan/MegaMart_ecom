import { Router } from "express";
import { User } from "../models/UserModel";

const userRouter = Router()


userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

userRouter.post('/', async (req, res) => {
    const postUser = new User(req.body)
    try {
        await postUser.save()
        res.status(201).send(postUser)
    } catch (error) {
        res.status(400).send(error);
    }
})

