// import 'babel-polyfill';
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
            back: false,
            front: false,
            corgis: [],
            accountId: '',
            color: "#EF4F24",
            backgroundColor: "#84D0B5",
            newCorgiName: '',
            dna: '',
            quote: '',
            quoteSum: null
        }
        this.signedInFlow = this.signedInFlow.bind(this);
        this.requestSignIn = this.requestSignIn.bind(this);
    }
    // async checkLoggedIn() {
    //     await this.props.wallet.isSignedIn();
    // }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', {
            headers: {
                Accept: "application/json",
            }
        })
            .then(response => response.json())
            .then((responseData) => {
                this.setState({
                    quoteSum: responseData.quotes,
                    quote: responseData.quotes[0].quote
                });
            })
            .catch(error => this.setState({ error }));
        let loggedIn = window.walletAccount.isSignedIn();
        if (loggedIn) {
            this.signedInFlow();
        } else {
            this.signedOutFlow();
        }
    }

    generateQuote = () => {
        const chosenQuote = [];
        const QuoteSum = this.state.quoteSum;
        let randomNumber = Math.floor((Math.random() * QuoteSum.length) + 1);

        QuoteSum.forEach(function (element, index) {
            if (index === randomNumber) {
                chosenQuote.push(element)
            }
        })
        this.setState({
            quote: chosenQuote[0].quote
        })
    }

    signedOutFlow = () => {
        this.setState({
            loggedIn: false,
            loaded: true,
            front: false
        });
    }

    getCorgis = (owner) => {
        return this.props.contract.getCorgisByOwner({ owner: owner });
    }

    async signedInFlow() {
        const accountId = await this.props.wallet.getAccountId();
        this.getCorgis(accountId).then(res => {
            this.setState({
                loggedIn: true,
                front: true,
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

    async requestSignIn() {
        await this.props.wallet.requestSignIn(
            window.nearConfig.contractName,
            window.nearConfig.appName
        )
    }

    requestSignOut = () => {
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

    backShowHandler = () => {
        this.setState({ back: true })
    }

    backCancelHandler = () => {
        this.setState({ back: false })
    }

    homeFrontHandler = () => {
        this.setState({ front: true })
    }

    render() {
        let { loggedIn, loaded, corgis, accountId, color, backgroundColor, newCorgiName, quote, backDrop, back, front, dna } = this.state
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
                        path='/'
                        render={() => <Home
                            login={loggedIn}
                            load={loaded}
                            requestSignIn={this.requestSignIn}
                            front={front}
                            accountId={accountId} />}
                    />
                    <Route exact path="/generation" render={() => <Generation
                        login={loggedIn}
                        load={loaded}
                        handleChange={this.handleChange}
                        color={color}
                        backgroundColor={backgroundColor}
                        newCorgiName={newCorgiName}
                        corgis={corgis}
                        contract={contract}
                        generateQuote={this.generateQuote}
                        quote={quote}
                        accountId={accountId} />} />
                    <Route exact path="/account" render={() => <Account
                        load={loaded}
                        login={loggedIn}
                        corgis={corgis}
                    />} />
                    <Route exact path="/profile" render={() => <Profile
                        load={loaded}
                        login={loggedIn}
                        corgis={corgis}
                        contract={contract}
                        handleChange={this.handleChange} />} />
                    <Route path="/corgi/:name" render={() => <Single
                        load={loaded}
                        login={loggedIn}
                        contract={contract}
                        corgis={corgis}
                        backDrop={backDrop}
                        backDrop={backDrop}
                        back={back}
                        backdropShowHandler={this.backdropShowHandler}
                        backdropCancelHandler={this.backdropCancelHandler}
                        backShowHandler={this.backShowHandler}
                        backCancelHandler={this.backCancelHandler}
                        handleChange={this.handleChange}
                    />} />
                    <Route path="/generating" render={() => <Animation
                        login={loggedIn}
                        load={loaded}
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

