import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

const ProfileTaskCompleted = (props) => {
    return (
        <div id="profile-task_completed">
            COMPLETED
        </div>
    );
};

export default ProfileTaskCompleted;