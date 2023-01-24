import React from 'react';
import FarmCard from './FarmCard';

const FarmContainer = ({farms, setFarms, products, setProducts}) => {

    const mappedFarms = farms.map(farm => (
        <FarmCard {...farm} key={farm.id} setFarms={setFarms} products={products} />
    ))

    const mappedProducts = products.map(product => (
        <FarmCard {...product} key={product.id} setProducts={setProducts} />
    ))

    return (
        <div>Farm Container
            {mappedFarms}
            {mappedProducts}
        </div>
    )
}

export default FarmContainer