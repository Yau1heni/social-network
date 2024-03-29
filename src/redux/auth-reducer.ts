import {Dispatch} from 'redux';
import {authMe} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {FormAction, stopSubmit} from 'redux-form';

type initialLoginStateType = {
    id: number | null,
    email: string
    login: string
    isAuth: boolean
}

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>

const initialState: initialLoginStateType = {
    id: null,
    login: '',
    email: '',
    isAuth: false
};

export const authReducer = (state = initialState, action: SetUserDataActionType): initialLoginStateType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => {
    return {
        type: 'auth/SET-USER-DATA',
        payload: {id, login, email, isAuth}
    } as const;
};

export const getAuthUserData = () => {
    return (dispatch: Dispatch<SetUserDataActionType>) => {
        authMe.me().then(res => {
            if (res.resultCode === 0) {
                let {id, login, email} = res.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
    };
};

export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: ThunkDispatch<initialLoginStateType, any, SetUserDataActionType | FormAction>) => {
        authMe.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                if (res.data.messages.length > 0) dispatch(stopSubmit('login', {_error: res.data.messages[0]}));
            }
        });
    };
};


