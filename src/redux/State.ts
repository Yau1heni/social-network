import {v1} from "uuid";

type PostsType = {
    id: string,
    message: string,
    like: number
}
export type DialogsType = {
    id: string,
    name: string
}
type MessagesType = {
    id: string,
    message: string,
}

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type ActionsTypes = AddPostActionType | UpdateNewPostType | AddNewMessage | UpdateNewMessage
export type AppPropsType = {
    state: RootStateType
    dispatch?: (action: ActionsTypes) => void
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostType = ReturnType<typeof updateNewPostAC>
type AddNewMessage = ReturnType<typeof addNewMessageAC>
type UpdateNewMessage = ReturnType<typeof updateNewMessageAC>

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you', like: 10},
                {id: v1(), message: 'It is my second messages', like: 1},
                {id: v1(), message: 'Hello', like: 32},
                {id: v1(), message: 'Good night', like: 13},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Zheka'},
                {id: v1(), name: 'Kalyan'},
                {id: v1(), name: 'Toha'},
                {id: v1(), name: 'Igarusha'},
                {id: v1(), name: 'Max'},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Hi'},
            ],
            newMessageText: '',
        }
    },
    getState() {
        return this._state
    },
    callSubscriber() {
    },
    subscribe(observer) {
        this.callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.push(newPost)
            this.callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.newText
            this.callSubscriber()
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            let newMessage = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText
            }
            store._state.dialogsPage.messages.push(newMessage)
            this.callSubscriber()
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newMessage
            this.callSubscriber()
        }
    }
}
//const ADD_POST = 'ADD-POST'
export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const updateNewPostAC = (newText: string) => {
    return {type: 'UPDATE-NEW-POST', newText} as const
}
export const addNewMessageAC = () => {
    return {type: 'ADD-NEW-MESSAGE'} as const
}
export const updateNewMessageAC = (newMessage: string) => {
    return {type: 'UPDATE-NEW-MESSAGE', newMessage} as const
}


export default store