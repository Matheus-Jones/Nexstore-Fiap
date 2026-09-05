import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../services/products";

interface useProductsResult {
    products: Product[]
    categories: string[]
    loading: boolean
}

export function useProducts(): useProductsResult {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        getProducts().then((data) => {
            setProducts(data)
        }).finally(() => setloading(false))

    }, [])

    const categories = ['all', ...new Set (products.map((product) => product.category))]

    return {
        products, loading, categories
    }

}