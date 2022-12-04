import {ActionsTypes} from './redux-store';

type initialUsersStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: initialUsersStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action: ActionsTypes): initialUsersStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            debugger
            return {
                ...state,
                ...action.data, isAuth: true
            };

        default:
            return state;
    }
};

export type setUserDataActionType = ReturnType<typeof setUserData>

export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id,
            email,
            login
        },
    } as const;
};


