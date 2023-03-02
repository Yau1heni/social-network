import {AppStoreType} from '../redux-store';

export const getDialogs = (state: AppStoreType) => {
    return state.dialogs.dialogs
}
export const getMessages = (state: AppStoreType) => {
    return state.dialogs.messages
}