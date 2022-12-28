import React from 'react';
import {addPostAC, PostsType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStoreType} from '../../../redux/redux-store';

type MapStatePropsType = {
    posts: Array<PostsType>
    isAuth: boolean
}

type MapDispatchPropsType = {
    addPost: (newText: string) => void
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
        addPost: (newText: string) => {
            dispatch(addPostAC(newText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;