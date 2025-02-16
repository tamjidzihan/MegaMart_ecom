import mongoose from "mongoose";

const { Schema } = mongoose
const CategoriesSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    icon: { type: String, required: true }
})

export const CategoriesModel = mongoose.model('ProductsCategories', CategoriesSchema)