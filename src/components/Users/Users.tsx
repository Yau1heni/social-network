import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {UsersType} from "../../redux/users-reducer";

const Users = (props: UsersPropsType) => {
    return <div>
        {
            props.users.map((u: UsersType) =>
                <>
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
                           <div>{u.followed}</div>
                           <div>{u.status}</div>
                       </span>
                        <span>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                       </span>
                    </span>
                </>
            )
        }
    </div>

};

export default Users;