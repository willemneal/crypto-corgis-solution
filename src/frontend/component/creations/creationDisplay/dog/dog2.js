import React from 'react';
import dogBlue from '../../../../../assets/c-blue.png';
import './dog.css';

const DogBlue = () => {
    return (
        <div className="dog">
            <img style={{width: '100%',height: '100%'}} src={dogBlue} />
        </div>
    )
}
export default DogBlue