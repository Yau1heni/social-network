import React from 'react';
import s from './Users.module.css';
import {GetItemType} from './UsersContainer';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: GetItemType[]
    follow: (idUser: string)=>void
}
const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={(props.currentPage === p) ? s.selectedPages : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map((u: GetItemType) =>
                    <div key={u.id}>
                    <span>
                        <div>
                            img
                        </div>
                    </span>
                        <span>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => props.follow(u.id)}>Follow</button>
                                    : <button onClick={() => props.follow(u.id)}>Unfollow</button>
                            }
                        </div>
                    </span>
                        <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                        <span>
                           <div>{'u.location.country'}</div>
                           <div>{'u.location.city'}</div>
                       </span>
                    </span>
                    </div>
                )
            }
        </div>
    );
};

export default Users;