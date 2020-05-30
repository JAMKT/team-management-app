import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';
import UserCardVertical from "../Common/UserCard/UserCardVertical";

const ProfileInfo = (props) => {
    const [userInfo, setUserInfo] = useState(null);
    var userData = {};

    if(props.user){
        userData = props.user;
    }
    
    useEffect(()=>{
        if(userInfo == null ){
            setUserInfo(props.user);
        }
    });
  
    return (
        <div id="profile-info" className="col card col-fixed-372">
            <div className="row justify-end">
                <button className="edit-btn">Edit</button>
            </div>
            <UserCardVertical user={userInfo}/>
            <div className="row">
                <h3>Who am I?</h3>
            </div>
                <div className="row">
                <p>{userData.description}</p>
            </div>
            <div className="row">
                <h3>Contact information</h3>
            </div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <span>{userData.email}</span>
                    </div>
                    <div className="row">
                        <span>{userData.phoneNumber}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3>Workload</h3>
            </div>
            <div className="row">
                
                Workload Widget...
                
            </div>
        </div>
    );
};

export default ProfileInfo;