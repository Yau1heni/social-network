import React from 'react';
import {addNewMessageAC, InitialStateDialogType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: InitialStateDialogType
}

type MapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsReducer
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addNewMessageAC())
        },
        updateNewMessageText: (newMessageText: string) => {
            dispatch(updateNewMessageAC(newMessageText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;