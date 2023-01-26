import React from 'react';
import { useState } from 'react';

const ReviewForm = ({ setMessage, setReviews }) => {


    const [newReviews, setNewReviews] = useState({
        name: "",
        review: ""
  
    })

    const handleChange = (e) => {
        setNewReviews({...newReviews, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("http://localhost:9292/reviews", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newReviews)
            })
            .then(response => {
                if(response.status===201){
                    response.json()
                    .then(reviewObj => {
                        setReviews(currentVal => [reviewObj.name, ...currentVal])
                        setMessage("Review created!")
                    } )
                
                } else {
                    response.json()
                    .then(messageObj => setMessage(messageObj.message))
                }
               
                
            })
           
            .catch(error => alert(error))
            setNewReviews({
                name: "",
                review: ""
            })
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-title">Create your Review</h2>
                <div>
                    <input className="user-input" type="text" name="name" placeholder='Name:' onChange={handleChange} value={newReviews.name} />
                </div>

                <div>
                    <input className="user-input" type="text" name="location" placeholder='Review:' onChange={handleChange} value={newReviews.review} />
                </div>

                <input className="submit-btn" type="submit" value="Create Comment" />
                
            </form>
        </div>
    )
    
}



export default ReviewForm;