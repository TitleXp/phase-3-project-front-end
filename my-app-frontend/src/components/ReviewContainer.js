import React from "react";
import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";


const ReviewContainer = ({ setMessage, reviews, setReviews }) => {

    // const [reviews, setReviews]=useState([])

  //   const mappedRev = reviews.map(review => (
  //     <ReviewForm {...review} key={review.id} setReviews={setReviews} setMessage={setMessage} />
  // ))

      // const mappedRev = reviews.map(review => <ReviewForm review={review} key={review.id} setReviews={setReviews} setMessage={setMessage} /> )

    const mappedReview = reviews.map(review => (
        <ReviewCard {...review} key={review.id} setReviews={setReviews} />
    ))

    // useEffect(() => { // fetch reviews
    //     const fetchReviews = async () => {
    //       try {
    //         const resp = await fetch("http://localhost:9292/reviews")
    //         const data = await resp.json()
    //         setReviews(data)
    //       } catch (error) {
    //         alert(error)
    //       }
    //     }
    //     fetchReviews()
    // }, [])

    
    return(
        <div>
            {mappedReview}
            {/* {mappedRev} */}
            {/* <ReviewForm setMessage={setMessage} id={id} review={reviews} setReviews={setReviews}/> */}

        </div>
    )
}; 

export default ReviewContainer;