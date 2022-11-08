import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {followedAC, setUsersAC} from "../../redux/users-reducer";
import Users, {GetItemType} from './Users';


type MapStatePropsType = {
    users: GetItemType[]
}

type MapDispatchPropsType = {
    follow: (idUser: string) => void
    setUsers: (users: GetItemType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.userReducer.items
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (idUser: string) => {
            dispatch(followedAC(idUser))
        },
        setUsers: (users: GetItemType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;