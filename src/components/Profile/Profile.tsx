import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StorePropsType} from "../../redux/State";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: StorePropsType) => {

    return (
        <main className='app-wrapper-content'>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </main>
    );
};

export default Profile;