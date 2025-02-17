/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Product {
    _id: string;
    title: string;
    slug: string;
    description: string;
    categoryId: string;
    originalPrice?: number;
    salePrice: number;
    productGallery: string[];
    countInStock?: number;
    isFeatured?: boolean;
    dateCreated?: string;
}

const EditProduct = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:3000/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => setError("Failed to fetch product"));
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        setProduct((prev) =>
            prev && {
                ...prev,
                [name]: type === "number" ? Number(value) : type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
            }
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await axios.patch(`http://localhost:3000/products/${id}`, product);
            navigate("/products");
        } catch (err) {
            setError("Failed to update product");
        } finally {
            setLoading(false);
        }
    };

    if (!product) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
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
                        onChange={(e) => setProduct((prev) => prev && { ...prev, productGallery: e.target.value.split(", ") })}
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
                    {loading ? "Updating..." : "Update Product"}
                </button>
            </form>
        </div>
    );
};

export default EditProduct;
