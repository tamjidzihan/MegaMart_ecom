import mongoose from "mongoose";

const flashSalesSchema = new mongoose.Schema({
    productIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],
    discountPercentage: { type: Number, required: true, min: 0, max: 100 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export const FlashSaleModel = mongoose.model("FlashSale", flashSalesSchema);

