import React from "react";

const ReviewCard = ({id, name, review, setReviews}) => {

    const handleDeleteReview = () => {
        fetch(`http://localhost:9292/reviews/${id}`,
        {
            method: "DELETE"
        })
        setReviews(currentReviews => currentReviews.filter(element => element.id !== review.id))
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
              body: JSON.stringify(setReviews),
            
        })
        .then(response => response.json())
        .then(newReviewObj => setReviews(newReviewObj))
        .catch(error => alert(error))

    }
    
    return(
        <div>
            {name} :{review}
            <button onClick={handleDeleteReview}> 
                X
            </button>
            <button onClick={handleEditReview}>
                Edit
            </button>
        </div>
        
    )
}; 

export default ReviewCard;