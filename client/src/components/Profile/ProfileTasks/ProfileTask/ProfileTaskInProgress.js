import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import CommentSection from '../../../Common/CommentSection/CommentSection';

const ProfileTaskInProgress = (props) => {
    return (
        <div id="profile-task_in-progress">
            <div className="row">
                <h1 className="width-100">Design profile component</h1>
                <p>Project: Team Management App</p>
            </div>
            <div className="row">
                <p>This task will be divided in three parts: </p>
                <ul>
                    <li>Design of the UI in Figma</li>
                    <li>Frontend development with React</li>
                    <li>Backend development in Node.js</li>
                </ul>
            </div>
            <div className="row">
                <p>If anyone has a question, contact <span><b>Kirsten Hansen</b></span>.</p>
            </div>
            <div className="row">
                <div>
                    <span>Deadline: May 15th</span>
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