import React from 'react';

const Dialogue = ({quote,color}) => {

    return (
        <div style={{ position: "relative", bottom: "-30px", left: "70px", fontSize: "0,7rem", width: "200px", wordWrap: "break-word" }}>
            <Quote quote={quote} color={color}/>
            {/* <Ellipse1 /> */}
            {/* <Ellipse2 /> */}
        </div>
    )
}

export default Dialogue

// const Ellipse1 = () => (
//     <div>
//         <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
//             <g>
//                 <ellipse rx="2" ry="3"
//                     stroke="black" strokeWidth="1" fill="#fff"></ellipse>
//             </g>
//         </svg>
//     </div>
// )

// const Ellipse2 = () => (
//     <div>
//         <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
//             <g>
//                 <ellipse rx="2" ry="3"
//                     stroke="black" strokeWidth="1" fill="#fff"></ellipse>
//             </g>
//         </svg>
//     </div>
// )

const Quote = ({quote,color}) => (
    <div >
        <p style={{color:color}}><i class="fa fa-quote-left"></i>{quote}</p>
    </div >
)