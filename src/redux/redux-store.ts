import {combineReducers, createStore} from "redux";
import {AddPostActionType, profileReducer, UpdateNewPostType} from "./profile-reducer";
import {AddNewMessage, dialogsReducer, UpdateNewMessage} from "./dialogs-reducer";

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer
})


export type ActionsTypes = AddPostActionType | UpdateNewPostType | AddNewMessage | UpdateNewMessage
export type AppStoreType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store
