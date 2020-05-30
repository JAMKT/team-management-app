import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function TopNav() {
    var user = useContext(AuthContext);

    return (
        <div id="top-nav-bar">
            <div className="top-nav-bar-positioning-wrapper">
                <img id="logo" src="https://via.placeholder.com/36" />
                <Link to="/profile">
                    <div id="user-profile-nav">
                        <span>{user.currUser.firstName + " " + user.currUser.lastName}</span>
                        <img src = "https://via.placeholder.com/24" />
                    </div>
                </Link>
                
            </div>
        </div>
)
}
