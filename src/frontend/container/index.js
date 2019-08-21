import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App/App'

class AppBuilder extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App contract={this.props.contract} wallet={this.props.wallet} />
            </BrowserRouter>
        )
    }

}

export default AppBuilder