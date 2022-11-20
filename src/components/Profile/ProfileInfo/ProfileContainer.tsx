import React from 'react';
import Profile from '../Profile';
import {AxiosResponse, default as axios} from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../../redux/profile-reducer';
import {AppStoreType} from '../../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<any, PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res: AxiosResponse) => {
                this.props.setUserProfile(res.data)
                console.log(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        profile: state.profileReducer.profile
    }
}

let WithUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainer);