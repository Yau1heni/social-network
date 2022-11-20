import React from 'react';
import {connect} from 'react-redux';
import {AppStoreType} from '../../redux/redux-store';
import {
    followedAC, initialUsersStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import {AxiosResponse, default as axios} from 'axios';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';

export type GetItemType = {
    name: string
    id: string
    uniqueUrlName: string
    photos:
        {
            small: string | null
            large: string | null
        }
    status: string
    followed: boolean
}

type GetUsersType = {
    items: GetItemType[]
}

type MapDispatchPropsType = {
    follow: (idUser: string) => void
    setUsers: (users: GetItemType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type UsersContainerPropsType = initialUsersStateType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType, GetItemType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res: AxiosResponse) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res: AxiosResponse) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage,
        isFetching: state.userReducer.isFetching
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
