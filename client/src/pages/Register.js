import React from 'react'
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="screen-size container-simple" id="register">
            <div className="row heigh-100">
                <div className="heigh-100 col-fixed-300 effect">
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
                        <div className="row">
                            <div className="col col-number-fixed gutter-right">
                                <h1>1.</h1>
                            </div>
                            <div className="col">
                                <label className="register-label">Label</label>
                                <input className="register-input-field" placeholder="Placeholder" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
           
        </div>
    )
}
