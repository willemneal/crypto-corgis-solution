import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

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
        console.log(this.props.history)
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

    handleSubmit(e) {
        let {name, color, backgroundColor,quote,loaded, loggedIn} = this.state
        e.preventDefault();
        return false
        // this.setState({ loaded: false });
        // console.log("handle submit load", loaded)
        // this.props.contract.createRandomCorgi({
        //     backColor: backgroundColor,
        //     name,
        //     color,
        //     quote
        // }).then(res => {
        //     // set the returned corgi to display in the frontend
        //     let corgi = res.lastResult;
        //     this.setState(state => {
        //         let corgis = state.corgis.concat(corgi);
        //         return {
        //             newCorgiName: "",
        //             loaded: true,
        //             corgis: corgis
        //         }
        //     })
        //     console.log("[App.js] login ",loggedIn,"load ", loaded)
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    render() {
        let { loggedIn, loaded, corgis, accountId, color, backgroundColor, newCorgiName, quote } = this.state
        return (
            <div className="App">
                <Header
                    login={loggedIn}
                    load={loaded}
                    requestSignIn={this.requestSignIn}
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
                    <Route exact path="/generation" render={()=><Generation 
                        color={color}
                        backgroundColor={backgroundColor}
                        newCorgiName={newCorgiName}
                        quote={quote}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange} />} />
                    <Route exact path="/account" render={() => <Account
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
