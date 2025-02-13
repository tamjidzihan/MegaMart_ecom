import mongoose from "mongoose";
const { Schema } = mongoose

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductsCategories',
        required: true,
    },
    original_price: {
        type: Number,
    },
    sale_price: {
        type: Number,
        required: true
    },
    product_gallery: {
        type: Array,
        required: true
    },
    quantity: {
        type: Number,
    },
})

export const Product = mongoose.model('Product', productSchema)