type PostsType = {
    id: number,
    message: string,
    like: number
}
type DialogsType = {
    id: number,
    name: string
}
type MessagesType = {
    id: number,
    message: string,
}

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type ActionsTypes = AddPostActionType | UpdateNewPostType
export type AppPropsType = {
    state: RootStateType
    dispatch?: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: 'ADD-POST'

}
type UpdateNewPostType = {
    type: 'UPDATE-NEW-POST'
    newText: string
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
                {id: 1, message: 'Hi, how are you', like: 10},
                {id: 2, message: 'It is my second messages', like: 1},
                {id: 3, message: 'Hello', like: 32},
                {id: 4, message: 'Good night', like: 13},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Zheka'},
                {id: 2, name: 'Kalyan'},
                {id: 3, name: 'Toha'},
                {id: 4, name: 'Igarusha'},
                {id: 5, name: 'Max'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Hi'},
            ]
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
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.push(newPost)
            this.callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.newText
            this.callSubscriber()
        }
    }
}

export default store