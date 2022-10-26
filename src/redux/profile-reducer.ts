import {v1} from "uuid";
import {ActionsTypes} from "./State";

export const profileReducer = (state: any, action: ActionsTypes) => {
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


