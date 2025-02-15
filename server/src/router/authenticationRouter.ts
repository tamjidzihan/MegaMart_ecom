import exporess from "express";
import { register } from "../controllers/authenticationController";

export default (router: exporess.Router) => {
    router.post('/register', register)
}
