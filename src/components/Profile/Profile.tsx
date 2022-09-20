import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <main className='app-wrapper-content'>
            <ProfileInfo/>
            <MyPosts/>
        </main>
    );
};

export default Profile;