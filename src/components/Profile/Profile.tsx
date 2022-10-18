import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AppPropsType} from "../../redux/State";

const Profile = (props: AppPropsType) => {

    return (
        <main className='app-wrapper-content'>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     addPostCallback={props.addPostCallback}
                     updateNewPostText={props.updateNewPostText}
            />
        </main>
    );
};

export default Profile;