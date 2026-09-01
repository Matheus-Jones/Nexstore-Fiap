import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../services/products";

interface useProductsResult {
    products: Product[]
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

    return {
        products, loading
    }

}