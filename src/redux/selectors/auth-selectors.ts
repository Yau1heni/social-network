import {AppStoreType} from '../redux-store';

export const getIsAuth = (state: AppStoreType) => {
    return state.auth.isAuth
}

export const getUserLogin = (state: AppStoreType) => {
    return state.auth.login
}

export const getUserID = (state: AppStoreType) => {
    return state.auth.id
}