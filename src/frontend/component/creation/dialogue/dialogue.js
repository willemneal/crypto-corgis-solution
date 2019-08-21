import React from 'react';

const Dialogue = ({quote,color}) => {

    return (
        <div style={{ 
                position: "relative", 
                fontSize: "0.5em", 
                width: "200px", 
                padding: "3px",
                wordWrap: "break-word", 
                backgroundColor:"white",
                opacity: "0.7", 
                borderRadius: "20px",
                left: "60px" }}>
            <p style={{color:color, margin:"0"}}><i class="fa fa-quote-left"></i> {quote}</p>
        </div>
    )
}

export default Dialogue