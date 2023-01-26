import React from 'react';
import { useState } from 'react';

const FarmForm = ({ setFarms, setMessage }) => {


    const [newFarm, setNewFarm] = useState({
        name: "",
        location: "",
        rating: ""

    })

    const handleChange = (e) => {
        setNewFarm({...newFarm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("http://localhost:9292/farms", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newFarm)
            })
            .then(response => {
                if(response.status===201){
                    response.json()
                    .then(newFarmObj => {
                        setFarms(currentVal => [newFarmObj.farm, ...currentVal])
                        setMessage("Farm created!")
                    } )
                
                } else {
                    response.json()
                    .then(messageObj => setMessage(messageObj.message))
                }
               
                
            })
           
            .catch(error => alert(error))
            setNewFarm({
                name: "",
                location: "",
                rating: ""
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder='Name' onChange={handleChange} value={newFarm.name} required/>
                </div>

                <div>
                    <input type="text" name="location" placeholder='location' onChange={handleChange} value={newFarm.location} required/>
                </div>

                <div>
                    <input type="number" name="rating" placeholder='Rating' onChange={handleChange} value={newFarm.rating} required/>
                </div>

                <input type="submit" value="Create new Farm" />
                
            </form>
        </div>
    )
    
}


export default FarmForm