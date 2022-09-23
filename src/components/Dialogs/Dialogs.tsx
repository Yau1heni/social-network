import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Zheka'},
        {id: 2, name: 'Kolyan'},
        {id: 3, name: 'Toha'},
        {id: 4, name: 'Igarusha'},
        {id: 5, name: 'Max'},
    ]

    let messages = [
        {message: 'Hi'},
        {message: 'How are you?'},
        {message: 'Hi'},
        {message: 'Hi'},
        {message: 'Hi'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;