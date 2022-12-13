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
    newMessageText: string
}

type MessageActionType = AddNewMessage | UpdateNewMessage

export type AddNewMessage = ReturnType<typeof addNewMessageAC>
export type UpdateNewMessage = ReturnType<typeof updateNewMessageAC>

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
    newMessageText: ''
};

export const dialogsReducer = (state: InitialStateDialogType = initialState, action: MessageActionType): InitialStateDialogType => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE': {
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            };
            return {...state, messages: [...state.messages, newMessage]};
        }
        case 'UPDATE-NEW-MESSAGE': {
            return {...state, newMessageText: action.newMessage};
        }
        default:
            return state;
    }
};

export const addNewMessageAC = () => {
    return {type: 'ADD-NEW-MESSAGE'} as const;
};
export const updateNewMessageAC = (newMessage: string) => {
    return {type: 'UPDATE-NEW-MESSAGE', newMessage} as const;
};



