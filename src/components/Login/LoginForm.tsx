import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder={'Login'} name={'login'} type={'text'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'} type={'text'}/>
                </div>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    );
};


export const ReduxLoginForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm);