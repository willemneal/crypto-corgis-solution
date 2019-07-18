import React from 'react';
import dogGreen from '../../../../../assets/c-green.png';
import './dog.css';

const DogGreen = () => {
    return (
        <div className="dog">
            <img style={{width: '100%',height: '100%'}} src={dogGreen} />
        </div>
    )
} 

export default DogGreen
