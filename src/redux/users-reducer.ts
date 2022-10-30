import {v1} from "uuid";

type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type initialUsersStateType = {
    users: UsersType[]
}

const initialState = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: 'Zheka',
            status: 'I am boss',
            location: {city: 'Nemanitca', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Andrew',
            status: 'I am ghost',
            location: {city: 'Zhodzina', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Max',
            status: 'I am boss',
            location: {city: 'Barysaw', country: 'Belarus'}
        },

    ]
}

export const userReducer = (state: initialUsersStateType = initialState, action: ActionType): initialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.idUser ? {...u, followed: !u.followed} : u)
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }
}

export type ActionType = FollowActionType | SetUsersActionType
export type FollowActionType = ReturnType<typeof followedAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
//export type UnfollowActionType = ReturnType<typeof unfollowAC>

export const followedAC = (idUser: string) => {
    return {
        type: 'FOLLOW-UNFOLLOW',
        payload: {
            idUser,
        },
    } as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users,
        },
    } as const
}
/*
const unfollowAC = (idUser: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            idUser,
        },
    } as const
}*/
