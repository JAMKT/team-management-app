import React, {useContext} from 'react';
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
                        <img src = "https://avatars0.githubusercontent.com/u/35849672?s=460&u=ea1314f7bdb26663f6168e24b3f7ee53a24b9d63&v=4" />
                    </div>
                </Link>
                
            </div>
        </div>
)
}
