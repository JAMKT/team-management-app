import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function OldComplexRegister() {
/*
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [jobTitle, setJobTitle] = useState(null);
    const [workHours, setWorkHours] = useState(null);
    const [nickname, setNickname] = useState(null);
    const [location, setLocation] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [companyLocation, setCompanyLocation] = useState(null);
    const [companyWorkHours, setCompanyWorkHours] = useState(null);

    const formModel = {
        personal: [
            {name: "email", label: "E-mail"},
            {name: "password", label: "Password"},
            {name: "firstName", label: "First Name"},
            {name: "lastName", label: "Last Name"},
            {name: "username", label: "Username"},
            {name: "email", label: "E-mail"},
            {name:"password", label: "Password"},
            {name: "jobTitle", label: "Job Title"}
        ],
        company: [
            {name: "name", label: "Company Name"},
            {name: "description", label: "Description"},
            {name: "owner", label: "Owner"},
            {name: "address", label: "Location"},
            {name: "email", label: "E-mail"}
        ]
    }
    function InputField() {
        return (<div className="row no-wrap">
                    <div className="col col-number-fixed gutter-right">
                        <h1>1.</h1>
                    </div>
                    <div className="col">
                        <label className="register-label">Label</label>
                        <input className="register-input-field" placeholder="Placeholder" type="text" />
                    </div>
                </div>)
    }
    */
    //Personal - Email, password, Job Title/Role, Work Hours (Part-time, Full-time) Opt: Nickname, Location/Timezone
    //Company - Company-Name, Office Location/Timezone, Regular Work hours
    //Invitation step
    return (
        <div className="screen-size container-simple" id="register">
            <div className="row heigh-100">
                <div className="heigh-100 col-fixed-300">
                    <div className="row height-50">
                        <ul className="remote-list-style field-selector-list">
                            <li>Name of field filled out</li>
                            <li>Name of field filled out</li>
                            <li>Name of field filled out</li>
                        </ul>
                    </div>
                    <div className="row height-50">
                        <div className="col justify-end">
                            <div className="row">
                                <span className="font-12">50% Completed</span>
                                <div className="progress-bar-wrapper">
                                    <div className="progress-bar"></div>
                                </div>
                            </div>
                            <div className="row justify-end">
                                <div className="button-wrapper">
                                    <button className="progress-btn"><img src="https://via.placeholder.com/16" /></button>
                                    <button className="progress-btn"><img src="https://via.placeholder.com/16" /></button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="col position-relative">
                    <div className="position-middle">
                        <InputField />
                        <InputField />
                        
                    </div>
                </div>
            </div>
            
            
           
        </div>
    )
}
