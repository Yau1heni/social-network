import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props: any) => {

    return (
        <main className="app-wrapper-content">
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </main>
    );
};

export default Profile;