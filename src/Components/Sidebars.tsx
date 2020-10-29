import React from "react";
import User from "../Containers/UserContainer";
import IUserModel from "../models/IUserModel";
import "../Styles/Sidebar.css";


interface ISidebarProps{
  //usuario:IUserModel;
  contacts:IUserModel[]
}

const Sidebar:React.FC<ISidebarProps> = (props) =>{
  //console.log("LOGSIDEBAR",contacts);
  return (
    <aside className="Sidebar">
      {props.contacts.map((contact:IUserModel) => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};

export default Sidebar;
