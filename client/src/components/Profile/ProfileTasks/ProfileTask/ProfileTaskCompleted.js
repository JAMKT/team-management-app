import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';
import SearchField from '../../../Common/SearchFIeld/SearchField';

const ProfileTaskCompleted = (props) => {
    return (
        <div id="profile-task_completed">
        
            <div className="row">
                <SearchField/>
            </div>
            <div className="row">
                <div className="col" id="completed-tasks">
                    {/* TODO: Make component for completed tasks and remove static data */}
                    <div className="profile-task row">
                        <div className="profile-task_info card card-secondary width-100">
                            <div className="row task-inner-card-border">
                                <div className="col">
                                    <h4 className="profile-task_info_title">Review and modify documentation</h4>
                                    <span className="profile-task_info_project">Project: Team Management App</span>
                                </div>
                                <div className="col">
                                    <div className="row remove-padding justify-end align-items-center height-100">
                                        <span className="profile-task_info_deadline">May 16th</span>
                                        <div className="profile-task_info_members card remove-padding gutter-s-left">
                                            <img src="https://via.placeholder.com/24" alt="user picture"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-task row">
                        <div className="profile-task_info card card-secondary width-100">
                            <div className="row task-inner-card-border">
                                <div className="col">
                                    <h4 className="profile-task_info_title">Design File Uploader</h4>
                                    <span className="profile-task_info_project">Project: Team Management App</span>
                                </div>
                                <div className="col">
                                    <div className="row remove-padding justify-end align-items-center height-100">
                                        <span className="profile-task_info_deadline">May 17th</span>
                                        <div className="profile-task_info_members card remove-padding gutter-s-left">
                                            <img src="https://via.placeholder.com/24" alt="user picture"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ProfileTaskCompleted;