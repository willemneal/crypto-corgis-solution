import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/footer';
import Home from '../../component/home/home';
import Generation from '../../component/Generation/generation';
import Account from '../../component/Account/account';
import Profile from '../../component/Profile/profile';
import Single from '../../component/Single/single';
import Animation from '../../component/Generation/animation/animation'

import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            loggedIn: false,
            backDrop: false,
            front: false,
            corgis: [],
            accountId: '',
            color: "#EF4F24",
            backgroundColor: "#84D0B5",
            newCorgiName: '',
            quote: "this is the fake quote",
            dna: ''
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
        console.log("[app.js] name", this.state.newCorgiName)
    }

    signedOutFlow() {
        this.setState({
            loggedIn: false,
            loaded: true,
            front: false
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
    }

    requestSignOut() {
        this.props.wallet.signOut();
        this.signedOutFlow();
    }

    handleChange = ({ name, value }) => {
        this.setState({
            [name]: value
        })
    }

    backdropShowHandler = () => {
        this.setState({ backDrop: true })
    }

    backdropCancelHandler = () => {
        this.setState({ backDrop: false })
    }

    homeFrontHandler = () => {
        this.setState({ front: true })
    }

    render() {
        let { loggedIn, loaded, corgis, accountId, color, backgroundColor, newCorgiName, quote, backDrop, front, dna } = this.state
        let { contract } = this.props
        return (
            <div className="App">
                <Header
                    login={loggedIn}
                    load={loaded}
                    requestSignIn={this.requestSignIn}
                    requestSignOut={this.requestSignOut}
                    accountId={accountId}
                    length={corgis.length}
                    clicked={this.homeFrontHandler} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Home
                            login={loggedIn}
                            load={loaded}
                            requestSignIn={this.requestSignIn}
                            front={front}
                            accountId={accountId} />}
                    />
                    <Route exact path="/generation" render={(props) => <Generation
                        load={loaded}
                        login={loggedIn}
                        color={color}
                        backgroundColor={backgroundColor}
                        newCorgiName={newCorgiName}
                        quote={quote}
                        handleChange={this.handleChange}
                        contract={contract}
                        corgis={corgis}
                        {...this.props} />} />
                    <Route exact path="/account" render={() => <Account
                        login={loggedIn}
                        load={loaded}
                        corgis={corgis}
                        backDrop={backDrop}
                        backdropShowHandler={this.backdropShowHandler}
                        backdropCancelHandler={this.backdropCancelHandler}
                    />} />
                    <Route exact path="/profile" render={() => <Profile
                        login={loggedIn}
                        load={loaded}
                        corgis={corgis} />} />
                    <Route path="/corgi/:name" render={() => <Single
                        login={loggedIn}
                        load={loaded}
                        corgis={corgis}
                        backDrop={backDrop}
                        dna={dna}
                        newCorgiName={newCorgiName}
                        backdropShowHandler={this.backdropShowHandler}
                        backdropCancelHandler={this.backdropCancelHandler}
                    />} />
                    <Route path="/generating" render={() => <Animation
                        login={loggedIn}
                        corgis={corgis}
                        dna={dna}
                        newCorgiName={newCorgiName}
                    />} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(App)

