import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionType, profileReducer} from './profile-reducer';
import {AddNewMessageActionType, dialogsReducer} from './dialogs-reducer';
import {UsersActionType, userReducer} from './users-reducer';
import {authReducer, SetUserDataActionType} from './auth-reducer';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {AppActionType, appReducer} from './app-reducer';

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export type AppStoreType = ReturnType<typeof rootReducer>

export type ActionType =
    SetUserDataActionType
    | ProfileActionType
    | AddNewMessageActionType
    | UsersActionType
    | AppActionType


export type AppDispatchType = ThunkDispatch<AppStoreType, any, ActionType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
