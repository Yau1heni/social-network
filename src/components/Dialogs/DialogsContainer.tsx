import React from 'react';
import {addNewMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StorePropsType} from "../../redux/State";

const DialogsContainer = (props: StorePropsType) => {
    let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch?.(addNewMessageAC())
    }
    const onMessageChange = (newMessageText: string) => {
        props.store.dispatch?.(updateNewMessageAC(newMessageText))
    }

    return (
        <Dialogs
            addMessage={addMessage}
            updateNewMessageText={onMessageChange}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
        />
    );
};

export default DialogsContainer;