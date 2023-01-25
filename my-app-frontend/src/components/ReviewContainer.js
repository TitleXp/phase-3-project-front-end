import React from "react";
import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";


const ReviewContainer = ({}) => {

    const [reviews, setReviews]=useState([])

    const mappedReview = reviews.map(review => (
        <ReviewCard {...review} key={review.id} setReviews={setReviews} />
    ))

    useEffect(() => { // fetch reviews
        const fetchReviews = async () => {
          try {
            const resp = await fetch("http://localhost:9292/reviews")
            const data = await resp.json()
            setReviews(data)
          } catch (error) {
            alert(error)
          }
        }
        fetchReviews()
    }, [])

    
    return(
        <div>Review Container
            {mappedReview}
        </div>
    )
}; 

export default ReviewContainer;