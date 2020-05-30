import React, { useState, useCallback, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import { AuthContext } from '../components/context/authContext';
import SideNav from '../components/Common/SideNav/SideNav';
import TopNav from '../components/Common/TopNav/TopNav';

import ProfileInfo from '../components/Profile/ProfileInfo';
import ProfileTasks from '../components/Profile/ProfileTasks';
import ProfileFeed from '../components/Profile/ProfileFeed';

export default function Profile(props) {
    const auth = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (auth.currUser === false) {
            props.history.push('/login')
        }
        else if(userInfo == null ){
            getUserInfo();
        }
    });

    const getUserInfo = () => {
        axios.get('/api/users/current-user')
        .then(user => {
            setUserInfo(user.data);
        })
        .catch(err => console.log(err));
    };

    return (
        <div id="profile">
            <div className="container">
                <div className="row">
                    <ProfileInfo user={userInfo} />

                    <ProfileTasks />

                    <ProfileFeed />
                </div>
            </div>

            <TopNav />
            <SideNav />
        </div>
    );
}
