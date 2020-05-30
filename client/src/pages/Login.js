import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from '../components/util/validator';

import Input from '../components/Common/FormElements/Input';
import Button from '../components/Common/Button/Button';

import { useForm } from '../components/hooks/formHook';
import { AuthContext } from '../components/context/authContext';

const Login = (props) => {
    const auth = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        {
            isValid: false
        }
    );

    useEffect(() => {
        if (auth.loggedIn === true) {
            props.history.push('/profile');
        }
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

        axios.post('/api/users/login', data, config)
            .then((foundUser) => {
                if (foundUser.data.success === false) {
                    setError(true);
                }

                if (foundUser.data.foundUser) {
                    auth.login(foundUser.data.foundUser);
                    props.history.push('/profile');
                } else {
                    props.history.push('/login');
                }
            })
            .catch(err => console.log(err));
    }

    // let errorMessage =
    //     error === true ? (
    //         <Popup clearPopupState={() => clearPopuState()}>
    //             <h3>Login failed</h3>
    //             <p>Incorrect email or password.</p>
    //         </Popup>) : null;

    // Clear Popup state function for when the Popup is closed
    // const clearPopuState = () => {
    //     setError(null);
    // }

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
                        <form className="col" onSubmit={onSubmitHandler}>
                            <Input
                                id="email"
                                type="email"
                                label="Email"
                                placeholder="Email"
                                errorText="Please enter an email in format: 
                                example@example.com"
                                validator={[VALIDATOR_EMAIL()]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                                errorStyle="error-border"
                                inputContainerStyle="input-container"
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
                                errorStyle="error-border"
                                inputContainerStyle="input-container"
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

export default Login;
