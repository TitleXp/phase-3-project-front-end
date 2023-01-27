import React from "react"
import { useState } from "react";

const ReviewEditForm = ({ id, name, review, setReviews, handleClick}) => {

    const [editReview, setEditReview] = useState({
        name: name,
        review: review
    });

    const handleChange = (e) => {
        setEditReview({...editReview, [e.target.name]: e.target.value})
    }

    const handleEditReview = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/reviews/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(editReview),
            
        })
        .then(response => {
            if(response.status ===200) {
                response.json()
                .then(review => {

                    setReviews(currentReviews => {
                        const updatedReviews = currentReviews.map(rev =>{
                            return rev.id === id ? review : rev
                        })
                        return updatedReviews
                    })
                    handleClick()
                })
            } else {
                response.json()
                .then(error => alert(error))
            }
        })
        // .then(newReviewObj => setEditReview(newReviewObj))
        .catch(error => alert(error))

    }

    return(
        <form onSubmit={handleEditReview}>
            <input placeholder="Name" type="text" name="name" value={editReview.name} onChange={handleChange} /> 
            <input placeholder="Review" type="text" name="review" value={editReview.review} onChange={handleChange} /> 
            <input type="submit" value="Update!" />
        

        </form>
    )
}

export default ReviewEditForm;