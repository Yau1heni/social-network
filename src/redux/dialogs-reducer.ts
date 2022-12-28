import {v1} from 'uuid';

type DialogsType = {
    id: string,
    name: string
}
type MessagesType = {
    id: string,
    message: string,
}
export type InitialStateDialogType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type AddNewMessageActionType = ReturnType<typeof addNewMessageAC>

const initialState = {
    dialogs: [
        {id: v1(), name: 'Zheka'},
        {id: v1(), name: 'Kalyan'},
        {id: v1(), name: 'Toha'},
        {id: v1(), name: 'Igarusha'},
        {id: v1(), name: 'Max'}
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'}
    ],
};

export const dialogsReducer = (state: InitialStateDialogType = initialState, action: AddNewMessageActionType): InitialStateDialogType => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE': {
            let newMessage = {
                id: v1(),
                message: action.message
            };
            return {...state, messages: [...state.messages, newMessage]};
        }
        default:
            return state;
    }
};

export const addNewMessageAC = (message: string) => {
    return {type: 'ADD-NEW-MESSAGE', message} as const;
};




