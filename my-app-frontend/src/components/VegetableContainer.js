import React from "react";
import { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";

// const VegetableContainer = ({products, setProducts}) => {
const VegetableContainer = () => {

    const [products, setProducts]=useState([])

    const mappedProducts = products.map(product => (
        <ProductCard {...product} key={product.id} setProducts={setProducts} />
    ))

    useEffect(() => { // fetch products
        const fetchProducts = async () => {
          try {
            const resp = await fetch("http://localhost:9292/vegetables")
            const data = await resp.json()
            setProducts(data)
          } catch (error) {
            alert(error)
          }
        }
        fetchProducts()
    }, [])


    return(
        <div className="product-box">
          <h1 className="products-header">Fresh From The Farm</h1>
            <div className="products-container">
            </div>
            <div> {mappedProducts}
            
            </div>
        </div>
    )
}; 


// return (
//   <>
//       <div className="farms-box">
//       <h3 className="farm-name">{name}</h3>
//           <div className="farm-box">
//           <p className="farm-location">Location: {location}</p>
//           <p className="farm-rating">Rating: {rating}</p>
//           </div>
//           {mappedProducts}

export default VegetableContainer;