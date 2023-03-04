import {getAuthUserData} from './auth-reducer';
import {AppDispatchType} from './redux-store';

export type AppActionType = ReturnType<typeof setInitializedSuccessAC>

const initState = {
    initialized: false
}
type AppDataType = typeof initState

export const appReducer = (state: AppDataType = initState, action: AppActionType): AppDataType => {
    switch (action.type) {
        case 'app/SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitializedSuccessAC = () => {
    return {type: 'app/SET-INITIALIZED'} as const
}
export const initializeApp = () => {
    return (dispatch: AppDispatchType) => {
        Promise.all([dispatch(getAuthUserData())])
            .then(() => {
                dispatch(setInitializedSuccessAC());
            });
    };
}