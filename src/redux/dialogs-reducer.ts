import {v1} from 'uuid';

type DialogsType = {
    id: string
    name: string
    avatar: string
}
type MessagesType = {
    id: string,
    message: string
    avatar: string
}
export type InitialStateDialogType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type AddNewMessageActionType = ReturnType<typeof addNewMessageAC>

const initialState = {
    dialogs: [
        {id: v1(), name: 'Zheka', avatar: ''},
        {id: v1(), name: 'Kalyan', avatar: ''},
        {id: v1(), name: 'Toha', avatar: ''},
        {id: v1(), name: 'Igarusha', avatar: ''},
        {id: v1(), name: 'Max', avatar: ''}
    ],
    messages: [
        {id: v1(), message: 'Hi', avatar: ''},
        {id: v1(), message: 'How are you?', avatar: ''},
        {id: v1(), message: 'Hi', avatar: ''},
        {id: v1(), message: 'Hi', avatar: ''},
        {id: v1(), message: 'Hi', avatar: ''}
    ]
};

export const dialogsReducer = (state: InitialStateDialogType = initialState, action: AddNewMessageActionType): InitialStateDialogType => {
    switch (action.type) {
        case 'dialogs/ADD-NEW-MESSAGE': {
            let newMessage = {
                id: v1(),
                message: action.message,
                avatar: ''
            };
            return {...state, messages: [...state.messages, newMessage]};
        }
        default:
            return state;
    }
};

export const addNewMessageAC = (message: string) => {
    return {type: 'dialogs/ADD-NEW-MESSAGE', message} as const;
};




