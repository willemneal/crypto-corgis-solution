import React from 'react';

const Dialogue = (props) => {
    let style = {
        width: "40%",
        height: "40%",
        viewBox: "0 0 211 44"
    }
    return (
        <svg width={style.width} height={style.height} viewBox={style.viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="home" transform="translate(-149.000000, -841.000000)">
                    <g id="Group-2" transform="translate(149.000000, 841.000000)">
                        <rect id="Rectangle" fill="#FFFFFF" x="30" y="0" width="181" height="44" rx="22"></rect>
                        <text id="Does-this-color-make" font-family=".AppleSystemUIFont" font-size="14" font-weight="normal" line-spacing="14" fill="#2BB673" display="inline">
                            <tspan>{props.des}</tspan>
                        </text>
                        <circle id="Oval" fill="#FFFFFF" cx="19" cy="28" r="6"></circle>
                        <circle id="Oval-Copy" fill="#FFFFFF" cx="4.5" cy="33.5" r="4.5"></circle>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Dialogue