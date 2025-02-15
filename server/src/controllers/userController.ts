import { UserModel } from "../db/UserModel";

export const getUser = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserByFirstName = (firstName: string) => UserModel.findOne({ firstName });
export const getUserByLastName = (lastName: string) => UserModel.findOne({ lastName });
export const getUserById = (id: string) => UserModel.findById(id);
export const getUserBySessionTocken = (sessionTocken: string) => UserModel.find({ 'authentication.sessionTocken': sessionTocken });
export const getUserByRole = (role: number) => UserModel.findOne({ role });
export const createUser = (valuse: Record<string, any>) => new UserModel(valuse).save().then((user) => user.toObject());
export const deleteUserById = (id: string) => UserModel.findByIdAndDelete({ _id: id });
export const updateUserById = (id: string, valuse: Record<string, any>) => UserModel.findByIdAndUpdate(id, valuse);
