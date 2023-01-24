import React from 'react';

const FarmContainer = ({ id, name, location, rating }) => {

    return (
    <>
        <div className="farms-box">
            <h3 className="farm-name">{name}</h3>
            <p className="farm-location">{location}</p>
            <p className="farm-rating">- {rating}</p>
        </div>
    </>
    )
}

export default FarmContainer