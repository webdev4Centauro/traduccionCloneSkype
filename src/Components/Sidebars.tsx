import React from "react";
import User from "../Containers/UserContainer";
import IUserModel from "../models/IUserModel";
import "../Styles/Sidebar.css";

interface user{
  user:IUserModel;
}
const Sidebar = ( contacts:[IUserModel] ) => {
  //console.log("LOGSIDEBAR",contacts);
  
  return (
    <aside className="Sidebar">
      {contacts.map((contact:IUserModel) => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};

export default Sidebar;
