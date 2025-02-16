import { CategoriesModel } from "../db/CategoryModel";

export const getCategory = () => CategoriesModel.find();
export const getCategoryByTitle = (title: string) => CategoriesModel.findOne({ title });
export const findCategoryById = (id: string) => CategoriesModel.findById(id);
export const findCategoryBySlug = (slug: string) => CategoriesModel.findOne({ slug });
export const createCategory = (valuse: Record<string, any>) => new CategoriesModel(valuse).save().then((category) => category.toObject());
export const updateCategoryById = (id: string, valuse: Record<string, any>) => CategoriesModel.findByIdAndUpdate(id, valuse);
export const deleteCategoryById = (id: string) => CategoriesModel.findByIdAndDelete({ _id: id });
export const deleteCategoryBySlug = (slug: string) => CategoriesModel.findOneAndDelete({ slug });

