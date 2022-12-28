import {default as axios} from 'axios';
import {GetUsersType} from '../components/Users/UsersContainer';
import {GetAuthItemType} from '../components/Header/HeaderContainer';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5e83c86a-1713-4894-b55e-b49e5d20fde8'
    }
});

export const usersAPI = {
    getUsers(pageSize = 1, currentPage: number) {
        return instance.get<GetUsersType>
        (`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },
    follow(userId: string) {
        return instance.post<boolean>(`follow/${userId}`).then((res => res.data));
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`).then((res => res.data));
    }
};
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`);
    },
    getStatus: (id: number) => {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status}).then((res => res.data));

    }
};

export const authMe = {
    me() {
        return instance.get<GetAuthItemType>('auth/me').then((res => res.data));
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    },
};