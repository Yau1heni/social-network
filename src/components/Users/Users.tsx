import React from 'react';
import {AxiosResponse, default as axios} from 'axios'
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'

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

class Users extends React.Component<UsersPropsType, GetItemType> {
    componentDidMount() {
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`)
            .then((res: AxiosResponse) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPages(pageNumber)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res: AxiosResponse) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={(this.props.currentPages === p) ? s.selectedPages : ''}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map((u: GetItemType) =>
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
                                    ? <button onClick={() => this.props.follow(u.id)}>Follow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Unfollow</button>
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
    }
}

export default Users;