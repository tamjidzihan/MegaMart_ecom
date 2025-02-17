/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../services/productService";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this product?")) {
            await deleteProduct(id);
            fetchProducts();
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            <Link to="/add-product" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
                + Add Product
            </Link>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id} className="border">
                            <td className="p-2">{product.title}</td>
                            <td className="p-2">${product.salePrice}</td>
                            <td className="p-2">
                                <Link to={`/edit-product/${product._id}`} className="text-blue-500 mr-2">Edit</Link>
                                <button onClick={() => handleDelete(product._id)} className="text-red-500">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
