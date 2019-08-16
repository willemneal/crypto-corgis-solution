import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import CreationProfile from '../creation/creationProgile/creationProfile'

//TO DO: Add sender and message
class Profile extends Component {
    componentDidMount() {
        console.log("[profile.js] corgis", this.props.corgis)
    }
    render() {
        let { corgis, login, contract, handleChange } = this.props
        if (!login) { return <Redirect to="/" /> }
        let Corgis = 'loading'
        if (corgis && corgis.length === 0) { return <Redirect to="/generation" /> }
        if (corgis.length > 0) {
            Corgis = corgis.map(corgi => {
                return (
                    <li key={corgi.dna}>
                        <CreationProfile
                            contract={contract}
                            corgi={corgi}
                            handleChange={handleChange} />
                    </li>)
            })
        }
        return (
            <div>
                <h1>Your Corgi List</h1>
                <p>look and delete</p>
                <div>
                    <ul>
                        {Corgis}
                    </ul>

                </div>
            </div>
        )
    }


}

export default Profile