import React from 'react';
import {addNewMessageAC, InitialStateDialogType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';

type MapStatePropsType = {
    dialogsPage: InitialStateDialogType
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsReducer,
        isAuth: state.auth.isAuth
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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;