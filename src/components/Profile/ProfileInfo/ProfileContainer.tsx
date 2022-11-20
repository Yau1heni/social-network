import React from 'react';
import Profile from '../Profile';
import {AxiosResponse, default as axios} from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../../redux/profile-reducer';
import {AppStoreType} from '../../../redux/redux-store';

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: AppStoreType) => {
    return {
        profile: state.profileReducer.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);