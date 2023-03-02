import {AppStoreType} from '../redux-store';

export const getUsers = (state: AppStoreType) => {
    return state.user.users
}

export const getPageSize = (state: AppStoreType) => {
    return state.user.pageSize
}

export const getCurrentPage = (state: AppStoreType) => {
    return state.user.currentPage
}

export const getTotalUsersCount = (state: AppStoreType) => {
    return state.user.totalUsersCount
}

export const getUsersIsFetching = (state: AppStoreType) => {
    return state.user.isFetching
}