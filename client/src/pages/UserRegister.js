import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH } from '../components/util/validator';

import Input from '../components/Common/FormElements/Input';
import Button from '../components/Common/Button/Button';

import { useForm } from '../components/hooks/formHook';
import { AuthContext } from '../components/context/authContext';

export default function UserRegister(props) {

    const auth = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [formState, inputHandler] = useForm({
        email: {

        },
        password:{
            
        },
        firstName: {
            value: '',
            isValid: false
        },
        lastName: {
            value: '',
            isValid: false
        },
        username: {

        },
        jobTitle: {

        }
    }, {
        isValid: false
    });


    const onSubmitHandler = (event) => {
        event.preventDefault();

        const data = {
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            firstName: formState.inputs.firstName.value,
            lastName: formState.inputs.lastName.value,
            username: formState.inputs.username.value,
            jobTitle: formState.inputs.jobTitle.value
            
        }

        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.post('/api/users/register', data, config)
            .then((foundUser) => {
                //Need some sort of verification that the user was successfully registered and or success message
                props.history.push('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="screen-size" id="register">
            <div className="middle-floating-card">
                <div className="relative-inner-wrapper col">
                    <div className="half-out-logo justify-center">
                        <img src="https://via.placeholder.com/84" />
                    </div>
                    <div className="row justify-center">
                        <h3 className="center-text">Welcome to Title of App</h3>
                    </div>

                    <div className="row justify-center">
                        <p className="center-text">Here you can register as a user for "Title of app"</p>
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
                            <div className="row top-margin-m">
                                    <h4>Profile information is optional...</h4>
                            </div>
                            <Input
                                id="firstName"
                                type="text"
                                label="First Name"
                                placeholder="First Name"
                                errorText="Name can't exceed 256 characters"
                                validator={[VALIDATOR_MAXLENGTH(256)]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />
                            <Input
                                id="lastName"
                                type="text"
                                label="Last Name"
                                placeholder="Last Name"
                                errorText="Name can't exceed 256 characters"
                                validator={[VALIDATOR_MAXLENGTH(256)]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />
                            <Input
                                id="username"
                                type="text"
                                label="Username"
                                placeholder="Username"
                                errorText="Password must be at least 6 characters."
                                validator={[VALIDATOR_MINLENGTH(6)]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />
                            <Input
                                id="jobTitle"
                                type="text"
                                label="Job Title"
                                placeholder="Job Title"
                                errorText="Password must be at least 6 characters."
                                validator={[VALIDATOR_MINLENGTH(6)]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />

                            <Button type="submit" 
                                btnStyle="full-width-btn primary-bg-color"
                                disabledBtn={!formState.isValid}>Register</Button>
                        </form>
                        {/* {errorMessage} */}
                    </div>

                </div>
            </div>
        </div>
    )
}
