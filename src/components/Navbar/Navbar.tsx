import React from "react";
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><a className={`${s.item} ${s.active}`} href="/profile">Profile</a></div>
            <div><a className={s.item} href="/dialogs">Messages</a></div>
            <div><a className={s.item} href="#">News</a></div>
            <div><a className={s.item} href="#">Music</a></div>
            <div><a className={s.item} href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar