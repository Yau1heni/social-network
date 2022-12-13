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

export const userReducer = (state = initialState, action: ActionType): initialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.idUser ? {...u, followed: true} : u)
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.idUser ? {...u, followed: false} : u)
            };
        case 'SET-USERS':
            return {...state, users: action.payload.users};
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.currentPage};
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.payload.totalCount};
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.payload.isFetching};
        default:
            return state;
    }
};

export type ActionType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType

export type FollowActionType = ReturnType<typeof follow>
export type UnfollowActionType = ReturnType<typeof unfollow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>

export const follow = (idUser: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            idUser
        }
    } as const;
};
export const unfollow = (idUser: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            idUser
        }
    } as const;
};
export const setUsers = (users: GetItemType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const;
};
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const;
};
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalCount
        }
    } as const;
};
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const;
};

export const getUsersTC = (pageSize:number, currentPage: number) => {
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



