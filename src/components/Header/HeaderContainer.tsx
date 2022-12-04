import React from 'react';
import Header from './Header';
import {AxiosResponse, default as axios} from 'axios';
import {connect} from 'react-redux';
import {setUserData} from '../../redux/auth-reducer';
import {AppStoreType} from '../../redux/redux-store';

type GetAuthItemType = {
    data: {
        id: number
        email: string
        login: string
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}


type HeaderContainerPropsType = MapDispatchPropsType & mapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, GetAuthItemType> {
    componentDidMount() {
        axios.get<GetAuthItemType>('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
            headers: {'API-KEY': '5e83c86a-1713-4894-b55e-b49e5d20fde8'}
        })
                .then((res: AxiosResponse) => {
                            if (res.data.resultCode === 0) {
                                let {id, email, login} = res.data.data;
                                this.props.setUserData(id, email, login);
                            }
                        }
                );
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);
