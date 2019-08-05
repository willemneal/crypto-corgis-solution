import React from 'react';

const Dialogue = (props) => {
    let style = {
        width: "60%",
        height: "60%",
        viewBox: "0 0 211 44"
    }
    return (
        <div style={{position:"relative", bottom:"-50px"}}>
            <svg width={style.width} height={style.height} viewBox={style.viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="home" transform="translate(-149.000000, -841.000000)">
                        <g id="Group-2" transform="translate(149.000000, 841.000000)">
                            <rect id="Rectangle" fill="#FFFFFF" x="30" y="0" width="181" height="44" rx="22"></rect>
                            <foreignObject x="30" y="0" width="181" height="44" dominant-baseline="central" color={props.color}>
                                <div xmlns="http://www.w3.org/1999/xhtml" font-family=".AppleSystemUIFont" font-size="14" font-weight="normal" line-spacing="14" display="inline" wrap-word="break-word" color={props.color}>{props.des}</div>
                            </foreignObject>
                            <circle id="Oval" fill="#FFFFFF" cx="19" cy="28" r="6"></circle>
                            <circle id="Oval-Copy" fill="#FFFFFF" cx="4.5" cy="33.5" r="4.5"></circle>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Dialogue