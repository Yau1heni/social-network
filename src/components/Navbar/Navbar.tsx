import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink className={s.item} to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div><NavLink className={s.item} to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
            <div><NavLink className={s.item} to="/news" activeClassName={s.active}>News</NavLink></div>
            <div><NavLink className={s.item} to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div><NavLink className={s.item} to="/settings" activeClassName={s.active}>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar