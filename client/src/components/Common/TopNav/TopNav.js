import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function TopNav() {
    var user = useContext(AuthContext);

    return (
        <div id="top-nav-bar">
            <div className="top-nav-bar-positioning-wrapper">
                <img id="logo" src="https://via.placeholder.com/36" />
                <Link to="/profile">
                    <div id="user-profile-nav">
                        <span>{user.currUser.firstName + " " + user.currUser.lastName}</span>
                        <img src = "https://media-exp1.licdn.com/dms/image/C5603AQHcmpKwxcuu7Q/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=5Qqcq0Zt0cfasXlM8sePrA9KTcRHFuonPoOPCXiZqw0" />
                    </div>
                </Link>
                
            </div>
        </div>
)
}
