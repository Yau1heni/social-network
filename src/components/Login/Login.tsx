import React from 'react';
import {FormDataType, ReduxLoginForm} from './LoginForm';

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );

};