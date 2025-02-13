import mongoose from "mongoose";


const { Schema } = mongoose
const productsCategoriesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
})

export const ProductsCategories = mongoose.model("ProductsCategories", productsCategoriesSchema)