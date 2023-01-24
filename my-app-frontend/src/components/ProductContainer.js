import React from "react";
import ProductCard from "./ProductCard";

const ProductContainer = ({products, setProducts}) => {

    const mappedProducts = products.map(product => (
        <ProductCard {...product} key={product.id} setProducts={setProducts} />
    ))


    return(
        <div>Product Container
            {mappedProducts}
        </div>
    )
}; 

export default ProductContainer;