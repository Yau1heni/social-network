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
export type AppPropsType = {
    state: RootStateType
    addPostCallback?: (postMessage: string) => void
    updateNewPostText?: (newText: string) => void
}


let store = {
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
    addPost(postMessage: string) {
        let newPost = {
            id: 5,
            message: postMessage,
            like: 0
        }
        this._state.profilePage.posts.push(newPost)
        this.callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.callSubscriber()
    },
    subscribe(observer: ()=>void) {
        this.callSubscriber = observer
    }
}

export default store