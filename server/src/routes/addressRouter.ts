import { Router } from 'express';
import { Address } from '../models/AddressModel';
import { User } from '../models/UserModel';

const addressRouter = Router()

addressRouter.get('/', async (req, res) => {
    try {
        const addresses = await Address
            .find()
            .populate([{ path: 'userId', select: 'firstName lastName email -_id' }])
        res.json(addresses)
    } catch (error) {
        res.status(500).send(error)
    }
})


// Create Address & Update User
addressRouter.post('/', async (req, res) => {
    try {
        const { street, apartment, city, zip, country, phone, userId } = req.body;
        const newAddress = new Address({ street, apartment, city, zip, country, phone, userId });
        await newAddress.save();

        const updatedUser = await User
            .findByIdAndUpdate(
                userId,
                { $push: { addressIds: newAddress._id } },
                { new: true, runValidators: true }
            )
            .populate("addressIds");
        res.status(201).json({ message: "Address created and user updated", newAddress, updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error creating address", error });
    }
});



export default addressRouter