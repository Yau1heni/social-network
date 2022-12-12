import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';
import {AppStoreType} from '../../redux/redux-store';

export type GetAuthItemType = {
    data: {
        id: number
        email: string
        login: string
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    getAuthUserData: () => any
}


type HeaderContainerPropsType = MapDispatchPropsType & mapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, GetAuthItemType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
