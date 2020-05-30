import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import CommentSection from '../../../Common/CommentSection/CommentSection';

const ProfileTaskInProgress = (props) => {
    return (
        <div id="profile-task_in-progress">
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

export default ProfileTaskInProgress;