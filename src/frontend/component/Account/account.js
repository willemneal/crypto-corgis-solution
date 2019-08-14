import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import CreationAccount from '../creation/creationAccount/creationAccount'
import './account.css';

class Account extends Component {
    render(){
        let { corgis, login } = this.props
        if(!login) {return <Redirect to="/" />}
        let Corgis = 'loading'
        if (corgis && corgis.length === 0) { return <Redirect to="/generation" /> } 
        if (corgis.length > 0 ) {
            Corgis = corgis.map(corgi => {
                    return (
                    <Link to={{pathname:"/corgi/"+ corgi.name,
                                hash: "what id wrong here?"}} key={corgi.dna}> <CreationAccount
                        backgroundColor={corgi.backgroundColor}
                        color={corgi.color}
                        sausage={corgi.sausage}
                        corgiName={corgi.name}
                        des={corgi.quote}
                        rate="this is the fake rate" /></Link>)
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