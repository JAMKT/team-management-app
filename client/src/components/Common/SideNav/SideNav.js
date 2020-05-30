import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const SideNav = () => {
    var auth = useContext(AuthContext);

    const [navState, setNavState] = useState(false);

    const openNavBar = () => { setNavState(true); };
    const closeNavBar = () => { setNavState(false); };

    return (
        <nav className={`${navState ? 'side-nav-bar-opened' : 'side-nav-bar'}`}>
            <div className='side-nav-bar-positioning-wrapper'>
            {
                navState === true ? 
                    (
                        <button className="burger-btn" onClick={closeNavBar}>
                            <img src={process.env.PUBLIC_URL + '/icons/times-solid.svg'} alt="Close menu button"/>
                        </button>
                    ) :
                    (
                        <button className="burger-btn" onClick={openNavBar}>
                            <span id="burger-line-1" className="burger-line"></span>
                            <span id="burger-line-2" className="burger-line"></span>
                            <span id="burger-line-3" className="burger-line"></span>
                        </button>
                    )
            }
                <ul className="side-nav-bar-list">
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/dashboard.svg'} alt="Dashboard icons"/>
                            <span>{ navState ? 'Dashboard' : null }</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="onboarding-documentation">
                            <img src={process.env.PUBLIC_URL + '/icons/onboarding.svg'} alt="Onboarding icons"/>
                            <span>{ navState ? 'Onboarding' : null }</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/projects.svg'} alt="Projects icons"/>
                            <span>{ navState ? 'Projects' : null }</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/tasks.svg'} alt="Tasks icons"/>
                            <span>{ navState ? 'Tasks' : null }</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/calendar.svg'} alt="Calendar icons"/>
                            <span>{ navState ? 'Calendar' : null }</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/contacts.svg'} alt="Contacts icons"/>
                            <span>{ navState ? 'Contacts' : null }</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/chat.svg'} alt="Chats icons"/>
                            <span>{ navState ? 'Chats' : null }</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + '/icons/faq.svg'} alt="FAQs icons"/>
                            <span>{ navState ? 'FAQs' : null }</span>
                        </Link>
                    </li>
                </ul>
                <button id="settings-btn" onClick={() => auth.logout()}>
                    <img src={process.env.PUBLIC_URL + '/icons/logout.svg'} alt="Logout icons"/>
                    <span>{ navState ? 'Logout' : null }</span>
                </button>
            </div>
        </nav>
    )
};

export default SideNav;
