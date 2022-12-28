import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/TextareaControls';
import {required} from '../../utils/validators/validators';

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
                    <Field placeholder={'Login'} name={'login'}
                           type={'text'} component={Input}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'}
                           component={Input} type={'text'}
                           validate={[required]}
                    />
                </div>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    );
};


export const ReduxLoginForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm);