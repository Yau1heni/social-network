import React from 'react';
import Profile from '../Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../../redux/profile-reducer';
import {AppStoreType} from '../../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../../hoc/WithAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userID: string
}

type MapStatePropsType = {
    profile: null | string
    status: null | string
    isAuth: boolean
    userID: number | null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userAuthorizedID = +this.props.match.params.userID;
        if (!userAuthorizedID) userAuthorizedID = this.props.userID as number;
        this.props.getUserProfile(userAuthorizedID);
        this.props.getUserStatus(userAuthorizedID);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        );
    }
}

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
        isAuth: state.auth.isAuth,
        userID: state.auth.id
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);