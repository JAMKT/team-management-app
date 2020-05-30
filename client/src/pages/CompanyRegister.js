import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from '../components/util/validator';

import Input from '../components/Common/FormElements/Input';
import Button from '../components/Common/Button/Button';

import { useForm } from '../components/hooks/formHook';
import { AuthContext } from '../components/context/authContext';

export default function CompanyRegister(props) {

    const auth = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [formState, inputHandler] = useForm({
        companyName: {

        },
        description:{
            
        },
        owner: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        },
        workHours: {

        }
    }, {
        isValid: false
    });


    const onSubmitHandler = (event) => {
        event.preventDefault();

        const data = {
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
        }

        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.post('/api/users/register', data, config)
            .then((foundUser) => {
                
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="screen-size" id="login">
            <h1>Under development</h1>
            <div className="middle-floating-card">
                <div className="relative-inner-wrapper col">
                    <div className="half-out-logo justify-center">
                        <img src="https://via.placeholder.com/84" />
                    </div>
                    <div className="row justify-center">
                        <h3 className="center-text">Welcome to Title of App</h3>
                    </div>

                    <div className="row justify-center">
                        <p className="center-text">Short Description</p>
                    </div>

                    <div className="row form-wrapper">

                        <form className="col" onSubmit={onSubmitHandler}>
                            <Input
                                id="email"
                                type="email"
                                label="Email"
                                placeholder="Email"
                                errorText="Please enter a valid email."
                                validator={[VALIDATOR_EMAIL()]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />

                            <Input
                                id="password"
                                type="password"
                                label="Password"
                                placeholder="Password"
                                errorText="Password must be at least 6 characters."
                                validator={[VALIDATOR_MINLENGTH(6)]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />

                            <Button type="submit" 
                                btnStyle="full-width-btn primary-bg-color"
                                disabledBtn={!formState.isValid}>Sign In</Button>
                        </form>
                        {/* {errorMessage} */}
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
