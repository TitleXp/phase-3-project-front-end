import React from 'react';
import { useState, useEffect } from "react"
import FarmContainer from './components/FarmContainer';
import FarmForm from './components/FarmForm';


const [farms, setFarms] = useState([])

const FarmCard = ({farms}) => {
    
    const mappedFarms = farms.map(farm => <FarmContainer {...farm} key={farm.id} />)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch("http://localhost:9292/farms")
            const data = await resp.json()
            setFarms(data)
            console.log(data)
          } catch (error) {
            alert(error)
          }
      }
      fetchData()
      }, []);




return (
    <div>{mappedFarms}
    </div>
  )
}

export default FarmCard;


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

        

       
            
    


    )
}
