import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNav() {
    return (
        <div id="top-nav-bar">
            <div className="top-nav-bar-positioning-wrapper">
                <img id="logo" src="https://via.placeholder.com/36" />
                <Link to="/profile">
                    <div id="user-profile-nav">
                        <span>Vardene Pavardene</span>
                        <img src = "https://via.placeholder.com/24" />
                    </div>
                </Link>
                
            </div>
        </div>
)
}
