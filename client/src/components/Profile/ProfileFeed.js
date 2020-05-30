import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import LiveFeed from '../Common/LiveFeed/LiveFeed';

const ProfileFeed = () => {
    // ...
    
    return (
        <div id="profile-feed" className="col card col-fixed-372">
            <div className="row justify-space-between align-items-center bottom-border">
                <h3>Activity feed</h3>
            </div>
            <div className="row">
                <LiveFeed />
            </div>
        </div>
    );
};

export default ProfileFeed;