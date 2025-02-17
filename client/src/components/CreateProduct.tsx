/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Product {
    title: string;
    slug: string;
    description: string;
    categoryId: string;
    originalPrice?: number;
    salePrice: number;
    productGallery: string[];
    countInStock?: number;
    isFeatured?: boolean;
}

const CreateProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product>({
        title: "",
        slug: "",
        description: "",
        categoryId: "",
        originalPrice: undefined,
        salePrice: 0,
        productGallery: [],
        countInStock: undefined,
        isFeatured: false,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        setProduct((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await axios.post("http://localhost:3000/products", product);
            navigate("/products");
        } catch (err) {
            setError("Failed to create product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Title:
                    <input type="text" name="title" value={product.title} onChange={handleChange} className="w-full p-2 border rounded" required />
                </label>

                <label className="block mb-2">
                    Slug:
                    <input type="text" name="slug" value={product.slug} onChange={handleChange} className="w-full p-2 border rounded" required />
                </label>

                <label className="block mb-2">
                    Description:
                    <textarea name="description" value={product.description} onChange={handleChange} className="w-full p-2 border rounded" required />
                </label>

                <label className="block mb-2">
                    Category ID:
                    <input type="text" name="categoryId" value={product.categoryId} onChange={handleChange} className="w-full p-2 border rounded" required />
                </label>

                <label className="block mb-2">
                    Original Price:
                    <input type="number" name="originalPrice" value={product.originalPrice || ""} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block mb-2">
                    Sale Price:
                    <input type="number" name="salePrice" value={product.salePrice} onChange={handleChange} className="w-full p-2 border rounded" required />
                </label>

                <label className="block mb-2">
                    Product Gallery (comma-separated URLs):
                    <input
                        type="text"
                        name="productGallery"
                        value={product.productGallery.join(", ")}
                        onChange={(e) => setProduct((prev) => ({ ...prev, productGallery: e.target.value.split(", ") }))}
                        className="w-full p-2 border rounded"
                        required
                    />
                </label>

                <label className="block mb-2">
                    Count in Stock:
                    <input type="number" name="countInStock" value={product.countInStock || ""} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block mb-2">
                    Is Featured:
                    <input type="checkbox" name="isFeatured" checked={product.isFeatured || false} onChange={handleChange} className="ml-2" />
                </label>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4" disabled={loading}>
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
