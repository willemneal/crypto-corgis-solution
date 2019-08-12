import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

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

    handleSubmit = (e) => {
        let {color, backgroundColor, newCorgiName, quote, handleChange, contract, corgis, history} = this.props
        e.preventDefault()
        handleChange({name: "loaded", value: "false"})
        contract.createRandomCorgi({
            backgroundColor, name:newCorgiName, quote, color
        }).then(response => {
            // let corgi = response.lastResult
            // let newCorgis = corgis.concat(corgi)
            handleChange({name:"newCorgiName",value:""})
            handleChange({name:"loaded",value:"true"})
            // handleChange({name:"corgis",value:newCorgis})
            console.log("[info.js]",this.props.history)
            history.push("/generating")
        }).catch(err => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <div className="inputboard">
                <p className="title">My Corgi is called</p>
                <form onSubmit={this.handleSubmit}>
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
                    <Button description="Generate Corgi"/>
                </form>
                <p className="quote">This will create a one-of-a-kind Corgi that will develop a unique size and
                    thought process. The size it grows to will untimately determine it’s value
                </p>
            </div>
        )
    }
}

export default Info
