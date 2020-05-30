import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="screen-size" id="login">
            <div className="middle-floating-card">

                <div className="relative-inner-wrapper col">
                    <div className="half-out-logo justify-center">
                        <img src="https://via.placeholder.com/84" />
                    </div>
                    <div className="row justify-center">
                        <h3 className="center-text">Title of App</h3>
                    </div>
                    
                    <div className="row justify-center">
                        <p className="center-text">Short Description</p>
                    </div>
                    
                    <div className="row form-wrapper">
                        <form className="col">
                            <label for="email">E-mail</label>
                            <input className="text-input-field" placeholder="E-mail" type="text" />
                            <label for="password">Password</label>
                            <input className="text-input-field" placeholder="Password" type="password" />
                            <button className="full-width-btn primary-bg-color">Sign In</button>
                        </form>
                    </div>
                    
                    <div className="row">
                        <Link>Forgot your password?</Link>
                    </div>
                    <div className="row">
                        <span>Don't have a company account?</span>
                        <Link>Create an company account here</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
