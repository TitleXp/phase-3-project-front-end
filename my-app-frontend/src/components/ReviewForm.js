import React from 'react';
import { useState } from 'react';

const ReviewForm = ({ setMessage, setReviews, id, review }) => {


    const [newReview, setNewReview] = useState({
        name: "",
        review: ""
  
    })

    const handleChange = (e) => {
        setNewReview({...newReview, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("http://localhost:9292/reviews", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newReview)
            })
            .then(response => {
                if(response.status===201){
                    response.json()
                    .then(review => {
                        setReviews(currentReviews => {
                            const updatedReviews = currentReviews.map(rev =>{
                                return rev.id === id ? review :rev
                            
                            })
                            return updatedReviews
                        })
                        setMessage("Review created!")
                    } )
                
                } else {
                    response.json()
                    .then(messageObj => setMessage(messageObj.message))
                }
               
                
            })
           
            .catch(error => alert(error))
            setNewReview({
                name: "",
                review: ""
            })
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-title">Create your Review</h2>
                <div>
                    <input className="user-input" type="text" name="name" placeholder='Name:' onChange={handleChange} value={newReview.name} />
                </div>

                <div>
                    <input className="user-input" type="text" name="review" placeholder='Review:' onChange={handleChange} value={newReview.review} />
                </div>

                <input className="submit-btn" type="submit" value="Create Comment" />
                
            </form>
        </div>
    )
    
}



export default ReviewForm;