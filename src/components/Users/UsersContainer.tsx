import React from 'react';
import {connect} from 'react-redux';
import {AppStoreType} from '../../redux/redux-store';
import {follow, getUsersTC, setCurrentPage, setTotalUsersCount, unfollow} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersIsFetching
} from '../../redux/selectors/users-selectors';

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
    unfollow: (idUser: string) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    getUsersTC: (pageSize: number, currentPage: number) => any
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
        this.props.getUsersTC(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsersTC(this.props.pageSize, currentPage);
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
                    unfollow={this.props.unfollow}
                />
            </>
        );
    }
}

let mapStateToProps = (state: AppStoreType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getUsersIsFetching(state)
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setTotalUsersCount,
        getUsersTC
    }),
    withAuthRedirect
)(UsersContainer)
