import React from 'react' 
import SideNav from '../components/Common/SideNav/SideNav';
import TopNav from '../components/Common/TopNav/TopNav';
import UserCardVertical from "../components/Common/UserCard/UserCardVertical";
import CommentSection from '../components/Common/CommentSection/CommentSection';
import LiveFeed from '../components/Common/LiveFeed/LiveFeed';

export default function Profile() {
    return (
        <div id="profile">
            <div className="container">
                <div className="row">

                    <div className="col card col-fixed-372">
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

                    <div className="col card gutter-middle">
                        <div className="row justify-space-between align-items-center bottom-border">
                            <h2>Tasks</h2>
                            <div className="tab-wrapper">
                                    <button className="tab-btn tab-active">Public</button>
                                    <button className="tab-btn tab-inactive">Private</button>
                            </div>
                        </div>
                        <div className="row justify-space-between align-items-center">
                            <div className="tab-wrapper">
                                    <button className="tab-btn tab-active">In progress</button>
                                    <button className="tab-btn tab-inactive">Upcoming</button>
                                    <button className="tab-btn tab-inactive">Completed</button>
                            </div>
                        </div>
                        <div className="row">
                                <h1 className="width-100">Task title here</h1>
                                <p>Project: Project name goes here</p>
                        </div>
                        <div className="row">
                            Task content component here... 
                        </div>
                        <div className="row">
                            If anyone has a question, contact <span><b>NAME LASTNAME</b></span>
                        </div>
                        <div className="row">
                            <div>
                                <span>Deadline: date goes here...</span>
                                <div className="progress-bar-wrapper">
                                    <div className="progress-bar"></div>
                                </div>
                            </div>
                            <div className="team-pill">
                                <div className="user-icon"></div>
                                <div className="user-icon"></div>
                                <div className="user-icon"></div>
                            </div>
                        </div>
                        <div className="row">
                            <CommentSection />
                        </div>
                        

                    </div>
                    <div className="col card col-fixed-372">
                        <div className="row justify-space-between align-items-center bottom-border">
                            <h3>Activity feed</h3>
                        </div>
                        <div className="row">
                            <LiveFeed />
                        </div>
                        
                    </div>
                </div>
            </div>

            <TopNav />
            <SideNav />
            
        </div>
    )
}
