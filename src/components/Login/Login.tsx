import React, {FC} from 'react';
import {connect} from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStoreType} from '../../redux/redux-store';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/TextareaControls';
import {required} from '../../utils/validators/validators';
import s from './Login.module.css';
import {getIsAuth} from '../../redux/selectors/auth-selectors';

type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        isAuth: getIsAuth(state)
    };
};

const Login: FC<LoginPropsType> = ({isAuth, loginTC}) => {
    const onSubmit = (formData: FormDataType) => {
        loginTC(formData.email, formData.password, formData.rememberMe);
    };

    if (isAuth) {
        return <Redirect to={'/profile'}/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );

};

export default connect(mapStateToProps, {loginTC})(Login);

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({error, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Field placeholder={'Login'} name={'email'}
                           type={'text'} component={Input}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'}
                           component={Input} type={'password'}
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
            {error && <div className={s.error}> {error} </div>}
        </form>
    );
};


export const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);