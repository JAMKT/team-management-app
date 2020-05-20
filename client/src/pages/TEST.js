import React from 'react'

export default function TEST() {
    return (
        <div className="container">
            <nav id="side-nav-bar">
                <div className="side-nav-bar-positioning-wrapper">
                    <button id="burger-btn">
                        <span id="burger-line-1" className="burger-line"></span>
                        <span id="burger-line-2" className="burger-line"></span>
                        <span id="burger-line-3" className="burger-line"></span>
                    </button>
                    <ul className="side-nav-bar-list">
                        <li>
                            <img src="https://via.placeholder.com/32" />
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/32" />
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/32" />
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/32" />
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/32" />
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/32" />
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/32" />
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/32" />
                        </li>
                    </ul>
                    <button id="settings-btn">
                        <img src="https://via.placeholder.com/32" />
                    </button>
                </div>
            </nav>

            <div id="top-nav-bar">
                <div className="top-nav-bar-positioning-wrapper">
                    <img id="logo" src="https://via.placeholder.com/36" />
                    <div id="user-profile-nav">
                        <span>Vardene Pavardene</span>
                        <img src = "https://via.placeholder.com/24" />
                    </div>
                </div>
            </div>
        </div>
    )
}
