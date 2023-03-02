import React from 'react';
import {addPostAC, PostsType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStoreType} from '../../../redux/redux-store';
import {getPosts} from '../../../redux/selectors/profile-selectors';
import {getIsAuth} from '../../../redux/selectors/auth-selectors';

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
        posts: getPosts(state),
        isAuth: getIsAuth(state)
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