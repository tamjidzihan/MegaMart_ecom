/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Change based on your backend URL

// Fetch all products
export const getAllProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

// Fetch a product by ID
export const getProductById = async (id: string) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};

// Create a new product
export const createProduct = async (productData: any) => {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
};

// Update a product
export const updateProduct = async (id: string, productData: any) => {
    const response = await axios.patch(`${API_BASE_URL}/products/${id}`, productData);
    return response.data;
};

// Delete a product
export const deleteProduct = async (id: string) => {
    const response = await axios.delete(`${API_BASE_URL}/products/${id}`);
    return response.data;
};
