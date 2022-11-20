import {combineReducers, createStore} from 'redux';
import {AddPostActionType, profileReducer, setUserProfileType, UpdateNewPostType} from './profile-reducer';
import {AddNewMessage, dialogsReducer, UpdateNewMessage} from './dialogs-reducer';
import {userReducer} from './users-reducer';

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    userReducer,
})

export type ActionsTypes = AddPostActionType
    | UpdateNewPostType
    | AddNewMessage
    | UpdateNewMessage
    | setUserProfileType

export type AppStoreType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store
