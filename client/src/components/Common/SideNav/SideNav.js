import React, {useContext, useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './sideNav.scss';

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
                        <NavLink to="/" exact activeClassName="selected">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M12.3333 10.6667H2.33325C1.04663 10.6667 0 9.62012 0 8.33325V2.33325C0 1.04663 1.04663 0 2.33325 0H12.3333C13.6201 0 14.6667 1.04663 14.6667 2.33325V8.33325C14.6667 9.62012 13.6201 10.6667 12.3333 10.6667ZM2.33325 2C2.14941 2 2 2.14941 2 2.33325V8.33325C2 8.51733 2.14941 8.66675 2.33325 8.66675H12.3333C12.5173 8.66675 12.6667 8.51733 12.6667 8.33325V2.33325C12.6667 2.14941 12.5173 2 12.3333 2H2.33325Z" fill="white"/>
                                <path d="M12.3333 32H2.33325C1.04663 32 0 30.9534 0 29.6667V15.6667C0 14.3799 1.04663 13.3333 2.33325 13.3333H12.3333C13.6201 13.3333 14.6667 14.3799 14.6667 15.6667V29.6667C14.6667 30.9534 13.6201 32 12.3333 32ZM2.33325 15.3333C2.14941 15.3333 2 15.4827 2 15.6667V29.6667C2 29.8506 2.14941 30 2.33325 30H12.3333C12.5173 30 12.6667 29.8506 12.6667 29.6667V15.6667C12.6667 15.4827 12.5173 15.3333 12.3333 15.3333H2.33325Z" fill="white"/>
                                <path d="M29.6665 32H19.6665C18.3796 32 17.333 30.9534 17.333 29.6667V23.6667C17.333 22.3799 18.3796 21.3333 19.6665 21.3333H29.6665C30.9531 21.3333 31.9998 22.3799 31.9998 23.6667V29.6667C31.9998 30.9534 30.9531 32 29.6665 32ZM19.6665 23.3333C19.4824 23.3333 19.333 23.4827 19.333 23.6667V29.6667C19.333 29.8506 19.4824 30 19.6665 30H29.6665C29.8503 30 29.9998 29.8506 29.9998 29.6667V23.6667C29.9998 23.4827 29.8503 23.3333 29.6665 23.3333H19.6665Z" fill="white"/>
                                <path d="M29.6665 18.6667H19.6665C18.3796 18.6667 17.333 17.6201 17.333 16.3333V2.33325C17.333 1.04663 18.3796 0 19.6665 0H29.6665C30.9531 0 31.9998 1.04663 31.9998 2.33325V16.3333C31.9998 17.6201 30.9531 18.6667 29.6665 18.6667ZM19.6665 2C19.4824 2 19.333 2.14941 19.333 2.33325V16.3333C19.333 16.5173 19.4824 16.6667 19.6665 16.6667H29.6665C29.8503 16.6667 29.9998 16.5173 29.9998 16.3333V2.33325C29.9998 2.14941 29.8503 2 29.6665 2H19.6665Z" fill="white"/>
                                <rect x="19" y="1" width="11" height="16" fill="white"/>
                                <rect x="2" y="1" width="11" height="8" fill="white"/>
                                <rect x="1" y="14" width="12" height="17" fill="white"/>
                                <rect x="18" y="23" width="12" height="8" fill="white"/>
                            </svg>
                            <span>{ navState ? 'Dashboard' : null }</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="onboarding-documentation" activeClassName="selected">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M31.57 1.19336C31.4957 0.847656 31.1539 0.505859 30.8071 0.431641C28.7948 0 27.2192 0 25.6505 0C19.1985 0 15.3293 3.45019 12.4408 8H5.92736C4.90563 8.00098 3.70507 8.74219 3.24694 9.65527L0.157226 15.8311C0.0617432 16.0417 0.00833376 16.2689 0 16.5C0.000143666 16.8978 0.158275 17.2793 0.439627 17.5606C0.720979 17.8419 1.10252 18 1.50036 18H7.98851L6.58385 19.4043C5.87353 20.1144 5.7716 21.4204 6.58385 22.2324L9.76536 25.4141C10.4626 26.1133 11.7751 26.2363 12.5952 25.4141L13.9999 24.0098V30.5C14 30.8978 14.1581 31.2793 14.4395 31.5606C14.7208 31.8419 15.1024 32 15.5002 32C15.7314 31.9914 15.9586 31.938 16.1694 31.8428L22.3399 28.7559C23.2542 28.2998 23.9967 27.0996 23.9967 26.0771V19.5498C28.534 16.6553 31.9988 12.7744 31.9988 6.35644C32.0047 4.78125 32.0047 3.20605 31.57 1.19336ZM24.0025 10.5C23.5081 10.4999 23.0248 10.3532 22.6138 10.0784C22.2027 9.8036 21.8824 9.41312 21.6933 8.95629C21.5041 8.49946 21.4547 7.99682 21.5512 7.5119C21.6478 7.02699 21.8859 6.58159 22.2356 6.23202C22.5852 5.88245 23.0307 5.64441 23.5156 5.54799C24.0006 5.45158 24.5032 5.50112 24.96 5.69036C25.4168 5.8796 25.8072 6.20003 26.0818 6.61114C26.3565 7.02225 26.5031 7.50557 26.5031 8C26.5027 8.66303 26.2391 9.29878 25.7703 9.76756C25.3014 10.2363 24.6656 10.4998 24.0025 10.5Z" fill="white"/>
                            </svg>
                            <span>{ navState ? 'Onboarding' : null }</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName="selected">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M19.2 20H12.8C11.9165 20 11.2 20.8956 11.2 22V30C11.2 31.1044 11.9165 32 12.8 32H19.2C20.0835 32 20.8 31.1044 20.8 30V22C20.8 20.8956 20.0835 20 19.2 20ZM9.6 2C9.6 0.895625 8.8835 0 8 0H1.6C0.7165 0 0 0.895625 0 2V10C0 11.1044 0.7165 12 1.6 12H6.386L10.044 20.0025C10.599 18.8113 11.62 18 12.8 18H12.814L9.6 10.9694V8H20.8V4H9.6V2ZM30.4 0H24C23.1165 0 22.4 0.895625 22.4 2V10C22.4 11.1044 23.1165 12 24 12H30.4C31.2835 12 32 11.1044 32 10V2C32 0.895625 31.2835 0 30.4 0Z" fill="white"/>
                            </svg>
                            <span>{ navState ? 'Projects' : null }</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendar" activeClassName="selected">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M0 29C0 30.6562 1.53571 32 3.42857 32H28.5714C30.4643 32 32 30.6562 32 29V12H0V29ZM22.8571 16.75C22.8571 16.3375 23.2429 16 23.7143 16H26.5714C27.0429 16 27.4286 16.3375 27.4286 16.75V19.25C27.4286 19.6625 27.0429 20 26.5714 20H23.7143C23.2429 20 22.8571 19.6625 22.8571 19.25V16.75ZM22.8571 24.75C22.8571 24.3375 23.2429 24 23.7143 24H26.5714C27.0429 24 27.4286 24.3375 27.4286 24.75V27.25C27.4286 27.6625 27.0429 28 26.5714 28H23.7143C23.2429 28 22.8571 27.6625 22.8571 27.25V24.75ZM13.7143 16.75C13.7143 16.3375 14.1 16 14.5714 16H17.4286C17.9 16 18.2857 16.3375 18.2857 16.75V19.25C18.2857 19.6625 17.9 20 17.4286 20H14.5714C14.1 20 13.7143 19.6625 13.7143 19.25V16.75ZM13.7143 24.75C13.7143 24.3375 14.1 24 14.5714 24H17.4286C17.9 24 18.2857 24.3375 18.2857 24.75V27.25C18.2857 27.6625 17.9 28 17.4286 28H14.5714C14.1 28 13.7143 27.6625 13.7143 27.25V24.75ZM4.57143 16.75C4.57143 16.3375 4.95714 16 5.42857 16H8.28572C8.75714 16 9.14286 16.3375 9.14286 16.75V19.25C9.14286 19.6625 8.75714 20 8.28572 20H5.42857C4.95714 20 4.57143 19.6625 4.57143 19.25V16.75ZM4.57143 24.75C4.57143 24.3375 4.95714 24 5.42857 24H8.28572C8.75714 24 9.14286 24.3375 9.14286 24.75V27.25C9.14286 27.6625 8.75714 28 8.28572 28H5.42857C4.95714 28 4.57143 27.6625 4.57143 27.25V24.75ZM28.5714 4H25.1429V1C25.1429 0.45 24.6286 0 24 0H21.7143C21.0857 0 20.5714 0.45 20.5714 1V4H11.4286V1C11.4286 0.45 10.9143 0 10.2857 0H8C7.37143 0 6.85714 0.45 6.85714 1V4H3.42857C1.53571 4 0 5.34375 0 7V10H32V7C32 5.34375 30.4643 4 28.5714 4Z" fill="white"/>
                            </svg>
                            <span>{ navState ? 'Calendar' : null }</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" activeClassName="selected">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M29.3333 0H2.66667C1.19444 0 0 1.53571 0 3.42857V28.5714C0 30.4643 1.19444 32 2.66667 32H29.3333C30.8056 32 32 30.4643 32 28.5714V3.42857C32 1.53571 30.8056 0 29.3333 0ZM9.77778 6.85714C11.7389 6.85714 13.3333 8.90714 13.3333 11.4286C13.3333 13.95 11.7389 16 9.77778 16C7.81667 16 6.22222 13.95 6.22222 11.4286C6.22222 8.90714 7.81667 6.85714 9.77778 6.85714ZM16 23.7714C16 24.5286 15.4444 25.1429 14.7556 25.1429H4.8C4.11111 25.1429 3.55556 24.5286 3.55556 23.7714V22.4C3.55556 20.1286 5.22778 18.2857 7.28889 18.2857H7.56667C8.25 18.65 8.99444 18.8571 9.77778 18.8571C10.5611 18.8571 11.3111 18.65 11.9889 18.2857H12.2667C14.3278 18.2857 16 20.1286 16 22.4V23.7714ZM28.4444 20C28.4444 20.3143 28.2444 20.5714 28 20.5714H20C19.7556 20.5714 19.5556 20.3143 19.5556 20V18.8571C19.5556 18.5429 19.7556 18.2857 20 18.2857H28C28.2444 18.2857 28.4444 18.5429 28.4444 18.8571V20ZM28.4444 15.4286C28.4444 15.7429 28.2444 16 28 16H20C19.7556 16 19.5556 15.7429 19.5556 15.4286V14.2857C19.5556 13.9714 19.7556 13.7143 20 13.7143H28C28.2444 13.7143 28.4444 13.9714 28.4444 14.2857V15.4286ZM28.4444 10.8571C28.4444 11.1714 28.2444 11.4286 28 11.4286H20C19.7556 11.4286 19.5556 11.1714 19.5556 10.8571V9.71429C19.5556 9.4 19.7556 9.14286 20 9.14286H28C28.2444 9.14286 28.4444 9.4 28.4444 9.71429V10.8571Z" fill="white"/>
                            </svg>
                            <span>{ navState ? 'Contacts' : null }</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/chats" activeClassName="selected">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0C7.1625 0 0 6.65 0 14.8571C0 18.4 1.3375 21.6429 3.5625 24.1929C2.78125 27.7929 0.16875 31 0.1375 31.0357C0 31.2 -0.0375 31.4429 0.04375 31.6571C0.125 31.8714 0.3 32 0.5 32C4.64375 32 7.75 29.7286 9.2875 28.3286C11.3313 29.2071 13.6 29.7143 16 29.7143C24.8375 29.7143 32 23.0643 32 14.8571C32 6.65 24.8375 0 16 0ZM8 17.1429C6.89375 17.1429 6 16.1214 6 14.8571C6 13.5929 6.89375 12.5714 8 12.5714C9.10625 12.5714 10 13.5929 10 14.8571C10 16.1214 9.10625 17.1429 8 17.1429ZM16 17.1429C14.8938 17.1429 14 16.1214 14 14.8571C14 13.5929 14.8938 12.5714 16 12.5714C17.1063 12.5714 18 13.5929 18 14.8571C18 16.1214 17.1063 17.1429 16 17.1429ZM24 17.1429C22.8937 17.1429 22 16.1214 22 14.8571C22 13.5929 22.8937 12.5714 24 12.5714C25.1063 12.5714 26 13.5929 26 14.8571C26 16.1214 25.1063 17.1429 24 17.1429Z" fill="white"/>
                            </svg>
                            <span>{ navState ? 'Chats' : null }</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" activeClassName="selected">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 16C32 24.8385 24.8359 32 16 32C7.16406 32 0 24.8385 0 16C0 7.16664 7.16406 0 16 0C24.8359 0 32 7.16664 32 16ZM16.4294 5.29032C12.9134 5.29032 10.671 6.77142 8.91006 9.40374C8.68194 9.74477 8.75826 10.2047 9.08523 10.4526L11.3239 12.1501C11.6597 12.4047 12.1381 12.3441 12.399 12.0132C13.5515 10.5514 14.3418 9.70368 16.096 9.70368C17.414 9.70368 19.0443 10.5519 19.0443 11.83C19.0443 12.7962 18.2466 13.2924 16.9453 14.022C15.4276 14.8728 13.4194 15.9317 13.4194 18.5806V18.8387C13.4194 19.2663 13.766 19.6129 14.1935 19.6129H17.8065C18.234 19.6129 18.5806 19.2663 18.5806 18.8387V18.7527C18.5806 16.9165 23.9475 16.84 23.9475 11.871C23.9475 8.1289 20.0659 5.29032 16.4294 5.29032ZM16 21.2903C14.3635 21.2903 13.0323 22.6216 13.0323 24.2581C13.0323 25.8945 14.3635 27.2258 16 27.2258C17.6365 27.2258 18.9677 25.8945 18.9677 24.2581C18.9677 22.6216 17.6365 21.2903 16 21.2903Z" fill="white"/>
                            </svg>
                            <span>{ navState ? 'FAQs' : null }</span>
                        </NavLink>
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
