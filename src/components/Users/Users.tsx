import React, {FC} from 'react';
import s from './Users.module.css';
import {GetItemType} from './UsersContainer';
import userPhoto from '../../assets/img/userPhoto.png';
import {NavLink} from 'react-router-dom';
import {Paginator} from '../common/Paginator/Paginator';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: GetItemType[]
    follow: (idUser: string) => void
    unfollow: (idUser: string) => void
}
const Users: FC<UsersPropsType> = ({
                                       users,
                                       totalUsersCount,
                                       pageSize,
                                       currentPage,
                                       onPageChanged,
                                       unfollow,
                                       follow
                                   }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                <Paginator totalItemsCount={totalUsersCount}
                           pageSize={pageSize}
                           currentPage={currentPage}
                           onPageChanged={onPageChanged}
                />
            </div>
            {users.map((u: GetItemType) =>
                <div key={u.id} className={s.users}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img alt="img"
                                     className={s.avatar}
                                     src={u.photos.small !== null ? u.photos.small : userPhoto}
                                />
                            </NavLink>
                        </div>
                    </span>

                    <div>
                        {u.followed && <button onClick={() => {
                            unfollow(u.id);
                        }}>Unfollow</button>}

                        {!u.followed && <button onClick={() => {
                            follow(u.id);
                        }}>Follow</button>}

                        <div>{u.name}</div>
                        <div>{u.status}</div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;