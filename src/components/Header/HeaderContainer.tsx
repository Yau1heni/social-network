import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';
import {AppStoreType} from '../../redux/redux-store';
import {getIsAuth, getUserLogin} from '../../redux/selectors/auth-selectors';

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
    getAuthUserData: () => void
}


type HeaderContainerPropsType = MapDispatchPropsType & mapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, GetAuthItemType> {
    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
    isAuth: getIsAuth(state),
    login: getUserLogin(state)
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
