import React from "react";


const ProductCard = ({id, name, category, description, picture_link, price, stock}) => {

    
    return(
        <>
        <div className="products-box">
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{description}</p>
            <p>{picture_link}</p>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
    </>
    )
}; 

export default ProductCard;