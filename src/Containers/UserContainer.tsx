import React from "react";
import "../Styles/User.css";
import store from "../Store/index.js";
import { setActiveUserId } from "../Actions/index";
import IUserModel from "../models/IUserModel";

const User = ( user:IUserModel ) => {
  const { name, profile_pic, status, user_id } = user; 

  //eventually, try and convert it to arrow function
  function handleUserClick( user_id:number ) {
    store.dispatch(setActiveUserId(user_id));
  }

  return (
    <div className="User" onClick={handleUserClick.bind(null, user_id)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
