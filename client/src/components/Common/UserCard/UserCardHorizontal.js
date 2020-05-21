import React from 'react'
import Pill from '../Pill/Pill';

export default function UserCardHorizontal() {
    return (
        <div className="row">
            <div className="col user-profile-col-fixed gutter-right">
                <img className="user-profile-pic" src="https://via.placeholder.com/84" />
            </div>
            <div className="col">
                <h3 className="">Name of User</h3>     
                <span>@name</span>
                <Pill />
            </div>
        </div>
    )
}
