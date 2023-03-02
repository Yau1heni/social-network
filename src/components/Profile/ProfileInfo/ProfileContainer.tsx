import React from 'react';
import Profile from '../Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, ProfileInfoType, updateUserStatus} from '../../../redux/profile-reducer';
import {AppStoreType} from '../../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {getProfileData, getProfileStatus} from '../../../redux/selectors/profile-selectors';
import {getIsAuth, getUserID} from '../../../redux/selectors/auth-selectors';

type PathParamsType = {
    userID: string
}

type MapStatePropsType = {
    profile: ProfileInfoType
    status: string
    isAuth: boolean
    userID: number | null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

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
        profile: getProfileData(state),
        status: getProfileStatus(state),
        isAuth: getIsAuth(state),
        userID: getUserID(state)
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