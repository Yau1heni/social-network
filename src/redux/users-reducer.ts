import {GetItemType} from '../components/Users/UsersContainer';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

export type initialUsersStateType = {
    users: GetItemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: initialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

export const userReducer = (state = initialState, action: UsersActionType): initialUsersStateType => {
    switch (action.type) {
        case 'user/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.idUser ? {...u, followed: true} : u)
            };
        case 'user/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.idUser ? {...u, followed: false} : u)
            };
        case 'user/SET-USERS':
            return {...state, users: action.payload.users};
        case 'user/SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.currentPage};
        case 'user/SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.payload.totalCount};
        case 'user/TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.payload.isFetching};
        default:
            return state;
    }
};

export type UsersActionType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType

type FollowActionType = ReturnType<typeof follow>
type UnfollowActionType = ReturnType<typeof unfollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>

export const follow = (idUser: string) => {
    return {
        type: 'user/FOLLOW',
        payload: {
            idUser
        }
    } as const;
};
export const unfollow = (idUser: string) => {
    return {
        type: 'user/UNFOLLOW',
        payload: {
            idUser
        }
    } as const;
};
export const setUsers = (users: GetItemType[]) => {
    return {
        type: 'user/SET-USERS',
        payload: {
            users
        }
    } as const;
};
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'user/SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const;
};
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'user/SET-TOTAL-USERS-COUNT',
        payload: {
            totalCount
        }
    } as const;
};
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'user/TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const;
};

export const getUsersTC = (pageSize: number, currentPage: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(pageSize, currentPage)
            .then((data: any) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    };
};



