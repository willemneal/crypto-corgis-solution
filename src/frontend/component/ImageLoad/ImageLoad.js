import React from 'react';

const ImageLoader = (props) => (
    <div>
        <img style={{width: '100%', height:'100%'}} src={props.image} />
    </div>
)

export default ImageLoader