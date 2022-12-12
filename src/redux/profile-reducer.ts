import {v1} from 'uuid';
import {ActionsTypes} from './redux-store';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

export type PostsType = {
    id: string,
    message: string,
    like: number
}

export type InitialStatePostType = {
    posts: Array<PostsType>
    newPostText: string
    profile: any
}

const initialState: InitialStatePostType = {
    posts: [
        {id: v1(), message: 'Hi, how are you', like: 10},
        {id: v1(), message: 'It is my second messages', like: 1},
        {id: v1(), message: 'Hello', like: 32},
        {id: v1(), message: 'Good night', like: 13}
    ],
    newPostText: '',
    profile: null
};

export const profileReducer = (state = initialState, action: ActionsTypes): InitialStatePostType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                like: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        }
        case 'UPDATE-NEW-POST': {
            return {...state, newPostText: action.newText};
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
};

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostType = ReturnType<typeof updateNewPostAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>

export const addPostAC = () => {
    return {type: 'ADD-POST'} as const;
};
export const updateNewPostAC = (newText: string) => {
    return {type: 'UPDATE-NEW-POST', newText} as const;
};
export const setUserProfile = (profile: any) => {
    return {type: 'SET-USER-PROFILE', profile} as const;
};

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(res => {
            dispatch(setUserProfile(res.data));
        });
    };
};


