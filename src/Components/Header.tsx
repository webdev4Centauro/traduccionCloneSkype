import React from 'react'
import IUserModel from '../models/IUserModel';
import '../Styles/Header.css'

interface IHeaderProps{
    user:IUserModel;

}
const Header:React.FC<IHeaderProps>=(props)=> {
    const {name, status} = props.user;
    return (
        <header className="Header">
            <h1 className="Header__name">{name}</h1>
            <p className="Header__status">{status}</p>
        </header>
    )
}

export default Header;