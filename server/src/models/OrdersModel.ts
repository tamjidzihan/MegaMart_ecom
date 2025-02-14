import mongoose from "mongoose";

const { Schema } = mongoose;

const ordersSchema = new Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orderItem',
        required: true
    }],
    shippingAddress1: {
        type: String,
        required: true
    },
    shippingAddress2: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    totalPrice: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    dateOrdered: {
        type: Date,
        require: true
    }
})

export const Order = mongoose.model('Order', ordersSchema)