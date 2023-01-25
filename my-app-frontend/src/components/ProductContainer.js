import React from "react";
import { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";

// const ProductContainer = ({products, setProducts}) => {
const ProductContainer = () => {

    const [products, setProducts]=useState([])

    const mappedProducts = products.map(product => (
        <ProductCard {...product} key={product.id} setProducts={setProducts} />
    ))

    useEffect(() => { // fetch products
        const fetchProducts = async () => {
          try {
            const resp = await fetch("http://localhost:9292/products")
            const data = await resp.json()
            setProducts(data)
          } catch (error) {
            alert(error)
          }
        }
        fetchProducts()
    }, [])



    return(
        <div>Product Container
            {mappedProducts}
        </div>
    )
}; 

export default ProductContainer;