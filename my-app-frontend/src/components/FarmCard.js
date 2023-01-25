import React from 'react';
import ProductCard from './ProductCard'

// import { useState, useEffect } from "react"

const FarmCard = ({ id, name, location, rating, products }) => { // this works
// const FarmCard = ({ farm, product }) => { //doesn't work yet
const mappedProducts = products.map(product => <ProductCard key={product.id} {...product} />)



    return (
        <>
            <div className="farms-box">
            <h3 className="farm-name">{name}</h3>
                <div className="farm-box">
                <p className="farm-location">Location: {location}</p>
                <p className="farm-rating">Rating: {rating}</p>
                </div>
                {mappedProducts}

                </div>
        </>
        )
    }

export default FarmCard;


// const [farms, setFarms] = useState([])

// const FarmCard = ({farms}) => {
    
    // const mappedFarms = farms.map(farm => <FarmContainer {...farm} key={farm.id} />)

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const resp = await fetch("http://localhost:9292/farms")
    //         const data = await resp.json()
    //         setFarms(data)
    //         // console.log(data)
    //       } catch (error) {
    //         alert(error)
    //       }
    //   }
    //   fetchData()
    //   }, []);



//         <div className="farm-home"> 
//             <h2 className="farm-header"> Discover Our Farms</h2>
//             <div className="farm-container">
//                 <FarmForm setFarms={setFarms} />
//             </div>
//             <div className="farms-container">
//                 <FarmContainer farms={reviews} setReviews={setReviews} />
//             </div>
//         </div>
    
        // <h1 className="farm-header"> Recent Visitor Reviews
        // <div className="farm-container"></div>
        // <h2 className="farm-name">{name} Discover Our Farms</h2>
        // <div className="farm-description"></div>