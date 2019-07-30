import React, { Component } from 'react';

class Info extends Component {
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h3>My Corgi is called</h3>
                <form>
                    <input
                        id="newCorgiName"
                        type="text"
                        placeholder="Corgi name"
                        onChange={this.handleChange} />
                </form>
                <h3>Colors</h3>
                <form>

                </form>
            </div>
        )
    }
}