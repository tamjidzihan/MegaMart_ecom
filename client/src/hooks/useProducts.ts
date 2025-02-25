import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Products {
    _id: string;
    title: string;
    slug: string;
    description: string;
    categoryId: {
        title: string;
        slug: string;
        icon: string;
    };
    originalPrice: number;
    salePrice: number;
    productGallery: [];
    countInStock: number;
    isFeatured: boolean;
    dateCreated: string
}

const useProducts = () => {

    const [products, setProducts] = useState<Products[]>([])
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        apiClient
            .get("/products")
            .then(res => {
                setProducts(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err)
                setIsLoading(false)
            })
    }, [])
    return { products, error, isLoading }
}

export default useProducts;