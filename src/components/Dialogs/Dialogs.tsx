import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { AppPropsType} from "../../redux/State";
import {addNewMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";

const Dialogs = (props: AppPropsType) => {
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (newMessageElement.current) {
            props.dispatch?.(addNewMessageAC())
            newMessageElement.current.value = ''
        }
    }
    const onMessageChange = () => {
        if (newMessageElement.current) {
            let newMessageText = newMessageElement.current.value
            props.dispatch?.(updateNewMessageAC(newMessageText))
        }

    }

    const dialogsElements = props.state.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.state.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message}/>)

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