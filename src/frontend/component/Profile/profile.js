import React from 'react'
import { Redirect } from 'react-router-dom';

const Profile = (props) => { 
    if(!props.login) {return <Redirect to="/" />}
    return (<div>This is Profile page!</div>)
    
}

export default Profile