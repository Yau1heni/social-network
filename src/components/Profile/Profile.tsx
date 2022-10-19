import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AppPropsType} from "../../redux/State";

const Profile = (props: AppPropsType) => {

    return (
        <main className='app-wrapper-content'>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     dispatch={props.dispatch}
            />
        </main>
    );
};

export default Profile;