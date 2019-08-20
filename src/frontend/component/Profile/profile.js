import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import CreationProfile from '../creation/creationProgile/creationProfile'

//TO DO: Add sender and message
class Profile extends Component {
    render() {
        let { corgis, contract, handleChange, login } = this.props
        if (!login) { return <Redirect to="/" /> }
        let Corgis = 'loading'
        if (corgis && corgis.length === 0) { return <Redirect to="/generation" /> }
        if (corgis.length > 0) {
            Corgis = corgis.map(corgi => {
                return (
                    <li style={{textDecoration:"none"}} key={corgi.dna}>
                        <CreationProfile
                            contract={contract}
                            corgi={corgi}
                            handleChange={handleChange} />
                    </li>)
            })
        }
        return (
            <div>
                <h1>Your Corgis</h1>
                <p>look and delete</p>
                <div>
                    <ul style={{textAlign:"center", padding:"10px",margin:"auto",textDecoration:"none"}}>
                        {Corgis}
                    </ul>

                </div>
            </div>
        )
    }


}

export default Profile