import React from 'react';
import s from './Header.module.css';
import icon from '../../assets/img/icon.svg';
import {NavLink} from 'react-router-dom';

const Header = (props: any) => {
    return (
            <header className={s.header}>
                <img src={icon} alt="img"/>
                <div className={s.login}>
                    {props.isAuth ? props.login : <NavLink
                            style={{textDecoration: 'none', color: 'white'}}
                            to={'/login'}>Login</NavLink>}
                </div>
            </header>
    );
};

export default Header;