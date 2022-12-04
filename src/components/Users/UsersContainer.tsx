import React from 'react';
import {connect} from 'react-redux';
import {AppStoreType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

export type GetItemType = {
    name: string
    id: string
    uniqueUrlName: string
    photos:
            {
                small: string
                large: string
            }
    status: string
    followed: boolean
}

export type GetUsersType = {
    items: GetItemType[]
}

type MapDispatchPropsType = {
    follow: (idUser: string) => void
    setUsers: (users: GetItemType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type mapStateToPropsType = {
    users: GetItemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type UsersContainerPropsType = mapStateToPropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType, GetItemType> {
    componentDidMount() {

        usersAPI.getUsers(this.props.pageSize, this.props.pageSize)
                .then((data: any) => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
                .then((data: any) => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                });
    };

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
        );
    }
}

let mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage,
        isFetching: state.userReducer.isFetching
    };
};

export default connect(mapStateToProps, {
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);
