import { ProductModel } from "../db/ProductModel";

export const getProducts = () => ProductModel.find().populate('categoryId');
export const findProductById = (id: string) => ProductModel.findById(id).populate('categoryId');
export const findProductBySlug = (slug: string) => ProductModel.findOne({ slug }).populate('categoryId');
export const createProduct = (valuse: Record<string, any>) => new ProductModel(valuse).save().then((product) => product.toObject());
export const updateProductById = (id: string, valuse: Record<string, any>) => ProductModel.findByIdAndUpdate(id, valuse);
export const deleteProductById = (id: string) => ProductModel.findByIdAndDelete({ _id: id });
export const deleteProductBySlug = (slug: string) => ProductModel.findOneAndUpdate({ slug })
