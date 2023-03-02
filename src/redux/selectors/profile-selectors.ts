import {AppStoreType} from "../redux-store";

export const getPosts = (state: AppStoreType) => {
    return state.profile.posts
}
export const getProfileData = (state: AppStoreType) => {
    return state.profile.profile
}
export const getProfileStatus = (state: AppStoreType) => {
    return state.profile.status
}