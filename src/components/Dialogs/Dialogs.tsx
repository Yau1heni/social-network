import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Message = (props: { message: string }) => {
    return <div className={s.message}>{props.message}</div>
}

type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogItem name='Zheka' id={1}/>
                <DialogItem name='Kolyan' id={2}/>
                <DialogItem name='Toha' id={3}/>
                <DialogItem name='Igarusha' id={4}/>
                <DialogItem name='Max' id={5}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yo!'/>
                <Message message='Yo!'/>
                <Message message='Yo!'/>
            </div>
        </div>
    );
};

export default Dialogs;