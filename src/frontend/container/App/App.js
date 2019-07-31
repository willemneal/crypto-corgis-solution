import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/footer';
import Home from '../../component/home/home'
import Generation from '../../component/Generation/generation'

import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header login="true"/>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/" component={Generation} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App
