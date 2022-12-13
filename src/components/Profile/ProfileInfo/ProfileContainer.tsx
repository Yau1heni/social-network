import React from 'react';
import Profile from '../Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../../redux/profile-reducer';
import {AppStoreType} from '../../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../../hoc/WithAuthRedirect';

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => any
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<any, PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        profile: state.profileReducer.profile
    };
};

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const WithUrlDataContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainer);