import { Router } from "express";
import { User } from "../db/UserModel";

const userRouter = Router()

// Get All user 
userRouter.get('/', async (req, res) => {
    try {
        const users = await User
            .find()
            .populate('addressIds', '-_id -userId')
        res.json(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Get User By ID
userRouter.get('/:id', async (req, res) => {
    try {
        const user = await User
            .findById(req.params.id)
            .populate("addressIds", '-_id')
        res.json(user)
    } catch (error) {
        res.status(400).send(error);
    }
})


// Create a New user 
userRouter.post('/', async (req, res) => {
    const postUser = new User(req.body)
    try {
        await postUser.save()
        res.status(201).send(postUser)
    } catch (error) {
        res.status(400).send(error);
    }
})

// Update User
userRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password, role, addressIds } = req.body;
    try {
        const updateUser = await User
            .findByIdAndUpdate(
                id, {
                $set: { firstName, lastName, email, password, role },
                ...(addressIds && { $push: { addressIds: { $each: addressIds } } })
            }, { new: true, runValidators: true }
            )
            .populate("addressIds", "-_id -userId")

        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
});


export default userRouter

