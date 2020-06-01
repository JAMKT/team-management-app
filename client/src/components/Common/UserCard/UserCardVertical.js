import React from 'react'
import Pill from '../Pill/Pill';

export default function UserCardVertical(props) {
    var userData = {};

    if(props.user){
        userData = props.user;
    }

    return (
        <div className="row">
            <div className="col">
                <div className="row justify-center ">
                    <img className="user-profile-pic" src="https://avatars0.githubusercontent.com/u/35849672?s=460&u=ea1314f7bdb26663f6168e24b3f7ee53a24b9d63&v=4" />
                </div>
                <div className="row justify-center">
                    <h3>{userData.username}</h3>     
                </div>
                 <div className="row justify-center">
                    <span>{userData.firstName + " " +userData.lastName}</span>
                </div>
                <div className="row justify-center">
                    <Pill />
                </div>
                <div className="row">
                        <div className="col">
                            <div className="row">
                                <span>{userData.location}</span>
                            </div>
                            <div className="row">
                                <span>{userData.workHours}</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
