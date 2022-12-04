import {combineReducers, createStore} from 'redux';
import {AddPostActionType, profileReducer, setUserProfileType, UpdateNewPostType} from './profile-reducer';
import {AddNewMessage, dialogsReducer, UpdateNewMessage} from './dialogs-reducer';
import {userReducer} from './users-reducer';
import {authReducer, setUserDataActionType} from './auth-reducer';

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    userReducer,
    auth: authReducer,
})

export type ActionsTypes = AddPostActionType
    | UpdateNewPostType
    | AddNewMessage
    | UpdateNewMessage
    | setUserProfileType
    | setUserDataActionType

export type AppStoreType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store
