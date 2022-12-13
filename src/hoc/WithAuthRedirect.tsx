import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStoreType} from '../redux/redux-store';


type MapStateRedirectPropsType = {
    isAuth: boolean
}


const mapStateToPropsForRedirect = (state: AppStoreType): MapStateRedirectPropsType => {
    return {
        isAuth: state.auth.isAuth
    };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateRedirectPropsType) => {
        let {isAuth, ...restProps} = props;
        return isAuth ? <Component {...restProps as T}/> : <Redirect to={'/login'}/>;
    };
    return connect(mapStateToPropsForRedirect)(RedirectComponent);

}