import React from "react";

const ReviewCard = ({id, review}) => {

    
    return(
        <div>
            {id}:{review}
            <button> 
                {/* add onclick = {} to <button> */}
                X
            </button>
        </div>
        
    )
}; 

export default ReviewCard;