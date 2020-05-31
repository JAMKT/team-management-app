import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH } from '../components/util/validator';

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
            companyName: formState.inputs.companyName.value,
            description: formState.inputs.description.value,
            owner: formState.inputs.owner.value,
            address: formState.inputs.address.value,
            workHours: formState.inputs.workHours.value,
        }

        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.post('/api/users/register', data, config)
            .then((foundUser) => {
                props.history.push('/register-success');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="screen-size" id="company-register">
            <div className="middle-floating-card">
                <div className="relative-inner-wrapper col">
                    <div className="half-out-logo justify-center">
                        <img src="https://via.placeholder.com/84" />
                    </div>
                    <div className="row justify-center">
                        <h3 className="center-text">Welcome to Title of App</h3>
                    </div>

                    <div className="row justify-center">
                        <p className="center-text">Here you can create your company account</p>
                    </div>

                    <div className="row form-wrapper">

                        <form className="col" onSubmit={onSubmitHandler}>

                            <Input
                                id="name"
                                type="text"
                                label="Company Name"
                                placeholder="Company Name"
                                errorText="Password must be at least 6 characters."
                                validator={[VALIDATOR_MAXLENGTH(256)]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />

                            <Input
                                id="email"
                                type="email"
                                label="Company Email"
                                placeholder="Company Email"
                                errorText="Please enter a valid email."
                                validator={[VALIDATOR_EMAIL()]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />
                            
                            <Input
                                id="address"
                                type="text"
                                label="Company Address"
                                placeholder="Company Address"
                                errorText="Description exceeds 256 character limit."
                                validator={[VALIDATOR_MAXLENGTH(256)]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />

                            <Input
                                id="description"
                                type="text"
                                label="Description"
                                placeholder="Description"
                                errorText="Description exceeds 256 character limit."
                                validator={[VALIDATOR_MAXLENGTH(256)]}
                                onInput={inputHandler}
                                inputStyle="text-input-field"
                            />

                            

                            <Button type="submit" 
                                btnStyle="full-width-btn primary-bg-color"
                                disabledBtn={!formState.isValid}>Register</Button>
                        </form>
                        {/* {errorMessage} */}
                    </div>

                    <div className="row">
                        <Link>Forgot your password?</Link>
                    </div>
                    <div className="row">
                        <span>Don't have a user account yet?</span>
                        <Link to="/user-register">Create a new user account here.</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
