import React from 'react'
import Pill from '../Pill/Pill';

export default function UserCardVertical() {
    return (
        <div className="row">
            <div className="col">
                <div className="row justify-center ">
                    <img className="user-profile-pic" src="https://via.placeholder.com/84" />
                </div>
                <div className="row justify-center">
                    <h3>Name of User</h3>     
                </div>
                 <div className="row justify-center">
                    <span>@name</span>
                </div>
                <div className="row justify-center">
                    <Pill />
                </div>
                <div className="row">
                        Icon texts go here
                </div>
            </div>
        </div>
    )
}
