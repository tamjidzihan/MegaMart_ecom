import express from "express"
import { deleteUser, getAllUsers, updateUser } from "../controllers/userController"
import { isAdmin, isAuthenticated, isOwner } from "../middlewares"

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, isAdmin, getAllUsers)
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser)
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser)
}