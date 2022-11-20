import {GetItemType} from '../components/Users/UsersContainer';

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
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: false,

}

export const userReducer = (state = initialState, action: ActionType): initialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.idUser ? {...u, followed: !u.followed} : u)
            }
        case 'SET-USERS':
            return {...state, users: action.payload.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.payload.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
}

export type ActionType = FollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType

export type FollowActionType = ReturnType<typeof follow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>

export const follow = (idUser: string) => {
    return {
        type: 'FOLLOW-UNFOLLOW',
        payload: {
            idUser,
        },
    } as const
}
export const setUsers = (users: GetItemType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users,
        },
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage,
        },
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalCount,
        },
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching,
        },
    } as const
}

