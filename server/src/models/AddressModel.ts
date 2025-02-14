import mongoose from "mongoose";

const { Schema } = mongoose

const userAddressSchema = new Schema({
    street: String,
    apartment: String,
    city: String,
    zip: String,
    country: String,
    phone: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


export const Address = mongoose.model('Address', userAddressSchema)