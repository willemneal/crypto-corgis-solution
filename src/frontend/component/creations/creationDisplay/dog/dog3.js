import React from 'react';
import dogOrange from '../../../../../assets/c-orange.png';
import './dog.css';

const DogOrange = () => {
    return (
        <div className="dog">
            <img style={{width: '100%',height: '100%'}} src={dogOrange} />
        </div>
    )
} 

export default DogOrange