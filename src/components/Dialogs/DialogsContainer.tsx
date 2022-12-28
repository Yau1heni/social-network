import React from 'react';
import {addNewMessageAC} from '../../redux/dialogs-reducer';
import Dialogs, {DialogsType, MessagesType} from './Dialogs';
import {connect} from 'react-redux';
import {AppStoreType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';

type MapStatePropsType = {
    dialogsData: DialogsType[]
    messagesData: MessagesType[]
}

type MapDispatchPropsType = {
    addMessage: (newMessageText: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        dialogsData: state.dialogsReducer.dialogs,
        messagesData: state.dialogsReducer.messages
    };
};
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addNewMessageAC(newMessageText));
        },
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);