import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionTocken: { type: String, select: false }
    },
    role: { type: Number, required: true },
    addressIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    }]
})

export const UserModel = mongoose.model('User', UserSchema)