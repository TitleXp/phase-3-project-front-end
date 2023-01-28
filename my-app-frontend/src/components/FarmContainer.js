import React from 'react';
import FarmCard from './FarmCard';

const FarmContainer = ({farms, setFarms, products, setProducts}) => {

    const mappedFarms = farms.map(farm => (
        <FarmCard {...farm} key={farm.id} setFarms={setFarms} />
    ))

    // const mappedProducts = products.map(product => (
    //     <FarmCard {...product} key={product.id} setProducts={setProducts} />
    // ))


    

    return (
        <div>
            <h2 className="farm-header"> Discover Our Farms</h2>
                <div> 
                    {mappedFarms}
                    
                    {/* {mappedProducts} */}
             
                </div>
        </div>        
    )
}

export default FarmContainer