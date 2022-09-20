import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <main className='app-wrapper-content'>
            <div>
                <img src="" alt="img"/>
            </div>
            <div>ava</div>
            <MyPosts/>
        </main>
    );
};

export default Profile;