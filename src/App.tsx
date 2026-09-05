import { useEffect, useState } from "react"
import { ProductCard } from "./components/ProductCard"
import type { Product } from "./types/product"
import type { CartItem } from "./types/cartitem"
import { ProductList } from "./components/ProductList"
import { getProducts } from "./services/products"
import { CatalogPage } from "./pages/CatalogPage"


function App() {

  return (

    <main>

      <h1>NexStore</h1>
      <CatalogPage/>
      
    </main>
    
  )
}

export default App