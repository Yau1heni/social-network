import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {AxiosResponse, default as axios} from 'axios'

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

class Users extends React.Component<any, any> {
    componentDidMount() {
        axios.get<GetUsersType>('https://social-network.samuraijs.com/api/1.0/users')
            .then((res: AxiosResponse) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <div>
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