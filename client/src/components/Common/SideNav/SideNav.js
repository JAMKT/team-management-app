import React from 'react'
import { Link } from 'react-router-dom';

export default function SideNav() {
    return (
        <nav id="side-nav-bar">
                <div className="side-nav-bar-positioning-wrapper">
                    <button id="burger-btn">
                        <span id="burger-line-1" className="burger-line"></span>
                        <span id="burger-line-2" className="burger-line"></span>
                        <span id="burger-line-3" className="burger-line"></span>
                    </button>
                    <ul className="side-nav-bar-list">
                        <li>
                            <Link>
                                <img src="https://via.placeholder.com/32" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="https://via.placeholder.com/32" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="https://via.placeholder.com/32" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="https://via.placeholder.com/32" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="https://via.placeholder.com/32" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="https://via.placeholder.com/32" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="https://via.placeholder.com/32" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="https://via.placeholder.com/32" />
                            </Link>
                        </li>
                    </ul>
                    <button id="settings-btn">
                        <img src="https://via.placeholder.com/32" />
                    </button>
                </div>
            </nav>
    )
}
