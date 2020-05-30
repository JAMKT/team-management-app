import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import ProfileTaskInProgress from './ProfileTask/ProfileTaskInProgress';
import ProfileTaskUpcoming from './ProfileTask/ProfileTaskUpcoming';
import ProfileTaskCompleted from './ProfileTask/ProfileTaskCompleted';

const ProfileTask = (props) => {
    const [task, setTask] = useState(null);
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    // TODO: get current task
    // TODO: get upcoming tasks
    // TODO: get completed tasks

    return (
        <div id="profile-task">
            {
                props.status === "In Progress" ?
                    (
                        <ProfileTaskInProgress task={task}/>
                    ) : props.status === "Upcoming" ?
                    (
                        <ProfileTaskUpcoming upcomingTasks={upcomingTasks}/>
                    ) : (
                        <ProfileTaskCompleted completedTasks={completedTasks}/>
                    )
            }
        </div>
    );
};

export default ProfileTask;