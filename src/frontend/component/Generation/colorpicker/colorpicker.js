import React, { Component } from 'react';

import './colorpicker.css'
class ColorPicker extends Component {
    state = {
        colorPick: null
    }

    handleColorChange = (event) => {
        let value = event.target.value;
        console.log("[colorpicker.js] color,", this.props.color)
        this.props.handleChange({ name: "color", value })
    }

    render() {
        const arrow = (
            <div>
                <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="create" transform="translate(-110.000000, -548.000000)" fill="#24272A">
                            <polygon id="Fill-1-Copy" points="128 548 110 566 128 566"></polygon>
                        </g>
                    </g>
                </svg>
            </div>
        )
        let colorSet = this.props.color ? this.props.color: "#fff"
        return (
            <div className="colorpicker">
                <label>
                    <div className="result" style={{ backgroundColor: colorSet }}></div>
                    <input name="color" type="color" id="color-picker" ref="color-value" onChange={this.handleColorChange}/>
                    <div className="select">{arrow}</div>
                </label>
                <div>
                    <p style={{marginBottom: "0", fontWeight: "medium"}}>{this.props.des}</p>
                    <p style={{marginBottom: "0"}}>{colorSet}</p>
                </div>

            </div>
        );
    }
}

export default ColorPicker

// color and background color should be stored in redux 