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

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileInfoType
    status: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type setUserProfileType = ReturnType<typeof setUserProfileAC>
type setUserStatusType = ReturnType<typeof setUserStatusAC>

export type ProfileActionType = AddPostActionType
    | setUserProfileType
    | setUserStatusType

const initialState: ProfilePageType = {
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

export const profileReducer = (state = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            let newPost = {
                id: v1(),
                message: action.newText,
                like: 0
            };
            return {...state, posts: [newPost, ...state.posts]};
        }
        case 'profile/SET-USER-PROFILE': {
            return {...state, profile: action.profile};
        }
        case 'profile/SET-USER-STATUS': {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
};


export const addPostAC = (newText: string) => {
    return {type: 'profile/ADD-POST', newText} as const;
};
export const setUserProfileAC = (profile: ProfileInfoType) => {
    return {type: 'profile/SET-USER-PROFILE', profile} as const;
};
export const setUserStatusAC = (status: string) => {
    return {type: 'profile/SET-USER-STATUS', status} as const;
};

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(res => {
            dispatch(setUserProfileAC(res.data));
        });
    };
};
export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(res => {
            dispatch(setUserStatusAC(res.data));
        });
    };
};
export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatusAC(status));
            }
        });
    };
};


