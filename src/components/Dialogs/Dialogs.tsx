import React, {FC} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type DialogsType = {
    id: string,
    name: string
}
export type MessagesType = {
    id: string,
    message: string,
}

export type MessageFormType = {
    newMessage: string
}

const Dialogs = (props: DialogsPropsType) => {

    const addMessageHandler = (values: MessageFormType) => {
        props.addMessage(values.newMessage)
    };

    const dialogsElements = props.dialogsData
        .map((d: DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messagesElements = props.messagesData
        .map((m: MessagesType) => <Message key={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addMessageHandler}/>
            </div>
        </div>
    );
};

const AddMessageForm: FC<InjectedFormProps<MessageFormType>>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                name={'newMessage'}
                placeholder={'enter your message'}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm<MessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;