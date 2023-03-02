import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

export type PostsType = {
    id: string,
    message: string,
    like: number
}

export type ProfileInfoType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type InitialStatePostType = {
    posts: Array<PostsType>
    profile: ProfileInfoType
    status: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setUserStatusType = ReturnType<typeof setUserStatus>

export type ProfileActionType = AddPostActionType
    | setUserProfileType
    | setUserStatusType

const initialState: InitialStatePostType = {
    posts: [
        {id: v1(), message: 'Hi, how are you', like: 10},
        {id: v1(), message: 'It is my second messages', like: 1},
        {id: v1(), message: 'Hello', like: 32},
        {id: v1(), message: 'Good night', like: 13}
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
};

export const profileReducer = (state = initialState, action: ProfileActionType): InitialStatePostType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: v1(),
                message: action.newText,
                like: 0
            };
            return {...state, posts: [newPost, ...state.posts]};
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile};
        }
        case 'SET-USER-STATUS': {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
};


export const addPostAC = (newText: string) => {
    return {type: 'ADD-POST', newText} as const;
};
export const setUserProfile = (profile: ProfileInfoType) => {
    return {type: 'SET-USER-PROFILE', profile} as const;
};
export const setUserStatus = (status: string) => {
    return {type: 'SET-USER-STATUS', status} as const;
};

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(res => {
            dispatch(setUserProfile(res.data));
        });
    };
};
export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(res => {
            dispatch(setUserStatus(res.data));
        });
    };
};
export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    };
};


