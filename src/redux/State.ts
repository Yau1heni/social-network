import {v1} from "uuid";
import {profileReducer, AddPostActionType, UpdateNewPostType} from "./profile-reducer";
import {dialogsReducer, AddNewMessage, UpdateNewMessage} from "./dialogs-reducer";

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
export type ActionsTypes = AddPostActionType | UpdateNewPostType |AddNewMessage | UpdateNewMessage

export type AppPropsType = {
    state: RootStateType
    dispatch?: (action: ActionsTypes) => void
}

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this.callSubscriber()
    }
}

export default store