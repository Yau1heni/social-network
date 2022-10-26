import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StorePropsType} from "../../../redux/State";

const MyPostsContainer = (props: StorePropsType) => {
    let state = props.store.getState()

    const addPost = () => {
            props.store.dispatch(addPostAC())
    }
    const onPostChange = (newText: string) => {
            props.store.dispatch(updateNewPostAC(newText))
        }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            post={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
}

export default MyPostsContainer;