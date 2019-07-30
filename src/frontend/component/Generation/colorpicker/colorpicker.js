import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor() {
        super();
        this.state = {
            color: []
        };
        this.ItemChecked.bind(this)
    }

    ItemChecked(e) {
        let tValue = e.target.value;
        this.setState({ color: tValue });
    }

    render() {
        const arrow = (
            <div >
                <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="create" transform="translate(-110.000000, -548.000000)" fill="#24272A">
                            <polygon id="Fill-1-Copy" points="128 548 110 566 128 566"></polygon>
                        </g>
                    </g>
                </svg>
            </div>
        )
        return (
            <div>
                <label>
                    <div className="result" style={{ backgroundColor: this.state.color }}></div>
                    <input type="color" id="color-picker" ref="color-value" onChange={this.ItemChecked} />
                    <span className="select">{arrow}</span>
                </label>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));