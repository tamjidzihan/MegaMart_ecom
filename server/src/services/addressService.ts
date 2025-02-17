import { AddressModel } from "../db/AddressModel";

export const getAddress = () => AddressModel.find();
export const findAddressByID = (id: string) => AddressModel.findById(id);
export const createAddress = (values: Record<string, any>) => new AddressModel(values).save().then((address) => address.toObject());
export const updateAddressById = (id: string, values: Record<string, any>) => AddressModel.findByIdAndUpdate(id, values);
export const deleteAddressById = (id: string) => AddressModel.findByIdAndDelete({ _id: id })
