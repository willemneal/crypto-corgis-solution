import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/footer';
import Home from '../../component/home/home'
import Generation from '../../component/Generation/generation'
import Account from '../../component/Account/account'
import Profile from '../../component/Profile/profile'

import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            loggedIn: false,
            corgis: [],
            accountId: '',
            color: "#EF4F24",
            backgroundColor: "#84D0B5",
            newCorgiName: '',
            quote: "this is the fake quote"
        }
        this.getCorgis = this.getCorgis.bind(this);
        this.checkLoggedIn = this.checkLoggedIn.bind(this);
        this.signedInFlow = this.signedInFlow.bind(this);
        this.requestSignIn = this.requestSignIn.bind(this);
        this.requestSignOut = this.requestSignOut.bind(this);
    }

    componentDidMount() {
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
                loggedIn: true,
                accountId
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
        console.log("[app.js] sign in login",this.state.loggedIn)
    }

    requestSignOut() {
        console.log("[app.js] arrive in requestout",this.state.loggedIn)
        this.props.wallet.signOut();
        console.log("[app.js] arrive in SignOUT",this.state.loggedIn)
        this.signedOutFlow();
        console.log("[app.js] after signout",this.state.loggedIn)
    }

    handleChange = ({ name, value }) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        let { loggedIn, loaded, corgis, accountId, color, backgroundColor, newCorgiName, quote } = this.state
        let { contract } = this.props
        return (
            <div className="App">
                <Header
                    login={loggedIn}
                    load={loaded}
                    requestSignIn={this.requestSignIn}
                    requestSignOut={this.requestSignOut}
                    accountId={accountId}
                    length={corgis.length} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Home
                            login={loggedIn}
                            load={loaded}
                            requestSignIn={this.requestSignIn} />}
                    />
                    <Route exact path="/generation" render={() => <Generation
                        color={color}
                        backgroundColor={backgroundColor}
                        newCorgiName={newCorgiName}
                        quote={quote}
                        handleChange={this.handleChange}
                        contract={contract}
                        corgis={corgis} />} />
                    <Route exact path="/account" render={() => <Account
                        login={loggedIn}
                        load={loaded}
                        corgis={corgis} />} />
                    <Route exact path="/profile" render={() => <Profile
                        login={loggedIn}
                        load={loaded}
                        corgis={corgis} />} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(App)
