import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
// import { ConnectedRouter } from 'connected-react-router'

import Header from '../component/Header/Header';
import Footer from '../component/Footer/footer';
import Home from '../component/home/home'

import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/" component={} /> */}
                </Switch>
                <Footer />

            </div>
        )
    }
}

export default withRouter(App)
