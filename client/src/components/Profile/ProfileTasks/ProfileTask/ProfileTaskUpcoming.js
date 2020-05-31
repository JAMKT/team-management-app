import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';
import SearchField from '../../../Common/SearchFIeld/SearchField';

const ProfileTaskUpcoming = (props) => {
    return (
        <div id="profile-task_upcoming">
            <div class="row">
                <SearchField/>
            </div>
            <div id="upcoming-tasks">
                {/* TODO: Make component for upcoming tasks and remove static data */}
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

                <div className="profile-task row">
                    <div className="profile-task_info">
                        <div className="col">
                            <p className="profile-task_info_title">Design Onboarding View</p>
                            <span className="profile-task_info_project">Project: Team Management App</span>
                        </div>
                        <div className="col">
                            <span className="profile-task_info_deadline">May 20th</span>
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

export default ProfileTaskUpcoming;