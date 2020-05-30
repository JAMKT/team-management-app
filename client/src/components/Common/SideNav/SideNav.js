import React, {useContext} from 'react'
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './sideNav.scss';

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
                            <NavLink to="/" activeClassName="selected">
                                <img src={process.env.PUBLIC_URL + '/icons/dashboard.svg'} alt=""/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="onboarding-documentation" activeClassName="selected">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.57 1.19336C31.4957 0.847656 31.1539 0.505859 30.8071 0.431641C28.7948 0 27.2192 0 25.6505 0C19.1985 0 15.3293 3.45019 12.4408 8H5.92736C4.90563 8.00098 3.70507 8.74219 3.24694 9.65527L0.157226 15.8311C0.0617432 16.0417 0.00833376 16.2689 0 16.5C0.000143666 16.8978 0.158275 17.2793 0.439627 17.5606C0.720979 17.8419 1.10252 18 1.50036 18H7.98851L6.58385 19.4043C5.87353 20.1144 5.7716 21.4204 6.58385 22.2324L9.76536 25.4141C10.4626 26.1133 11.7751 26.2363 12.5952 25.4141L13.9999 24.0098V30.5C14 30.8978 14.1581 31.2793 14.4395 31.5606C14.7208 31.8419 15.1024 32 15.5002 32C15.7314 31.9914 15.9586 31.938 16.1694 31.8428L22.3399 28.7559C23.2542 28.2998 23.9967 27.0996 23.9967 26.0771V19.5498C28.534 16.6553 31.9988 12.7744 31.9988 6.35644C32.0047 4.78125 32.0047 3.20605 31.57 1.19336ZM24.0025 10.5C23.5081 10.4999 23.0248 10.3532 22.6138 10.0784C22.2027 9.8036 21.8824 9.41312 21.6933 8.95629C21.5041 8.49946 21.4547 7.99682 21.5512 7.5119C21.6478 7.02699 21.8859 6.58159 22.2356 6.23202C22.5852 5.88245 23.0307 5.64441 23.5156 5.54799C24.0006 5.45158 24.5032 5.50112 24.96 5.69036C25.4168 5.8796 25.8072 6.20003 26.0818 6.61114C26.3565 7.02225 26.5031 7.50557 26.5031 8C26.5027 8.66303 26.2391 9.29878 25.7703 9.76756C25.3014 10.2363 24.6656 10.4998 24.0025 10.5Z" fill="white"/>
                            </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="selected">
                                <img src={process.env.PUBLIC_URL + '/icons/projects.svg'} alt=""/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="selected">
                                <img src={process.env.PUBLIC_URL + '/icons/tasks.svg'} alt=""/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="selected">
                            <img src={process.env.PUBLIC_URL + '/icons/calendar.svg'} alt=""/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" activeClassName="selected">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3333 0H2.66667C1.19444 0 0 1.53571 0 3.42857V28.5714C0 30.4643 1.19444 32 2.66667 32H29.3333C30.8056 32 32 30.4643 32 28.5714V3.42857C32 1.53571 30.8056 0 29.3333 0ZM9.77778 6.85714C11.7389 6.85714 13.3333 8.90714 13.3333 11.4286C13.3333 13.95 11.7389 16 9.77778 16C7.81667 16 6.22222 13.95 6.22222 11.4286C6.22222 8.90714 7.81667 6.85714 9.77778 6.85714ZM16 23.7714C16 24.5286 15.4444 25.1429 14.7556 25.1429H4.8C4.11111 25.1429 3.55556 24.5286 3.55556 23.7714V22.4C3.55556 20.1286 5.22778 18.2857 7.28889 18.2857H7.56667C8.25 18.65 8.99444 18.8571 9.77778 18.8571C10.5611 18.8571 11.3111 18.65 11.9889 18.2857H12.2667C14.3278 18.2857 16 20.1286 16 22.4V23.7714ZM28.4444 20C28.4444 20.3143 28.2444 20.5714 28 20.5714H20C19.7556 20.5714 19.5556 20.3143 19.5556 20V18.8571C19.5556 18.5429 19.7556 18.2857 20 18.2857H28C28.2444 18.2857 28.4444 18.5429 28.4444 18.8571V20ZM28.4444 15.4286C28.4444 15.7429 28.2444 16 28 16H20C19.7556 16 19.5556 15.7429 19.5556 15.4286V14.2857C19.5556 13.9714 19.7556 13.7143 20 13.7143H28C28.2444 13.7143 28.4444 13.9714 28.4444 14.2857V15.4286ZM28.4444 10.8571C28.4444 11.1714 28.2444 11.4286 28 11.4286H20C19.7556 11.4286 19.5556 11.1714 19.5556 10.8571V9.71429C19.5556 9.4 19.7556 9.14286 20 9.14286H28C28.2444 9.14286 28.4444 9.4 28.4444 9.71429V10.8571Z" fill="white"/>
                            </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="selected">
                            <img src={process.env.PUBLIC_URL + '/icons/chat.svg'} alt=""/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="selected">
                            <img src={process.env.PUBLIC_URL + '/icons/faq.svg'} alt=""/>
                            </NavLink>
                        </li>
                    </ul>
                    <button id="settings-btn" onClick={() => auth.logout()}>
                    <img src={process.env.PUBLIC_URL + '/icons/logout.svg'} alt=""/>
                    </button>
                </div>
            </nav>
    )
}
