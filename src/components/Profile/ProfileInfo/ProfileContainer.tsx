import React from 'react';
import Profile from '../Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../../redux/profile-reducer';
import {AppStoreType} from '../../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../../hoc/WithAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null | string
    status: null | string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => any
    updateUserStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<any, PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 26471;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
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
        status: state.profileReducer.status
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