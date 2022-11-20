import React from 'react';
import {connect} from 'react-redux';
import {AppStoreType} from '../../redux/redux-store';
import {
    followedAC,
    initialUsersStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC
} from '../../redux/users-reducer';
import Users, {GetItemType} from './Users';
import {Dispatch} from 'redux';

type MapDispatchPropsType = {
    follow: (idUser: string) => void
    setUsers: (users: GetItemType[]) => void
    setCurrentPages: (currentPages: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = initialUsersStateType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPages: state.userReducer.currentPages,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (idUser) => {
            dispatch(followedAC(idUser))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPages: (currentPages) => {
            dispatch(setCurrentPageAC(currentPages))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;