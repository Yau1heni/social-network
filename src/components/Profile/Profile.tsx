import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {

    return (
        <main className='app-wrapper-content'>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    );
};

export default Profile;