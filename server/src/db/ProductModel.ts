import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductsCategories',
        required: true,
    },
    originalPrice: { type: Number },
    salePrice: { type: Number, required: true },
    productGallery: { type: Array, required: true },
    countInStock: { type: Number },
    isFeatured: { type: Boolean },
    dateCreated: { type: Date }
})

export const ProductModel = mongoose.model('Product', productSchema)