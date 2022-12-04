import {default as axios} from 'axios';
import {GetUsersType} from '../components/Users/UsersContainer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5e83c86a-1713-4894-b55e-b49e5d20fde8'
    },
})

export const usersAPI = {
    getUsers(pageSize = 1, currentPage: number) {
        return instance.get<GetUsersType>
        (`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}


