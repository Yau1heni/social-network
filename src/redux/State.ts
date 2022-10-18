let rerenderTree = (state: RootStateType) => {

}

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

let state: RootStateType = {
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
}

export const addPost = (postMessage: string) => {

    let newPost = {
        id: 5,
        message: postMessage,
        like: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderTree(state)
}

export const subscribe = (observer: any) => {
    rerenderTree = observer
}

export default state