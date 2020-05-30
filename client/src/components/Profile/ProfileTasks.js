import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import CommentSection from '../Common/CommentSection/CommentSection';

const ProfileTasks = () => {
    // ...

    return (
        <div id="profile-tasks" className="col card gutter-middle">
            <div className="row justify-space-between align-items-center bottom-border">
                <h2>Tasks</h2>
                <div className="tab-wrapper">
                        <button className="tab-btn tab-active">Public</button>
                        <button className="tab-btn tab-inactive">Private</button>
                </div>
            </div>
            <div className="row justify-space-between align-items-center">
                <div className="tab-wrapper">
                        <button className="tab-btn tab-active">In progress</button>
                        <button className="tab-btn tab-inactive">Upcoming</button>
                        <button className="tab-btn tab-inactive">Completed</button>
                </div>
            </div>
            <div className="row">
                    <h1 className="width-100">Task title here</h1>
                    <p>Project: Project name goes here</p>
            </div>
            <div className="row">
                Task content component here... 
            </div>
            <div className="row">
                If anyone has a question, contact <span><b>NAME LASTNAME</b></span>
            </div>
            <div className="row">
                <div>
                    <span>Deadline: date goes here...</span>
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar"></div>
                    </div>
                </div>
                <div className="team-pill">
                    <div className="user-icon"></div>
                    <div className="user-icon"></div>
                    <div className="user-icon"></div>
                </div>
            </div>
            <div className="row">
                <CommentSection />
            </div>
        </div>
    );
};

export default ProfileTasks;