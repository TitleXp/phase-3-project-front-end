import React from "react";
import { useState } from "react";
import ReviewEditForm from "./ReviewEditForm";

const ReviewCard = ({id, name, review, setReviews}) => {


    const [showForm, setShowForm] = useState(false)


    const handleClick = () => {
        setShowForm(currentValue => !currentValue)
    }

    const handleDeleteReview = () => {
        fetch(`http://localhost:9292/reviews/${id}`,
        {
            method: "DELETE"
        })
        setReviews(currentReviews => currentReviews.filter(element => element.id !== id))
    }

    
    return(
            <div>
                {showForm ? <ReviewEditForm id={id} name={name} review={review} setReviews={setReviews} handleClick={handleClick} />:(
                    <>
                   {name} :{review}
                <button onClick={handleDeleteReview}> 
                    X
                </button>

                <button onClick={handleClick}>
                    Edit
                </button>  
                </>
                )}
            </div>
    )
}; 

export default ReviewCard;