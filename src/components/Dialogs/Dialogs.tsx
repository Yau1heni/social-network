import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export type DialogsType = {
    id: string,
    name: string
}
type MessagesType = {
    id: string,
    message: string,
}

const Dialogs = (props: DialogsPropsType) => {
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (newMessageElement.current) {
            props.addMessage()
            newMessageElement.current.value = ''
        }
    }
    const onMessageChange = () => {
        let newMessageText = newMessageElement.current?.value
        if (newMessageText) props.updateNewMessageText(newMessageText)
    }

    const dialogsElements = props.dialogsPage.dialogs
        .map((d: DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages
        .map((m: MessagesType) => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        ref={newMessageElement}
                        onChange={onMessageChange}>
                    </textarea>
                    <div>
                        <button onClick={addMessage}>Add post
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;