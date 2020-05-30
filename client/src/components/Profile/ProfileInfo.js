import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import UserCardVertical from "../Common/UserCard/UserCardVertical";

const ProfileInfo = () => {
    return (
        <div id="profile-info" className="col card col-fixed-372">
            <div className="row justify-end">
                <button className="edit-btn">Edit</button>
            </div>
            <UserCardVertical />
            <div className="row">
                <h3>Who am I?</h3>
            </div>
                <div className="row">
                <p>text here</p>
            </div>
            <div className="row">
                <h3>Contact information</h3>
            </div>
            <div className="row">
                Icon text goes here
            </div>
            <div className="row">
                <h3>Workload</h3>
            </div>
            <div className="row">
                
                Workload thingy here...
                
            </div>
        </div>
    );
};

export default ProfileInfo;