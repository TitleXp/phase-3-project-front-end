import React from "react";

const ReviewCard = ({id, review, setReviews}) => {

    const handleDeleteReview = () => {
        fetch(`http://localhost:9292/reviews/${id}`,
        {
            method: "DELETE"
        })
        setReviews(currentReviews => currentReviews.filter(element => element.id !== review.id))

    }
    
    return(
        <div>
            {id}:{review}
            <button onClick={handleDeleteReview}> 
                X
            </button>
        </div>
        
    )
}; 

export default ReviewCard;