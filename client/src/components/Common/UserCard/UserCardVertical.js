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
                    <img className="user-profile-pic" src="https://media-exp1.licdn.com/dms/image/C5603AQHcmpKwxcuu7Q/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=5Qqcq0Zt0cfasXlM8sePrA9KTcRHFuonPoOPCXiZqw0" />
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
