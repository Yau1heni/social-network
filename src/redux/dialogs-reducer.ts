import {v1} from "uuid";
import {ActionsTypes} from "./State";

export const dialogsReducer = (state: any, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            return state
        case 'UPDATE-NEW-MESSAGE':
            state.newMessageText = action.newMessage
            return state
        default: return state
    }
}

export type AddNewMessage = ReturnType<typeof addNewMessageAC>
export type UpdateNewMessage = ReturnType<typeof updateNewMessageAC>

export const addNewMessageAC = () => {
    return {type: 'ADD-NEW-MESSAGE'} as const
}
export const updateNewMessageAC = (newMessage: string) => {
    return {type: 'UPDATE-NEW-MESSAGE', newMessage} as const
}



