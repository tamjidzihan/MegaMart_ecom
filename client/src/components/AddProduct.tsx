import { useState } from "react";
import { createProduct } from "../services/productService";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        description: "",
        salePrice: "",
        productGallery: [],
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createProduct(formData);
        navigate("/");
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="title" placeholder="Title" className="w-full p-2 border" onChange={handleChange} />
                <input type="text" name="slug" placeholder="Slug" className="w-full p-2 border" onChange={handleChange} />
                <textarea name="description" placeholder="Description" className="w-full p-2 border" onChange={handleChange}></textarea>
                <input type="text" name="salePrice" placeholder="Sale Price" className="w-full p-2 border" onChange={handleChange} />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Create</button>
            </form>
        </div>
    );
};

export default AddProduct;
