import React, { Component } from 'react';

import './colorpicker.css'
class ColorPicker extends Component {
    handleColorChange = (event) => {
        let value = event.target.value;
        this.props.handleChange({ name: "color", value })
    }

    handleBackGroundColorChange = (event) => {
        let value = event.target.value;
        this.props.handleChange({ name: "backgroundColor", value })
    }

    render() {
        const arrow = (
            <div>
                <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="create" transform="translate(-110.000000, -548.000000)" fill="#24272A">
                            <polygon id="Fill-1-Copy" points="128 548 110 566 128 566"></polygon>
                        </g>
                    </g>
                </svg>
            </div>
        )
        let {color, backgroundColor } = this.props
        let colorSet = color ? color : "#fff"
        let backColorSet = backgroundColor ? backgroundColor : "#fff" 
        return (
            <div>
                <div className="colorpicker">
                    <label>
                        <div className="result" style={{ backgroundColor: colorSet }}></div>
                        <input name="color" type="color" id="color-picker" onChange={this.handleColorChange} />
                        <div className="select">{arrow}</div>
                    </label>
                    <div>
                        <p style={{ marginBottom: "0", marginLeft:"2px", fontWeight: "600" }}>Corgi</p>
                        <p style={{ marginBottom: "0", marginLeft:"2px", }}>{colorSet}</p>
                    </div>
                </div>
                <div className="colorpicker">
                    <label>
                        <div className="result" style={{ backgroundColor: backColorSet }}></div>
                        <input name="backgroundColor" type="color" id="color-picker" onChange={this.handleBackGroundColorChange} />
                        <div className="select">{arrow}</div>
                    </label>
                    <div>
                        <p style={{ marginBottom: "0", marginLeft:"2px", fontWeight: "600" }}>BackGround</p>
                        <p style={{ marginBottom: "0", marginLeft:"2px", }}>{backColorSet}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker

// color and background color should be stored in redux 