import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import CreationAccount from '../creation/creationAccount/creationAccount'
import './account.css';


const RATE = {
    common: "COMMON",
    uncommon: "UNCOMMON",
    rare: "RARE",
    veryRare: "VERYRARE"
}
class Account extends Component {
    componentDidMount(){
        console.log("[account.js] login",this.props.login)
    }
    render(){
        let { corgis, login } = this.props
        if(!login) {return <Redirect t0="/" />}
        let Corgis = 'loading'
        if (corgis && corgis.length === 0) { return <Redirect to="/generation" /> } 
        if (corgis.length > 0 ) {
            Corgis = corgis.map(corgi => {
                    return (<CreationAccount
                        id={corgi.dna}
                        backgroundColor={corgi.backgroundColor}
                        color={corgi.color}
                        sausage={corgi.sausage}
                        corgiName={corgi.name}
                        des={corgi.quote}
                        rate="this is the fake rate" />)
                })
        }
        return(
            <div>
                <div>
                    <h1 className="head">Your Pack</h1>
                    <p>Create,collect,send or trade</p>
                </div>
                <div>{Corgis}</div>
            </div>
        )
    }
}

export default Account