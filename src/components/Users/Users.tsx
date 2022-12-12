import React from 'react';
import s from './Users.module.css';
import {GetItemType} from './UsersContainer';
import userPhoto from '../../assets/img/userPhoto.png';
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: GetItemType[]
    follow: (idUser: string) => void
    unfollow: (idUser: string) => void
}
const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={`${s.pagesElem} 
                    ${(props.currentPage === p) ? s.selectedPages : ''}`
                    }
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>;
                })
                }
            </div>
            {
                props.users.map((u: GetItemType) =>
                    <div key={u.id} className={s.users}>

                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img alt='img'
                                    className={s.avatar}
                                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                                />
                            </NavLink>
                        </div>

                        <div>
                            {u.followed && <button onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</button>}

                            {!u.followed && <button onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>}

                            <div>{u.name}</div>
                            <div>{u.status}</div>

                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default Users;