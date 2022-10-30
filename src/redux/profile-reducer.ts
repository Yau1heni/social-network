import {v1} from "uuid";
import {ActionsTypes} from "./redux-store";

export type PostsType = {
    id: string,
    message: string,
    like: number
}

export type InitialStatePostType = {
    posts: Array<PostsType>
    newPostText: string
}

const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you', like: 10},
        {id: v1(), message: 'It is my second messages', like: 1},
        {id: v1(), message: 'Hello', like: 32},
        {id: v1(), message: 'Good night', like: 13},
    ],
    newPostText: '',
}

export const profileReducer = (state: InitialStatePostType = initialState, action: ActionsTypes): InitialStatePostType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                like: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case 'UPDATE-NEW-POST': {
            return {...state, newPostText: action.newText}
        }

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


