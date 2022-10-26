import {v1} from "uuid";
import {ActionsTypes, ProfilePageType} from "./State";

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you', like: 10},
        {id: v1(), message: 'It is my second messages', like: 1},
        {id: v1(), message: 'Hello', like: 32},
        {id: v1(), message: 'Good night', like: 13},
    ],
    newPostText: '',
}

export const profileReducer = (state=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                message: state.newPostText,
                like: 0
            }
            state.posts.push(newPost)
            return state
        case 'UPDATE-NEW-POST':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostType = ReturnType<typeof updateNewPostAC>

export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const updateNewPostAC = (newText: string) => {
    return {type: 'UPDATE-NEW-POST', newText} as const
}


