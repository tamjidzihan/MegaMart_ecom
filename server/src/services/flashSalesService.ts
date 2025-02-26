import { FlashSaleModel } from "../db/FlashSalesModel";

export const getFlashSales = () => FlashSaleModel.find();
export const findFlashSalesById = (id: string) => FlashSaleModel.findById(id);
export const createFlashSales = (valuse: Record<string, any>) => new FlashSaleModel(valuse).save().then((flashSales) => flashSales.toObject());
export const updateFlashSalesById = (id: string, valuse: Record<string, any>) => FlashSaleModel.findByIdAndUpdate(id, valuse);
export const deteleFlashSalesById = (id: string) => FlashSaleModel.findByIdAndDelete({ _id: id });
