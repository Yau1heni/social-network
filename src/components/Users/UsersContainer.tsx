import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {followedAC, setUsersAC, UsersType} from "../../redux/users-reducer";
import Users from "./Users";


type MapStatePropsType = {
    users: UsersType[]
}

type MapDispatchPropsType = {
    follow: (idUser: string) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.userReducer.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (idUser: string) => {
            dispatch(followedAC(idUser))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;