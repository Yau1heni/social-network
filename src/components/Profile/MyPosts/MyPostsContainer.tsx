import React from 'react';
import {addPostAC, PostsType, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStoreType} from "../../../redux/redux-store";

type MapStatePropsType = {
    posts: Array<PostsType>
    isAuth: boolean
}

type MapDispatchPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void

}

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        posts: state.profileReducer.posts,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;