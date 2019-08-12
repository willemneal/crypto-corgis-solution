import React from 'react';

const Dialogue = (props) => {
    return (
        <div style={{position: "relative", bottom: "-40px", left: "40px"}}>
            <svg width="199px" height="60px" viewBox="0 0 199 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="home" transform="translate(-166.000000, -886.000000)">
                        <g id="Group-2" transform="translate(166.000000, 886.000000)">
                            <rect id="Rectangle" fill="#FFFFFF" x="28" y="0" width="171" height="60" rx="26.5"></rect>
                            <foreignObject x="30" y="5" width="181" height="44" dominantBaseline="central" color={props.color}>
                                <div xmlns="http://www.w3.org/1999/xhtml" fontFamily=".AppleSystemUIFont" fontSize="5" fontWeight="normal" display="inline" wrapword="break-word" color={props.color}>{props.des}</div>
                            </foreignObject>
                            <ellipse id="Oval" fill="#FFFFFF" cx="18" cy="37.826087" rx="6" ry="8.26086957"></ellipse>
                            <ellipse id="Oval-Copy" fill="#FFFFFF" cx="4" cy="46.0869565" rx="4" ry="6.08695652"></ellipse>
                        </g >
                    </g >
                </g >
            </svg >
        </div>
    )
}

export default Dialogue