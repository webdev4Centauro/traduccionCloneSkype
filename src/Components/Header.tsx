import React from 'react'
import IUserModel from '../models/IUserModel';
import '../Styles/Header.css'

function Header (user:IUserModel) {
    const {name, status} = user;
    return (
        <header className="Header">
            <h1 className="Header__name">{name}</h1>
            <p className="Header__status">{status}</p>
        </header>
    )
}

export default Header;