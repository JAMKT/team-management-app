import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function SideNav() {
    var auth = useContext(AuthContext);

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
                                <img src={process.env.PUBLIC_URL + '/icons/dashboard.svg'} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to="onboarding-documentation">
                                <img src={process.env.PUBLIC_URL + '/icons/onboarding.svg'} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={process.env.PUBLIC_URL + '/icons/projects.svg'} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={process.env.PUBLIC_URL + '/icons/tasks.svg'} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/calendar.svg'} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/contacts.svg'} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/chat.svg'} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/faq.svg'} alt=""/>
                            </Link>
                        </li>
                    </ul>
                    <button id="settings-btn" onClick={() => auth.logout()}>
                    <img src={process.env.PUBLIC_URL + '/icons/logout.svg'} alt=""/>
                    </button>
                </div>
            </nav>
    )
}
