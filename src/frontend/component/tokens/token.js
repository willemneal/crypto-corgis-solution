import React, {Component} from 'react';
import Corgi from './corgi/corgi';
import Button from '../common/Button/Button';

class Tokens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            corgis: [],
            newCorgiName: "",
            loggedIn: false
        }
        this.getCorgis = this.getCorgis.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkLoggedIn = this.checkLoggedIn.bind(this);
        this.signedInFlow = this.signedInFlow.bind(this);
        this.requestSignIn = this.requestSignIn.bind(this);
        this.requestSignOut = this.requestSignOut.bind(this);
    }

    componentWillMount() {
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

    getCorgis(owner) {
        return this.props.contract.getCorgisByOwner({ owner: owner });
    }

    getCorgi(tokenId) {
        return this.props.contract.getCorgi({ tokenId: tokenId })
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    randomInt() {
        return Math.floor(Math.random() * 10000000) + 1;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loaded: false });
        this.props.contract.createRandomCorgi({
            name: this.state.newCorgiName,
            seed: this.randomInt()
        }).then(res => {
            // set the returned corgi to display in the frontend
            let corgi = res.lastResult;
            this.setState(state => {
                let corgis = state.corgis.concat(corgi);
                return {
                    newCorgiName: "",
                    loaded: true,
                    corgis: corgis
                }
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.loaded && this.state.loggedIn) {
            return (
                <div>
                    <form>
                        <input
                            id="newCorgiName"
                            type="text"
                            placeholder="Corgi name"
                            onChange={this.handleChange}
                            value={this.state.newCorgiName} />
                        <Button action={this.handleSubmit} description="Create Corgi!" />
                    </form>
                    {this.state.corgis.length > 0 ?
                        <div className="corgiList">
                            <CorgiComponents
                                trigger={this.signedInFlow}
                                contract={this.props.contract}
                                corgis={this.state.corgis} />
                        </div>
                        : ""}
                    <Button action={this.requestSignOut} description="Sign out" />
                </div>
            )
        } else if (this.state.loaded) {
            return (
                <Button action={this.requestSignIn} description="Log in with Near" />
            )
        } else {
            return ("Loading...");
        }
    }
}

function CorgiComponents(props) {
    return props.corgis.map(corgi => {
        return (
            <div className="corgibox" key={corgi.dna}>
                <Corgi
                    name={corgi.name}
                    color={corgi.color}
                    sausage={corgi.sausage} />
            </div>
        )
    })
}

export default Tokens