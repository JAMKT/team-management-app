import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';
import SearchField from '../../../Common/SearchFIeld/SearchField';

const ProfileTaskCompleted = (props) => {
    return (
        <div id="profile-task_completed">
            <div class="row">
                <SearchField/>
            </div>
            <div id="completed-tasks">
                {/* TODO: Make component for completed tasks and remove static data */}
                <div className="profile-task row">
                    <div className="profile-task_info">
                        <div className="col">
                            <p className="profile-task_info_title">Review and modify documentation</p>
                            <span className="profile-task_info_project">Project: Team Management App</span>
                        </div>
                        <div className="col">
                            <span className="profile-task_info_deadline">May 16th</span>
                            <div className="profile-task_info_members">
                                <img src="#" alt="user picture"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-task row">
                    <div className="profile-task_info">
                        <div className="col">
                            <p className="profile-task_info_title">Design File Uploader</p>
                            <span className="profile-task_info_project">Project: Team Management App</span>
                        </div>
                        <div className="col">
                            <span className="profile-task_info_deadline">May 17th</span>
                            <div className="profile-task_info_members">
                                <img src="#" alt="user picture"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileTaskCompleted;