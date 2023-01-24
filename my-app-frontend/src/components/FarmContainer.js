import React from 'react';
import FarmCard from './FarmCard';

const FarmContainer = ({farms, setFarms}) => {

    const mappedFarms = farms.map(farm => (
        <FarmCard {...farm} key={farm.id} setFarms={setFarms} />
    ))

    return (
        <div>
            {mappedFarms}
        </div>
    )
}

export default FarmContainer