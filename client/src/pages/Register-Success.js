import React from 'react'
import { Link } from "react-router-dom";

export default function RegisterSuccess() {
    return (
        <div className="screen-size">
            <div className="middle-floating-card card">
                <div className="row justify-center">
                    <h2>Registration Success</h2>                    
                </div>
                <div className="row justify-center">
                    <Link to="/login"><button className="full-width-btn primary-bg-color">Proceed to Login</button></Link>
                </div>
            </div>
        </div>
    )
}
