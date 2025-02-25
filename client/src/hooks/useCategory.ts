import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Category {
    _id: string;
    title: string;
    slug: string;
    icon: string
}

const useCategory = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        apiClient
            .get('/category')
            .then(res => {
                setCategories(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err)
                setIsLoading(false)
            })
    }, [])
    return {
        categories,
        isLoading,
        error
    }
}

export default useCategory;