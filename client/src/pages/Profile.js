import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import SideNav from '../components/Common/SideNav/SideNav';
import TopNav from '../components/Common/TopNav/TopNav';

import ProfileInfo from '../components/Profile/ProfileInfo';
import ProfileTasks from '../components/Profile/ProfileTasks';
import ProfileFeed from '../components/Profile/ProfileFeed';

export default function Profile() {
    return (
        <div id="profile">
            <div className="container">
                <div className="row">
                    <ProfileInfo />

                    <ProfileTasks />

                    <ProfileFeed />
                </div>
            </div>

            <TopNav />
            <SideNav />
        </div>
    );
}
