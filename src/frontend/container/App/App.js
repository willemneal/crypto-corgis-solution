import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/footer';
import Home from '../../component/home/home'
import Generation from '../../component/Generation/generation'
import Account from '../../component/Account/account'

import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            loggedIn: false,
            corgis: []
        }
        this.getCorgis = this.getCorgis.bind(this);
        this.checkLoggedIn = this.checkLoggedIn.bind(this);
        this.signedInFlow = this.signedInFlow.bind(this);
        this.requestSignIn = this.requestSignIn.bind(this);
        this.requestSignOut = this.requestSignOut.bind(this);
    }

    componentDidMount() {
        // This is where we get into trouble with global vars
        // TODO: add same state management and dependency injection
        // This is more dependable than using the async 
        let loggedIn = window.walletAccount.isSignedIn();
        if (loggedIn) {
            this.signedInFlow();
        } else {
            this.signedOutFlow();
        }
    }

    signedOutFlow() {
        this.setState({
            loggedIn: false,
            loaded: true
        });
    }

    getCorgis(owner) {
        return this.props.contract.getCorgisByOwner({ owner: owner });
    }

    async signedInFlow() {
        const accountId = await this.props.wallet.getAccountId();
        this.getCorgis(accountId).then(res => {
            this.setState({
                loggedIn: true
            });
            if (res == null || res.corgis.length < 1 || res.corgis == null) {
                this.setState({
                    loaded: true
                });
            } else {
                this.setState({
                    corgis: res.corgis,
                    loaded: true
                });
            }
        })
    }

    async checkLoggedIn() {
        await this.props.wallet.isSignedIn();
    }

    async requestSignIn() {
        await this.props.wallet.requestSignIn(
            window.nearConfig.contractName,
            window.nearConfig.appName
        )
    }

    requestSignOut() {
        this.props.wallet.signOut();
        this.signedOutFlow();
    }

    render() {
        let { loggedIn, loaded, corgis } = this.state
        return (
            <div className="App">
                <Header login={loggedIn} load={loaded} requestSignIn={this.requestSignIn} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Home login={loggedIn} load={loaded} requestSignIn={this.requestSignIn} />}
                    />
                    <Route path="/generation" component={Generation} />
                    <Route path="/account" render={() => <Account login={loggedIn} load={loaded} corgis={corgis}/>} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App
