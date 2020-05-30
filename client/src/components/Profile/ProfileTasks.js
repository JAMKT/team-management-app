import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import ProfileTask from './ProfileTasks/ProfileTask';

const ProfileTasks = (props) => {
    const [mode, setMode] = useState('Public');
    const [status, setStatus] = useState('In Progress');
    
    const setPrivacyMode = (e) => {
        setMode(e.target.value);
    };

    const setTaskStatus = (e) => {
        setStatus(e.target.value);
    };



    return (
        <div id="profile-tasks" className="col card gutter-middle">
            <div className="row justify-space-between align-items-center bottom-border">
                <h2>Tasks</h2>

                <div className="tab-wrapper">
                    <input type="button" id="task-public" value="Public" className="tab-btn tab-active" onClick={setPrivacyMode} />
                    <input type="button" id="task-private" value="Private" className="tab-btn tab-inactive" onClick={setPrivacyMode} />
                </div>
            </div>
            <div className="row justify-space-between align-items-center">
                <div className="tab-wrapper">
                    <input type="button" id="task-in-progress" value="In Progress" className="tab-btn tab-active" onClick={setTaskStatus} />
                    <input type="button" id="task-upcoming" value="Upcoming" className="tab-btn tab-inactive" onClick={setTaskStatus} />
                    <input type="button" id="task-completed" value="Completed" className="tab-btn tab-inactive" onClick={setTaskStatus} />
                </div>
            </div>
            
            <ProfileTask 
                privacyMode={mode}
                status={status}
            ></ProfileTask>
        </div>
    );
};

export default ProfileTasks;