import {GetItemType} from '../components/Users/Users';

export type initialUsersStateType = {
    items: GetItemType[]
}

const initialState = {
    items: [
        {
            name: 'Zheka',
            id: '1',
            uniqueUrlName: 'Yau!',
            photos:
                {
                    small: 's',
                    large: 'l'
                },
            status: 'I am boss',
            followed: true,
        },
        {
            name: 'Kolya',
            id: '2',
            uniqueUrlName: 'Nick',
            photos:
                {
                    small: 's',
                    large: 'l'
                },
            status: 'I am boss too',
            followed: true,
        }
    ]
}

export const userReducer = (state: initialUsersStateType = initialState, action: ActionType): initialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW':
            return {
                ...state,
                items: state.items.map(u => u.id === action.payload.idUser ? {...u, followed: !u.followed} : u)
            }
        case 'SET-USERS':
            return {...state, items: [...state.items, ...action.payload.users]}
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
export const setUsersAC = (users: GetItemType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users,
        },
    } as const
}
/*
const unfollowAC = (idUser: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            idUser,
        },
    } as const
}*/
