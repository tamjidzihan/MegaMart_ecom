import mongoose from "mongoose";

const { Schema } = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number
    },
    addressIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    }]
})

export const User = mongoose.model('User', userSchema)