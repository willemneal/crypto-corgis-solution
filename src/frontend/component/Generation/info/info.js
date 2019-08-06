import React, { Component } from 'react';
import ColorPicker from '../colorpicker/colorpicker';
import Button from '../../common/Button/Button'

import './info.css'
class Info extends Component {
    state = {
        Name: ''
    }

    handleNameChange = (event) => {
        let value = event.target.value;
        this.setState({ Name: value})
        this.props.handleChange({ name: "newCorgiName", value })
    }
    
    render() {
        return (
            <div className="inputboard">
                <p className="title">My Corgi is called</p>
                <form>
                    <input
                        className="inputname"
                        name="Name"
                        type="text"
                        placeholder="Corgi name"
                        onChange={this.handleNameChange}
                        value={this.state.Name}
                        required />
                <p className="title">Colors</p>
                    <ColorPicker 
                        color={this.props.color} 
                        handleChange={this.props.handleChange}
                        backgroundColor={this.props.backgroundColor} />
                    <Button description="Generate Corgi" />
                </form>
                <p className="quote">This will create a one-of-a-kind Corgi that will develop a unique size and
                    thought process. The size it grows to will untimately determine it’s value
                </p>
            </div>
        )
    }
}

export default Info
