import React, { Component } from 'react';
import Button from '../../common/Button/Button'
import { NavLink } from 'react-router-dom';

import './nav.css'

class Nav extends Component {
    render() {
        let { accountName, number } = this.props
        let des = "My Corgis (" + number + ")"
        return (
            <div className="wrap">
                <NavLink to="/account" ><Button description={des} /></NavLink>
                <Card accountName={accountName} />
                <NavLink to="/generation"><Button description="Generation" /></NavLink>
            </div>
        )
    }
}

export default Nav

const Card = ({ accountName }) => (
    <div className="dropdown">
        <button className="menutop">@{accountName}</button>
        <div className="dropdown-content">
            <NavLink to="/profile">Edit Profile</NavLink>
            <NavLink exact to="/">Sign Out</NavLink>
        </div>
    </div>
)