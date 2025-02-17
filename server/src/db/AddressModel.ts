import mongoose from "mongoose";

const userAddressSchema = new mongoose.Schema({
    addressType: { type: String, required: true, enum: ["Home", "Office"] },
    street: { type: String, required: true },
    apartment: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
})


export const AddressModel = mongoose.model('Address', userAddressSchema)